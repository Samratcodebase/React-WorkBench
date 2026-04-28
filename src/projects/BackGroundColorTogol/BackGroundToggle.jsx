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
            SetBackgroundColor("black");
          } else {
            SetBackgroundColor("white");
          }
        }}
      >
        {BackGroundColor == "white" ? "Switch To Black" : "Switch to White"}
      </button>
    </div>
  );
};
