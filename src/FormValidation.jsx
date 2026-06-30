import React, { useState } from "react";

function FormValidation(){
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username===""){
            setError("Username is required");
        }else if(email === ""){
            setError("Email is required");
        }else if(!email.includes("@")){
            setError("Invalid Email");
        }else if(password.length<6){
            setError("Password atleast 6 characters");
        }else {
            setError(" ");
            alert("Form Submitted Successfully");
        }
    };

    return(
        <div>
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p style={{ color: "red" }}>{error}</p>
            <button type="submit">Submit</button>

            </form>
        </div>
    );
}
export default FormValidation;
