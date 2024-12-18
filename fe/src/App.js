import "./global.css";
import "./font.css";
import "./App.css";
import { Desktop } from "./Interface/Desktop";
import { Taskbar } from "./Interface/Taskbar";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <div id="App">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
