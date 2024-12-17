import "./Titlebar.scss"


export function Titlebar({ 닫기, tabText }) {
  return (
    <div className="Titlebar">
      <button className="Restore" />
      <button className="Minimize" />
      <button className="Close" onClick={닫기} />
      <div className="Tab">
        {tabText}
        <button onClick={닫기}></button>
      </div>
    </div>
  );
}