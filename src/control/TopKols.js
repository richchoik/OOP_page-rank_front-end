import React, { useState, useEffect } from 'react';
import '../App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
//import datas from "../localData/data.json";

const TopKols = () => {
  const [localData, setLocalData] = useState([]);
  const [computedAt, setComputedAt] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/top-kols');
        const result = await response.json();
        setLocalData(result.data || []);
        setComputedAt(result.computed_at || '');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLocalData([]);
      }
    };

    fetchData();
    //setLocalData(datas.data);
    //setComputedAt(datas.computed_at);
  }, []);

  const handleBackHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={handleBackHome}>Back to Home</button>
        {computedAt && <p>Computed at: {new Date(computedAt).toLocaleString()}</p>}
        {localData.length > 0 ? (
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={localData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }} barGap={10}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="username" angle={-15} textAnchor="end" tick={{ fontSize: 15, fill: '#ffffff' }} interval={0} />
              <YAxis tick={{ fontSize: 20, fill: '#ffffff' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="pagerank_score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available. Back to home to crawl data.</p>
        )}
      </header>
    </div>
  );
};

export default TopKols;
