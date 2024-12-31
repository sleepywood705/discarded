import "./Slider.scss"
import { Window } from "../Interface/Window";
import { useEffect, useRef } from "react";


export function GSAP1({ 창닫기 }) {
  return (
    <Window id="GSAP1" tabText="GSAP 연습" 닫기={창닫기}>
      <div className="Container">
        
      </div>
    </Window>
  )
}