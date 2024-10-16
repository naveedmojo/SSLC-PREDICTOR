import React from "react";
import { useNavigate } from "react-router-dom";
const ResultsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="quiz-finish">
      <h2>Quiz Finished!</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default ResultsPage;
