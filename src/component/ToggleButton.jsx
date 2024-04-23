import React from "react";
import "../styles/ToggleButton.css";

const ToggleButton = ({ showCompleted, setShowCompleted }) => {
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="toggle-button">
      <span className="pr-2">Move down things to end ?</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={toggleShowCompleted}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
