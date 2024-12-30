require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Pharagraph', require('./routes/post'))
app.use('/Pharagraph', require('./routes/user'))

let connectDB = require('./database');

connectDB.then((client)=>{
  console.log("데이터베이스가 MongoDB에 연결되었습니다.");
  db = client.db("Board");
  app.listen(process.env.PORT, () => {
    console.log(`서버가 localhost:${process.env.PORT}에 연결되었습니다.`);
  });
})
.catch((err) => {
  console.log(err);
});