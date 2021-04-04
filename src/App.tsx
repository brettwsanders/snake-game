import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake!</h1>
      </header>
      <body>
        <BoundingBox></BoundingBox>
      </body>
    </div>
  );
}

function BoundingBox() {
  // make an outline of the box.
  // make it square.
  // center the box.
  return (
    <div className="Bounding-box">
      <Snake></Snake>
    </div>
  );
}

function Snake() {
  return <div className="Snake"></div>;
}

export default App;
