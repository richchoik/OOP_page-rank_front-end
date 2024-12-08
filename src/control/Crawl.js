import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/Crawl.css';

const Crawl = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCrawling, setIsCrawling] = useState(true);

  useEffect(() => {
    if (location.state && location.state.status) {
      setIsCrawling(false);
    }
  }, [location.state]);

  const handleComputePagerankClick = () => {
    navigate('/compute-pagerank');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        {isCrawling ? (
          <div>
            <p>Crawling Data<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></p>
          </div>
        ) : location.state.status === 'success' ? (
          <div>
            <p>Crawling completed successfully!</p>
            <button className="btn" onClick={handleComputePagerankClick}>Compute Pagerank</button>
            <button className="btn" onClick={handleHomeClick}>Go to Home</button>
          </div>
        ) : (
          <div>
            <p>Crawling failed. Please try again.</p>
            <button className="btn" onClick={handleHomeClick}>Go to Home</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Crawl;
