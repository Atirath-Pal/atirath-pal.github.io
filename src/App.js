import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import IITMandiGallery from './pages/IIT_Mandi_Gallary';
import portfolioRegistry from './portfolioRegistry';

function App() {
  return (
    <ThemeProvider>
      {/* This wrapper ensures the background changes everywhere */}
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/internships/iit-mandi/gallary" element={<IITMandiGallery />} />
              {portfolioRegistry.map((entry) => (
                <Route key={entry.id} path={entry.path} element={<entry.component />} />
              ))}
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;