import "./Resume.scss"
import { Window } from "../../Interface/Window";
import { useWindowClose } from "../../Hook/Hook";


export function Resume({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  
  return (
    <Window id="Resume" tabText="Resume" 닫기={windowClose}>
      <div className="Container">
        
      </div>
    </Window>
  );
}