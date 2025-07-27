import React, { useState } from 'react';

export default function ShapeViewer() {
  const shapes = ['Square', 'Circle', 'Triangle'];
  const [selectedShape, setSelectedShape] = useState('Square');
  const [color, setColor] = useState('red');
  const [size, setSize] = useState(150);

  return (
    <div className="content">
      <div className="header1">Geometry Portal</div>
      <div className="shape-container">
        <h3>Shape Selector</h3>
        {shapes.map((shape) => (
          <button key={shape} className="shape-button" onClick={() => setSelectedShape(shape)}>{shape}</button>
        ))}
        <div className="shape-display" style={{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: selectedShape === 'Circle' ? '50%' : '0',
          clipPath: selectedShape === 'Triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
        }}></div>
        <button className="shape-button" onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>Change Color</button>
        <button className="shape-button" onClick={() => setSize(size + 20)}>Increase Size</button>
        <button className="shape-button" onClick={() => setSize(size - 20)}>Decrease Size</button>
      </div>
    </div>
  );
}
