import "./Pharagraph_Posting.scss";
import { MBTI_OPTIONS, INITIAL_FORM_STATE } from "../variable/VAR"
import { PharagraphBookSearch } from "../component/Pharagraph_BookSearch";
import { PharagraphMusicSearch } from "../component/Pharagraph_MusicSearch";
import axios from "axios";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFormChange } from "../../../Hook/Hook";


export function PharagraphPostingPage({ BOOK, MUSIC }) {
  const [formData, handleChange, setFormData] = useFormChange(INITIAL_FORM_STATE);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedMBTI, setSelectedMBTI] = useState(Array(4).fill(''));
  const navigate = useNavigate();

  // 이벤트 핸들러 통합
  const handleClick = {
    bookSearch: () => BOOK.OPEN(),
    musicSearch: () => MUSIC.OPEN(),
    dontKnow: () => setFormData(prev => ({ ...prev, page: "모름" }))
  };

  const selectMBTI = useCallback((index, value) => {
    setSelectedMBTI(prev => {
      const newArr = [...prev];
      newArr[index] = value;
      setFormData(curr => ({ ...curr, MBTI: newArr.join('') }));
      return newArr;
    });
  }, [setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate('/discarded/Pharagraph/login');
      return;
    }

    try {
      const userData = {
        username: localStorage.getItem('username'),
        nickname: localStorage.getItem('nickname'),
        ...formData
      };

      await axios.post('/Pharagraph/posting', userData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      navigate('/discarded/Pharagraph/list');
    } catch (error) {
      console.error('게시글 등록 실패:', error);
      alert('게시글 등록에 실패했습니다.');
    }
  };

  const handleReset = useCallback(() => {
    if (formData.content && !window.confirm("작성 중인 내용이 모두 삭제됩니다. 계속하시겠습니까?")) {
      return;
    }
    setFormData(INITIAL_FORM_STATE);
    setSelectedMBTI(Array(4).fill(''));
  }, [formData.content, setFormData]);

  return (
    <div id="PharagraphPostingPage">
      <h1 className="Title">오늘 어떤 글귀를 발견하셨나요?</h1>
      {BOOK.state && <PharagraphBookSearch BOOK={BOOK} setFormData={setFormData} />}
      {MUSIC.state && <PharagraphMusicSearch MUSIC={MUSIC} setFormData={setFormData} />}
      
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          name="book"
          placeholder="책의 제목을 알려주세요."
          value={formData.book}
          onChange={handleChange}
          onClick={handleClick.bookSearch}
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
        <div className="wrap_page">
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
          {isFocused && (
            <button 
              type="button" 
              className="onfocus" 
              onClick={handleClick.dontKnow}
            >
              모름
            </button>
          )}
        </div>
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
          value={formData.music}
          onChange={handleChange}
          onClick={handleClick.musicSearch}
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
          {MBTI_OPTIONS.map(([options, index]) => (
            <span key={index}>
              {options.map(option => (
                <button
                  key={option}
                  type="button"
                  className={selectedMBTI[index] === option ? 'clicked' : ''}
                  onClick={() => selectMBTI(index, option)}
                >
                  {option}
                </button>
              ))}
            </span>
          ))}
        </div>
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </div>
  );
}