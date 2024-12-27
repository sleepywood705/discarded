import "./Pharagraph_Reply.scss"
import axios from "axios";
import { useState, useEffect } from "react";
import { useFormChange } from "../../../Hook/Hook";
import { useNavigate, useLocation } from "react-router-dom";


export function PharagraphReplyPage() {
  const loginUserNick = localStorage.getItem("nickname");
  const [formData, handleChange, setFormData] = useFormChange();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    const nickname = queryParams.get("nickname");
    const book = queryParams.get("book");
    const content = queryParams.get("content");
    const page = queryParams.get("page");
    const music = queryParams.get("music");
    const MBTIValue = queryParams.get("MBTI");

    if (nickname || book || content || page || music || MBTIValue) {
      setFormData({
        nickname: nickname || "",
        book: book || "",
        content: content || "",
        page: page || "",
        music: music || "",
        MBTI: MBTIValue || "",
      });
    }
  }, [location.search, setFormData]);
  return (
    <div id="PharagraphReplyPage">
      <article>
        <p>{formData.nickname}</p>
        <p>{formData.book}</p>
        <p>{formData.content}</p>
        <p>{formData.page}</p>
        <p>{formData.music}</p>
        <span>{formData.MBTI}</span>
      </article>
      <aside>
        <ul>
          <li>
            <div><img src="https://via.placeholder.com/44x44" alt="" /></div>
            <div className="usernick">
              <p>댓글 단 사람들</p>
              <p>댓글</p>
            </div>
          </li>
        </ul>
        <form action="">
          <input type="text" />
          <div className="wrap_button">
            <button type="reset">취소</button>
            <button type="submit">작성</button>
          </div>
        </form>
      </aside>
    </div>
  )
}