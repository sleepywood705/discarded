import "./Contact.scss"
import { Ccanvas } from "./Canvas";


export function Contact({ 창닫기, contactStyle, onContactClick }) {
  const handleClose = (e) => {
    e.stopPropagation();
    창닫기();
  };

  return (
    <div id="Contact" 
      style={contactStyle}
      onClick={onContactClick}
    >
      <Ccanvas />
      <span>Frontend Developer</span>
      <span>Web Designer</span>
      <p>sleepywood94@naver.com / 010-2715-1253 / 이헌주</p>
      <button type="button" onClick={handleClose}>
        <i class="bi bi-x-circle-fill"></i>
      </button>
    </div>
  );
}
