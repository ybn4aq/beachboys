import React from "react";
import { useState } from "react";
import dictionary from "an-array-of-english-words"; // had to run npm install an-array-of-english-words

export const Typer = () => {
  const setPhraseHandler = (difficulty) => {
    let phrase = "";
    let max = dictionary.length;
    let level = 0;
    // console.log(level);
    if (difficulty === "easy") level = 3;
    else if (difficulty === "medium") level = 10;
    else level = 20;
    console.log(level);
    for (let i = 0; i < level; i++) {
      let wordIndex = Math.floor(Math.random() * max);
      let word = String(dictionary[wordIndex]);
      if (i != 0) phrase += " ";
      phrase += word;
    }
    setPhrase(phrase);
    console.log(phrase);
  };

  const [phrase, setPhrase] = useState("");

  const [winStatement, setWinStatement] = useState(true);
  const [startDis, setStartDis] = useState(true);
  const [start, setStart] = useState(true);
  const textInputHandler = (text) => {
    if (text === phrase) {
      console.log("done");
      setWinStatement(false);
      document.getElementById("typingBox").value = "";
      setStart(true);
    }
  };
  return (
    <div
      class="vstack gap-4"
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
          console.log(e.target.value);
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
      {/* <button
        size="sm"
        disabled={startDis}
        onClick={() => {
          
        }}
      >
        Start
      </button> */}
      <div hidden={start}>
        <label>Type the following: </label>
        <p>{phrase}</p>
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
