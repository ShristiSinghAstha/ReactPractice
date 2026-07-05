import { useState } from "react";
function ThemeSwitcher(){
    const [dark, setDark] = useState(false);

    return (
        <div 
        style={{backgroundColor: dark?"black":"white",
            color: dark? "white":"black",
            minHeight: "100vh",
            padding: "20px",
        }}
        >
            <h2>{dark ? "Dark Theme": "Light Theme"}</h2>

            <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
        </div>
    );
}
export default ThemeSwitcher;
