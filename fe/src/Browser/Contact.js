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
            <i class="bi bi-copy" />
            sleepywood94@naver.com
          </li>
          <li className="call">010-2715-1253</li>
        </ul>
      </div>
    </div>
  );
}
