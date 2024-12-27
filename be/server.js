require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient, ObjectId } = require("mongodb");

let db;
const url = process.env.MONGODB_URL;

new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("데이터베이스가 MongoDB에 연결되었습니다.");
    db = client.db("Board");
    app.listen(process.env.PORT, () => {
      console.log(`서버가 localhost:${process.env.PORT}에 연결되었습니다.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/Pharagraph/list", async (req, res) => {
  try {
    const result = await db.collection("Post").find().toArray();
    // console.log(result);
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "데이터가 없습니다." });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "데이터를 불러오는 도중 오류가 발생했습니다." });
  }
});

app.post("/Pharagraph/posting", async (req, res) => {
  try {
    await db.collection("Post").insertOne(req.body);
    console.log(req.body);
    res
      .status(200)
      .json({ message: "클라이언트로부터 데이터를 수신했습니다.", data: req.body });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "게시글 데이터를 저장하는 도중 오류가 발생했습니다.",
      error: err.message,
    });
  }
});

app.post("/Pharagraph/editing", async (req, res) => {
  const { id } = req.query;
  const { book, content, page, music, MBTI } = req.body;

  if (!book || !content || !music || !id) {
    return res.status(400).json({ message: "모든 필드를 입력해야 합니다." });
  }
  
  try {
    const findPost = await db.collection("Post").findOne({ _id: new ObjectId(id) });
    
    if (!findPost) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    await db.collection("Post").updateOne(
      { _id: new ObjectId(id) },
      { $set: { book, content, page, music, MBTI } }
    );

    res.status(200).json({ message: "게시글이 성공적으로 수정되었습니다." });
  } catch (error) {
    console.error("게시글 수정 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

app.post("/Pharagraph/delete", async (req, res) => {
  const { id, cardUsername } = req.body;
  const loginUser = req.headers["username"];

  if (cardUsername !== loginUser) {
    return res.status(403).json({ message: "삭제 권한이 없습니다." });
  }

  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "유효하지 않은 ID입니다." });
    }

    const result = await db
      .collection("Post")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "게시물이 성공적으로 삭제되었습니다." });
    } else {
      res.status(404).json({ message: "게시물을 찾을 수 없습니다." });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        message: "게시물 삭제 중 오류가 발생했습니다.",
        error: err.message,
    });
  }
});

app.post("/Pharagraph/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.collection("User").findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "사용자를 찾을 수 없습니다." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...userInfo } = user; // 비밀번호 제외
    res.status(200).json({ message: "로그인에 성공했습니다.", token, userInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "로그인 중 오류가 발생했습니다.", error: err.message });
  }
});

app.post("/Pharagraph/logout", (req, res) => {
  // 로그아웃 API는 세션 종료 또는 클라이언트 측 토큰 삭제 요청을 수행한다.  
  // 비동기 작업이 필요하지 않으므로 async로 정의하지 않는다.
  res.status(200).json({ message: "로그아웃되었습니다." });
});

app.post("/Pharagraph/signup", async (req, res) => {
  const { username, password, nickname, email } = req.body;

  if (!username || !password || !nickname) {
    return res.status(400).json({ message: "아이디, 비밀번호, 닉네임을 입력해야 합니다." });
  }

  try {
    const existingUser = await db.collection("User").findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "이미 사용 중인 아이디입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword, nickname, email };

    await db.collection("User").insertOne(newUser);
    res.status(201).json({ message: "회원가입이 완료되었습니다." });
  } catch (err) {
    console.error("회원가입 중 오류 발생:", err);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

app.get("/Pharagraph/findUser", async (req, res) => {
  const { username, nickname } = req.query; // 쿼리 파라미터에서 username과 nickname 가져오기

  if (!username && !nickname) {
    return res.status(400).json({ message: "아이디 또는 닉네임을 입력해야 합니다." });
  }

  try {
    if (username) {
      const existingUser = await db.collection("User").findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: "이미 사용 중인 아이디입니다." });
      }
      return res.status(200).json({ message: "사용 가능한 아이디입니다." });
    }

    if (nickname) {
      const existingNickname = await db.collection("User").findOne({ nickname });
      if (existingNickname) {
        return res.status(409).json({ message: "이미 사용 중인 닉네임입니다." });
      }
      return res.status(200).json({ message: "사용 가능한 닉네임입니다." });
    }
  } catch (error) {
    console.error("사용자 확인 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});