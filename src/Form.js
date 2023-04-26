import React from "react";
import "./Form.css";
import { useState } from "react";


function Form() {
  const [inputTxt, setInputText] = useState();
  const [total, setTotal] = useState('');
  const [mathMethod, setMathMethod] = useState('');
  

  function inputValue(event) {
    //console.log(event.target.value);
    //GRABBING THE VALUE OF INPUT
    setInputText(event.target.value);
  } //INPUTVALUE CLOSING TAG

  function handleSelect(event){
    //console.log(event.target.value)
    setMathMethod(event.target.value)
  } //HANDLESELECT CLOSING TAG

  function handleSubmit(event){
    event.preventDefault();
    //console.log('submitted!', inputTxt)

    let totallyTotal;
   
    //ERROR HANDELING
    if(inputTxt === '' || Number.isNaN(Number(inputTxt))){
       totallyTotal ='Invalid input.';
    } 
    
    if(mathMethod === 'sum'){
      //SPLITTING THE STRING & CONVERTING TO NUMBER
      //.SPLIT() CREATES SUBSTRINGS, CREATE NEW VARIABLE TO HOLD
      let arr = inputTxt.split(',').map(Number);
      //console.log(arr)
      //REDUCE IS AN ARR METHOD
      totallyTotal = arr.reduce((a, b) => a + b);
      console.log(totallyTotal);
    }

    if(mathMethod === 'mode'){
      //SPLITTING THE STRING & CONVERTING TO NUMBER
      //.SPLIT() CREATES SUBSTRINGS, CREATE NEW VARIABLE TO HOLD  
      let arr = inputTxt.split(',').map(Number);

      let freq = 0, freqNum, list = [];

      arr.forEach(function(num){
        let foundNum = list.find(function(el){ return el.num === num })
    
        if(foundNum){
          foundNum.count++
          if(foundNum.count > freq){
            freqNum = num
            freq = foundNum
          }
        }
        else
          list.push({num: num, count: 1})
      })
      totallyTotal = freqNum;
    }

    if(mathMethod === 'average'){
      //SPLITTING THE STRING & CONVERTING TO NUMBER
      //.SPLIT() CREATES SUBSTRINGS, CREATE NEW VARIABLE TO HOLD
      let arr = inputTxt.split(',').map(Number);
      //REDUCE IS AN ARR METHOD
      totallyTotal = arr.reduce((a, b) => a + b) / arr.length;
    }
    setTotal(totallyTotal);
  }//HANDLESUBMIT CLOSING TAGG


  return (
    <>
      <form>
        <input id="values" name="values" type="text"  onChange={inputValue}/>
        <select id="operation" name="operation" onChange={handleSelect}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Calculate</button>
      </form>
      <section id="result">
        <p>{total}</p>
      </section>
    </>
  );
}

export default Form;
