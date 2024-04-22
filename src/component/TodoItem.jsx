import React from "react";
import ErrorPic from "/pictures/xmark-solid.svg";
import "../styles/ListPanel.css";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <div className="todo-item-content cursor-pointer relative">
        <input
          type="checkbox"
          className="w-5 h-5 border-2 accent-[#6c8cd7] rounded-sm mx-3 checked:bg-[#6c8cd7]"
          checked={todo.completed}
          onChange={handleToggleTodo}
        ></input>
        <span className={`todo-item-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
        <img
          src={ErrorPic}
          className="todo-item-delete w-4 absolute right-8 todo-item-delete"
          onClick={handleDeleteTodo}
        ></img>
      </div>
    </div>
  );
};

export default TodoItem;
