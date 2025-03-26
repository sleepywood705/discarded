import "./Desktop.css";
import "./Browser.css";
import { Portfolio } from "../Browser/discarded/discarded";
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
      "top": "-40%", 
      "transform": "translate(-50%) rotate(-90deg)",
    })
  }

  return (
    <div id="Desktop">
      <Ccanvas />
      <Routes>
        {/* <Route path="/discarded/cv/*" element={<Portfolio 창닫기={() => headTo("/discarded")} />} /> */}
        <Route path="/discarded/stack/*" element={<Stack 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/addict/*" element={<Addict 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/playlist/*" element={<PlayList 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/pharagraph/*" element={<Pharagraph 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/canvas/*" element={<Canvas 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/slider/*" element={<Slider 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/game2048/*" element={<Game2048 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/todolist/*" element={<TodoList 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/GSAP1/*" element={<GSAP1 창닫기={() => headTo("/discarded")} />} />
        <Route path="/discarded/reference/*" element={<Reference 창닫기={() => headTo("/discarded")} />} />
      </Routes>

      <Iconset
        // 포트폴리오열기={() => headTo("/discarded/cv")}
        폴더열기={folder.OPEN}
        스택열기={() => headTo("/discarded/stack")}
        컨택트열기={handleClickContactIcon}
      />

      {folder.state && (
        <Folder
          창닫기={folder.CLOSE}
          에이딕트열기={() => headTo("/discarded/addict")}
          플리열기={() => headTo("/discarded/playlist")}
          파라그래프열기={() => headTo("/discarded/pharagraph")}
          캔버스열기={() => headTo("/discarded/canvas")}
          슬라이더열기={() => headTo("/discarded/slider")}
          게임2048열기={() => headTo("/discarded/game2048")}
          투두리스트열기={() => headTo("/discarded/todolist")}
          지셉열기={() => headTo("/discarded/GSAP1")}
          레퍼런스열기={() => headTo("/discarded/reference")}
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