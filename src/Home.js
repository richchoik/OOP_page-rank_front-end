import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButton1Click = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/crawl', { method: 'POST' });
      if (response.ok) {
        navigate('/crawl');
      } else {
        console.error('Error calling the API:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling the API:', error);
    }
  };

  const handleButton2Click = () => {
    navigate('/top-kols');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={handleButton1Click}>Crawl Data</button>
        <button className="btn" onClick={handleButton2Click}>Top 10 KOLs</button>
        <button className="btn">Button 3</button>
      </header>
    </div>
  );
};

export default Home;
