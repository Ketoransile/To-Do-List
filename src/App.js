import { useState } from "react";

function App() {
  return (
    <div className="app">
      <ToDOList />
    </div>
  );
}

function ToDOList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function addTask() {
    if (!newTask) return;
    setTask((tasks) => [...tasks, newTask]);
    setNewTask("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="to-do-list container">
      <h1 className="to-do-title">To Do List</h1>

      <div className="first-input-section">
        <input
          type="text"
          className="enter-task"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="add-btn" onClick={() => addTask()}>
          Add
        </button>
      </div>
      <ul className="list-of-tasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="each-task">{task}</span>
            <button
              className="btn delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button className="btn move-btn" onClick={() => moveTaskUp(index)}>
              Move Up
            </button>
            <button
              className="btn move-btn"
              onClick={() => moveTaskDown(index)}
            >
              Move Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
