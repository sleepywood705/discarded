import "./Addict_Header.scss";
import { Link } from "react-router-dom";


export function AddictHeader({ onClick }) {
  return (
    <header>
      <Link to="/discarded/addict">a ddct</Link>
      <Link to="/discarded/addict/all">제품 보기</Link>
      <Link to="/discarded/addict/all?tab=best">베스트셀러</Link>
      <Link to="/discarded/addict/note">조향 노트</Link>
      <Link to="/discarded/addict/mall">매장 보기</Link>
      <button onClick={onClick}>기획 의도</button>
    </header>
  )
}