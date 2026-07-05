// function App(){

//   const college='ABC College';
//   let year=2026;

//   return(
//     <>
//     <h1>{college}</h1>
//     <h1>{year}</h1>
//     </>
//   );
// }
// export default App;


// function App(){
//     const add=(a,b)=>a+b;

//     return (
//         <h1>Sum = {add(10,20)}</h1>
//     );
// }
// export default App;


// function App(){
//     const students=["Ram","Shyam","Mohan"];

//     return(
//         <div>
//             {
//                 students.map(student => 
//                     <h2>{student}</h2>
//                 )
//             }
//         </div>
//     );
// }
// export default App;


// function App(){
//     const num=[1,2,3,4,5,6];
//     const even = num.filter(
//         num=>num%2===0
//     );
//     return (
//         <div>
//             {
//                 even.map(num =>
//                     <h2>{num}</h2>
//                 )
//             }
//         </div>
//     )
// }
// export default App;


// function App(){
//     const student={
//         name:"Ram",
//         age:20
//     };
//     const {name,age}=student;
//     return(
//         <>
//         <h1>{name}</h1>
//         <h2>{age}</h2>
//         </>
//     );
// }
// export default App;

// function App(){
//     const arr1=[1,2,3];
//     const arr2=[...arr1,4,5];
//     return(
//         <div>
//             {
//                 arr2.map(num=>
//                     <h2>{num}</h2>
//                 )
//             }
//         </div>
//     );
// }
// export default App;


// import Student from './Student';
// function App(){
//     return(
//         <>
//         <Student
//         name="shri"
//         age="20"
//         />
//         </>
//     );
// }
// export default App;


// import {mul} from './Maths';

// function App(){
//     return (
//         <h1>{mul(10,20)}</h1>
//     );
// }
// export default App;

// class Student {
//     constructor(name){
//         this.name=name;
//     }
//     show(){
//         return this.name;
//     }
// }

// function App(){
//     const s1=new Student("Shri");

//     return(
//         <h1>{s1.show()}</h1>
//     );
// }
// export default App;

// import StudentList from "./StudentList";
// function App(){
//     const students = [
//         "astha",
//         "shri",
//         "aadii"
//     ];

//     return (
//         <div>
//             <StudentList students={students}/>
//         </div>
//     );
// }
// export default App;


// function App(){
//     function callFun(){
//         alert("called");
//     }

//     const fruit=()=>{
//         alert("DWEc");
//     }
//     return (
//         <>
//         <h1>Event and Function Call</h1>
//         <button onClick={callFun()}>Click Me</button>
//         <button onClick={fruit()}>Apple</button>
//         </>
//     )
// }
// export default App;

// import User from "./user";
// import College from "./College";

// function App(){
//     //let name="astha";
//     let userObj={
//         name:"astha",
//         age:"29"
//     }
//     let userObj2={
//         name:"aadii",
//         age:"19"
//     }
//     let userObj3={
//         name:"aadii",
//         age:"19"
//     }
//     let collegeNames=['iit','du','mit'];
//     return (
//         <div>
//             <h1>Props in ReactJs</h1>
//             <College names={collegeNames[0]}/>
//             <User user={userObj}/>
//             <User user={userObj2}/>
//         </div>
//     );
// }
// export default App;


// function App() {

//     return (
//         <form>
//             <label>Name: </label>
//             <input type="text" />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// export default App;


import { useState, useRef } from "react";
function App(){
    const nameRef=useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        alert("Form Submitted");
        //alert(name);
        alert(nameRef.current.value);

        if(!email.includes("@")){
            alert("Invalid email");
        // }else{
        //     setError("");
        //     alert(Submitted);
         }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" ref={nameRef} />
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>{error}</p>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            
            <button type="submit">Submit</button>
            </form>
        </div>
    );
} 
export default App;

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;

