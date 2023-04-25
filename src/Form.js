import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [textInputHasError, setTextInputHasError] = useState(false);
  const [selectHasError, setSelectHasError] = useState(false);

  const handleInputChange = (event) => {
    setValues(event.target.value);
  };

  const handleSelectChange = (event) => {
    setOperation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values === "") {
      setTextInputHasError(true);
      setSelectHasError(false);
      return;
    }
    if (values.split(",").some((value) => isNaN(Number(value)))) {
      setTextInputHasError(true);
      setSelectHasError(false);
      return;
    }

    let nums = values.split(",").map(Number);
    let sum = 0;
    let counts = {};

    nums.forEach((num) => {
      sum += num;
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    });

    let answer;

    if (operation === "sum") {
      answer = sum;
    } else if (operation === "average") {
      answer = sum / nums.length;
    } else if (operation === "mode") {
      let maxCount = 0;
      for (let num in counts) {
        if (counts[num] > maxCount) {
          maxCount = counts[num];
          answer = num;
        }
      }
    } else {
      setSelectHasError(true);
      setTextInputHasError(false);
      return;
    }

    if (textInputHasError || selectHasError) {
      return;
    }

    props.handleSubmit(answer);
    setValues("");
    setOperation("");
    setSelectHasError(false);
    setTextInputHasError(false);
  };

  return (
    <form>
      <input
        id="values"
        name="values"
        type="text"
        value={values}
        onChange={handleInputChange}
        className={textInputHasError ? "error" : ""}
      />
      {textInputHasError && <p className="error-message">Invalid input.</p>}
      <select
        id="operation"
        name="operation"
        onChange={handleSelectChange}
        className={selectHasError ? "error" : ""}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      {selectHasError && (
        <p className="error-message">Please select an operation.</p>
      )}
      <button onClick={handleSubmit} type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Form;
