import React from "react";
import TodoItem from "./TodoItem.jsx";
import "../styles/ListPanel.css";

const ListPanel = ({ toDos, toggleTodo, deleteTodo, showCompleted }) => {
  const sortedTodos = [...toDos];

  if (showCompleted) {
    sortedTodos.sort((a, b) => {
      //如果a物件和b物件狀態相同(都是true or false),則回傳 0,順序不變。
      if (a.completed === b.completed) {
        return 0;
      }
      //如果a物件為完成（true）,而b物件為未完成（false）,則回傳 1,表示 a物件應該排在b物件的後面
      return a.completed ? 1 : -1;
    });
  } else {
    //如果都為未完成物件，比較兩者創建的時間，如果結果為負數,表示a早於b建立,所以a應該排在b的前面
    sortedTodos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  return (
    <div className="todo-list" style={{ overflowY: "auto" }}>
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default ListPanel;
