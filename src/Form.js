import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("")
  const [operations, setOperations] = useState("")
  const [result, setResult] = useState(null)

  function handleValueInputChange(event) {
    console.log(event.target.value)
    setValues(event.target.value)
  }

  function handleSelectChange (event){
    console.log(event.target.value)
    setOperations(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
  }
// IF SUM
  // function sumNumbers(numbers) {
  //   if (!numbers) {
  //     return 0;
  //   }
  
  //   var nums = numbers.split(",");
  //   var total = 0;
  //   for (var i = 0; i < nums.length; i++) {
  //     var num = parseFloat(nums[i]);
  //     if (!isNaN(num)) {
  //       total += num;
  //     } else {
  //       console.log("Invalid number: " + nums[i]);
  //     }
  //   }
  
  //   return total;
  // }
  
  // IF AVERAGE
  
  // function calculateAverage(numbers) {
  //   if (!numbers) {
  //     return 0;
  //   }
  
  //   var nums = numbers.split(",");
  //   var sum = 0;
  //   var count = 0;
  
  //   for (var i = 0; i < nums.length; i++) {
  //     var num = parseFloat(nums[i]);
  //     if (!isNaN(num)) {
  //       sum += num;
  //       count++;
  //     } else {
  //       console.log("Invalid number: " + nums[i]);
  //     }
  //   }
  
  //   if (count === 0) {
  //     return 0;
  //   }
  
  //   var average = sum / count;
  //   return average;
  // }
  
  //IF MODE 

  // function calculateMode(numbers) {
  //   if (!numbers) {
  //     return null;
  //   }
  
  //   var nums = numbers.split(",");
  //   var numCounts = {};
  
  //   for (var i = 0; i < nums.length; i++) {
  //     var num = parseFloat(nums[i]);
  //     if (!isNaN(num)) {
  //       if (numCounts[num]) {
  //         numCounts[num]++;
  //       } else {
  //         numCounts[num] = 1;
  //       }
  //     } else {
  //       console.log("Invalid number: " + nums[i]);
  //     }
  //   }
  
  //   var mode = null;
  //   var maxCount = 0;
  
  //   for (var num in numCounts) {
  //     if (numCounts[num] > maxCount) {
  //       maxCount = numCounts[num];
  //       mode = parseFloat(num);
  //     }
  //   }
  
  //   return mode;
  // }
  
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" onChange={handleValueInputChange}/>
        <select id="operation" name="operation" onChange={handleSelectChange}>
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
