import "./Pharagraph_MBTISearch.scss"
import { useEffect } from "react";

export function PharagraphMBTISearch({ MBTI, setFormData }) {
  const handleSelect = (mbtiValue) => {
    setFormData((prev) => ({ ...prev, MBTI: mbtiValue }));
    MBTI.CLOSE();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      MBTI.CLOSE();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="PharagraphMBTISearch">
      <div>
        <div>
          <button onClick={() => handleSelect("ESFJ")} className="ESFJ" />
          <button onClick={() => handleSelect("ESTJ")} className="ESTJ" />
          <button onClick={() => handleSelect("ISTJ")} className="ISTJ" />
          <button onClick={() => handleSelect("ISFJ")} className="ISFJ" />
        </div>
        <div>
          <button onClick={() => handleSelect("ENFJ")} className="ENFJ" />
          <button onClick={() => handleSelect("ENFP")} className="ENFP" />
          <button onClick={() => handleSelect("INFJ")} className="INFJ" />
          <button onClick={() => handleSelect("INFP")} className="INFP" />
        </div>
        <div>
          <button onClick={() => handleSelect("ESTP")} className="ESTP" />
          <button onClick={() => handleSelect("ESFP")} className="ESFP" />
          <button onClick={() => handleSelect("ISTP")} className="ISTP" />
          <button onClick={() => handleSelect("ISFP")} className="ISFP" />
        </div>
        <div>
          <button onClick={() => handleSelect("ENTP")} className="ENTP" />
          <button onClick={() => handleSelect("ENTJ")} className="ENTJ" />
          <button onClick={() => handleSelect("INTJ")} className="INTJ" />
          <button onClick={() => handleSelect("INTP")} className="INTP" />
        </div>
      </div>
    </div>
  );
}
