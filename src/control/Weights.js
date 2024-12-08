import React, { useEffect, useState } from 'react';
import '../style/Weights.css';
import { useNavigate } from 'react-router-dom';
//import data from "../localData/weights.json"

const Weights = () => {
  const [weights, setWeights] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weights');
        const result = await response.json();
        if (result.status === 'success') {
          setWeights(result.weights);
        } else {
          console.error('Error fetching weights:', result.message);
        }
      } catch (error) {
        console.error('Error fetching weights:', error);
      }
    };

    fetchWeights();
    //setWeights(data.weights)
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
        {Object.keys(weights).length > 0 ? (
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
        ) : (
          <p>Loading weights...</p>
        )}
        <button className="btn" onClick={handleHomeClick}>Go to Home</button>
        <button className="btn" onClick={handleChangeWeightClick}>Change weights</button>
      </header>
    </div>
  );
};

export default Weights;
