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
import Timer from "./Timer";
import ShowHide from "./ShowHide";
import ShoppingCart from "./ShoppingCart";
import ProductFilter from "./ProductFilter";
import ThemeSwitcher from "./ThemeSwitcher";
import UserStatus from "./UserStatus";
// function App(){
//   const products  = [
//     { id:1, name:"Laptop", category:"Electronics"},
//     { id:2, name:"Mobile", category:"Electronics"},
//     { id:3, name:"Shirt", category:"Clothing"},
//     { id:4, name:"Jeans", category:"Clothing"},

//   ];
//   return <ProductFilter products={products} />;

// }

function App(){
  return(
    <div>
      <UserStatus />
    </div>
  )
}
export default App;