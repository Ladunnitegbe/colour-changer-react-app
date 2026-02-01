import { useState } from "react";
import "./HexColor.css";

function HexColor() {
  const [color, setColor] = useState("#FFFFFF");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }

    return newColor;
  }

  function updateColor() {
    setColor(getRandomColor());
  }

  return (
    <div className="container">
      <h1>Hex Color Generator</h1>

      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        <span>{color}</span>
      </div>

      <button onClick={updateColor}>
        Generate Random Color
      </button>
    </div>
  );
}

export default HexColor;
