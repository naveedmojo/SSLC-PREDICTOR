import React, { useState } from "react"; // Import React and useState
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [hoveredGradient, setHoveredGradient] = useState(""); // State for hovered gradient

  const subjects = [
    {
      name: "Math",
      gradient: "linear-gradient(to right, #8e0e00, #1f1c18)", // Gradient for Math
    },
    {
      name: "Physics",
      gradient: "linear-gradient(to right, #3498db, #8e54e9)", // Gradient for Physics
    },
    {
      name: "Biology",
      gradient: "linear-gradient(to right, #2ecc71, #d5e1df)", // Gradient for Biology
    },
    {
      name: "Chemistry",
      gradient: "linear-gradient(to right, #fceabb, #f8b500)", // Gradient for Chemistry
    },
  ];

  return (
    <>
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
    </>
  );
};

export default HomePage; // Ensure this exports the correct component name
