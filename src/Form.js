import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState('')
  const [operations, setOperations] = useState('')
  const [result, setResult] = useState(null)
  function valueChange(event) {
    // console.log(event.target.value)
    setValues(event.target.value)
  }
  function operationChange(event) {
    // console.log(event.target.value)
    setOperations(event.target.value)
  }
  function resultChange(event) {
    event.preventDefault()
    if(operations === "" || values === ""){
      setResult("Invalid input.")
    } else {
      let newArray = values.replace(/\s+/g, '').split(',')
      let sum = newArray.reduce((previousValue, Value) => Number(previousValue) + Number(Value))
      let mode ={}
      for(let i = 0; i < newArray.length; i++) {
        const item = newArray[i];
        if(mode[item]) {
          mode[item]++;
        } else {
          mode[item] = 1;
        }
      }
      let valuesOfMode = Object.values(mode)
      const max = valuesOfMode.reduce((a, b) => Math.max(a, b), -Infinity);
      function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

      console.log(max)
      switch (operations) {
        case "sum":
          setResult(sum)
          break;
        case "average":
          setResult(sum/newArray.length)
          break;
        case "mode":
          if(valuesOfMode.indexOf(max) !== valuesOfMode.lastIndexOf(max)){
            setResult("There is no mode")
          } else {
    
            setResult(getKeyByValue(mode, max))
          }
          break;
      
        default:
          break;
      }
    }

  }
  return (
    <>
      <form  onSubmit={resultChange}>
        <input id="values" name="values" type="text" onChange={valueChange}/>
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
