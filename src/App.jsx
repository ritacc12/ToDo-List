import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./component/Header.jsx";
import InputForm from "./component/InputForm.jsx";
import ListPanel from "./component/ListPanel.jsx";
import ProgressBar from "./component/ProgressBar.jsx";
import ToggleButton from "./component/ToggleButton.jsx";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  function addTodo(text) {
    const newTodo = {
      id: uuidv4(), // 使用 uuidv4() 生成唯一的 ID
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setToDos([...toDos, newTodo]);
  }

  function toggleTodo(id) {
    setToDos(
      toDos.map((todo) =>
        todo?.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    const handleScroll = () => {
      const todoList = document.querySelector(".todo-list");
      if (todoList) {
        todoList.scrollTop = todoList.scrollHeight;
      }
    };

    if (toDos.length > 0) {
      handleScroll();
    }
  }, [toDos]);

  return (
    <div className="app">
      <Header />
      <ProgressBar toDos={toDos} />
      <ListPanel
        toDos={toDos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        showCompleted={showCompleted}
      />
      <ToggleButton
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      <InputForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;
