import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  }

  function deleteTask(index) {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>
        Add
      </button>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );

}
export default TodoList;