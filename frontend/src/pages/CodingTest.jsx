import { useState } from "react";

export default function CodingTest({ onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({ ...answers, [q]: value });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Coding Assessment</h2>

      <p>
        1. What is the output of this code?
        <br />
        <pre>
{`int x = 5;
System.out.println(x++);`}
        </pre>
      </p>

      <label>
        <input
          type="radio"
          name="c1"
          onChange={() => handleChange("c1", "5")}
        />
        5
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="c1"
          onChange={() => handleChange("c1", "6")}
        />
        6
      </label>

      <br /><br />

      <p>
        2. Which data structure works on FIFO principle?
      </p>

      <label>
        <input
          type="radio"
          name="c2"
          onChange={() => handleChange("c2", "Stack")}
        />
        Stack
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="c2"
          onChange={() => handleChange("c2", "Queue")}
        />
        Queue
      </label>

      <br /><br />

      <button onClick={() => onSubmit(answers)}>
        Submit Coding Test
      </button>

      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </div>
  );
}
