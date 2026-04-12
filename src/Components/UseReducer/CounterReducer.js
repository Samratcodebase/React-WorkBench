export const Reducer = (state, action) => {
  console.log("Action", action);
  console.log("state:", state);

  switch (action.type) {
    case "Increment": {
      return { ...state, count: state.count + 1 };
    }
    case "Decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "IncrementBY": {
      return { ...state, count: state.count + action.value,};
    }
    case "DecrememtBY": {
      return { ...state, count: state.count - action.value };
    }
  }
};
