import { useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
        <div className="btns-container">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="increment"
          >
            +
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="increment"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
