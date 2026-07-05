import { useState } from "react";

function UserStatus(){
    const [logged, setLogged] = useState(false);

    return (
        <div>
            <h2>
                {logged? "Welcome! You are logged in.":"Please Log in"}
            </h2>
            <button onClick={()=>setLogged(!logged)}>{logged?"Logout":"Login"}</button>
        </div>
    );
}
export default UserStatus;