require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.options('*', cors());

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave : false,
  saveUninitialized : false,
  cookie: {
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
}))

app.use(passport.session()) 

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

app.post('/Pharagraph/posting', async (요청, 응답) => {
  try {
    if (!db) {
      throw new Error("데이터베이스 연결이 없습니다.");
    }
    
    console.log("받은 데이터:", 요청.body);
    
    const result = await db.collection('Post').insertOne(요청.body);
    console.log("저장된 문서:", result);
    
    응답.status(200).json({ 
      message: '게시글이 성공적으로 작성되었습니다.',
      documentId: result.insertedId 
    });
  } catch (error) {
    console.error('데이터베이스 저장 에러:', error);
    응답.status(500).json({ 
      message: '게시글 작성에 실패했습니다.',
      error: error.message 
    });
  }
});

app.get('/Pharagraph/list', async (요청, 응답) => {
  try {
    const result = await db.collection('Post').find().toArray();
    console.log('DB에 저장된 데이터 :', result);
    응답.json(result);
  } catch (error) {
    console.error('Error:', error);
    응답.status(500).json({ error: '데이터를 불러오는 도중 오류가 발생했습니다.' });
  }
});

passport.use(new LocalStrategy(async (입력아이디, 입력비번, cb) => {
  let result = await db.collection('User').findOne({ username: 입력아이디 })
  if (!result) {
    return cb(null, false, { message: '회원정보가 없습니다.' })
  }
  if (result.password == 입력비번) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비밀번호가 일치하지 않습니다.'})
  }
}))



passport.serializeUser((user, done) => {
  console.log(user)
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username })
  })
})

passport.deserializeUser(async (user, done) => {
  let result = await db.collection('User').findOne({_id: new ObjectId(user.id)})
  delete result.password
  process.nextTick(() => {
    done(null, result)
  })
})

app.get('/Pharagraph/loggedIn', (요청, 응답) => {
  if (요청.user) {
    응답.status(200).json({ username: 요청.user.username });
  } else {
    응답.status(401).json({ message: '로그인이 필요합니다.' });
  }
});

app.get('/Pharagraph/verify', (요청, 응답) => {
  if (요청.isAuthenticated()) {
    응답.status(200).json({ 
      isAuthenticated: true,
      user: {username: 요청.user.username}
    });
  } else {
    응답.status(401).json({ 
      isAuthenticated: false,
      message: '인증되지 않은 사용자입니다.' 
    });
  }
});

app.post('/Pharagraph/login', (요청, 응답, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error('인증 에러:', error);
      return 응답.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
    
    if (!user) {
      console.log('로그인 실패:', info.message);
      return 응답.status(401).json({ message: info.message });
    }
    
    요청.logIn(user, (err) => {
      if (err) {
        console.error('세션 저장 에러:', err);
        return 응답.status(500).json({ message: '로그인 처리 중 오류가 발생했습니다.' });
      }
      
      return 응답.status(200).json({ 
        message: '로그인 성공',
        user: {
          username: user.username
        }
      });
    });
  })(요청, 응답, next);
});

app.post('/Pharagraph/logout', (요청, 응답) => {
  console.log('로그아웃 요청 수신');
  요청.logout((err) => {
    if (err) {
      console.error('로그아웃 에러:', err);
      return 응답.status(500).json({ message: '로그아웃 처리 중 오류가 발생했습니다.' });
    }
    console.log('로그아웃 성공');
    응답.status(200).json({ message: '로그아웃 성공' });
  });
});