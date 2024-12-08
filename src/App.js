import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/top-kols');
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn">Button 1</button>
        <button className="btn" onClick={fetchData}>Hiển thị top 10 KOLs</button>
        <button className="btn">Button 3</button>
        <div className="data-container">
          {data.map(item => (
            <div key={item.user_id} className="data-item">
              <h3>{item.username}</h3>
              <p>Followers: {item.followers}</p>
              <p>Following: {item.following}</p>
              <p>Posts: {item.posts_cnt}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
