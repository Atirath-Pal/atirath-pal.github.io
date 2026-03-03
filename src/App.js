import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IITMandiInternship from './pages/IIT_Mandi_Internship';
import Image_Editor_Project from './pages/Image_Editor_Project_Page.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Path "/" is your landing page */}
          <Route path="/" element={<Home />} />
          
          {/* Path for your Internship page */}
          <Route path="/internship" element={<IITMandiInternship />} />
          
          {/* Path for your Project page */}
          <Route path="/projects" element={<Image_Editor_Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;