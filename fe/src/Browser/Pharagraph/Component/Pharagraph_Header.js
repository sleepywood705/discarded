import "./Pharagraph_Header.scss"
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/store";


export function PharagraphHeader() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/Pharagraph/logout', {}, { withCredentials: true });
      dispatch(logout());
    } catch (error) {
      alert("로그아웃 실패", error)
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <header>
      <Link to="/Portfolio/Pharagraph/">Pharagraph</Link>
      <Link to="/Portfolio/Pharagraph/list">글목록</Link>
      <Link to="/Portfolio/Pharagraph/">작성</Link>
      <Link to="/Portfolio/Pharagraph/community">커뮤니티</Link>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>로그아웃</button>
          <Link to="/Portfolio/Pharagraph/my">마이페이지</Link>
        </>
      ) : (
        <Link to="/Portfolio/Pharagraph/login">로그인</Link>
      )}
      <Link to="/Portfolio/Pharagraph/signup">회원가입</Link>
    </header>
  );
}
