import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChangeTask(ev) {
    setTask(ev.target.value);
  }
  function handleChangeDescription(ev) {
    setDescription(ev.target.value);
  }
  function handleChangeTime(ev) {
    setTime(ev.target.value);
  }

  function handleAddTask(ev) {
    ev.preventDefault();
    if (!task || !description || !time) {
      alert("Task, Description and Time are required");
      return;
    }

    const newTask = {
      task: task,
      time: time,
      description: description,
    };
    setTaskList(function (prevTaskList) {
      return [...prevTaskList, newTask];
    });

    setTask("");
    setTime("");
    setDescription("");
  }

  function TaskList({ task, time, description, number }) {
    return (
      <div className="task-list">
        <h4 className="task-title">
          {number}.{task}
        </h4>
        <p className="task-description">{description}</p>
        <p className="task-time">{time}</p>
      </div>
    );
  }

  return (
    <div id="app">
      <h1 className="title">Todo List App</h1>
      <div className="task-container">
        <form>
          <input
            type="text"
            placeholder="new task"
            className="form-input"
            value={task}
            onChange={handleChangeTask}
          />
          <input
            type="text"
            placeholder="description"
            className="form-input"
            value={description}
            onChange={handleChangeDescription}
          />
          <input
            type="text"
            placeholder="Time"
            className="form-input"
            value={time}
            onChange={handleChangeTime}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </form>
        <div className="task-list-container">
          {taskList.map((task, idx) => (
            <TaskList
              key={idx}
              number={idx + 1}
              task={task.task}
              time={task.time}
              description={task.description}
              // NoOfTasks={}
            />
          ))}
        </div>
      </div>
      <h3 className="task-count">No of Tasks: {taskList.length}</h3>
      <button className="task-delete" onClick={() => setTaskList([])}>
        Delete All
      </button>
    </div>
  );
}

export default App;
