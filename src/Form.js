import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [inputText, setInputText] = useState("");
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState("");

  function handleChange(event) {
    const { id, value } = event.target;
    if (id === "inputText") {
      setInputText(value);
    } else if (id === "operation") {
      setOperation(value);
    }
  }

  function calculate(event) {
    event.preventDefault();
    const numbers = inputText
      .split(",")
      .map((num) => num.trim())
      .filter((num) => !isNaN(num))
      .map((num) => parseInt(num, 10));

    if (numbers.length === 0) {
      setResult("Invalid input.");
      return;
    }

    let result;
    if (operation === "sum") {
      result = numbers.reduce((acc, num) => acc + num, 0);
    } else if (operation === "average") {
      result = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    } else if (operation === "mode") {
      const freqMap = {};
      let maxFreq = 0;
      let mode = numbers[0];

      numbers.forEach((num) => {
        if (freqMap[num]) {
          freqMap[num]++;
        } else {
          freqMap[num] = 1;
        }

        if (freqMap[num] > maxFreq) {
          maxFreq = freqMap[num];
          mode = num;
        }
      });

      result = mode;
    } else {
      result = "Invalid input.";
    }

    if (isNaN(result)) {
      setResult("Invalid input.");
    } else {
      setResult(result);
    }
  }

  return (
    <>
      <form onSubmit={calculate}>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter comma-separated numbers"
        />

        <select id="operation" value={operation} onChange={handleChange}>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="mode">Mode</option>
        </select>

        <button>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
