import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [values, setValues] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(null)

  function handleValueInputChange(event) {
    console.log(event.target.value)
    setValues(event.target.value)
  }

  function operationChange(event) {
    setOperation(event.target.value)
  }

  function formSubmit(event) {
    event.preventDefault()
    
    let array = [values]
    let result = 0
    array.split(",")
    for (const value of array) {
      if (operation === "sum") {
        result += value
      } else if (operation === "average") {
        result = value / array.length
      }
    }
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <input id="values" name="values" type="text" onChange={handleValueInputChange} />
        <select id="operation" name="operation" onChange={operationChange}>
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
