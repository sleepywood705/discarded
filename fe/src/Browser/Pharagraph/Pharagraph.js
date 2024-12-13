import "./Pharagraph.scss";
import { Window } from "../../Interface/Window";
import { PharagraphHeader } from "./Component/Pharagraph_Header";
import { PharagraphHomePage } from "./Page/Pharagraph_Home";
import { PharagraphLoginPage } from "./Page/Pharagraph_Login";
import { PharagraphMyPage } from "./Page/Pharagraph_My";
import { PharagraphPostingPage } from "./Page/Pharagraph_Posting";
import { useCloseWindow } from "../../Hook/Hook";
import { AuthProvider } from "./ContextApi/AuthContext";
import { Routes, Route, Link } from "react-router-dom";


export function Pharagraph({ 창닫기 }) {
  const closeWindow = useCloseWindow(창닫기);  

  return (
    <AuthProvider>
      <Window id="Pharagraph" tabText="Pharagraph" 닫기={closeWindow}>
        <div className="Container">
          <PharagraphNav />
          <PharagraphHeader />
          <Routes>
            <Route path="/" element={<PharagraphHomePage />} />
            <Route path="/login" element={<PharagraphLoginPage />} />
            <Route path="/my" element={<PharagraphMyPage />} />
            <Route path="/posting" element={<PharagraphPostingPage />} />
          </Routes>
        </div>
      </Window>
    </AuthProvider>
  );
} 

export function PharagraphNav() {
  return (
    <nav>
      <Link to="/Portfolio/Pharagraph/posting">Write</Link>
      <Link to="/Portfolio/Pharagraph/list">List</Link>
      <Link to="/Portfolio/Pharagraph/community">Community</Link>
    </nav>
  )
}