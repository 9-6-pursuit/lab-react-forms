import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [theOption, setTheOption] = useState('sum');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTheChange = (event) => {
    setTheOption(event.target.value);
  };

  const hanleSubmit = (event) =>{
    event.preventDefault()
  }

  const handleCalculate = () => {
    const dahNumbaz = inputValue.split(',').map(Number);

    if (dahNumbaz.some(isNaN)) {
      setErrorMessage('Invalid input.');
      setResult('');
    } else {
      setErrorMessage('');
      let calculatedResult;

      if (theOption === 'sum'){
        calculatedResult = dahNumbaz.reduce((acc, curr) => acc + curr, 0);
      } else if(theOption === 'average') {
        calculatedResult = dahNumbaz.reduce((acc, curr) => acc + curr, 0) / dahNumbaz.length;
      } else {
        const numberCountMap = new Map();
          dahNumbaz.forEach((num) => {
            numberCountMap.set(num, (numberCountMap.get(num) || 0) + 1);
          });
          let maxCount = 0;
          let mode;
          numberCountMap.forEach((count, num) => {
            if (count > maxCount) {
              maxCount = count;
              mode = num;
            }
          });
          calculatedResult = mode;

      }
      setResult(calculatedResult);
    }
  };

  return (
    <>
      <form onSubmit={hanleSubmit}>
      <input id = "values" type="text" value={inputValue} onChange={handleInputChange} />
      <select value={theOption} onChange={handleTheChange}>
        <option value="sum">Sum</option>
        <option value="average">Average</option>
        <option value="mode">Mode</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      </form>
      <p>{errorMessage}</p>
      <p>{result}</p>
    </>
  );
}

export default Form;
