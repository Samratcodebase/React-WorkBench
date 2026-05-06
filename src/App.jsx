import { Counter } from "./projects/counterProject/Counter";
import Todo from "./projects/TodoProject/Todo";
import { Meals } from "./projects/MealsProject/Meals";
import { Calculator } from "./projects/Calculator/Calculator";
import { BackGroundToggle } from "./projects/BackGroundColorTogol/BackGroundToggle";
import { accordionData } from "./projects/Accordian/Accordian.js";
import { Accordian } from "./projects/Accordian/Accordian.jsx";
import ManualForm from "./projects/ManualForm/ManualForm.jsx";
const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <BackGroundToggle /> */}
      {/* {accordionData.map(({ id, title, content }) => {
        return <Accordian title={title} content={content} />;
      })} */}
      <ManualForm />
    </>
  );
};

export default App;
