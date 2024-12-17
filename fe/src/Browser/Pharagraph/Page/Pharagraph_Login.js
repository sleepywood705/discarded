import "./Pharagraph_Login.scss";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormChange } from "../../../Hook/Hook";
import { useDispatch } from "react-redux";
import { login } from "../../../store/store";


export function PharagraphLoginPage() {
  const [formData, handleChange] = useFormChange({ username: "", password: "" });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/Pharagraph/login", 
        formData,
        { withCredentials: true }
      );
      dispatch(login(response.data.user));
      navigate("/Portfolio/Pharagraph", { replace: true });
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("서버 연결에 실패했습니다.");
      }
    }
  };

  return (
    <div id="PharagraphLoginPage">
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
