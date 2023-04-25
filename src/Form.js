import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState(''); //set state value
  const [result, setResult] = useState(''); //set state result 
  const [select, setSelect] = useState(''); //set state select 
  const [error, setError] = useState(false) //set state error 

  const handleValueInputChange = (event) => {
    setValues(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    calculator(values) //call calculator function to select-value to input value
  }

  //function to convert comma-separated string to array and number
  const inputValues = (value) => {
    return Array.from(value.split(','), Number);
  }
  

  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }


  // create function caculate
  const calculator = (input) => {
    const numbers = inputValues(input);
    let result = 0;

    for (const number of numbers) { //check for invalid input value
      if (isNaN(number)) {
        setError(true);
        return setResult("Invalid input.");
      }
    }

    if (select === "sum") { //--calculate sum input value
      for (const number of numbers) {
        result += number;
      }
    }
    
    else if (select === "average") {//--calculate average input value
      for (const number of numbers) {
        result += number;
      }
      result /= numbers.length;
    }
    
    else if (select === "mode") {//--calculate mode input value
      let modeObj = {};
      let maxCount = 0;
      for (const number of numbers) {
        if (!modeObj[number]) {
          modeObj[number] = 0;
        }
        modeObj[number]++;
        if (modeObj[number] > maxCount) {
          maxCount = modeObj[number];
          result = number;
        }
      }
    }
    else {
      setError(true);
      return setResult("Invalid input.");
    }

    // reset
    setValues("");
    setSelect("");
    setError(false);
    setResult(result);
  }  

 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={error ? "error" : "none"}
          id="values"
          name="values"
          type="text"
          value={values}
          onChange={handleValueInputChange}
        />
        <select
          className={error ? "error" : "none"}
          id="operation"
          name="operation"
          value={select}
          onChange={handleSelectChange}
        >
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
