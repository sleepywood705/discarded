import "./Pharagraph_Login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/store";
import { useFormChange } from "../../../Hook/Hook";

const ROUTES = {
  SUCCESS_LOGIN: "/Portfolio/pharagraph/list",
  SIGNUP: "/Portfolio/Pharagraph/signup"
};

export function PharagraphLoginPage() {
  const [formData, handleChange] = useFormChange({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveUserData = (token, userInfo) => {
    localStorage.setItem("token", token);
    Object.entries(userInfo).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { token, userInfo } } = await axios.post("/Pharagraph/login", formData);
      
      saveUserData(token, userInfo);
      dispatch(login());
      navigate(ROUTES.SUCCESS_LOGIN);
    } catch (error) {
      alert(error.response?.data?.message || "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div id="PharagraphLoginPage">
      <h1 className="Title">로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">로그인</button>
      </form>
      <Link to={ROUTES.SIGNUP}>회원가입</Link>
    </div>
  );
}
