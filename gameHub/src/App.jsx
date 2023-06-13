import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div class="mb-3">
        <label for="toDoInput" class="form-label">
          Type in a Goal
        </label>
        <input
          type="text"
          class="form-control"
          id="toDoInput"
          placeholder="To Do..."
        />
      </div>
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </>
  );
}

export default App;
