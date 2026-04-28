import { useState } from "react";
import "./Accordian.css";

export const Accordian = ({ id, title, content }) => {
  const [Open, SetOpen] = useState(false);
  return (
    <>
      <div
        className="accordion-item"
        onClick={() => {
          SetOpen((prev) => {
            return !prev;
          });
        }}
      >
        <h1>{title}</h1>
        <p>{Open ? "-" : "+"}</p>
        <h2>{Open ? <> {content} </> : <> </>}</h2>
      </div>
    </>
  );
};
