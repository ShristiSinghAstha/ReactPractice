// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo } from "./features/todo/todoSlice";

// function App() {

//   const [input, setInput] = useState("");

//   const todos = useSelector((state) => state.todo.todos);

//   const dispatch = useDispatch();

//   return (
//     <div>

//       <h1>Redux Todo List</h1>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button
//         onClick={() => {
//           dispatch(addTodo(input));
//           setInput("");
//         }}
//       >
//         Add
//       </button>

//       <ul>

//         {todos.map((todo) => (

//           <li key={todo.id}>

//             {todo.text}

//             <button
//               onClick={() => dispatch(deleteTodo(todo.id))}
//             >
//               Delete
//             </button>

//           </li>

//         ))}

//       </ul>

//     </div>
//   );
// }

// export default App;


import React from "react";
import Greeting from "./Greetings";

function App(){
  return(
    <div>
      <Greeting />
    </div>
  );
}
export default App;