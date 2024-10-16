const ResultsPage = ({ correctCount, attemptedCount, totalQuestions }) => {
  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      <p>Total Questions: {totalQuestions}</p>
      <p>🟡 Attempted: {attemptedCount}</p>
      <p>✅ Correct: {correctCount}</p>
      <p>❌ Incorrect: {attemptedCount - correctCount}</p>
    </div>
  );
};

export default ResultsPage;
