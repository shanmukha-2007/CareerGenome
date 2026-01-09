import { useState } from "react";
import { roadmaps } from "../data/roadmaps";

export default function CareerNotebook({ career }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const generateAnswer = (q) => {
    const skills = roadmaps[career].join(", ");

    if (q.toLowerCase().includes("skills")) {
      return `Skills required for ${career}: ${skills}.`;
    }
    if (q.toLowerCase().includes("start")) {
      return `Start with ${roadmaps[career][0]} for ${career}.`;
    }
    return `To become a ${career}, focus on learning: ${skills}.`;
  };

  const ask = () => {
    if (!question) return;

    const answer = generateAnswer(question);

    setMessages([
      ...messages,
      { from: "You", text: question },
      { from: "Notebook", text: answer }
    ]);

    setQuestion("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Career Notebook</h2>
      <p><strong>Career Context:</strong> {career}</p>

      {messages.map((m, i) => (
        <p key={i}><strong>{m.from}:</strong> {m.text}</p>
      ))}

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about your career..."
      />
      <button onClick={ask} style={{ marginLeft: "10px" }}>
        Ask
      </button>
    </div>
  );
}
