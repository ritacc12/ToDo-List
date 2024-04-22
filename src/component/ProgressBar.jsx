import React from "react";
import "../styles/Progressbar.css";

const ProgressBar = ({ toDos }) => {
  const totalTodos = toDos.length;
  const completedTodos = toDos.filter((todo) => todo?.completed).length;
  const progress =
    totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <>
      <div className="progressBar">
        <div className="progress-bar-label">{progress}%</div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
