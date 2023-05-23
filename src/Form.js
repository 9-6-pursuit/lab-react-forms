import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
const [textInput, setTextInput] = useState('');
const [selectOption, setSelectOption] = useState('');
const [result, setResult] = useState('');

function handleSelectOptions(event) {
  setSelectOption(event.target.value);
}

function handleTextInput(event) {
  setTextInput(event.target.value);
}

function handleCaculate(event) {
  event.preventDefault();

  const array = textInput.split(',');
  const numbers = array.map((num) => Number(num));

  const sum = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue;
  })

  if (selectOption === "sum") {
    return setResult(sum);
  } 
  else if (selectOption === "average") {
    setResult(sum/array.length);
  }
  else if (selectOption === "mode") {
    const mode = [];
    const modeObj = {};
    let maxOccurance = 0;

    // for of loop that iterates over the modeObj obj to count the frequency of each number
    for (const num of numbers) {
      modeObj[num] = (modeObj[num] || 0) + 1; // the parentheses around (modeObj[num] || 0) are important because the statement reads: if the num key in modeObj exist then add one; if not the value of num key is 0 and we will add one to zero.
      if (modeObj[num] > maxOccurance) {
        maxOccurance = modeObj[num]
      }
    }
    // for of loop that will push the number(s) that occur the most
    for ( const num in modeObj) {
      if (modeObj[num] === maxOccurance) {
        mode.push(Number(num));
      }
    }
    setResult(mode);
  }
}

  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleTextInput}/>
        <select id="operation" name="operation" onChange={handleSelectOptions}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={handleCaculate} type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>The {selectOption} is {result}.</p>
      </section>
    </>
  );
}

export default Form;
