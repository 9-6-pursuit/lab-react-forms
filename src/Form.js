import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [textInput, setTextInput] = useState("");
  const [selectOption, setSelectOption] = useState("");

  function handleError(text, option) {
    let isValid = true;

    for (let num of text) {
      if (isNaN(num)) {
        isValid = false;
      }
    }

    if (!option) {
      isValid = false;
    }

    return isValid;
  }

  function handleTextChange(event) {
    setTextInput(event.target.value);
    //console.log(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectOption(event.target.value);
    // console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const numbers = textInput.split(",").map((str) => {
      return Number(str);
    });

    let sum = 0;
    let average = 0;
    // a starting point for the operations

    const isValid = handleError(numbers, selectOption);

    if (isValid) {
      if (selectOption === "sum") {
        for (let val of numbers) {
          sum += val;
        }
        setResult(sum);
      } else if (selectOption === "average") {
        for (let val of numbers) {
          sum += val;
          average = sum / numbers.length;
        }
        setResult(average);
      } else if (selectOption === "mode") {
        const mode = {};
        let max = 0;
        let count = 0;

        for (let i = 0; i < numbers.length; i++) {
          const item = numbers[i];

          if (mode[item]) {
            mode[item]++;
          } else {
            mode[item] = 1;
          }

          if (count < mode[item]) {
            max = item;
            count = mode[item];
          }
        }
        setResult(max);
      }
    } else {
      setResult("Invalid input.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={textInput}
        onChange={handleTextChange}
      />
      <select
        id="operation"
        name="operation"
        value={selectOption}
        onChange={handleSelectChange}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
