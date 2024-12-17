import "./Desktop.css";
import "./Browser.css";
import { Iconset } from "./Iconset";
import { Folder } from "./Folder";
import { Stack } from "../Browser/Stack/Stack";
import { Contact } from "../Browser/Contact";
import { Addict } from "../Browser/Addict/Addict";
import { PlayList } from "../Browser/PlayList/PlayList";
import { Pharagraph } from "../Browser/Pharagraph/Pharagraph";
import { Canvas } from "../Browser/Canvas";
import { Slider } from "../Browser/Slider";
import { Game2048 } from "../Browser/Game2048";
import { TodoList } from "../Browser/TodoList"
import { Reference } from "../Browser/Reference";
import { Routes, Route } from "react-router-dom";
import { useStateChange, useHeadTo } from "../Hook/Hook";


/* 바탕화면 */
export function Desktop() {
  const headTo = useHeadTo();
  // const portfolio = useStateChange(false);
  const folder = useStateChange(false);
  const contact = useStateChange(false);
  const game2048 = useStateChange(false);
  const todoList = useStateChange(false);

  // useEffect(() => {
  //   headTo("/Portfolio/addict/");
  // }, []); 

  return (
    <div id="Desktop">
      <Routes>
        <Route path="/Portfolio/stack/*" element={<Stack 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/addict/*" element={<Addict 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/playlist/*" element={<PlayList 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/pharagraph/*" element={<Pharagraph 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/canvas/*" element={<Canvas 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/slider/*" element={<Slider 창닫기={() => headTo("/Portfolio/")} />} />
        <Route path="/Portfolio/reference/*" element={<Reference 창닫기={() => headTo("/Portfolio/")} />} />
      </Routes>

      <Iconset
        // 포트폴리오열기={portfolio.OPEN}
        폴더열기={folder.OPEN}
        스택열기={() => headTo("/Portfolio/stack/")}
        컨택트열기={contact.OPEN}
      />

      {folder.state && (
        <Folder
          창닫기={folder.CLOSE}
          에이딕트열기={() => headTo("/Portfolio/addict/")}
          플리열기={() => headTo("/Portfolio/playlist/")}
          파라그래프열기={() => headTo("/Portfolio/pharagraph/")}
          캔버스열기={() => headTo("/Portfolio/canvas/")}
          슬라이더열기={() => headTo("/Portfolio/slider/")}
          게임2048열기={game2048.OPEN}
          투두리스트열기={todoList.OPEN}
          레퍼런스열기={() => headTo("/Portfolio/reference/")}
        />
      )}

      {contact.state && (
        <Contact 창닫기={contact.CLOSE} />
      )}

      {game2048.state && (
        <Game2048 창닫기={game2048.CLOSE} />
      )}

      {todoList.state && (
        <TodoList 창닫기={todoList.CLOSE} />
      )}
    </div>
  );
}