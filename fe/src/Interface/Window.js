import './Window.css';
import { Titlebar } from './Titlebar';
import { Searchbar } from './Searchbar';


/* 윈도우창, 타이틀바, 컨테이너 */
export function Window({ 닫기, tabText, children, ...props }) {
  return (
    <div className="Window" {...props}>
      <Titlebar 닫기={닫기} tabText={tabText} />
      <Searchbar />
      {children}
    </div>
  );
}