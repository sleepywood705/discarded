import "./Pharagraph_Posting.scss";
import { PharagraphBookSearch } from "../Component/Pharagraph_BookSearch";
import { PharagraphMBTISearch } from "../Component/Pharagraph_MBTISearch";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateChange, useFormChange } from "../../../Hook/Hook";

export function PharagraphEditingPage() {
  const [formData, handleChange, setFormData] = useFormChange();
  // 쿼리 파라미터에서 카드 정보 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const search = useStateChange(false);
  const MBTI = useStateChange(false);
  
  const showSearch = () => { search.OPEN() };
  const showMBTI = () => { MBTI.OPEN() };
  const navigate = useNavigate();
  // 카드 정보가 있을 경우 formData에 설정
  useEffect(() => {
    const book = queryParams.get("book");
    const content = queryParams.get("content");
    const page = queryParams.get("page");
    const music = queryParams.get("music");
    const MBTIValue = queryParams.get("MBTI");

    if (book || content || page || music || MBTIValue) {
      setFormData({
        book: book || "",
        content: content || "",
        page: page || "",
        music: music || "",
        MBTI: MBTIValue || "",
      });
    }
  }, [location.search, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const postId = queryParams.get("id");
  
    if (!token) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate("/Portfolio/Pharagraph/login");
      return;
    }
  
    if (!postId) {
      alert("게시글 ID가 없습니다.");
      return;
    }
  
    try {
      const res = await axios.post(
        `/Pharagraph/editing?id=${postId}`,
        { username, ...formData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data);
      navigate("/Portfolio/Pharagraph/list");
    } catch (error) {
      console.error("게시글 수정에 실패했습니다.", error);
    }
  };
  

  return (
    <div id="PharagraphEditingPage">
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
