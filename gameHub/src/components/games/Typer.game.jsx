import React from "react";
import { useState } from "react";
import {words} from "./tongueTwisters";
import { COLORS } from "../colors";

export const Typer = () => {
  const [phrase, setPhrase] = useState("");
  const [coloredPhrase, setColoredPhrase] = useState([]);
  const [winStatement, setWinStatement] = useState(true);
  const [start, setStart] = useState(true);
  let arr = []

  let wordArr = words.sort((a, b) => a.length - b.length)

  const setPhraseHandler = (difficulty) => {
    let phrase = "";
    if (difficulty == "easy"){
      phrase = wordArr[Math.floor(Math.random() * 10)]
    }
    else if (difficulty == "medium"){
      phrase = wordArr[Math.floor(Math.random() * 10 + 10)]
    }
    else if (difficulty == "hard"){
      phrase = wordArr[Math.floor(Math.random() * 5 + 20)]
    }
    setPhrase(phrase);
  };

  const textInputHandler = (text) => {
    if (text === phrase) {
      //console.log("done");
      setWinStatement(false);
      document.getElementById("typingBox").value = "";
      setStart(true);
    } else {
      //console.log("running");

      if (text.at(-1) === phrase.at(text.length - 1)) {
        //console.log("green");
        arr.push({ color: COLORS.green });
      } else {
        arr.push({ color: COLORS.red });
      }

      setColoredPhrase(arr);
    }
  };
  return (
    <div
      className="vstack gap-4"
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        marginRight: 300,
        marginLeft: 300,
      }}
    >
      <label>Select difficulty below:</label>
      <select
        name="difficultySelector"
        onChange={(e) => {
          //console.log(e.target.value);
          setPhraseHandler(e.target.value);
          setStart(false);
          setWinStatement(true);
          document.getElementById("typingBox").value = "";
        }}
      >
        <option value="default">Select difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div hidden={start}>
        <label>Type the following: </label>
        <div>
          {phrase}
          {coloredPhrase.map((item) => {
            <Typer color={item.color} id={item.id} />;
          })}
        </div>
        <div
          className="input-group mb-3"
          onChange={(e) => {
            textInputHandler(e.target.value);
          }}
        >
          <div className="input-group-prepend"></div>
          <textarea
            type="text"
            className="form-control"
            placeholder="Type Here"
            aria-label="Type Box"
            id="typingBox"
          />
        </div>
      </div>
      <div hidden={winStatement}>YOU WIN!</div>
    </div>
  );
};
