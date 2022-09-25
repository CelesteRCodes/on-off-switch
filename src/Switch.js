import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [buttonIsOn, setButtonIsOn] = useState("");

  const handleToggle = () => {
    return !buttonIsOn ? setButtonIsOn(true) : setButtonIsOn(false);
  };

  const buttonClass = buttonIsOn ? "button-on" : "button-off";
  const label = buttonIsOn ? "ON" : "OFF";

  return (
    <>
      <div className="button-wrapper">
        <button className={buttonClass} onClick={handleToggle}>
          {label}
        </button>
      </div>
    </>
  );
};

export default Switch;
