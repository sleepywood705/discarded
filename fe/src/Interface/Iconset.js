import "./Iconset.scss"


/* 아이콘셋 */
export function Iconset({ 포트폴리오열기, 폴더열기, 스택열기, 컨택트열기 }) {
  return (
    <div id="Iconset">
      {/* <button className="Icon" onClick={포트폴리오열기}>
        <div className="Upper icon-portfolio">
          <div className="Person face" />
          <div className="Person chest" />
        </div>
        <div className="Lower">Portfolio</div>
      </button> */}

      <button className="Icon" onClick={스택열기}>
        <div className="Upper icon-graph">
          <svg className="Graph" viewBox="0 0 200 200">
            <path d="
              M 100,100
              m 100,0
              a 100,100 0 0,1 -100,100
              a 100,100 0 0,1 -100,-100
              a 100,100 0 0,1 100,-100
              L 100, 100
              z
            " fill="#fff" stroke-width="8" />
          </svg>
          <div className="Piece"></div>
        </div>
        <div className="Lower">Stacks</div>
      </button>

      <button className="Icon" onClick={컨택트열기}>
        <div className="Upper icon-contact">
          <div className="Contact circle-upper" />
          <div className="Contact circle-lower" />
        </div>
        <div className="Lower">Contact</div>
      </button>

      <button className="Icon" onClick={폴더열기}>
        <div className="Upper icon-folder">
          <div className="Folder" />
          <div className="Content" />
        </div>
        <div className="Lower">Folder</div>
      </button>
    </div>
  );
}
