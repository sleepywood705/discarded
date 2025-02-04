import "./Pharagraph.scss";
import { Window } from "../../Interface/Window";
import { PharagraphHeader } from "./component/Pharagraph_Header";
import { PharagraphHomePage } from "./page/Pharagraph_Home";
import { PharagraphPostingPage } from "./page/Pharagraph_Posting";
import { PharagraphEditingPage } from "./page/Pharagraph_Editing";
import { PharagraphListPage } from "./page/Pharagraph_List";
import { PharagraphReplyPage } from "./page/Pharagraph_Reply";
import { PharagraphLoginPage } from "./page/Pharagraph_Login";
import { PharagraphSignupPage } from "./page/Pharagraph_Signup";
import { PharagraphMyPage } from "./page/Pharagraph_My";
import { Routes, Route } from "react-router-dom";
import { useWindowClose, useStateChange } from "../../Hook/Hook";


export function Pharagraph({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  const BOOK = useStateChange(false);
  const MUSIC = useStateChange(false);

  return (
    <Window id="Pharagraph" tabText="Pharagraph" 닫기={windowClose}>
      <div className="Container">
        <PharagraphHeader />
        <Routes>
          {/* <Route path="/" element={<PharagraphHomePage />} /> */}
          <Route path="/" element={<PharagraphPostingPage BOOK={BOOK} MUSIC={MUSIC} />} />
          <Route path="/editing" element={<PharagraphEditingPage BOOK={BOOK} MUSIC={MUSIC} />} />
          <Route path="/list" element={<PharagraphListPage />} />
          <Route path="/reply" element={<PharagraphReplyPage />} />
          <Route path="/login" element={<PharagraphLoginPage />} />
          <Route path="/signup" element={<PharagraphSignupPage />} />
          <Route path="/my" element={<PharagraphMyPage />} />
        </Routes>
      </div>
    </Window>
  );
}