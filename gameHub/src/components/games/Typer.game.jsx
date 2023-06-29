import React from "react";
import { useState } from "react";
import dictionary from "an-array-of-english-words"; // had to run npm install an-array-of-english-words
import { COLORS } from "../colors";

export const Typer = () => {
  const [phrase, setPhrase] = useState("");
  const [coloredPhrase, setColoredPhrase] = useState([]);
  const [winStatement, setWinStatement] = useState(true);
  const [start, setStart] = useState(true);
  let arr = [];

  const setPhraseHandler = (difficulty) => {
    let phrase = "";
    let max = dictionary.length;
    let level = 0;
    if (difficulty === "easy") level = 3;
    else if (difficulty === "medium") level = 10;
    else level = 20;
    for (let i = 0; i < level; i++) {
      let wordIndex = Math.floor(Math.random() * max);
      let word = String(dictionary[wordIndex]);
      if (i != 0) phrase += " ";
      phrase += word;
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

      console.log(arr);
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
        <option value="easy">Easy (3 words)</option>
        <option value="medium">Medium (10 words)</option>
        <option value="hard">Hard (20 words)</option>
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
