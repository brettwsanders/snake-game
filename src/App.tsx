import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [direction, setDirection] = useState("idle");

  function downHandler(event: any) {
    const { key } = event;
    switch (key) {
      case "ArrowUp":
        setDirection("up");
        break;
      case "ArrowDown":
        setDirection("down");
        break;
      case "ArrowLeft":
        setDirection("left");
        break;
      case "ArrowRight":
        setDirection("right");
        break;
      default:
        console.log("Invalid Entry. Try again.");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake!</h1>
        <h2>{direction}</h2>
      </header>
      <BoundingBox></BoundingBox>
    </div>
  );
}

function GridOverlay() {
  return (
    <div className="grid-container">
      <div className="grid top-left"></div>
      <div className="grid top-right"></div>
      <div className="grid bottom-left"></div>
      <div className="grid bottom-right"></div>
    </div>
  );
}

function BoundingBox() {
  return (
    <div className="Bounding-box">
      <GridOverlay></GridOverlay>
      <Snake></Snake>
    </div>
  );
}

function Snake() {
  return <div className="Snake-head"></div>;
}

export default App;
