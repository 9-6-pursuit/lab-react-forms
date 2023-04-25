import React, { useState } from "react";
import "./Form.css";


function Form() {
  const [values, setValues] = useState("")
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState()

  function handleValueInputChange(event) {
    setValues(event.target.value)
  }
  function handleValueInputChange(event) {
    setValues(event.target.value)
  }



  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleValueInputChange}/>
        <select id="operation" name="operation">
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
