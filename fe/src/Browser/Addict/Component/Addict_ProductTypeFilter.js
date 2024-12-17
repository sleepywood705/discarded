import "./Addict_ProductTypeFilter.scss"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function AddictProductTypeFilters({ buttonActive, setButtonActive }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");

  const buttons = ["전체 상품", "베스트셀러", "오 드 퍼퓸", "솔리드 퍼퓸", "기프트"];

  useEffect(() => {
    switch (tab) {
      case "solid":
        setButtonActive(3);
        break;
      case "liquid":
        setButtonActive(2);
        break;
      case "best":
        setButtonActive(1);
        break;
      case "all":
      default:
        setButtonActive(0);
        break;
    }
  }, [tab]);

  const handleButtonClick = (index) => {
    setButtonActive(index);
  };
  return (
    <div id="AddictProductTypeFilters">
      {buttons.map((label, index) => (
        <button
          key={index}
          className={buttonActive === index ? "active" : ""}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}