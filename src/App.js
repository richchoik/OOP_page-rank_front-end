import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TopKols from './TopKols';
import Crawl from './Crawl';
import ComputePageRank from './ComputePageRank';
import Error from './Error';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/top-kols" element={<TopKols />} />
        <Route path="/crawl" element={<Crawl />} />
        <Route path="/compute-pagerank" element={<ComputePageRank />} />
        <Route path="/error" element={<Error />} />
        {/*<Route path="/" element={<div>Welcome! Please navigate to /home</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
