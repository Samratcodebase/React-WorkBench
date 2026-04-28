import React, { useState } from "react";

export const BackGroundToggle = () => {
  const [BackGroundColor, SetBackgroundColor] = useState("white");

  const [TextColor, setTextColor] = useState("white");

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      <button
        type="button"
        onClick={() => {
          if (BackGroundColor == "white") {
            console.log(BackGroundColor);

            SetBackgroundColor("red");
          } else {
            SetBackgroundColor("green");
          }
        }}
      >
        {BackGroundColor == "white" ? "Switch To Black" : "Switch to White"}
      </button>
    </div>
  );
};
