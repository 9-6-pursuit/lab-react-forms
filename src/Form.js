import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  function HandleFormSubmit() {
    const numbers = values.split(",").map(Number);

    if (numbers.some(isNaN)) {
      setResult("Please enter valid number");
    } else if (operator === "sum") {
      const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setResult(sum);
    } else if (operator === "average") {
      const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      const average = sum / numbers.length;
      setResult(average);
    } else if (operator === "mode") {
      const countMap = new Map();
      let maxCount = 0;
      let modes = [];

      for (const number of numbers) {
        const count = countMap.has(number) ? countMap.get(number) + 1 : 1;
        countMap.set(number, count);

        if (count > maxCount) {
          maxCount = count;
          modes = [number];
        } else if (count === maxCount) {
          modes.push(number);
        }
      }

      setResult(modes);
    }
  }

  function changeOperator(event) {
    // console.log("it works!")
    // console.log(event.target.value)
    setOperator(event.target.value);
  }

  function handleValueInputChange(event) {
    // console.log("working")
    // console.log(event.target.value)
    setValues(event.target.value);
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleValueInputChange}
        />
        <select id="operation" name="operation" onChange={changeOperator}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={HandleFormSubmit}>
          Calculate
        </button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
