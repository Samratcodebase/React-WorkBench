import { Reducer } from "./CounterReducer.js";
import { useReducer } from "react";
const initialState = {
  count: 0,
  userInput: "0",
};
export const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log("From Componet", state);

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <input
        type="text"
        value={state.userInput}
        placeholder="Increment By"
        onChange={(e) => {
          dispatch({ type: "IncrementBY", value: e.target.value });
          
        }}
      />
      <input
        type="text"
        value={state.userInput}
        placeholder="Decrememt By"
        onChange={(e) => {
          dispatch({ type: "DecrememtBY", value: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
    </>
  );
};
