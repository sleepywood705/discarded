import "./Stack_Chip.scss"


export function StackChip({ type }) {
  const chipData = {
    Familiar: { className: "ChipFamiliar", text: "익숙해요" },
    Learning: { className: "ChipLearning", text: "배우고 있어요" },
    Done: { className: "ChipDone", text: "사용해 봤어요" },
    CoWorking: { className: "ChipCoWorking", text: "협업" },
    Framework: { className: "ChipFramework", text: "프레임워크" },
    Library: { className: "ChipLibrary", text: "라이브러리" },
    Tool: { className: "ChipTool", text: "툴" },
    ETC: { className: "ChipETC", text: "기타" }
  };

  const { className, text } = chipData[type] || chipData.ETC;

  return <div className={className}>{text}</div>;
}
