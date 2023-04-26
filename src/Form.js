import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

    const [numbers, setNumbers] = useState("");
    const [selectOption, setSelectOption] = useState("");
    const [result, setResult] = useState("");

    //get the input value from text box
    function handleNumberEntry(event) {
        setNumbers(event.target.value)
    }

    //function for selected dropdown options
    function handleSelectChange(event) {
        //set the state to the value of the dropdown box
        setSelectOption(event.target.value);
    }

    function resetInputs(event) {
        event.target.values.value = "";
        event.target.operation.value = "";
        setNumbers("");
        setSelectOption("");
    }


    //submit function
    function submitCalculate(event) {
        event.preventDefault();
        const numArr = numbers.split(",");
        console.log(numArr)
        //check if Every input in the array is a number
        if (!numArr.every((current) => { return (!isNaN(Number(current))) }) || selectOption === "") {
            setResult("Invalid input.")

        } else {
            switch (selectOption) {
                case "sum":
                    let addTotal = numArr.reduce((acc, current) => {
                        return acc + Number(current);
                    }, 0)
                    setResult(addTotal);
                    break;
                //calculate the average
                case "average":
                    let avgTotal = numArr.reduce((acc, current) => {
                        return acc + Number(current);
                    }, 0)
                    let average = avgTotal / numArr.length
                    setResult(average);
                    break;
                //find the mode
                case "mode":
                    const numObj = {};
                    const max = [0, 0]
                    numArr.forEach((num) => {
                        if (numObj[num] === undefined) {
                            numObj[num] = 1;
                        } else {
                            numObj[num] += 1;
                        }

                        if (numObj[num] >= max[1]) {
                            max[0] = num;
                            max[1] = numObj[num];
                        }
                        console.log(numObj)
                    })
                    setResult(max[0]);
                    break;
                default:
                    break;
            }
            //reset the inputs
            resetInputs(event);
        }

    }


    return (
        <>
            <form onSubmit={submitCalculate}>
                <input id="values" name="values" type="text" onChange={handleNumberEntry} />
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
