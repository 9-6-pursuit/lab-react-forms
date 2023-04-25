import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("sum");

  function handleChange(event) {
    const { id, value } = event.target;
    if (id === "inputText") {
      setInputText(value);
    } else if (id === "operation") {
      setOperation(value);
    }
  }
  //calculate function prevents page reset on click, numberlist variable using .split to separate numbers inside list by ","..., .map will map through numbers and trim them of all white spaces, 
  //filter out all the numbers that are NOT a number
  //map again and use parseInt to convert all string numbers into Integers
  function calculate(event) {
    event.preventDefault();
    const numberList = inputText
      .split(",")
      .map((num) => num.trim())
      .filter((num) => !isNaN(num))
      .map((num) => parseInt(num, 10));

    if (numberList.length === 0) {
      setResult("Invalid input.");
      return;
    }
    //check if sum matches the operation
    let result;
    if (operation === "sum") {
      //use reduce method to sum all numbers
      result = numberList.reduce((acc, num) => acc + num, 0);
      //check if average matches the operation
    } else if (operation === "average") {
      //use reduce method and divide by the amount of numbers in the list
      result = numberList.reduce((acc, num) => acc + num, 0) / numberList.length;
      //check if mode matches operation, if so , create mostFrequent object. this object is for the most frequent number.
      
    } else if (operation === "mode") {
      const mostFrequent = {};
      let total = 0;
      let mode = numberList[0];
      //count how many times a number appears in the numberList, add to mostFrequent object if appears more than once
      numberList.forEach((num) => {
        if (mostFrequent[num]) {
          mostFrequent[num]++;
        } else {
          mostFrequent[num] = 1;
        }
        //if mostFrequent number is greater than the total , the mode is set to that number.
        if (mostFrequent[num] > total) {
          total = mostFrequent[num];
          mode = num;
        }
      });
      result = mode;
    } else {
      //if operation doesnt match any of the above, result returns error
      result = "Invalid input.";
    }
    //invalid input if result is not a number
    if (isNaN(result)) {
      setResult("Invalid input.");
    } else {
      setResult(result);
    }
  }

  return (
    <div>
      <form onSubmit={calculate}>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter comma-separated numberList"
        />

        <select id="operation" value={operation} onChange={handleChange}>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="mode">Mode</option>
        </select>

        <button>Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </div>
  );
}

export default Form;