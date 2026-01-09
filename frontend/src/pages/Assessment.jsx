import { useState } from "react";

export default function Assessment({ onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Career Assessment</h2>

      {/* Question 1 */}
      <p>1. Do you enjoy solving logical problems?</p>
      <label>
        <input
          type="radio"
          name="q1"
          onChange={() => handleChange("q1", "yes")}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="q1"
          onChange={() => handleChange("q1", "no")}
        />
        No
      </label>

      <br /><br />

      {/* Question 2 */}
      <p>2. Do you like learning new technologies?</p>
      <label>
        <input
          type="radio"
          name="q2"
          onChange={() => handleChange("q2", "yes")}
        />
        Yes
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="q2"
          onChange={() => handleChange("q2", "no")}
        />
        No
      </label>

      <br /><br />

      {/* Submit */}
      <button
        onClick={() => onSubmit(answers)}
        style={{ marginTop: "20px" }}
      >
        Submit Assessment
      </button>

      {/* Debug output (optional, good for review demo) */}
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </div>
  );
}
