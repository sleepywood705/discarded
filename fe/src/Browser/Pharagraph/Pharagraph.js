import "./Pharagraph.scss";
import { Window } from "../../Interface/Window";
import { PharagraphHeader } from "./Component/Pharagraph_Header";
import { PharagraphHomePage } from "./Page/Pharagraph_Home";
import { PharagraphPostingPage } from "./Page/Pharagraph_Posting";
import { PharagraphEditingPage } from "./Page/Pharagraph_Editing";
import { PharagraphListPage } from "./Page/Pharagraph_List";
import { PharagraphLoginPage } from "./Page/Pharagraph_Login";
import { PharagraphSignupPage } from "./Page/Pharagraph_Signup";
import { PharagraphMyPage } from "./Page/Pharagraph_My";
import { Routes, Route } from "react-router-dom";
import { useWindowClose, useStateChange } from "../../Hook/Hook";


export function Pharagraph({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  const BOOK = useStateChange(false);
  const MBTI = useStateChange(false);

  return (
    <Window id="Pharagraph" tabText="Pharagraph" 닫기={windowClose}>
      <div className="Container">
        <PharagraphHeader />
        <Routes>
          {/* <Route path="/" element={<PharagraphHomePage />} /> */}
          <Route path="/list" element={<PharagraphListPage />} />
          <Route path="/" element={<PharagraphPostingPage BOOK={BOOK} MBTI={MBTI} />} />
          <Route path="/editing" element={<PharagraphEditingPage BOOK={BOOK} MBTI={MBTI} />} />
          <Route path="/login" element={<PharagraphLoginPage />} />
          <Route path="/signup" element={<PharagraphSignupPage />} />
          <Route path="/my" element={<PharagraphMyPage />} />
        </Routes>
      </div>
    </Window>
  );
}