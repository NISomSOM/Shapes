import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShapeViewer from './components/ShapeViewer';
import Quiz from './components/Quiz';
import AreaCalculator from './components/AreaCalculator';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShapeViewer />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/area" element={<AreaCalculator />} />
      </Routes>
    </>
  );
}
