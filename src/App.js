import React, { useState } from "react";
import "./Form.css";
import Form from "./Form";

function App() {
  // Initialize `result` DEFAULT=EMPTY STRING and `hasFormError` DEFAULT=FALSE states W/the `useState` hook.
  const [result, setResult] = useState("");
  const [hasFormError, setHasFormError] = useState(false);

  // Define a `handleSubmit` function that will receive an `answer` parameter.
  const handleSubmit = (answer) => {
    // Inside `handleSubmit`, set the `result` state to `answer` and the `hasFormError` state to `false`.
    setResult(answer);
    setHasFormError(false);
  };

  return (
    // Return a `main` element with a paragraph explaining the input format.
    <main>
      <p>Enter each number in the array, separated by a ' , '</p>
      {/*  Render a `Form` component with the `hasFormError` and `handleSubmit` props. */}
      <Form hasFormError={hasFormError} handleSubmit={handleSubmit} />
      {/*  Render a `section` element with an `id` of "result". */}
      <section id="result">
        {/*  Inside the `section`, render a `p` element to display the `result` state. */}
        <p>{result}</p>
        {/*  Render a `p` element that will display the "Invalid input." message only if `hasFormError` is `true`.  */}
        <p>{hasFormError && "Invalid input."}</p>
      </section>
    </main>
  );
}

export default App;
