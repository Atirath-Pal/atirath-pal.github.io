import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import portfolioRegistry from '../portfolioRegistry';

const TABS = ['All', 'Internship', 'Project', 'Hackathon'];

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResults = useMemo(() => {
    if (activeTab === 'All') {
      return portfolioRegistry;
    }
    return portfolioRegistry.filter(
      (entry) => entry.category === activeTab
    );
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F9FAF7] flex flex-col items-center font-sans">
      {/* Top bar */}
      <header className="w-full flex items-center justify-end px-4 py-3 text-sm text-gray-600">
        <a
          href="mailto:youremail@example.com"
          className="hover:underline"
        >
          Contact
        </a>
      </header>

      {/* Google-style center search area */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <div className="mt-10 mb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#DB4437]">o</span>
            <span className="text-[#F4B400]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#0F9D58]">l</span>
            <span className="text-[#DB4437]">e</span>
            <span className="ml-2 text-gray-800 text-3xl align-top">
              for my work
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Type-free search: use the filters below to explore internships, projects, and experiments like a personal search engine.
          </p>
        </div>

        {/* Fake search bar */}
        <div className="w-full max-w-3xl">
          <div className="flex items-center gap-3 bg-white rounded-full shadow-sm border border-gray-200 px-5 py-3">
            <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
            <span className="text-gray-400 text-sm md:text-base">
              Search my portfolio (filters below)
            </span>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-t-md border-b-2 -mb-px transition-colors ${
                  activeTab === tab
                    ? 'border-[#1A73E8] text-[#1A73E8] font-medium bg-white'
                    : 'border-transparent text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <section className="w-full max-w-3xl mt-6 mb-16 text-left">
          <p className="text-xs text-gray-500 mb-4">
            About {filteredResults.length} result
            {filteredResults.length !== 1 ? 's' : ''} • Filter:{' '}
            <span className="font-medium text-gray-700">
              {activeTab}
            </span>
          </p>

          <div className="space-y-6">
            {filteredResults.map((entry) => (
              <article key={entry.id} className="group">
                <Link to={entry.path}>
                  <div className="text-xs text-[#202124] mb-1">
                    {entry.urlDisplay}
                  </div>
                  <h2 className="text-xl text-[#1A0DAB] group-hover:underline">
                    {entry.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#4d5156] leading-relaxed">
                    {entry.snippet}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {entry.category}
                  </p>
                </Link>
              </article>
            ))}

            {filteredResults.length === 0 && (
              <div className="text-sm text-gray-500">
                Nothing here yet. Once I publish more{' '}
                {activeTab.toLowerCase()}s, they’ll show up automatically.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
