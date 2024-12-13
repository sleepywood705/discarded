import './Portfolio.scss'
import { Window } from '../Interface/Window';
import { useCloseWindow } from "../Hook/Hook";


export function Portfolio({ 창닫기 }) {
  const closeWindow = useCloseWindow(창닫기);
  
  return (
    <Window id="Portfolio" tabText="Portfolio" 닫기={closeWindow}>
      <div className="Container">
        
      </div>
    </Window>
  );
}