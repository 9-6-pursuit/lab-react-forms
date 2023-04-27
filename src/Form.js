import React, { useState } from "react";
import "./Form.css";

function Form( {setResult} ) {
  const [values, setValues] = useState("")
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  // const [result, setResult] = useState(null)
  // const [submit, setSubmit] = useState()


  function handleValueInputChange(event) {
    setInput(event.target.value)

  }

  function handleSelectValue(event) {
    setValues(event.target.value)
  }

  function operations() {
    let object = {}
    let total = 0
    let array = input.split(',')
    total = array.reduce((a,b) => a + +b, 0)
    if(values === 'sum') {
     return total
    }

    if(values === 'average') {
      return total/array.length
    }

    if(values === 'mode') {
     array.forEach(arg => {
      object[arg] = (object[arg] || 0) + 1
     })
    const maxCount = Math.max(...Object.values(object))
    const modes = Object.keys(object).filter(arg => object[arg] === maxCount)
    if (modes.length === 1) {
      return modes[0];
      }
      else {
        return modes;
      }
      }

    }
  
  
  
  
  

  function handleSubmit(event) {
    event.preventDefault()
    
    
    if(isNaN(operations()) || !input || !values) {
      setResult("Invalid input.")
      setError("error")
    }
    else {
      setResult(operations())
      setInput("")
      setValues("")
      setError("")
    }
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={error} id="values" name="values" type="text" value={input} onChange={handleValueInputChange}/>
        <select className={error} id="operation" name="operation" value={values} onChange={handleSelectValue}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      
    </>
  );
}

export default Form;
