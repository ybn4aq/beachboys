import React, { useState, useEffect } from "react";

const PressSpaceBarGame = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    startGame();
    return () => {
      clearInterval(timerInterval);
    };
  }, []); // empty array means that this will only run on the first render

  const startGame = () => {
    // Initialize the score
    let score = 0;
    // Start the timer
    const interval = setInterval(updateTimer, 1000);
    setTimerInterval(interval);
    // Add listener for spacebar press
    document.addEventListener("keydown", handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      score++;
    }
  };

  const updateTimer = () => {
    setTimeRemaining((prevTime) => prevTime - 1);

    if (timeRemaining === 1) {
      clearInterval(timerInterval);
      document.removeEventListener("keydown", handleKeyDown);
      // TODO: indicate game over
      resetGame();
    }
  };

  const resetGame = () => {
    setTimeRemaining(10);
    score = 0;
  };
  return (
    <div>
      <h1>The Spacebar Game!</h1>
      <p>Press the spacebar as fast as you can within 10 seconds to win!</p>
      <p>Time remaining: {timeRemaining} seconds</p>
    </div>
  );
};
