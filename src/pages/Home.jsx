import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import portfolioRegistry from '../portfolioRegistry';

const TABS = [
  { name: 'All', icon: '🔍' },
  { name: 'Internship', icon: '💼' },
  { name: 'Project', icon: '🛠️' },
  { name: 'Hackathon', icon: '🏆' }
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResults = useMemo(() => {
    if (activeTab === 'All') return portfolioRegistry;
    return portfolioRegistry.filter((entry) => entry.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100">
      {/* Sticky Top Header */}
      <header className="sticky top-0 bg-white z-10 border-b border-gray-200 md:pt-6 pt-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 px-4 md:px-8 max-w-[1400px]">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setActiveTab('All')}>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </h1>
          </div>

          {/* Search Bar Container */}
          <div className="w-full max-w-[692px] relative group">
            <div className="flex items-center gap-3 bg-white rounded-full shadow-md border border-transparent hover:shadow-lg focus-within:shadow-lg transition-shadow px-5 py-3 border-gray-200">
              <span className="text-gray-400">🔍</span>
              <input 
                type="text" 
                readOnly 
                value="Search my portfolio..." 
                className="w-full outline-none text-[16px] text-gray-800 cursor-default"
              />
              <div className="flex gap-3 border-l pl-3 border-gray-200">
                 <span className="cursor-pointer">🎙️</span>
                 <span className="cursor-pointer">📷</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex px-4 md:ml-[160px] mt-4 gap-6 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 pb-3 px-1 text-sm transition-colors whitespace-nowrap border-b-4 ${
                activeTab === tab.name
                  ? 'border-[#1A73E8] text-[#1A73E8]'
                  : 'border-transparent text-[#70757a] hover:text-black'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 md:ml-[160px] mt-2 max-w-[652px]">
        {/* Result Stats */}
        <p className="text-sm text-[#70757a] py-3">
          About {filteredResults.length} result
          {filteredResults.length !== 1 ? 's' : ''} ({Math.random().toFixed(2)} seconds)
        </p>

        {/* Results List */}
        <section className="mt-2 mb-16 space-y-8">
          {filteredResults.map((entry) => (
            <article key={entry.id} className="group">
              <Link to={entry.path} className="block">
                <div className="flex items-center gap-3 mb-1">
                  {/* Fake Favicon */}
                  <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-500">
                    {entry.urlDisplay.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#202124] leading-tight">{entry.urlDisplay}</span>
                    <span className="text-[12px] text-[#70757a] leading-tight">{entry.path}</span>
                  </div>
                </div>
                <h2 className="text-[20px] text-[#1a0dab] group-hover:underline pt-1">
                  {entry.title}
                </h2>
              </Link>
              <p className="text-[14px] text-[#4d5156] leading-snug mt-1">
                <span className="text-[#70757a]">Mar 5, 2026 — </span>
                {entry.snippet}
              </p>
            </article>
          ))}

          {filteredResults.length === 0 && (
            <div className="py-10">
              <p className="text-gray-800">Your search - <strong>{activeTab}</strong> - did not match any documents.</p>
              <ul className="list-disc ml-10 mt-4 text-sm text-gray-600">
                <li>Make sure all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
              </ul>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f2f2f2] border-t border-gray-300 px-4 md:px-[160px] py-3 text-sm text-[#70757a]">
        <div className="flex gap-6">
          <span className="font-bold border-r pr-6 border-gray-300">India</span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;