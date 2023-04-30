/** @format */

import React, { useState } from "react";
import "./Form.css";

function Form() {
	let [formData, setFormData] = useState({
		values: "",
		operation: "",
		class: "",
	});
	let [result, setResult] = useState("");

	const handleChange = (event) => {
		let { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			formData.operation === "" ||
			formData.values === "" ||
			formData.values.slice(-1) === "," ||
			formData.values.split(",").every((element) => isNaN(element))
		) {
			setResult("Invalid input.");
			setFormData({ ...formData, class: "error" });
		} else {
			switch (formData.operation) {
				case "sum":
					setResult(
						formData.values
							.split(",")
							.reduce((acc, currentValue) => {
								const num = parseInt(currentValue);
								return acc + num;
							}, 0)
							.toString()
					);
					break;
				case "average":
					setResult(
						(
							formData.values
								.split(",")
								.reduce((acc, currentValue) => {
									const num = parseInt(currentValue);
									return acc + num;
								}, 0) / formData.values.split(",").length
						).toString()
					);
					break;
				case "mode":
					setResult(formData.values.split(",").length.toString());
					break;
				default:
					break;
			}
			setFormData({ values: "", operation: "", class: "" });
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					id="values"
					name="values"
					className={formData.class}
					type="text"
					value={formData.values}
					onChange={handleChange}
				/>
				<select
					id="operations"
					name="operation"
					className={formData.class}
					value={formData.operation}
					onChange={handleChange}>
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
