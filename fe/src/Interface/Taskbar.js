import "./Taskbar.scss"
import { useState, useEffect } from "react";


/* 작업표시줄 */
export function Taskbar() {
  return (
    <div id="Taskbar">
      <button>
        <div />
        <div />
        <div />
        <div />
      </button>
      <div id="TimeContainer">
        <Time />
        <Yeartoday />
      </div>
    </div>
  );
}
function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formatHours = hours % 12 === 0 ? 12 : hours % 12;
  const formatTime = `${ampm} ${formatHours}:${minutes < 10 ? "0" : ""}${minutes}`;

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {clearInterval(timerID);};
  }, []);

  function tick() {setCurrentTime(new Date());}

  return <div className="Time">{formatTime}</div>;
}
function Yeartoday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return <div className="Yeartoday">{formattedDate}</div>;
}