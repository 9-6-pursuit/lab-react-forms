import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [solution, getSolution] = useState("")
  return (
    <div>
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={calculate}type="submit">Calculate</button>
        <h3>{solution}</h3>
      </form>
      <section id="result">
        <p></p>
      </section>
    </div>
  );
  function calculate (event) {
    event.preventDefault()
    const input = document.querySelector("#values").value
    checkValidity(input)
    const numbers = (input.split(",")).map(number => Number(number))
    

    const operation = document.querySelector("#operation").value

    const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    checkValidity(operation,sumOfNumbers)
    

    switch (operation) {
      case "sum":
        getSolution(sumOfNumbers)
        break;
      case "average":
        getSolution(sumOfNumbers/numbers.length)
        break;
      case "mode":
        getSolution(modeCalcuate(numbers))
        break;

    }
    checkValidity(operation,sumOfNumbers)

  }
  function modeCalcuate(numbers) {
    const numberObj = {}
    let highestValue = 0
    let highestElement = ""
    
    numbers.forEach(number => {
      if (!numberObj[number]){
        numberObj[number] = 1
      } else {
        numberObj[number]++
      }
    })
    for (let key in numberObj) {
      const value = numberObj[key]
      if (value > highestValue){
        highestValue = value
        highestElement = key
      }
    }
    return highestElement
  }

  
  function checkValidity(operation, sumOfNumbers) {
    const form = document.querySelector("form")
    const input = document.querySelector("input")
    const select = document.querySelector("select")

    if (solution === false || solution === NaN ){
      getSolution("Invalid input.") 
      select.classList.add("error")
      input.classList.add("error")
    } else 
    if( !operation ) {
      select.classList.add("error")
      input.classList.add("error")
      getSolution("Invalid input. Operation")
    }
    else if (!sumOfNumbers) {
      select.classList.add("error")
      input.classList.add("error")
      getSolution("Invalid input. Use Numbers")
    } else {
      select.classList.remove("error")
      input.classList.remove("error")
      form.reset()
    }

  }
  }


export default Form;