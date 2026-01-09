export default function Results({ answers }) {
  const logicalScore = answers.q1 === "yes" ? 1 : 0;
  const learningScore = answers.q2 === "yes" ? 1 : 0;

  let career = "General Studies";

  if (logicalScore && learningScore) {
    career = "Software Engineer";
  } else if (logicalScore) {
    career = "Data Analyst";
  } else if (learningScore) {
    career = "IT Support / QA";
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Career DNA</h2>

      <p><strong>Logical Thinking:</strong> {logicalScore ? "High" : "Low"}</p>
      <p><strong>Learning Interest:</strong> {learningScore ? "High" : "Low"}</p>

      <h3>Recommended Career</h3>
      <p>{career}</p>
    </div>
  );
}
