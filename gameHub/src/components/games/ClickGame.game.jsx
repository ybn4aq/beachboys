import React, { useState } from "react";

class ClickGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default values
      score: 0,
      timeLeft: 10,
      isPlaying: false,
    };
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.runGame = this.runGame.bind(this);
  }

  runGame = () => {
    for (let i = 1; i < 10; ++i) {
      setTimeout(() => {
        this.setState({
          timeLeft: timeLeft - 1,
        });
      }, 1000);
    }
  };

  handleStartClick = () => {
    this.setState({ score: 0, timeLeft: 10, isPlaying: true });
    this.runGame();
  };

  handleButtonClick = () => {
    const { score } = this.state;
    this.setState({
      score: score + 1,
    });
  };

  render() {
    return (
      <div>
        <h1 className="header">Welcome to Click Game!</h1>
        <button className="startButton" onClick={handleStartClick}>
          Start Game
        </button>
        <button className="gameButton" onClick={this.handleButtonClick}>
          Click Me!!!
        </button>
        <p className="score">{this.score}</p>
        <p classname="timer">{this.timeleft}</p>
      </div>
    );
  }
}

export default ClickGame;