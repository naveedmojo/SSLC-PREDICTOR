import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import QuizPage from "./QuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:subject" element={<QuizPage />} />{" "}
      {/* Updated to accept subject parameter */}
    </Routes>
  );
}

export default App;
