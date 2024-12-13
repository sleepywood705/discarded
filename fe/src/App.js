import './global.css';
import './font.css';
import './App.css'
import { Desktop } from './Interface/Desktop';
import { Taskbar } from './Interface/Taskbar'


function App() {
  return (
    <div id="App">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;