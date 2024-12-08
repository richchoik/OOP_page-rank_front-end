import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCrawlButtonClick = async () => {
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

  const handleTopKolsButtonClick = () => {
    navigate('/top-kols');
  };

  const handleComputeButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/compute-pagerank', { method: 'POST' });
      if (response.ok) {
        const result = await response.json();
        navigate('/compute-pagerank', { state: result });
      } else {
        console.error('Error calling the API:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling the API:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={handleCrawlButtonClick}>Crawl data</button>
        <button className="btn" onClick={handleTopKolsButtonClick}>Top 10 KOLs</button>
        <button className="btn" onClick={handleComputeButtonClick}>Compute Pagerank</button>
      </header>
    </div>
  );
};

export default Home;
