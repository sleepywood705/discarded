import "./Stack.scss"
import { Window } from "../../Interface/Window";
import { StackFilters } from "./Component/Stack_Filters";
import { StackContainer } from "./Component/Stack_Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Stack({ 창닫기 }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("전체");

  const handleClose = () => {
    navigate("/Portfolio/");
    창닫기();
  };

  return (
    <Window id="Stack" tabText="Stack" 닫기={handleClose}>
      <div className="Container">
        <h2>사용할 수 있는 스택과 툴을 한 곳에 모았습니다.</h2>
        <StackFilters onFilterChange={setFilter} />
        <StackContainer filter={filter} />
      </div>
    </Window>
  );
}