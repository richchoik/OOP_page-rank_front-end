import React, { useState } from 'react';
import '../style/ChangeWeights.css';
import { useNavigate } from 'react-router-dom';

const ChangeWeights = () => {
  const [weights, setWeights] = useState({
    comment: 1.2,
    follow: 1.0,
    mention: 0.8,
    post: 3.0,
    retweet: 1.5
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWeights((prevWeights) => ({
      ...prevWeights,
      [name]: parseFloat(value)
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/weights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(weights),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setMessage('Weights updated successfully');
      } else {
        setMessage('Error updating weights: ' + result.message);
      }
    } catch (error) {
      setMessage('Error updating weights: ' + error.message);
    }
  };

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Change Weights</h1>
        <form>
          {Object.keys(weights).map((key) => (
            <div key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              <input
                type="number"
                id={key}
                name={key}
                value={weights[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </form>
        {message && <p>{message}</p>}
        <button className="btn" onClick={handleSubmit}>Submit</button>
        <button className="btn" onClick={handleCancel}>Cancel</button>
      </header>
    </div>
  );
};

export default ChangeWeights;
