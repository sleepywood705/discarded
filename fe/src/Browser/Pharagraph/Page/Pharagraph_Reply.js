import "./Pharagraph_Reply.scss"
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useFormChange } from "../../../Hook/Hook";
import { useNavigate, useLocation } from "react-router-dom";


export function PharagraphReplyPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [formData, handleChange, setFormData] = useFormChange();

  const textarea = useRef();
  
  useEffect(() => {
    const fields = ['nickname', 'book', 'page', 'music', 'MBTI'];
    const initialData = fields.reduce((acc, field) => {
      acc[field] = queryParams.get(field) || "";
      return acc;
    }, {});
    
    initialData.content = decodeURIComponent(queryParams.get('content') || "");

    setFormData(initialData);
  }, [location.search, setFormData]);

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  }

  useEffect(() => {
    handleResizeHeight();
  }, []);

  return (
    <div id="PharagraphReplyPage">
      <div className="card">
        <div className="top">
          <img src="https://via.placeholder.com/44x44" alt="" />
          <div>
            <p className="nickname">{formData.nickname}</p>
            <p className="MBTI">{formData.MBTI}</p>
          </div>
        </div>
        <div className="mid">
          <span>
            <p className="book">{formData.book}</p>
            <p className="page">p.{formData.page}</p>
          </span>
          <p className="content">{formData.content}</p>
        </div>
        <div className="bot">
          <p className="music">{formData.music}</p>
        </div>
      </div>
      <div className="cont_reply">
        <ul>
          <h4>댓글</h4>
          <li>
            <img src="https://via.placeholder.com/40x40" alt="" />
            <div>
              <p className="replynick">댓글 단 사람들</p>
              <p className="reply">댓글</p>
            </div>
          </li>
        </ul>
        <form action="">
          <textarea 
            ref={textarea}
            type="text"
            placeholder="댓글을 작성해 주세요."  
            rows={1}
            onInput={handleResizeHeight}
          />
          <button type="submit">작성</button>
        </form>
      </div>
    </div>
  )
}