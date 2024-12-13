import "./Pharagraph_My.scss";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export function PharagraphMyPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/Pharagraph/mypage', { withCredentials: true })
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('로그인이 필요한 서비스입니다. 로그인하시겠습니까?');
        navigate('/Portfolio/Pharagraph/login');
      });
  }, []);

  return (
    <div id="PharagraphMyPage">
      <h1>마이 페이지</h1>
      {username ? (
        <p>안녕하세요, {username}님!</p>
      ) : (
        <p>로그인이 필요한 서비스입니다.</p>
      )}
    </div>
  );
}
