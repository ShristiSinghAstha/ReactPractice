import { useState } from "react";

function ProductFilter({ products }){
    const [category, setCategory] = useState("All");

    const filtered = category === "All"? products:products.filter(
        (item)=>item.category===category);

        return (
            <div>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>All</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                </select>

                <ul>
                    {filtered.map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
}
export default ProductFilter;
