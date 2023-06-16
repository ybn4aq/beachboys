import React, { Component } from "react";

export default class HighScoresList extends Component {
  render() {
    const data = [
      { username: "User1", game: "Pac Man", score: 13 },
      { username: "User2", game: "Pac Man", score: 24 },
      { username: "User2", game: "Tic Tac Toe", score: 24 },
      { username: "User2", game: "Battleship", score: 24 },
      { username: "User3", game: "Pac Man", score: 24 },
      { username: "User4", game: "Pac Man", score: 24 },
      { username: "User4", game: "Battleship", score: 24 },
      { username: "User5", game: "Mario Kart", score: 24 },
      { username: "User6", game: "Mario Kart", score: 24 },
    ];

    const usernames = data.map((item, index) => (
      <div key={index}>{item.username}</div>
    ));
    const scores = data.map((item, index) => (
      <div key={index}>{item.score}</div>
    ));
    const games = data.map((item, index) => <div key={index}>{item.game}</div>);

    return (
      <div>
        <div className="rowContainer">
          <h1>High Scores</h1>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Filter by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <h7 className="dropdown-header" type="button">
                Game
              </h7>
              <button className="dropdown-item" type="button">
                Tic Tac Toe
              </button>
              <button className="dropdown-item" type="button">
                User
              </button>
            </div>
          </div>
        </div>
        <div className="rowContainer" style={{ marginTop: 20 }}>
          <div className="columnContainer">
            <h3>Users</h3>
            {usernames}
          </div>
          <div className="columnContainer">
            <h3>Scores</h3>
            {scores}
          </div>
          <div className="columnContainer">
            <h3>Games</h3>
            {games}
          </div>
        </div>
      </div>
    );
  }
}
