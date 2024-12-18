require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient } = require("mongodb");

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

app.post("/Pharagraph/posting", async (req, res) => {
  try {
    await db.collection("Post").insertOne(req.body);
    console.log(req.body);
    res
      .status(200)
      .json({ message: "게시글 데이터를 수신했습니다.", data: req.body });
  } catch (err) {
    console.log(err);
    res
      .status(500).json({
        message: "게시글 데이터를 저장하는 도중 오류가 발생했습니다.",
        error: err.message,
      });
  }
});

app.get("/Pharagraph/list", async (req, res) => {
  try {
    const result = await db.collection("Post").find().toArray();
    console.log(result);
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

app.post("/Pharagraph/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.collection("User").findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "사용자를 찾을 수 없습니다." });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "로그인에 성공했습니다.", token });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "로그인 중 오류가 발생했습니다.", error: err.message });
  }
});

app.post("/Pharagraph/logout", (req, res) => {
  res.status(200).json({ message: "로그아웃되었습니다." });
});
