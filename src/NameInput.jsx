import React, {useState} from "react";

function NameInput(){
    const [name, setName] = useState("");

    const handleReset = () => {
        setName("");
    };

    return (
        <div>
            <h2>Name Input</h2>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />

            <button type="submit">Submit</button>
            <button onClick={handleReset}>Reset</button>
            <h3>Typed Name: {name}</h3>
        </div>
    );
}
export default NameInput;
