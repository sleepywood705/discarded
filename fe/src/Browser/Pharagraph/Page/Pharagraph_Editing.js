import "./Pharagraph_Posting.scss";
import { PharagraphBookSearch } from "../Component/Pharagraph_BookSearch";
import { PharagraphMBTISearch } from "../Component/Pharagraph_MBTISearch";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateChange, useFormChange } from "../../../Hook/Hook";

export function PharagraphEditingPage({ BOOK, MBTI }) {
  const [formData, handleChange, setFormData] = useFormChange();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
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

      // MBTI 값을 가져와서 selectedMBTI 상태를 업데이트
      if (MBTIValue) {
        const newSelectedMBTI = [
          MBTIValue[0] || "", // E/I
          MBTIValue[1] || "", // S/N
          MBTIValue[2] || "", // T/F
          MBTIValue[3] || ""  // J/P
        ];
        setSelectedMBTI(newSelectedMBTI);
      }
    }
  }, [location.search, setFormData]);
  const [isFocused, setIsFocused] = useState(false)
  const [selectedMBTI, setSelectedMBTI] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const showBookSearch = () => { BOOK.OPEN() };
  const dontKnow = () => { setFormData(prev => ({ ...prev, page: "알수없음" })) };
  const isSelected = (index, value) => selectedMBTI[index] === value;
  const selectMBTI = (index, value) => {
    const newArr = [...selectedMBTI];
    newArr[index] = value;
    setSelectedMBTI(newArr);
    setFormData(prev => ({ ...prev, MBTI: newArr.join('') }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const id = queryParams.get("id");

    if (!token) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate('/Portfolio/Pharagraph/login');
      return;
    }

    try {
      const res = await axios.post(
        '/Pharagraph/editing?id=' + id,
        { ...formData }, 
        { headers: { Authorization: `Bearer ${token}` }
      });
      console.log(res.data);
      navigate('/Portfolio/Pharagraph/list');
    } catch (error) {
      console.error('게시글 수정에 실패했습니다.', error);
    }
  };
  const handleReset = () => {
    setFormData({ book: '', content: '', page: '', music: '', MBTI: '', background: '' });
  };

  return (
    <div id="PharagraphEditingPage">
      <h1 className="Title">오늘 어떤 글귀를 발견하셨나요?</h1>
      {BOOK.state && (
        <PharagraphBookSearch BOOK={BOOK} setFormData={setFormData} />
      )}
      {MBTI.state && (
        <PharagraphMBTISearch MBTI={MBTI} setFormData={setFormData} />
      )}
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          name="book"
          placeholder="책의 제목을 알려주세요."
          value={formData.book}
          onChange={handleChange}
          onClick={showBookSearch}
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
        <div className="wrap_input">
          <input
            type="text"
            name="page"
            placeholder="글귀는 몇 페이지에 있었나요?"
            value={formData.page}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoComplete="off"
          />
          <button type="button" className={isFocused ? "onfocus" : ""} onClick={dontKnow}>알수없음</button>
        </div>
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
          onChange={(e) => {
            const value = e.target.value.toUpperCase();
            if (value.length <= 4) {setFormData(prev => ({ ...prev, MBTI: value }))}
          }}
          onFocus={() => {setFormData(prev => ({ ...prev, MBTI: (prev.MBTI || '').toUpperCase() }))}}
          autoComplete="off"
          required
        />
        <div className="wrap_MBTI">
          <span>
            <button type="button" className={isSelected(0, 'E') ? 'clicked' : ''} onClick={() => selectMBTI(0, 'E')}>E</button>
            <button type="button" className={isSelected(0, 'I') ? 'clicked' : ''} onClick={() => selectMBTI(0, 'I')}>I</button>
          </span>
          <span>
            <button type="button" className={isSelected(1, 'S') ? 'clicked' : ''} onClick={() => selectMBTI(1, 'S')}>S</button>
            <button type="button" className={isSelected(1, 'N') ? 'clicked' : ''} onClick={() => selectMBTI(1, 'N')}>N</button>
          </span>
          <span>
            <button type="button" className={isSelected(2, 'T') ? 'clicked' : ''} onClick={() => selectMBTI(2, 'T')}>T</button>
            <button type="button" className={isSelected(2, 'F') ? 'clicked' : ''} onClick={() => selectMBTI(2, 'F')}>F</button>
          </span>
          <span>
            <button type="button" className={isSelected(3, 'J') ? 'clicked' : ''} onClick={() => selectMBTI(3, 'J')}>J</button>
            <button type="button" className={isSelected(3, 'P') ? 'clicked' : ''} onClick={() => selectMBTI(3, 'P')}>P</button>
          </span>
        </div>
        <span className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">수정하기</button>
        </span>
      </form>
    </div>
  );
}
