import React, { useState, useEffect } from 'react';
import './App.css';
import data from "./data.json"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const TopKols = () => {
  const [localData, setLocalData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/top-kols');
        const result = await response.json();
        setLocalData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    //setLocalData(data);
  }, []);

  const handleBackHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={handleBackHome}>Back to Home</button>
        {localData.length > 0 ? (
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={localData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} barGap={10}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="username" angle={-20} textAnchor="end" tick={{ fontSize: 12 }} interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pagerank_score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available. Click Load Data to load data.</p>
        )}
      </header>
    </div>
  );
};

export default TopKols;
