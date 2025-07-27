import React, { useState } from 'react';

function AreaCalculator() {
  const [shape, setShape] = useState('square');
  const [dimension1, setDimension1] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    let result = 0;
    if (shape === 'square') {
      result = dimension1 * dimension1;
    } else if (shape === 'circle') {
      result = Math.PI * Math.pow(dimension1, 2);
    }
    setArea(result.toFixed(2));
  };

  return (
    <div className="content">
      <div className="header3">Area Calculator</div>
      <label>
        Select shape:
        <select className="sel" value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
      </label>
      <br />
      <input className="inp"
        type="number"
        placeholder={shape === "circle" ? "Enter radius" : "Enter side length"}
        onChange={(e) => setDimension1(e.target.value)}
      />
      <br />
      <button className="submit-button" onClick={calculateArea}>Calculate</button>
      {area !== null && <h2>Area: {area}</h2>}
    </div>
  );
}

export default AreaCalculator;
