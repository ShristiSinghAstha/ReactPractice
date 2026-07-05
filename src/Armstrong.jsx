import { useState } from "react";

function Armstrong() {

  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function checkArmstrong() {
    let digits = number.split("");
    let power = digits.length;
    let sum = 0;
    digits.forEach((digit) => {
      sum += Math.pow(Number(digit), power);
    });
    if (sum === Number(number)) {
      setResult("Armstrong Number");
    }
    else {
      setResult("Not Armstrong");
    }
  }
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}/>

      <button onClick={checkArmstrong}>
        Check
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default Armstrong;