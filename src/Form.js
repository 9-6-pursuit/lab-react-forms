import React from "react";
import Form from "./Form.css";
import { useState } from "react";
import values from "react";


function Form() {
const [values, setValues] = useState("")

  function handleValueInputChange (event) {
    setValues(event.target.value)
  }

  function setValueChange(event){
    setValues(event.setOption)
  }

  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleValueInputChange} />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
