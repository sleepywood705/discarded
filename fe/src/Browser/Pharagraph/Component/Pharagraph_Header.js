import "./Pharagraph_Header.scss";
import axios from "axios";
import { logout } from "../../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export function PharagraphHeader() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/Pharagraph/logout");
      localStorage.removeItem("_id");
      localStorage.removeItem("token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      localStorage.removeItem("nickname");
      localStorage.removeItem("email");
      dispatch(logout());
      navigate("/Portfolio/pharagraph/login");
      alert(res.data.message);
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return (
    <header>
      <Link to="/Portfolio/Pharagraph/list">Pharagraph</Link>
      <Link to="/Portfolio/Pharagraph/">작성</Link>
      <Link to="/Portfolio/Pharagraph/list">게시판</Link>
      {/* <Link to="/Portfolio/Pharagraph/community">커뮤니티</Link> */}
      {!isLoggedIn && <Link to="/Portfolio/Pharagraph/login">로그인</Link>}
      {!isLoggedIn && <Link to="/Portfolio/Pharagraph/signup">회원가입</Link>}
      {isLoggedIn && <Link to="/Portfolio/Pharagraph/my">마이페이지</Link>}
      {isLoggedIn && <button onClick={handleLogout}>로그아웃</button>}
    </header>
  );
}
