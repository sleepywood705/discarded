import "./Counter.scss";
import { Window } from "../Interface/Window";
import { useState, useEffect } from "react";


export function Counter({ 창닫기 }) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const incrementCount = () => setCount(prevCount => prevCount + 1);

  return (
    <Window id="Counter" tabText="카운터 연습" 닫기={창닫기}>
      <div className="Container">
        <span>{count}</span>
        <button onClick={incrementCount}>♥️</button>
      </div>
    </Window>
  )
}