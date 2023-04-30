import React from "react";
import { useState } from "react";
import "./Form.css";








// line 12 anytime the input value CHANGES (hence onChange do the function)
function Form() {
  const [storeValue, setStoreValue] = useState("")
  const options = ["sum" , "average" , "mode"]
  const [averageDropDown, setaverageDropDown] = useState(options[0])
  const [calculate, setCaculate] = useState([])
  // const [result, setResult] = useState("")
  

  function handleValueInputChange(event) {
    setStoreValue (event.target.value)
  console.log (storeValue)
  }

  function handleSelectDropdown(event) {
   setaverageDropDown(event.target.value)
  }

  // if it a click call the method event.preventDefault, bc it will stop the refreshing after
  // the click.  This is important bc we want to sustain the values that was inputted.  

  function handleCalculation (operation, event, calculate, answer ) {
    event.preventDefault()
    const obj = {}
    if (operation === "sum") {
      let total = calculate.reduce(function (a, b) {return a + b;}, 0)
      // arr.reduce(function (a, b) {return a + b;}, 0)
      answer += total
    }
    else if (operation === "average"){
      let total = calculate.reduce(function (a, b) {return a + b;}, 0) 
      answer += total / calculate.length
    }
    else (operation === "mode");{
      // for each loops over the array
      calculate.forEach(num =>{
        //for each number in the array
        //if it doesn't already exist as a key on the object, create one and tally (set value to 1)
        if (!obj[num]){
          obj[num] = 1

        } else {
          // if the element already exist as a key in the object 
          // increment add a (tally) how many times its seen
          obj[num]+= 1


        }

      // we are saying we are going through the key in the object lets say 
      // the numbers are [1,2,2,4,5] it will look for the object of occurrences
      // so lets say on the first loop 1 is a key, and its corresponding value would be 1 oocurrence so far
      // 1:1
      // on the second loop 2 is a key and its corresponding value would be 1 occurrence
      // 2:1
      // It loops again and then we see another 2, it says oh, 2 is already a key in the object
      // we will just increment the occurence number 2:2

    
      });
      

      // This will extract the data we just tallied and return the values we just found
      // we want to return object key with the highest occuring values
      let highestValue = 0
      let highestValueKey = - Infinity 
      // - Infinity gets replaced by the key with the highest tally 
      // loop through the object
      // assign variable to value to the obj[key] => 1:1 the number and how many times it occured
      // So we are grabing the key in the object, and then we are grabbing its corresponding value
      // Then we are saying if that value is greater then the highestvalue we seen so far
      // which initially would be zero, it will be updated as we loop
      for (let key in obj) {
        const value = obj[key]
        if (value > highestValueKey) {
          highestValue = value
          highestValueKey = key
        }
      }

    }
    answer = Number(highestValueKey)
  

   // this will be where you place your setCalculate 
   return setCaculate (answer + calculate) 
  }

  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleValueInputChange}/>
        <select id="operation" name="operation" value={averageDropDown}  onChange={ handleSelectDropdown}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        
        </select>
        <button type="submit" onClick={handleCalculation}>Calculate</button>
      </form>
      <section id="result">

        <p>{calculate}</p>
      </section>
    </>
  );
}

export default Form;
