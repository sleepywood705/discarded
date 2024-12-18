import "./Pharagraph_MBTISearch.scss"


export function PharagraphMBTISearch({ MBTI, setFormData }) {
  const handleSelect = (mbtiValue) => {
    setFormData((prev) => ({ ...prev, MBTI: mbtiValue }));
    MBTI.CLOSE();
  };

  return (
    <div id="PharagraphMBTISearch">
      <div>
        <button onClick={() => handleSelect("ESTJ")}>ESTJ</button>
        <button onClick={() => handleSelect("ESFJ")}>ESFJ</button>
        <button onClick={() => handleSelect("ENTJ")}>ENTJ</button>
        <button onClick={() => handleSelect("ENFJ")}>ENFJ</button>
        <button onClick={() => handleSelect("ESTP")}>ESTP</button>
        <button onClick={() => handleSelect("ESFP")}>ESFP</button>
        <button onClick={() => handleSelect("ENTP")}>ENTP</button>
        <button onClick={() => handleSelect("ENFP")}>ENFP</button>
        <button onClick={() => handleSelect("ISTJ")}>ISTJ</button>
        <button onClick={() => handleSelect("ISFJ")}>ISFJ</button>
        <button onClick={() => handleSelect("INTJ")}>INTJ</button>
        <button onClick={() => handleSelect("INFJ")}>INFJ</button>
        <button onClick={() => handleSelect("ISTP")}>ISTP</button>
        <button onClick={() => handleSelect("ISFP")}>ISFP</button>
        <button onClick={() => handleSelect("INTP")}>INTP</button>
        <button onClick={() => handleSelect("INFP")}>INFP</button>
      </div>
    </div>
  );
}
