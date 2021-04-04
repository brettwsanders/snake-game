import React, { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake!</h1>
      </header>
      <BoundingBox></BoundingBox>
    </div>
  );
}

function BoundingBox() {
  function downHandler(event: any) {
    const { key } = event;
    console.log("key is", key);
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
  });

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

// create listener
// when right arrow go right
// when up arrow go up
// when down arrow go down
// when left arrow go left

export default App;
