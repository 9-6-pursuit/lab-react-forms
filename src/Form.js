import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [math, setMath] = useState("")
  const [result, setResult] = useState(null)

  function handleValueInputChange(event) {
    //console.log(event.target.value);
    setValues(event.target.value)
  }

  function handleOptionChange(event) {
    //console.log(event.target.value);
    setMath(event.target.value)
  }

 function operation() {
  let array = values.split(",")
  if (math === "sum"){
    let total = 0
    for (const el of array) {
      total += Number(el)
    }
    setResult(total)
  }else if (math === "average"){
    let total = 0
    for (const el of array){
      total += Number(el)
    }
    const avg = total/array.length
    setResult(avg)
  }else {
    let frequancy = {}
    for (const el of array){
      frequancy[el] ? frequancy[el] += 1 : frequancy[el] = 1
    }
    let key = Object.keys(frequancy)
    for (const el of key) {
      if (frequancy[el] > 1){
        const mode = el
        setResult(mode)
      }else {
        setResult("Input has no mode value")
      }
    }
  }
 }

  function submit(event) {
    event.preventDefault()
   // console.log("clicked");
   operation()
  }

  return (
    <>
      <form onSubmit={submit}>
        <input id="values" name="values" type="text" onChange={handleValueInputChange} />
        <select id="operation" name="operation" onChange={handleOptionChange}>
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
