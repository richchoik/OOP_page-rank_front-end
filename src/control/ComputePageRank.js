import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/ComputePageRank.css'

const ComputePageRank = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isComputing, setIsComputing] = useState(true);

  useEffect(() => {
    if (location.state && location.state.status === 'success') {
      setIsComputing(false);
    }
  }, [location.state]);

  const handleTopKolsClick = () => {
    navigate('/top-kols');
  };

  return (
    <div className="App">
      <header className="App-header">
        {isComputing ? (
          <div>
            <p>Computing<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></p>
          </div>
        ) : (
          <div>
            <p>Done</p>
            <button className="btn" onClick={handleTopKolsClick}>Go to Top KOLs</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default ComputePageRank;
