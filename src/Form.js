import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setOperation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const numbers = inputValue.split(",").map((num) => Number(num.trim()));
    if (numbers.some((num) => isNaN(num))) {
      setResult("Invalid input.");
    } else {
      let operationResult;
      if (operation === "sum") {
        operationResult = numbers.reduce((acc, curr) => acc + curr, 0);
      } else if (operation === "average") {
        operationResult = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
      } else if (operation === "mode") {
        const freqMap = {};
        numbers.forEach((num) => {
          freqMap[num] = (freqMap[num] || 0) + 1;
        });
        let maxFreq = 0;
        let mode;
        for (const num in freqMap) {
          if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mode = num;
          }
        }
        operationResult = Number(mode);
      }
      setResult(operationResult);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={handleSelectChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
