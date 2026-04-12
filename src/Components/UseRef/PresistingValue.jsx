import { useRef, useState } from "react";

export const PresistingValue = () => {
  const Val = useRef(0);
  const [count, setCount] = useState(0);
  console.log(Val);

  return (
    <>
      <h1>Count : {count}</h1>

      <button
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
          Val.current = Val.current + 1;
        }}
      >
        Button
      </button>
    </>
  );
};
