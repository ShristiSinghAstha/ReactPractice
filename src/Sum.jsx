import { useState } from "react";

function Sum() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <div>
      <input
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br /><br />
      <input
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <h2>
        Sum : {Number(a) + Number(b)}
      </h2>
    </div>

  );
}
export default Sum;