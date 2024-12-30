const router = require('express').Router()
const { ObjectId } = require('mongodb')
let connectDB = require('../database');
let db

connectDB
  .then((client)=>{db = client.db("Board")})
  .catch((err) => {console.log(err)});

router.post("/posting", async (req, res) => {
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

router.post("/editing", async (req, res) => {
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

router.post("/delete", async (req, res) => {
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

router.get("/list", async (req, res) => {
  try {
    const result = await db.collection("Post").find().toArray();
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

module.exports = router 