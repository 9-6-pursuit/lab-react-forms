import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  const [values, setValues] = useState("")
  const [math, setMath] = useState(null)
  const [result, setResult] = useState(null)
  let inputValue = values.split(',')

  function formattingMathOpp (event) {
    event.preventDefault()
    const sum = inputValue.reduce((acc, value) => Number(acc) + Number(value))
    return math === "sum" ? setResult(sum) : math === "average" ? setResult(Math.floor(sum/inputValue.length)) : math === "mode" ? setResult(getMode()) : "Invalid Input"
    
  }

  function getMode() {
    // count amount of occurences of each number w/ object
    const modeObj = {};
    // loop over input
    inputValue.forEach(number => {
      // for each number in array,
      // if it doesn't already exist as a key on the
      // object, create one and set its value to 1.
      if (!modeObj[number]) {
        modeObj[number] = 1;
      } else {
        // if it already exists as key on the object,
        // increment its corresponding value.
        modeObj[number] += 1;
      }
    });
    console.log(modeObj) //works as expected
    
    // return the key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity; //incorporates any number possible negs and pos

    for (let key in modeObj) {
      const value = modeObj[key];
      if (value >= highestValue && Number(key) > highestValueKey) {
        highestValue = value;
        highestValueKey = Number(key);
      }
    }
    // convert key back to number
    return highestValueKey;
  }  

  function numbersInput(event) {
    setValues(event.target.value)
  }

  function operationChange(event) {
    setMath(event.target.value)
  }

  
  return (
    <>
      <form onSubmit={formattingMathOpp}>
        <input id="values" name="values" type="text" onChange={numbersInput}/>
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
