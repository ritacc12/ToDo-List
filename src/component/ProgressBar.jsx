import React from "react";
import "../styles/Progressbar.css";

const ProgressBar = ({ toTos }) => {
  const totalToDos = toTos.length;
  const completedToDos = toTos.filter((todo) => todo.completed.length);
  const progress =
    totalToDos === 0 ? 0 : Math.round((completedToDos / totalToDos) * 100);

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-bar-label">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
