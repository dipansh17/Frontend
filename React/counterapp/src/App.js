import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function increaseHandler() {
    setCount(count + 1);
  }
  function decreaseHandler() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Counter App</h1>
          <div className="container">
            <button className="btn" onClick={increaseHandler}>
              +
            </button>
            <div className="countVal">{count}</div>
            <button className="btn" onClick={decreaseHandler}>
              -
            </button>
          </div>
          <button className="reset-btn" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
