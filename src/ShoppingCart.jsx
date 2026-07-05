import { useState } from "react";

function ShoppingCart(){
    const [cart, setCart]=useState([]);

    const addItem=()=>{
        setCart([...cart,"Apple"]);
    };
    const removeItem=()=>{
        setCart(cart.slice(0,-1));
    };
    return(
        <div>
            <h2>
                Total Items: {cart.length}
            </h2>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>

            <ul>
                {cart.map((items,index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
    );
}
export default ShoppingCart;