import React, { useState } from "react";

const ColorPalette = (props) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF2"];
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Color Palette</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: "50px",
              height: "50px",
              cursor: "pointer",
              border: selectedColor === color ? "3px solid black" : "none",
            }}
          ></div>
        ))}
      </div>
      {selectedColor && (
        <p style={{ marginTop: "20px" }}>
          Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
};

export default ColorPalette;
