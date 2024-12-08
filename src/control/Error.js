import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Error.css'

const Error = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>An error occurred. Please try again.</p>
        <button className="btn" onClick={handleHomeButtonClick}>Go to Home</button>
      </header>
    </div>
  );
};

export default Error;
