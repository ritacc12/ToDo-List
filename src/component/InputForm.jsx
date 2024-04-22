import React from "react";
import "../styles/InputForm.css";

const InputForm = ({ newTodo, setNewTodo, addTodo }) => {
  function handleInputChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo("");
    }
  }

  return (
    <div className="todo-input mt-10">
      <label className="font-light text-xl">Add to list</label>
      <div className="flex flex-row">
        <input
          type="text"
          className="input-form bg-white rounded-md"
          value={newTodo}
          onChange={handleInputChange}
        ></input>
        <button className="AddBtn" onClick={handleAddTodo}>
          <p>+</p>
        </button>
      </div>
    </div>
  );
};

export default InputForm;
