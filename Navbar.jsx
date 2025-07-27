import React from 'react';
import { Link } from 'react-router-dom';
import JSButton from './JSButton';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Geometry Portal</Link>
      <Link to="/quiz">Shapes Quiz</Link>
      <Link to="/area">Area Calc</Link>
      <div className="navbar-bottom">
        <JSButton />
      </div>
    </div>
  );
}
