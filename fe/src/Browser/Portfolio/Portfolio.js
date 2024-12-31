import "./Portfolio.scss"
import { Window } from "../../Interface/Window";
import { useWindowClose } from "../../Hook/Hook";


export function Portfolio({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  
  return (
    <Window id="Portfolio" tabText="Portfolio" 닫기={windowClose}>
      <div className="Container">
        
      </div>
    </Window>
  );
}