import "./Pharagraph_Posting.scss";
import axios from 'axios';
import { useStateChange, useFormChange } from '../../../Hook/Hook';

export function PharagraphPostingPage() {
  const initialState = { book: "", content: "", page: "", music: "" };
  const [formData, handleChange, setFormData] = useFormChange(initialState);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8080/Pharagraph/posting',
        formData,
        { withCredentials: true }
      );
      alert('게시글이 성공적으로 작성되었습니다.');
      setFormData(initialState);  // 폼 초기화
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(error.response.data || '게시글 작성에 실패했습니다.');
      } else {
        alert('서버 연결에 실패했습니다.');
      }
    }
  };

  const { state, OPEN, CLOSE } = useStateChange();

  return (
    <section id="PharagraphPostingPage">
      <h1 className="title">오늘 어떤 글귀를 발견하셨나요?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="book"
          placeholder="책의 제목을 알려주세요."
          value={formData.book}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="글귀를 작성해 주세요."
          value={formData.content}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="page"
          placeholder="글귀는 몇 페이지에 있었나요?"
          value={formData.page}
          onChange={handleChange}
        />
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
          value={formData.music}
          onChange={handleChange}
          required
        />
        <span className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </span>
      </form>
      <PharagraphBookSearch />
    </section>
  );
}

export function PharagraphBookSearch() {

  return (
    <div id="PharagraphBookSearch">
      <ul className="result">
        <li></li>
      </ul>
      <form>
        <div>
          <input type="text" placeholder="책 제목이나 작가명을 입력해 주세요."/>
          <select>
            <option>선택</option>
            <option>책제목</option>
            <option>작가명</option>
          </select>
        </div>
        <button type="submit">검색</button>
      </form>
    </div>
  );
}