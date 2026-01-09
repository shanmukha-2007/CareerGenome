import { roadmaps } from "../data/roadmaps";

export default function Results({ assessment, coding }) {
  const logicScore = assessment.q1 === "yes" ? 1 : 0;
  const learningScore = assessment.q2 === "yes" ? 1 : 0;

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

      <h3>Recommended Career</h3>
      <p>{career}</p>

      <h3>Skill Roadmap</h3>
      <ul>
        {roadmaps[career].map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
