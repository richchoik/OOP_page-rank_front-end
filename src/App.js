import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './control/Home';
import TopKols from './control/TopKols';
import Crawl from './control/Crawl';
import ComputePageRank from './control/ComputePageRank';
import Error from './control/Error';
import Weights from './control/Weights';
import './App.css';
import ChangeWeights from './control/ChangeWeights';

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
        <Route path="/weights" element={<Weights />} />
        <Route path="/change-weights" element={<ChangeWeights />} />
        {/*<Route path="/" element={<div>Welcome! Please navigate to /home</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
