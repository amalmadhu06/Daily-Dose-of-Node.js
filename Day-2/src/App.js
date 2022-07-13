import { React, useState } from "react";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2 className="title">Counter App using React</h2>
        <span className="output_dis">Count : {count}</span>
      <div className="buttons">
        <button className="btn-controller" onClick={increase}>+</button>
        <button className="btn-controller" onClick={decrease}>-</button>
        <button className="resetter" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
