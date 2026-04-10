import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return { ...state, count: state.count + 1  ,userName: "Dishaaaaaaaaaaa"};
    }
    case "Decrement": {
      return { ...state, count: state.count - 1, userName: "Disha" };
    }
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    userName: "samrat",
    count: 0,
  });

  return (
    <>
      <h1>Name: {state.userName}</h1>
      <h2>Count : {state.count}</h2>
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
