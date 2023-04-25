import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [math, mathChange] = useState("");
  const [result, setResult] = useState(null);

  function handleValueInputChange(event) {
    setValues(event.target.value);
  }

  function handleMathChange(event) {
    mathChange(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    let array = values.split(",");
    let result = 0;
    for (const value of array) {
      if (math === "sum") {
        result += parseInt(value);
      } else if (math === "average") {
        result += parseInt(value);
      }
    }
    if (math === "average") {
      result = result / array.length;
    }
    setResult(result);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleValueInputChange}
        />
        <select id="operation" name="operation" onChange={handleMathChange}>
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
