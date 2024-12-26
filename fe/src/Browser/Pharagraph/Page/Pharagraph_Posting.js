import "./Pharagraph_Posting.scss";
import { PharagraphBookSearch } from "../Component/Pharagraph_BookSearch";
import { PharagraphMusicSearch } from "../Component/Pharagraph_MusicSearch";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormChange } from "../../../Hook/Hook";


export function PharagraphPostingPage({ BOOK, MUSIC }) {
  const [formData, handleChange, setFormData] = useFormChange();
  const [isFocused, setIsFocused] = useState(false)
  const [selectedMBTI, setSelectedMBTI] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const showBookSearch = () => { BOOK.OPEN() };
  const showMusicSearch = () => { MUSIC.OPEN() };
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
    const username = localStorage.getItem('username');
    const nickname = localStorage.getItem('nickname');

    if (!token) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate('/Portfolio/Pharagraph/login');
      return;
    }

    try {
      const res = await axios.post(
        '/Pharagraph/posting',
        { username, nickname, ...formData }, 
        { headers: { Authorization: `Bearer ${token}` } } // 수정된 부분
      );
      console.log(res.data);
      navigate('/Portfolio/Pharagraph/list');
    } catch (error) {
      console.error('게시글 등록에 실패했습니다.', error);
    }
  };
  const handleReset = () => {
    setFormData({ 
      book: '', 
      content: '', 
      page: '', 
      music: '', 
      MBTI: '' });
  };

  return (
    <div id="PharagraphPostingPage">
      <h1 className="Title">오늘 어떤 글귀를 발견하셨나요?</h1>
      {BOOK.state && (
        <PharagraphBookSearch BOOK={BOOK} setFormData={setFormData} />
      )}
      {MUSIC.state && (
        <PharagraphMusicSearch MUSIC={MUSIC} setFormData={setFormData} />
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
        {/* <input
          type="text"
          name="background"
          placeholder="배경을 선택해 주세요."
          value={formData.background}
          onChange={handleChange}
          onClick={showBackground}
          autoComplete="off"
          required
        /> */}
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
          onClick={showMusicSearch}
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
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </div>
  );
}