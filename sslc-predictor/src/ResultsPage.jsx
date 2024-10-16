import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { useNavigate } from "react-router-dom";
import "./ResultsPage.css";

const ResultsPage = ({ correctCount, attemptedCount, totalQuestions }) => {
  const navigate = useNavigate(); // For navigation
  const [grade, setGrade] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true); // State to manage loading

  const quotes = {
    APlus: "Excellent work! Keep it up!",
    A: "Great job! You're on the right track!",
    B: "Good effort! Keep practicing!",
    C: "Not bad, but there's room for improvement.",
    D: "Don't give up! Review your mistakes.",
    F: "Keep trying! Every mistake is a learning opportunity.",
  };

  const handleHomeClick = () => {
    navigate("/"); // Adjust this path as needed
  };

  const calculateGrade = () => {
    const percentage = (correctCount / totalQuestions) * 100;

    if (percentage >= 90) {
      setGrade("A+");
      setQuote(quotes.APlus);
    } else if (percentage >= 80) {
      setGrade("A");
      setQuote(quotes.A);
    } else if (percentage >= 70) {
      setGrade("B");
      setQuote(quotes.B);
    } else if (percentage >= 60) {
      setGrade("C");
      setQuote(quotes.C);
    } else if (percentage >= 50) {
      setGrade("D");
      setQuote(quotes.D);
    } else {
      setGrade("F");
      setQuote(quotes.F);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateGrade(); // Calculate grade after a delay
      setLoading(false); // Set loading to false after calculation
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [correctCount, totalQuestions]);

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      {loading ? ( // Conditional rendering based on loading state
        <p className="calculating">Calculating results...</p>
      ) : (
        <>
          <p>Total Questions: {totalQuestions}</p>
          <p>🟡 Attempted: {attemptedCount}</p>
          <p>✅ Correct: {correctCount}</p>
          <p>❌ Incorrect: {attemptedCount - correctCount}</p>
          <p>Grade: {grade}</p>
          <p>{quote}</p>
          <button className="home-button" onClick={handleHomeClick}>
            Home
          </button>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
