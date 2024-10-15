import React, { useState } from "react"; // Import React and useState
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [hoveredGradient, setHoveredGradient] = useState(""); // State for hovered gradient
  const shareContent = () => {
    console.log("shared");
  };
  const subjects = [
    {
      name: "Math",
      gradient: "linear-gradient(to right, #8e0e00, #1f1c18)", // Gradient for Math
    },
    {
      name: "Physics",
      gradient: "linear-gradient(to right, #360033, #0b8793)", // Gradient for Physics
    },
    {
      name: "Biology",
      gradient: " linear-gradient(to right, #52c234, #061700)", // Gradient for Biology
    },
    {
      name: "Chemistry",
      gradient: "linear-gradient(to right, #fe8c00, #f83600)", // Gradient for Chemistry
    },
  ];

  return (
    <>
      <div
        style={{
          background:
            hoveredGradient || "linear-gradient(to right, #000000, #434343)", // Default background when no card is hovered
        }}
        className="title"
      >
        <h1>SSLC PREDICTOR</h1>
        <p>
          You can check your sslc performance through this website.you will get
          a result after trying this quiz.
        </p>
        <p>
          Warning ❗❗❗ please try this after fully studying the entire
          chapter.then only yuo can perform the most.Good Luck.
        </p>
      </div>
      <div
        className="cards"
        style={{
          background:
            hoveredGradient || "linear-gradient(to right, #000000, #434343)", // Default background when no card is hovered
        }} // Set background based on hovered card
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="card"
            style={{ background: subject.gradient }}
            onMouseEnter={() => setHoveredGradient(subject.gradient)} // Set gradient on hover
            onMouseLeave={() => setHoveredGradient("")} // Reset gradient when not hovering
          >
            <p className="second-text">{subject.name}</p>
          </div>
        ))}
      </div>
      <footer
        style={{
          background:
            hoveredGradient || "linear-gradient(to right, #000000, #434343)", // Default background when no card is hovered
        }}
        className="footer"
      >
        <p>
          Developed by ❤️
          <strong>Zero to Hero Academy {"   "}</strong>
        </p>
        <button className="share-btn" onClick={shareContent}>
          Share 🔗
        </button>
      </footer>
    </>
  );
};

export default HomePage; // Ensure this exports the correct component name
