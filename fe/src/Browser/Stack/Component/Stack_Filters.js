import "./Stack_Filters.scss"


export function StackFilters({ onFilterChange }) {
  const filters = [
    { label: "전체", value: "전체" },
    { label: "익숙해요", value: "Familiar" },
    { label: "배우고 있어요", value: "Learning" },
    { label: "사용해 봤어요", value: "Done" },
    { label: "프레임워크", value: "Framework" },
    { label: "라이브러리", value: "Library" },
    { label: "협업", value: "CoWorking" },
    { label: "툴", value: "Tool" },
    { label: "기타", value: "ETC" },
  ];

  return (
    <div id="StackFilters">
      {filters.map((filter) => (
        <button key={filter.value} onClick={() => onFilterChange(filter.value)}>
          {filter.label}
        </button>
      ))}
    </div>
  )
}