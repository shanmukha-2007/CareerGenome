import { useState } from "react";
import Landing from "./pages/Landing";
import Assessment from "./pages/Assessment";
import CodingTest from "./pages/CodingTest";
import Results from "./pages/Results";

function App() {
  const [page, setPage] = useState("landing");
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [codingAnswers, setCodingAnswers] = useState({});

  return (
    <>
      {page === "landing" && (
        <Landing onStart={() => setPage("assessment")} />
      )}

      {page === "assessment" && (
        <Assessment
          onSubmit={(data) => {
            setAssessmentAnswers(data);
            setPage("coding");
          }}
        />
      )}

      {page === "coding" && (
        <CodingTest
          onSubmit={(data) => {
            setCodingAnswers(data);
            setPage("results");
          }}
        />
      )}

      {page === "results" && (
        <Results assessment={assessmentAnswers} coding={codingAnswers} />
      )}
    </>
  );
}

export default App;
