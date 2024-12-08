import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButton2Click = () => {
    navigate('/top-kols');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn">Button 1</button>
        <button className="btn" onClick={handleButton2Click}>Top 10 KOLs</button>
        <button className="btn">Button 3</button>
      </header>
    </div>
  );
};

export default Home;
