import { useState } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import InputForm from "./component/InputForm.jsx";
import ListPanel from "./component/ListPanel.jsx";
import ProgressBar from "./component/ProgressBar.jsx";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  function handleAddTask() {
    setToDos([...toDos, newArray]);
    setNewArray("");
  }

  return (
    <div className="app">
      <Header />
      <ProgressBar toTos={toDos} />
      <ListPanel />
      <InputForm onAddTodo={handleAddTask} />
    </div>
  );
}

export default App;
