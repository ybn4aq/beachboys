import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand ms-2">
          GameHub
        </Link>
        <div>
          <ul className="navbar-nav mr-auto d-flex flex-row">
            <li className="navbar-item">
              <Link to="/highscores" className="nav-link">
                High Scores
              </Link>
            </li>
            <li className="navbar-item  ms-2 ">
              <Link to="/create" className="nav-link">
                Create Score
              </Link>
            </li>
            <li className="navbar-item  ms-2">
              <Link to="/play" className="nav-link me-2">
                Play Game
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}