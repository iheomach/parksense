import React from 'react';

import './App.css';
// Import the font CSS was moved to public/index.html
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import SearchResults from './pages/SearchResults.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        {/* Add more routes/pages here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
