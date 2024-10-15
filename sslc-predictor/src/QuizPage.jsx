import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importing necessary hooks
import "./QuizPage.css"; // Import the CSS file

// Sample mock data for questions
const questionsData = {
  math: [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 5 * 6?",
      options: ["30", "28", "32", "24"],
      answer: "30",
    },
    // Add more math questions here...
  ],
  physics: [
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "500,000 km/s"],
      answer: "300,000 km/s",
    },
    // Add more physics questions here...
  ],
  biology: [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      answer: "Mitochondria",
    },
    // Add more biology questions here...
  ],
  chemistry: [
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O",
    },
    // Add more chemistry questions here...
  ],
};

const QuizPage = () => {
  const location = useLocation(); // To get the current subject
  const navigate = useNavigate(); // For navigation
  const subject = location.pathname.split("/quiz/")[1]; // Extract the subject from the URL

  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const questions = questionsData[subject.toLowerCase()]; // Get questions based on subject

  // Timer effect
  useEffect(() => {
    const timer =
      timeLeft > 0 && !isQuizFinished
        ? setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
        : null;

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, [timeLeft, isQuizFinished]);

  // Handler for next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setIsQuizFinished(true); // Finish the quiz if last question is reached
    }
  };

  // Handler for previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption("");
    }
  };

  // Calculate minutes and seconds from time left
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div
      className="quiz-container"
      style={{
        background:
          subject === "math"
            ? "linear-gradient(to right, #8e0e00, #1f1c18)"
            : subject === "physics"
            ? "linear-gradient(to right, #360033, #0b8793)"
            : subject === "biology"
            ? "linear-gradient(to right, #52c234, #061700)"
            : "linear-gradient(to right, #fe8c00, #f83600)", // Set background color based on subject
      }}
    >
      <h1>{subject} Quiz</h1>
      <div className="timer">
        Time Left: {minutes}:{seconds}
      </div>

      {!isQuizFinished ? (
        <div className="question-box">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`option-button ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-finish">
          <h2>Quiz Finished!</h2>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
