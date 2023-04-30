import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState("")
  function handleValueInputChange(event) {
    setValues(event.target.value)
  }

  function handleOperation(event) {
    setOperation(event.target.value)
  }

  function handleOperationMethod(event) {
    event.preventDefault()
    const textBoxArray = values.split(",")
    const allDigits = textBoxArray.map(Number)
    let count = 0
    
    if(allDigits.includes(NaN) || values === "") {
      setResult(alert("Invalid input."))
    } else if(operation === "") {
      setResult(alert("Invalid input."))
    } else {
      for (let i = 0; i < allDigits.length; i++) {
        if(operation === "sum") {
          count += allDigits[i]
        } else if(operation === "average") {
          count += ((allDigits[i]/allDigits.length))
        } else if (operation === "mode") {
          // count += allDigits[i]
        }
      } setResult(count) 
      // console.log(allDigits)
      // console.log(allDigits.length)
    }
  }



  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleValueInputChange} />
        <select id="operation" name="operation" onChange={handleOperation}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleOperationMethod}>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
