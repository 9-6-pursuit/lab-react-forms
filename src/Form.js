import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState(null)
  const [inputError, setInputError] = useState(false)
  const inputRef = useRef(null)

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

    // Update class of input and select elements based on inputError
    const inputElement = document.getElementById("values")
    if (inputError) {
      inputElement.classList.add("error")
    } else {
      inputElement.classList.remove("error")
    }

    const selectElement = document.getElementById("operation")
    if (inputError) {
      selectElement.classList.add("error")
    } else {
      selectElement.classList.remove("error")
    }

    if (!values.trim()) {
      setResult(null);
      setValues("");
      setOperation("");
      setInputError(true);
      return;
    }

    // let inputValues = values.split(",")
    // let inputValues = values.split(",").map((val) => Number(val.trim()));

    let inputValues = (values.split(",")).reduce((accumulator, value) => accumulator.concat(+value), [])
    console.log(inputValues)

    let result = null

    if (inputValues.length === 0 || inputValues.some(isNaN)) {
      alert("Invalid input.")
      inputError = true
    }
    if (selectElement.selectedIndex === 0) {
      alert("Invalid input.");
    }

    // Operation
    if (operation === "sum") {
      let total = 0
      for (let element of inputValues) {
        total += element
        result = total
      }

    } else if (operation === "average") {
      let total = 0
      for (let element of inputValues) {
        total += element
        result = (total / inputValues.length)
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
      result = duplicateNum

    }
    setResult(result)

    // Clear the input box
    inputRef.current.value = ""
    setValues("")



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
        <select id="operation" name="operation" onChange={handleOperationType}>
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
