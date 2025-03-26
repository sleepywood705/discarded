import "./Addict_ShortCut.scss";
import { Link } from "react-router-dom";


export function AddictShortCut() {
  return (
    <section id="AddictShortCut">
      <Link to="/discarded/addict/all?tab=liquid"></Link>
      <Link to="/discarded/addict/all?tab=solid"></Link>
    </section>
  );
}