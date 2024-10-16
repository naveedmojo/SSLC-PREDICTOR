import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [hoveredGradient, setHoveredGradient] = useState(""); // State for hovered gradient
  const navigate = useNavigate(); // Initialize useNavigate to programmatically navigate

  const shareContent = () => {
    const message = "Check out this awesome content!";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Define the subjects with their corresponding gradient and route
  const subjects = [
    {
      name: "Math",
      gradient: "linear-gradient(to right, #8e0e00, #1f1c18)",
      route: "/quiz/math", // Define the route for each subject
    },
    {
      name: "Physics",
      gradient: "linear-gradient(to right, #360033, #0b8793)",
      route: "/quiz/physics",
    },
    {
      name: "Biology",
      gradient: "linear-gradient(to right, #52c234, #061700)",
      route: "/quiz/biology",
    },
    {
      name: "Chemistry",
      gradient: "linear-gradient(to right, #fe8c00, #f83600)",
      route: "/quiz/chemistry",
    },
  ];

  // Handler function to navigate to the respective quiz page
  const handleCardClick = (route) => {
    navigate(route); // Navigate to the provided route
  };

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
          You can check your SSLC performance through this website. You will
          receive your result after completing this quiz.
        </p>
        <p>
          Warning ❗❗❗ Please attempt this only after fully studying the
          entire chapter. This will help you perform your best. Good luck!
        </p>
      </div>
      <div
        className="cards"
        style={{
          background:
            hoveredGradient || "linear-gradient(to right, #000000, #434343)", // Default background when no card is hovered
        }}
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="card"
            style={{ background: subject.gradient }}
            onMouseEnter={() => setHoveredGradient(subject.gradient)} // Set gradient on hover
            onMouseLeave={() => setHoveredGradient("")} // Reset gradient when not hovering
            onClick={() => handleCardClick(subject.route)} // Call handler on card click
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
          <strong>Mohammed Naveed {"   "}</strong>
        </p>
        <button className="share-btn" onClick={shareContent}>
          Share 🔗
        </button>
      </footer>
    </>
  );
};

export default HomePage;
