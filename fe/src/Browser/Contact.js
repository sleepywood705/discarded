import "./Contact.scss"
import { Ccanvas } from "./Canvas";
import { useState, useEffect, useRef } from "react";


export function Contact({ 창닫기, contactStyle }) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sleepywood94@naver.com")
      .then(() => {
        alert("이메일이 클립보드에 저장되었습니다.");
      })
      .catch(err => {
        console.error("클립보드에 저장하는 데 실패했습니다: ", err);
        alert("이메일이 클립보드에 저장하는 데 실패했습니다.");
      });
  };

  return (
    <div id="Contact" style={contactStyle}>
      <div className="flip-card-front">
        <Ccanvas />
        <span>Frontend Developer</span>
        <span>Web Designer</span>
      </div>
      <div className="flip-card-back">
        <button
          onClick={창닫기}
          className="close-card"
        />
        <ul>
          <li className="name">이헌주</li>
          <li className="mail" onClick={handleCopyEmail} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
            </svg>
            sleepywood94@naver.com
          </li>
          <li className="call">010-2715-1253</li>
        </ul>
      </div>
    </div>
  );
}
