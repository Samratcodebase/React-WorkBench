import { useRef } from "react";
export const FocusRef = () => {
  const refH1 = useRef();

  return (
    <>
      <h1 ref={refH1}>Samrat</h1>
      <button
        type="button"
        onClick={() => {
          refH1.current.style.backgroundColor = "red";
        }}
      >
        Focus
      </button>
    </>
  );
};
