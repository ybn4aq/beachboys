import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HighScoresList from "./components/highscores-list.component";
import CreateScore from "./components/create-score.component";
import NavBar from "./components/navbar.component";

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
          <br />
          <Routes>
            <Route path="/" exact component={HighScoresList} />
            <Route path="/create" exact component={CreateScore} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
