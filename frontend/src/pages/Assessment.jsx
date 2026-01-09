import { useState } from "react";

export default function Assessment() {
  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({ ...answers, [q]: value });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Career Assessment</h2>

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

      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </div>
  );
}
