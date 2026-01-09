export default function Landing({ onStart }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>CareerGenome</h1>
      <p>
        CareerGenome helps students discover their strengths,
        coding skills, and suitable career paths using smart assessments.
      </p>

      <button onClick={onStart}>
        Start Career Assessment
      </button>
    </div>
  );
}
