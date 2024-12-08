import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCrawlButtonClick = () => {
    navigate('/crawl');
    fetch('http://localhost:5000/api/crawl', { method: 'POST' })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          navigate('/crawl', { state: { status: 'success' } });
        } else {
          navigate('/crawl', { state: { status: 'error' } });
        }
      })
      .catch(error => {
        console.error('Error calling the API:', error);
        navigate('/crawl', { state: { status: 'error' } });
      });
  };

  const handleTopKolsButtonClick = () => {
    navigate('/top-kols');
  };

  const handleComputeButtonClick = () => {
    navigate('/compute-pagerank');
    fetch('http://localhost:5000/api/compute-pagerank', { method: 'POST' })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          navigate('/compute-pagerank', { state: result });
        } else {
          navigate('/error');
        }
      })
      .catch(error => {
        console.error('Error calling the API:', error);
        navigate('/error');
      });
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
