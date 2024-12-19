import "./Pharagraph_My.scss";


export function PharagraphMyPage() {
  const username = localStorage.getItem("username")

  return (
    <div id="PharagraphMyPage">
      <h1>마이페이지</h1>
      {username}
    </div>
  );
}
