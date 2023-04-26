import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(null)
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const inputElement = document.getElementById("values")
  const selectElement = document.getElementById("operation")
  
  function handleValueInputChange(event) {
    setValues(event.target.value)
    // console.log(event.target.value)

  }

  function handleOperationType(event) {
    setOperation(event.target.value)
    // console.log(event.target.value)
  }

  function handleCalculate(event) {
    
    event.preventDefault()
    
    
    let inputValues = (values.split(",")).reduce((accumulator, value) => accumulator.concat(+value), [])
    if (inputValues[0] === 0 || inputValues.some(isNaN) || selectElement.selectedIndex === 0) {
      alert("Invalid input.")
      inputValues = []
      setValues("")
      setOperation("")


  if (inputValues[0] === 0 || inputValues.some(isNaN)) {
      inputElement.classList.add("error")

    } 

    if (selectElement.selectedIndex === 0) {
      selectElement.classList.add("error")

    } 

      return
    }

  
    // let inputValues = values.split(",")
    // let inputValues = values.split(",").map((val) => Number(val.trim()));


    // Operation
    if (operation === "sum") {
      let total = 0
      for (let element of inputValues) {
        total += element
        setResult(total)
      }

    } else if (operation === "average") {
      let total = 0
      for (let element of inputValues) {
        total += element
        setResult(total / inputValues.length)
      }

    } else if (operation === "mode") {

      const counts = {};
      for (const num of inputValues) {
        if (counts[num] === undefined) {
          counts[num] = 0;
        }
        counts[num]++;
      }
      let duplicateNum = [];
      for (const num in counts) {
        if (counts[num] > 1) {
          duplicateNum.push(Number(num));
        }
      }
      setResult(duplicateNum)

    }


    // Clear the input box
    inputRef.current.value = ""
    selectRef.current.value = ""
    setValues("")
    setOperation("")

  }


  return (
    <>
      <form onSubmit={handleCalculate}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleValueInputChange}
          // pattern="[0-9]+(,[0-9]+)*" 
          ref={inputRef}
        />
        <select id="operation" name="operation" onChange={handleOperationType} ref={selectRef}>
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
