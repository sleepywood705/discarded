import "./Pharagraph_MBTISearch.scss"


export function PharagraphMBTISearch({ MBTI, setFormData }) {
  const handleSelect = (mbtiValue) => {
    setFormData((prev) => ({ ...prev, MBTI: mbtiValue }));
    MBTI.CLOSE();
  };

  return (
    <div id="PharagraphMBTISearch">
      <div>
        <button onClick={() => handleSelect("ESTJ")} className="ESTJ">ESTJ</button>
        <button onClick={() => handleSelect("ESFJ")} className="ESFJ">ESFJ</button>
        <button onClick={() => handleSelect("ENTJ")} className="ENTJ">ENTJ</button>
        <button onClick={() => handleSelect("ENFJ")} className="ENFJ">ENFJ</button>
        <button onClick={() => handleSelect("ESTP")} className="ESTP">ESTP</button>
        <button onClick={() => handleSelect("ESFP")} className="ESFP">ESFP</button>
        <button onClick={() => handleSelect("ENTP")} className="ENTP">ENTP</button>
        <button onClick={() => handleSelect("ENFP")} className="ENFP">ENFP</button>
        <button onClick={() => handleSelect("ISTJ")} className="ISTJ">ISTJ</button>
        <button onClick={() => handleSelect("ISFJ")} className="ISFJ">ISFJ</button>
        <button onClick={() => handleSelect("INTJ")} className="INTJ">INTJ</button>
        <button onClick={() => handleSelect("INFJ")} className="INFJ">INFJ</button>
        <button onClick={() => handleSelect("ISTP")} className="ISTP">ISTP</button>
        <button onClick={() => handleSelect("ISFP")} className="ISFP">ISFP</button>
        <button onClick={() => handleSelect("INTP")} className="INTP">INTP</button>
        <button onClick={() => handleSelect("INFP")} className="INFP">INFP</button>
      </div>
    </div>
  );
}
