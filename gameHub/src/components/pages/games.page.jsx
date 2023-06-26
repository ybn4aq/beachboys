import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typer } from "../games/Typer.game";

export default class Games extends Component {
  render() {
    return (
      <div>
        <p>ur on create scores component</p>
        <a href="./typer"> typer game</a>
        <br />
        <a href="./click"> click game</a>
        <br />
        <a href="./matching"> matching game</a>
      </div>
    );
  }
}
