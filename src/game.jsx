import React from "react";
import "../index.css";

const game = () => {
  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div className="game-container">
      <h1>Гра</h1>
      <p>Натисни Start</p>
      <div className="circle">
        {colors.map((color) => (
          <div key={color} className={`pad ${color}`} />
        ))}
      </div>
      <button className="start-btn">Start</button>
    </div>
  );
};

export default game;