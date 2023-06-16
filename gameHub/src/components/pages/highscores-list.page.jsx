import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HighScoresList extends Component {
  render() {
    const scores = [
      { username: "User1", game: "Pac Man", score: 13 },
      { username: "User2", game: "Pac Man", score: 24 },
    ];
    const mappedArray = scores.map((item) => <div>{JSON.stringify(item)}</div>);

    return (
      <div class="hstack gap-3">
        <h1>High Scores</h1>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Filter by
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Game
            </a>
            <a class="dropdown-item" href="#">
              User
            </a>
            {/* <a class="dropdown-item" href="javascript:itemSelected('A')">
              A. Hello World!
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
