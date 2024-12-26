import "./Pharagraph_Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/store";
import { useFormChange } from "../../../Hook/Hook";

export function PharagraphLoginPage() {
  const [formData, handleChange] = useFormChange({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/Pharagraph/login", formData);
      localStorage.setItem("token", res.data.token);
      
      const { userInfo } = res.data;
      Object.keys(userInfo).forEach(key => {
        localStorage.setItem(key, userInfo[key]);
      });

      dispatch(login());
      navigate("/Portfolio/pharagraph/list");
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
    </div>
  );
}
