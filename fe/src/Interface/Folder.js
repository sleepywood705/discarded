import "./Folder.scss"
import { Window } from "../Interface/Window"
import { useState } from "react";


export function Folder({
  창닫기,
  에이딕트열기,
  플리열기,
  파라그래프열기,
  캔버스열기,
  슬라이더열기,
  게임2048열기,
  투두리스트열기,
  레퍼런스열기,
}) {
  const [state, setState] = useState({
    showDevelopment: true,
    showDocument: false,
    showPractice: false,
  });

  const onClick = (type) => {
    if (type === "Development") {
      setState({ showDevelopment: true, showDocument: false, showDesign: false, showPractice: false });
    } else if (type === "Document") {
      setState({ showDevelopment: false, showDocument: true, showDesign: false, showPractice: false });
    } else if (type === "Practice") {
      setState({ showDevelopment: false, showDocument: false, showDesign: false, showPractice: true });
    }
  };

  return (
    <Window id="Folder" tabText="Folder" 닫기={창닫기}>
      <div className="Container">
        <aside>
          <ul>
            <li className="Favorites" onClick={() => onClick("Development")}>📁 Development</li>
            <li className="Favorites" onClick={() => onClick("Document")}>📁 Document</li>
            <li className="Favorites" onClick={() => onClick("Practice")}>📁 Practice</li>
          </ul>
        </aside>
        <section>
          {state.showDevelopment && (
            <div className="Icon" onClick={에이딕트열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">에이딕트</div>
            </div>
          )}

          {state.showDevelopment && (
            <div className="Icon" onClick={플리열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">플레이리스트</div>
            </div>
          )}

          {state.showDevelopment && (
            <div className="Icon" onClick={파라그래프열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">파라그래프</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={캔버스열기}>
              <div className="Upper">
                <div className="Inner">Prac</div>
              </div>
              <div className="Lower">캔버스 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={슬라이더열기}>
              <div className="Upper">
                <div className="Inner">Prac</div>
              </div>
              <div className="Lower">슬라이더 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={게임2048열기}>
              <div className="Upper">
                <div className="Inner">Prac</div>
              </div>
              <div className="Lower">게임2048 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={투두리스트열기}>
              <div className="Upper">
                <div className="Inner">Prac</div>
              </div>
              <div className="Lower">투두리스트 연습</div>
            </div>
          )}

          {state.showDocument && (
            <div className="Icon" onClick={레퍼런스열기}>
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">레퍼런스 모음</div>
            </div>
          )}

          {state.showDocument && (
            <a
              href="https://www.w3schools.com/TAGS/default.asp"
              target="_blank"
              className="Icon">
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">W3School</div>
            </a>
          )}

          {state.showDocument && (
            <a
              href="https://www.gdweb.co.kr/main/"
              target="_blank"
              className="Icon">
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">GD WEB</div>
            </a>
          )}

          {state.showDocument && (
            <a
              href="https://getbootstrap.kr/"
              target="_blank"
              className="Icon">
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">Boodstrap</div>
            </a>
          )}

          {state.showDocument && (
            <a
              href="https://www.khroma.co/train"
              target="_blank"
              className="Icon">
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">Khroma</div>
            </a>
          )}

          {state.showDocument && (
            <a
              href="https://uiux.egovframe.go.kr/guide/outline/outline_01.html"
              target="_blank"
              className="Icon">
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">정부 UIUX</div>
            </a>
          )}

        </section>
      </div>
    </Window>
  );
}