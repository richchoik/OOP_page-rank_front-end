import React, { useEffect, useState } from 'react';
import '../style/Weights.css';
import { useNavigate } from 'react-router-dom';
// import data from "../localData/weights.json"

const Weights = () => {
  const [weights, setWeights] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weights');
        const result = await response.json();
        if (result.status === 'success') {
          setWeights(result.weights);
          setLoading(false);
        } else {
          setLoading(false);
          setError('Error fetching weights: ' + result.message);
          setWeights([]);
        }
      } catch (error) {
        setLoading(false);
        setError('Error fetching weights: ' + error.message);
        setWeights([]);
      }
    };

    fetchWeights();
    // setWeights(data.weights);
  }, []);

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleChangeWeightClick = () => {
    navigate('/change-weights');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weights</h1>
        {loading ? (
          <p>Loading weights<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(weights).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn" onClick={handleChangeWeightClick}>Change weights</button>
          </div>
        )}
        <button className="btn" onClick={handleHomeClick}>Go to Home</button>
      </header>
    </div>
  );
};

export default Weights;
