import { roadmaps } from "../data/roadmaps";

export default function Results({ assessment, coding, onOpenNotebook }) {
  const logicScore = assessment.q1 === "yes";
  const learningScore = assessment.q2 === "yes";

  let career = "General Studies";

  if (logicScore && learningScore) {
    career = "Software Engineer";
  } else if (logicScore) {
    career = "Data Analyst";
  } else if (learningScore) {
    career = "IT Support / QA";
  }

  const codingSkill =
    coding.c1 === "5" && coding.c2 === "Queue"
      ? "Strong"
      : "Needs Improvement";

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Career DNA</h2>

      <p><strong>Logical Thinking:</strong> {logicScore ? "High" : "Low"}</p>
      <p><strong>Learning Interest:</strong> {learningScore ? "High" : "Low"}</p>
      <p><strong>Coding Skill:</strong> {codingSkill}</p>

      <hr />

      <h3>Recommended Career</h3>
      <p>{career}</p>

      <h3>Skill Roadmap</h3>
      <ul>
        {roadmaps[career].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* NOTEBOOK BUTTON */}
      <button
        onClick={() => onOpenNotebook(career)}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Open Career Notebook
      </button>
    </div>
  );
}
