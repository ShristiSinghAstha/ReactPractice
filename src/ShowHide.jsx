import { useState } from "react";

function ShowHide() {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show && <h2>Welcome to React</h2>}
            <button onClick={()=>setShow(!show)}>
                {show? "Hide":"Show"}
            </button>
        </div>
    );
}
export default ShowHide;