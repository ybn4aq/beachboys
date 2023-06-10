import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HighScoresList from "./components/highscores-list.component";
import CreateScore from "./components/create-score.component";
import NavBar from "./components/navbar.component";
import PlayGame from "./components/play-game.component";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
        }}
      >
        <Router>
          <NavBar />
          
          <Routes>
            <Route path="/" exact element={<HighScoresList />} />
            <Route path="/create" element={<CreateScore />} />
            <Route path="/play" element={<PlayGame />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
