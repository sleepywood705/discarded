import "./Desktop.css";
import "./Browser.css";
import { Portfolio } from "../Browser/Portfolio/Portfolio";
import { Iconset } from "./Iconset";
import { Folder } from "./Folder";
import { Stack } from "../Browser/Stack/Stack";
import { Contact } from "../Browser/Contact";
import { Addict } from "../Browser/Addict/Addict";
import { PlayList } from "../Browser/PlayList/PlayList";
import { Pharagraph } from "../Browser/Pharagraph/Pharagraph";
import { Canvas } from "../Browser/Canvas";
import { Ccanvas } from "../Browser/Canvas";
import { Slider } from "../Browser/Slider";
import { Game2048 } from "../Browser/Game2048";
import { TodoList } from "../Browser/TodoList"
import { Reference } from "../Browser/Reference";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useStateChange, useHeadTo } from "../Hook/Hook";
import { GSAP1 } from "../Browser/GSAP1";


/* 바탕화면 */
export function Desktop() {
  const headTo = useHeadTo();
  const folder = useStateChange(false);

  const [contactStyle, setContactStyle] = useState({})

  const handleClickContactIcon = () => {
    setContactStyle({"top": "-180px"});
  }

  const handleClickContactComponent = () => {
    setContactStyle({ 
      "top": "200px",
      "transform": "translate(-50%) rotate(0deg)",
      "cursor": "default"
    });
  };

  const hideContact = () => {
    setContactStyle({ 
      "top": "-30%", 
      "transform": "translate(-50%) rotate(-90deg)",
    })
  }

  return (
    <div id="Desktop">
      <Ccanvas />
      <Routes>
        <Route path="/Portfolio/cv/*" element={<Portfolio 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/stack/*" element={<Stack 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/addict/*" element={<Addict 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/playlist/*" element={<PlayList 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/pharagraph/*" element={<Pharagraph 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/canvas/*" element={<Canvas 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/slider/*" element={<Slider 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/game2048/*" element={<Game2048 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/todolist/*" element={<TodoList 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/GSAP1/*" element={<GSAP1 창닫기={() => headTo("/Portfolio")} />} />
        <Route path="/Portfolio/reference/*" element={<Reference 창닫기={() => headTo("/Portfolio")} />} />
      </Routes>

      <Iconset
        포트폴리오열기={() => headTo("/Portfolio/cv")}
        폴더열기={folder.OPEN}
        스택열기={() => headTo("/Portfolio/stack")}
        컨택트열기={handleClickContactIcon}
      />

      {folder.state && (
        <Folder
          창닫기={folder.CLOSE}
          에이딕트열기={() => headTo("/Portfolio/addict")}
          플리열기={() => headTo("/Portfolio/playlist")}
          파라그래프열기={() => headTo("/Portfolio/pharagraph")}
          캔버스열기={() => headTo("/Portfolio/canvas")}
          슬라이더열기={() => headTo("/Portfolio/slider")}
          게임2048열기={() => headTo("/Portfolio/game2048")}
          투두리스트열기={() => headTo("/Portfolio/todolist")}
          지셉열기={() => headTo("/Portfolio/GSAP1")}
          레퍼런스열기={() => headTo("/Portfolio/reference")}
        />
      )}

      <Contact
        창닫기={hideContact}
        contactStyle={contactStyle}
        onContactClick={handleClickContactComponent}
      />
    </div>
  );
}