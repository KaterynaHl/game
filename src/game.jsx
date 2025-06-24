import React, { useState, useEffect } from "react";

const pads = ["red", "green", "blue", "yellow"];

export default function game() {
  const [sequence, setSequence] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [message, setMessage] = useState("Натискай початок");
  const [active, setActive] = useState(null);

  const colorCycleGenerator = function* () {
    const colors = ["red", "green", "blue", "yellow"];
    let i = 0;
    while (true) {
      yield colors[i % colors.length];
      i++;
    }
  };

  const gen = colorCycleGenerator();

  const blink = (color) => {
    setActive(color);
    setTimeout(() => setActive(null), 300);
  };

  const playSequence = async (seq) => {
    for (let color of seq) {
      blink(color);
      await new Promise((res) => setTimeout(res, 600));
    }
  };

  const startGame = () => {
    const newColor = gen.next().value;
    const newSeq = [...sequence, newColor];
    setSequence(newSeq);
    setMessage("Переглянь послідовність...");
    setUserIndex(0);
    playSequence(newSeq).then(() => {
      setMessage("Твій хід!");
    });
  };

  const handleClick = (color) => {
    if (color === sequence[userIndex]) {
      blink(color);
      if (userIndex + 1 === sequence.length) {
        setMessage("Правильно! Наступний рівень...");
        setTimeout(startGame, 1000);
      } else {
        setUserIndex(userIndex + 1);
      }
    } else {
      setMessage("Неправильно! Гра закінчена.");
      setSequence([]);
    }
  };

  return (
    <div className="game-container">
      <h1>Гра</h1>
      <p>{message}</p>
      <div className="circle">
        {pads.map((color) => (
          <div
            key={color}
            className={`pad ${color} ${active === color ? "active" : ""}`}
            onClick={() => handleClick(color)}
          />
        ))}
      </div>
      <button className="start-btn" onClick={startGame}>Початок</button>
    </div>
  );
}