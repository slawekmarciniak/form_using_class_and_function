import { FunctionComponent, ClassComponent } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Made with function component</p>
      <div className="formFunctionContainer">
        <FunctionComponent />
      </div>
      <p className="title">Made with class component</p>
      <div className="formClassContainer">
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
