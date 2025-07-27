import React, { useState } from 'react';

function Quiz() {
  const questions = [
    { question: "How many sides does a triangle have?", type: "text", answer: "3" },
    { question: "Which shape has 4 equal sides?", type: "text", answer: "Square" },
    { question: "What is the shape of a wheel?", type: "radio", options: ["Square", "Circle", "Triangle"], answer: "Circle" },
    { question: "A stop sign has how many sides?", type: "text", answer: "8" },
    { question: "Which shape has no sides?", type: "radio", options: ["Triangle", "Circle", "Square"], answer: "Circle" },
    { question: "How many vertices does a rectangle have?", type: "text", answer: "4" },
    { question: "Which shape is commonly used for pizza slices?", type: "radio", options: ["Circle", "Triangle", "Hexagon"], answer: "Triangle" },
    { question: "A cube has how many faces?", type: "text", answer: "6" },
    { question: "Which shape best represents a die?", type: "radio", options: ["Sphere", "Cube", "Cylinder"], answer: "Cube" },
    { question: "What is the name of a shape with five sides?", type: "text", answer: "Pentagon" }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(10).fill(''));
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i].toString().toLowerCase() === q.answer.toString().toLowerCase()) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="content">
      <div className="header2">Shapes Quiz</div>
      <ol>
        {questions.map((q, i) => (
          <li key={i}>
            <p><strong>{q.question}</strong></p>
            {q.type === "text" ? (
              <input type="text" onChange={(e) => handleChange(i, e.target.value)} />
            ) : (
              q.options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={option}
                    onChange={() => handleChange(i, option)}
                  />
                  {option}
                </label>
              ))
            )}
          </li>
        ))}
      </ol>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {score !== null && <h2>Your score: {score} / 10</h2>}
    </div>
  );
}

export default Quiz;
