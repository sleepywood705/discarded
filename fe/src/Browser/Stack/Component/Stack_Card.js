import "./Stack_Card.scss"


export function StackCard({ imgSrc, description, chips }) {
  return (
    <div className="StackCard">
      <img src={imgSrc} />
      <div className="chips">
        {chips.map((chip, index) => (
          <span key={index}>{chip}</span>
        ))}
      </div>
      <div className="description">
        <ul>
          {description.split(", ").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
