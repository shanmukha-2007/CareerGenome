import { useState } from "react";
import Landing from "./pages/Landing";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";

function App() {
  const [page, setPage] = useState("landing");
  const [answers, setAnswers] = useState({});

  return (
    <>
      {page === "landing" && (
        <Landing onStart={() => setPage("assessment")} />
      )}

      {page === "assessment" && (
        <Assessment
          onSubmit={(data) => {
            setAnswers(data);
            setPage("results");
          }}
        />
      )}

      {page === "results" && <Results answers={answers} />}
    </>
  );
}

export default App;
