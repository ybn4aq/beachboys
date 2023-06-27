import React, { Component } from "react";
import { Link } from "react-router-dom";
import gameHubLogo from "/images/gameHubLogo.png";

export default class GameHub extends Component {
  render() {
    return <img src={gameHubLogo} class="img-fluid" alt="gameHub logo"></img>;
  }
}
