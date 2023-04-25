import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    let numArr = values.split(",").map(Number);
    
    if (!operation) {
      setResult("Invalid input.");
    }
    else if (operation === "sum") {
      setResult(numArr.reduce((a, b) => a + b, 0));
      setOperation("");
      setValues("");
    }
    else if (operation === "average") {
      setResult(numArr.reduce((a, b) => a + b, 0) / numArr.length);
      setOperation("");
      setValues("");
    }
    else if (operation === "mode") {
      const mode = {};
      numArr.forEach(num => mode[num] ? mode[num]++ : mode[num] = 1);
      setResult(Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b));
      setOperation("");
      setValues("");
    }
  }

  function handleInputChange(event) {
    setValues(event.target.value);
  }

  function handleOperation(event) {
    setOperation(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={values} onChange={handleInputChange} />
        <select id="operation" name="operation" value={operation} onChange={handleOperation}>
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
