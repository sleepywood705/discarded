import "./Addict_Header.scss";
import { Link } from "react-router-dom";


export function AddictHeader({ onClick }) {
  return (
    <header>
      <Link to="/Portfolio/addict">a ddct</Link>
      <Link to="/Portfolio/addict/all">제품 보기</Link>
      <Link to="/Portfolio/addict/all?tab=best">베스트셀러</Link>
      <Link to="/Portfolio/addict/note">조향 노트</Link>
      <Link to="/Portfolio/addict/mall">매장 보기</Link>
      <button onClick={onClick}>기획 의도</button>
    </header>
  )
}