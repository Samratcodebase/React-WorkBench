import { Counter } from "./projects/counterProject/Counter";
import Todo from "./projects/TodoProject/Todo";
import { Meals } from "./projects/MealsProject/Meals";
import { Calculator } from "./projects/Calculator/Calculator";
import { useState } from "react";
const App = () => {
  const [input, setinput] = useState("");
  const [value, setvalue] = useState("");

  return (
    <>
      {/* <Counter /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
    </>
  );
};

export default App;
