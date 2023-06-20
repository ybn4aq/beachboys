import React, { Component, useState } from "react";
import { scoreData } from "../HighScoresData";
export const HighScoresList = () => {
  const filterOptions = [
    { value: "ticTacToe", label: "Tic Tac Toe" },
    { value: "battleship", label: "Battleship" },
    { value: "marioKart", label: "Mario Kart" },
  ];

  // const [filterValue, setFilterValue] = useState("");
  // const handleFilter = (event) => {
  //   console.log(event);
  //   setFilterValue(event);
  // };

  const usernames = scoreData.map((item, index) => (
    <div key={index}>{item.username}</div>
  ));
  const scores = scoreData.map((item, index) => (
    <div key={index}>{item.score}</div>
  ));
  const games = scoreData.map((item, index) => (
    <div key={index}>{item.game}</div>
  ));

  // const handleFilter = (event) => {
  //   console.log("handle filter");
  // };

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
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            onChange={console.log("test")}
          >
            <h7 className="dropdown-header" type="button">
              Game
            </h7>
            <button className="dropdown-item" type="button">
              Tic Tac Toe
            </button>
            <h7 className="dropdown-header" type="button">
              Score
            </h7>
            <button className="dropdown-item" type="button">
              High-to-low
            </button>
            <button className="dropdown-item" type="button">
              Low-to-high
            </button>
            <h7 className="dropdown-header" type="button">
              User
            </h7>
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                username:
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="enter-username"
                aria-describedby="inputGroup-sizing-sm"
              />
              <button
                class="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
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
};
