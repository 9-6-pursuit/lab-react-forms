// import React, {useState} from "react";
// import "./Form.css";

// function Form() {
//   return (
//     <>
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//       <section id="result">
//         <p></p>
//       </section>
//     </>
//   );
// }

// export default Form;

import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [input, setInput] = useState('')
  const [option, setOption] = useState('')
  const [output, setAnswer] = useState('')
  const [hasError, setHasError] = useState(false)


  function inputChange(event){
    setInput(event.target.value)
  }

  function optionChange(event){
    setOption(event.target.value)
  }

  function fixInput(data){
    let arr = data.split(',')
    let result = arr.map(Number);
    return result
  }


  function calculate(data){
    data = fixInput(data);
    let total = 0;

    for (const item of data) {
      if (isNaN(item)){
        setHasError(true)
        return setAnswer("Invalid input.")
      }
    }

    if (option === ""){
      setHasError(true)
      return setAnswer("Invalid input.")
    }

    else if (option === "sum"){
      for (const number of data) {
        total += number
      }
      
    }
    else if (option === "average"){
      for (const number of data) {
        total += number
      }
      total = total / data.length;
    }
    else if (option === "mode"){
      let map = {};
      for (const number of data){
        if (!map[number]) map[number] = 0;
        map[number] +=1;
      }
      let frequent = 0;

      for (let key in map){
        if (frequent < map[key]){
          frequent = map[key];
          total = key
        }
      }

    }
    setInput("")
    setOption("")
    setHasError(false)
    setAnswer(total)
  }


  function handleSubmit(event){
    event.preventDefault();
    calculate(input)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={hasError? "error": "none"}id="values" name="values" type="text" value={input} onChange={inputChange}/>
        <select className={hasError? "error": "none"} id="operation" name="operation" value={option} onChange={optionChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
        <section id="result">
        <p>{output}</p>
      </section>
      </form>
    </>
  );
}

export default Form;
