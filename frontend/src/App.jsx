import { useState } from "react";

import Landing from "./pages/Landing";
import Assessment from "./pages/Assessment";
import CodingTest from "./pages/CodingTest";
import Results from "./pages/Results";
import CareerNotebook from "./pages/CareerNotebook";

function App() {
  const [page, setPage] = useState("landing");
  const [assessment, setAssessment] = useState({});
  const [coding, setCoding] = useState({});
  const [career, setCareer] = useState("");

  return (
    <>
      {page === "landing" && (
        <Landing onStart={() => setPage("assessment")} />
      )}

      {page === "assessment" && (
        <Assessment
          onSubmit={(data) => {
            setAssessment(data);
            setPage("coding");
          }}
        />
      )}

      {page === "coding" && (
        <CodingTest
          onSubmit={(data) => {
            setCoding(data);
            setPage("results");
          }}
        />
      )}

      {page === "results" && (
        <Results
          assessment={assessment}
          coding={coding}
          onOpenNotebook={(careerName) => {
            setCareer(careerName);
            setPage("notebook");
          }}
        />
      )}

      {page === "notebook" && (
        <CareerNotebook career={career} />
      )}
    </>
  );
}

export default App;
