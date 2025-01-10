require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'https://sleepywood705.github.io',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Pharagraph', require('./routes/post'))
app.use('/Pharagraph', require('./routes/user'))

let connectDB = require('./database');

connectDB.then((client)=>{
  console.log("데이터베이스가 MongoDB에 연결되었습니다.");
  db = client.db("Board");
  app.listen(8080, () => {
    console.log(`서버가 localhost:8080에 연결되었습니다.`);
  });
})
.catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
