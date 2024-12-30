const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require('express').Router()
let connectDB = require('../database');
let db

connectDB
  .then((client)=>{db = client.db("Board")})
  .catch((err) => {console.log(err)});

router.post("/login", async (req, res) => {
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

router.post("/logout", (req, res) => {
  // 로그아웃 API는 세션 종료 또는 클라이언트 측 토큰 삭제 요청을 수행한다.  
  // 비동기 작업이 필요하지 않으므로 async로 정의하지 않는다.
  res.status(200).json({ message: "로그아웃되었습니다." });
});

router.post("/signup", async (req, res) => {
  const { username, password, nickname, email, MBTI } = req.body;

  if (!username || !password || !nickname || !MBTI) {
    return res.status(400).json({ message: "아이디, 비밀번호, 닉네임을 입력해야 합니다." });
  }

  try {
    const existingUser = await db.collection("User").findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "이미 사용 중인 아이디입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { 
      username, 
      password: hashedPassword, 
      nickname, 
      email,
      MBTI
    };

    await db.collection("User").insertOne(newUser);
    res.status(201).json({ message: "회원가입이 완료되었습니다." });
  } catch (err) {
    console.error("회원가입 중 오류 발생:", err);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

router.get("/findUser", async (req, res) => {
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

module.exports = router 