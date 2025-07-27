import React from 'react';

export default function JSButton() {
  const handleRedirect = () => {
    window.location.href = '/introduction.html';
  };

  return (
    <button className="javascript" onClick={handleRedirect}>
      Javascript
    </button>
  );
}
