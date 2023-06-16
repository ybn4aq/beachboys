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
              <Link to="/games" className="nav-link">
                Games
              </Link>
            </li>
            <li className="navbar-item  ms-2 ">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
