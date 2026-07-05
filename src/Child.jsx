import { useEffect } from "react";

function Child(){
    useEffect(()=>{
        console.log("Mounted");
        return () => {
            console.log("UnMounted");
        };
    },[]);

    return <h2>Child Component</h2>;
}
export default Child;

