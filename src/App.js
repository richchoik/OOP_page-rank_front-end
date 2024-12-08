import React, { useState } from 'react';
import './App.css';
import data from './data.json';  // Giả sử file data.json nằm cùng thư mục với App.js
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const [localData, setLocalData] = useState([]);

  // Hàm này được dùng để lấy dữ liệu từ API, nhưng hiện tại đang sử dụng dữ liệu tạm từ file data.json
  const fetchData = async () => {
    /*
    try {
      const response = await fetch('http://localhost:5000/api/top-kols');
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    */

    // Sử dụng dữ liệu từ file data.json
    setLocalData(data);
  };

  // Hàm này để ngưng hiển thị dữ liệu
  const clearData = () => {
    setLocalData([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn">Button 1</button>
        <button className="btn" onClick={fetchData}>Button 2</button>
        <button className="btn" onClick={clearData}>Clear Data</button>
        {localData.length > 0 ? (
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={localData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="username" angle={-16} textAnchor="end" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pagerank_score" fill="#8884d8"  />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available. Click Button 2 to load data.</p>
        )}
      </header>
    </div>
  );
}

export default App;
