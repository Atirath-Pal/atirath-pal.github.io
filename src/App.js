import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IIT_Mandi_Gallary from './pages/IIT_Mandi_Gallary'; // 1. Import the new Gallery page
import portfolioRegistry from './portfolioRegistry';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* 2. Static Route for Gallery (Hidden from Registry Loop) */}
          <Route 
            path="/internships/iit-mandi/gallary" 
            element={<IIT_Mandi_Gallary />} 
          />

          {/* Dynamic Routes from Registry (Search Results) */}
          {portfolioRegistry.map((entry) => (
            <Route
              key={entry.id}
              path={entry.path}
              element={<entry.component />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;