import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import portfolioRegistry from './portfolioRegistry';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
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
