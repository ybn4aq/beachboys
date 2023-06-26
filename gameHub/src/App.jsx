import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HighScoresList } from "./components/pages/highscores.page";
import Games from "./components/pages/games.page";
import Login from "./components/pages/login.page";
import NavBar from "./components/navbar.component";
import GameHub from "./components/gamehub.component";
import { Typer } from "./components/games/Typer.game";
import { ClickGame } from "./components/games/ClickGame.game";
import { Matching } from "./components/games/MatchingGame.game";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0%",
          width: "100%",
          left: "0%",
          whitespace: "nowrap",
        }}
      >
        <Router>
          <NavBar />
          <Routes
            style={{
              left: "0%",
              whitespace: "nowrap",
            }}
          >
            <Route path="/" exact element={<GameHub />} />
            <Route path="/highscores" element={<HighScoresList />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
            <Route path="/typer" element={<Typer />} />
            <Route path="/click" element={<ClickGame />} />
            <Route path="/matching" element={<Matching />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
