import "./Pharagraph_Posting.scss";
import { PharagraphBookSearch } from "../Component/Pharagraph_BookSearch";
import { PharagraphMBTISearch } from "../Component/Pharagraph_MBTISearch";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateChange, useFormChange } from "../../../Hook/Hook";


export function PharagraphPostingPage() {
  const initialState = { book: "", content: "", page: "", music: "", MBTI: "" };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, handleChange, setFormData] = useFormChange(initialState);

  const search = useStateChange(false);
  const MBTI = useStateChange(false);
  const showSearch = () => {search.OPEN()};
  const showMBTI = () => {MBTI.OPEN()};

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate("/Portfolio/Pharagraph/login");
      return;
    }
    try {
      const userResponse = await axios
        .get(
          "http://localhost:8080/Pharagraph/loggedIn",
          { withCredentials: true }
        );  
      const postData = {
        username: userResponse.data.username,
        ...formData,
      };
      await axios
        .post(
          "http://localhost:8080/Pharagraph/posting", 
          postData,
          { withCredentials: true }
        );
      setFormData(initialState);
      alert("게시글이 성공적으로 작성되었습니다.");
      navigate("/Portfolio/Pharagraph/list");
    } catch (error) {
      if (error.response) {
        alert("게시글 작성에 실패했습니다.", error.response.data);
      } else {
        alert("서버 연결에 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios
          .get(
            "http://localhost:8080/Pharagraph/verify",
            {withCredentials: true}
          );
          console.log("사용자 인증 성공:", response.data);
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("인증 확인 중 오류가 발생했습니다.", error);
      }
    };

    verifyUser();
  }, []);

  return (
    <div id="PharagraphPostingPage">
      <h1 className="Title">오늘 어떤 글귀를 발견하셨나요?</h1>
      {search.state && (
        <PharagraphBookSearch search={search} setFormData={setFormData} />
      )}
      {MBTI.state && (
        <PharagraphMBTISearch MBTI={MBTI} setFormData={setFormData} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="book"
          placeholder="책의 제목을 알려주세요."
          value={formData.book}
          onChange={handleChange}
          onClick={showSearch}
          autoComplete="off"
          required
        />
        <textarea
          name="content"
          placeholder="글귀를 작성해 주세요."
          value={formData.content}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="page"
          placeholder="글귀는 몇 페이지에 있었나요?"
          value={formData.page}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
          value={formData.music}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="MBTI"
          placeholder="당신의 MBTI는 무엇인가요?"
          value={formData.MBTI}
          onChange={handleChange}
          onClick={showMBTI}
          onFocus={showMBTI}
          autoComplete="off"
          required
        />
        <span className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </span>
      </form>
    </div>
  );
}