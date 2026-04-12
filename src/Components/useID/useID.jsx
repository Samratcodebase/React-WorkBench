import { useId } from "react";

export const UseID = ({ component_Name }) => {
  const id = useId();

  return (
    <>
      <h1>From : {component_Name}</h1>
      <h1>ID is {id}</h1>
      <h1>IDF IS {id}</h1>
    </>
  );
};
