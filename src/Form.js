import "./Form.css";

export default function Form() {
  function calculate(){
    const input = document.getElementById('values')
    const select = document.getElementById('operation')
    const result = document.getElementById('result').querySelector('p')

    let arr = input.value.split(',')

    if(select.value.length === 0 || !isValid(arr)){
      result.textContent = 'Invalid input.'
      input.classList.toggle('error')
      select.classList.toggle('error')
      return
    }

    input.className = ''
    select.className = ''

    let operation = 0
    const modeSet = {}

    for(const e of arr){
      operation += Number(e)
      if(!modeSet[e]){
        modeSet[e] = 1
      }
      else{
        modeSet[e]++
      }
    }

    if(select.value === 'average'){
      operation = (operation/arr.length).toFixed(2)
    }

    if(select.value === 'mode'){
      let compare = 0
      for(const key in modeSet){
        if(modeSet[key] > compare){
          operation = key
          compare = modeSet[key]
        }
      }
    }

    result.textContent = operation
    select.value = ''
    input.value = null
  }

  const isValid = (array) => {
    for(const e of array){
      if(isNaN(e)){
        return false
      }
    }
    return true
  }

  return (
    <>
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation"> 
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={calculate}>Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}