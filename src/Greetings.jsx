import { useState } from "react";

function Greeting(){
    const [ismorning, setIsmorning] = useState(true);
    return(
        <div>
            <h1>{ismorning? "Good Morning":"Good Evening"}</h1>

            <button onClick={()=>setIsmorning(!ismorning)}>Change Greeting</button>
        </div>
    );
}
export default Greeting;

