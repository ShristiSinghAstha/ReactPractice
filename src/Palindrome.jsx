import { useState } from "react";

function Palindrome() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function checkPalindrome() {
    const reverse =
      number
      .split("")
      .reverse()
      .join("");
    if (number === reverse)
      setResult("Palindrome");
    else
      setResult("Not Palindrome");
  }
  return (
    <div>
      <input
        value={number}
        onChange={(e) =>
          setNumber(e.target.value)
        }
      />

      <button onClick={checkPalindrome}>
        Check
      </button>
      <h2>
        {result}
      </h2>
    </div>

  );
}
export default Palindrome;