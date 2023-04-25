import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [values, setValues] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState("")


  function handleValueInputChange(event){
    setValues(event.target.value)
  }



  function calculate(values){
    if (operator==="sum") {
      sumNumbers(values);
    } else if (operator === "average") {
      averageNumbers(values);
    } else if (operator === "mode") {
      modeNumbers(values);
    }
  }


  function handleOperator(event){
    setOperator(event.target.value);
    console.log("setOperator is ", event.target.value)
  }



  
  function sumNumbers(values){
    const usableNumbers = values.split(",").map(Number);
    let sum = 0
    for (let i=0; i<usableNumbers.length; i++) {
      sum += usableNumbers[i];
    }
    console.log("sum is " , sum)
    setResult(sum);
    setValues("")
  }

  function averageNumbers(values){

  }

  function modeNumbers(values) {

  }



  function handleSubmit(event){
    event.preventDefault();
    setError(false); //resetting the error value
    calculate();

  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" onChange={(handleValueInputChange)}/>
        <select id="operation" name="operation" onChange={handleOperator}>
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

/* ----- psuedocoding ------


The user will input values into the first field.
The user will select an operator.
The user will submit the form.
The code will take the inputted values and split them along commas and then will manipulate them according to the operator.

Include a guard clause to make sure that there are no letters in the input.
Include a guard clause to make sure that an operator has been chosen.
If either of those are true, result should equal "Invalid input"
If the operator is "sum" then the values should be added.
If the operator is "average" then the sum of the values should be divided by input.length.
If the operator is "mode" then the code needs to figure out what number is inputted the largest number of times. 

function modeNumbers(numbers){
      const newNumber = Number(numbers.split(","));
      const mode={}
      let max = 0;
      let count = 0;
      for(let i=0; i < newNumber.length; i++){
        const item = newNumber[i];
        if(mode[item]) {
          mode[item]++;
        }else {
          mode[item] = 1;
        }
      if(count < mode[item]){
        max = item;
        count = mode[item];
      }
      }
      console.log(max)
      return max
    }

add an onSubmit function on the form - will update state
add an onChange function for input - will update state

Bonus
.Clear input boxes after calculate is clicked
.if input is invalid, do NOT clear input boxes
.Add class of "error" to input and select elements if the inputis invalid. Then change that when they become valid again.




*/
