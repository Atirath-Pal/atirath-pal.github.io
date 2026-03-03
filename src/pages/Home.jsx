import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F9FAF7] flex flex-col items-center justify-center font-sans p-6">
      <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
      <p className="text-gray-600 mb-12 text-center max-w-md">
        Welcome! Select a section below to see my work and experiences.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Link acts like an <a> tag but doesn't reload the page */}
        <Link 
          to="/internship" 
          className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
        >
          View Internship
        </Link>

        <Link 
          to="/projects" 
          className="px-8 py-4 border-2 border-black text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;