import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import portfolioRegistry from '../portfolioRegistry';
import { useTheme } from '../context/ThemeContext';

const TABS = [
  { name: 'All', icon: '🔍' },
  { name: 'Internship', icon: '💼' },
  { name: 'Project', icon: '🛠️' },
  { name: 'Hackathon', icon: '🏆' }
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { isDarkMode, toggleTheme } = useTheme();

  const filteredResults = useMemo(() => {
    if (activeTab === 'All') return portfolioRegistry;
    return portfolioRegistry.filter((entry) => entry.category === activeTab);
  }, [activeTab]);

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  // Dynamic color for your signature SVG
  const sigColor = isDarkMode ? "#FFFFFF" : "#000000";

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] flex flex-col font-sans selection:bg-blue-100 transition-colors duration-300">
      
      {/* Sticky Top Header */}
      <header className="sticky top-0 bg-white dark:bg-[#202124] z-10 border-b border-gray-200 dark:border-gray-700 md:pt-6 pt-4 transition-colors">
        
        {/* Updated Container: flex-wrap for mobile stacking, flex-nowrap for desktop */}
        <div className="flex flex-wrap md:flex-nowrap items-center w-full gap-4 md:gap-10 px-4 md:px-8 max-w-[1400px]">
          
          {/* 1. Logo - Mobile: Left | Desktop: Left */}
          <motion.div 
            className="order-1 flex-shrink-0 cursor-pointer relative group" 
            onClick={() => setActiveTab('All')}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight flex">
              <motion.span variants={letterVariants} className="text-[#4285F4]">G</motion.span>
              <motion.span variants={letterVariants} className="text-[#EA4335]">o</motion.span>
              <motion.span variants={letterVariants} className="text-[#FBBC05]">o</motion.span>
              <motion.span variants={letterVariants} className="text-[#4285F4]">g</motion.span>
              <motion.span variants={letterVariants} className="text-[#34A853]">l</motion.span>
              <motion.span variants={letterVariants} className="text-[#EA4335]">e</motion.span>
            </h1>
            
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0" y1="20" x2="100" y2="80"
                stroke={isDarkMode ? "#9aa0a6" : "#5f6368"}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 4, repeatType: "loop" }}
              />
              <motion.line
                x1="0" y1="80" x2="100" y2="20"
                stroke={isDarkMode ? "#9aa0a6" : "#5f6368"}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut", repeat: Infinity, repeatDelay: 4, repeatType: "loop" }}
              />
            </svg>
          </motion.div>

          {/* 2. Signature - Mobile: Middle | Desktop: Far Right */}
          <div className="order-2 md:order-4 flex-shrink-0 flex items-center h-[40px]">
            <svg 
              width="120" 
              height="40" 
              viewBox="0 0 3072 1205" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-125" // Adjust scale if you want it bigger/smaller
            >
              {/* Setting the stroke and fill to your dynamic theme color */}
              <g fill={sigColor}>
                {/* Main Signature Path */}
                <motion.path 
                  d="M478.68 995.01 c48.56 -24.28 132.89 -113.32 210.64 -222.49 l23.15 -32.38 29.18 -6.96 c16 -3.95 37.65 -9.41 48 -12.42 10.35 -3.01 22.59 -5.46 27.29 -5.46 8.28 0 9.22 0.56 22.78 14.68 19.58 19.95 29.18 32 43.86 54.40 22.78 34.82 36.89 70.96 52.71 135.15 9.60 39.15 13.36 49.13 21.84 56.09 6.59 5.65 10.73 4.89 16.19 -3.39 2.82 -4.33 2.82 -7.15 0 -34.26 -6.96 -70.40 -9.98 -122.35 -12.42 -210.07 -0.94 -37.08 -1.13 -68.71 -0.56 -70.21 0.56 -1.51 7.91 -6.21 16.38 -10.54 33.32 -16.75 78.68 -46.49 114.07 -74.73 21.65 -17.32 69.27 -60.42 88.47 -80 13.55 -13.93 14.31 -14.31 22.96 -14.31 10.73 0 9.98 -4.52 7.15 45.18 -5.46 93.93 -5.46 202.35 0 263.53 4.71 54.02 12.99 83.76 28.24 102.02 8.47 10.16 26.16 18.45 39.53 18.45 29.18 0 72.47 -24.09 112.19 -62.49 21.08 -20.33 23.34 -20.71 37.65 -7.15 12.05 11.48 28.61 19.58 46.12 22.78 27.48 4.89 54.40 -7.72 87.34 -40.66 28.80 -28.99 45.55 -58.16 56.09 -97.88 l4.52 -16.94 19.58 -6.96 c10.73 -3.95 27.48 -10.92 37.08 -15.62 12.05 -5.84 20.14 -8.47 25.22 -8.47 l7.72 0 -1.13 12.80 c-0.56 6.96 -2.45 21.46 -4.14 32.38 -2.45 15.06 -3.01 27.86 -2.26 54.59 1.32 60.24 10.73 85.27 38.40 102.96 19.39 12.24 35.39 13.36 57.41 3.95 21.84 -9.22 39.53 -21.08 59.86 -40.28 5.84 -5.27 14.31 -11.67 18.82 -13.93 10.16 -5.08 32.94 -23.34 38.21 -30.49 3.20 -4.33 5.27 -5.27 11.86 -5.27 7.91 0 8.09 0.19 14.12 11.48 11.67 21.84 32 37.84 51.58 40.47 11.11 1.69 30.68 -4.52 46.12 -14.49 15.81 -9.98 38.02 -32.75 49.51 -50.26 9.60 -14.68 25.79 -45.36 25.79 -49.13 0 -1.13 3.39 -2.07 8.28 -2.07 l8.09 0 1.32 9.60 c4.33 32.94 22.96 50.82 45.55 44.05 18.45 -5.46 40.28 -21.65 58.16 -42.73 8.09 -9.79 9.79 -10.92 16.19 -10.92 l7.34 0 0 19.39 c0 18.26 0.19 19.76 4.71 23.91 l4.71 4.33 4.71 -4.33 c3.39 -3.20 7.34 -12.42 13.36 -31.81 17.13 -53.84 28.61 -78.31 62.68 -132.89 42.73 -68.52 38.59 -63.06 47.06 -63.06 7.34 0 7.72 0.38 9.79 8.09 2.82 10.73 0.94 62.31 -3.20 86.96 -2.07 11.67 -3.39 29.74 -3.39 48 -0.19 25.60 0.38 30.87 4.14 43.29 11.67 37.46 38.96 66.07 70.96 74.35 13.93 3.58 21.27 3.58 36.52 0 35.01 -8.28 97.32 -48.56 149.27 -96.75 13.18 -12.24 15.62 -15.81 12.05 -18.82 -2.07 -1.69 -5.65 0 -16.38 8.47 -102.21 78.12 -125.93 90.73 -167.15 88.85 -14.68 -0.56 -19.76 -1.69 -27.48 -5.65 -18.82 -9.60 -32.75 -28.61 -38.78 -52.33 -3.76 -15.06 -3.20 -68.14 1.13 -99.76 4.71 -33.69 4.89 -72.85 0.38 -85.65 -3.58 -10.54 -9.98 -18.26 -18.45 -22.59 -5.27 -2.82 -6.21 -2.82 -14.31 1.13 -11.29 5.46 -18.82 15.62 -50.45 66.64 -26.16 42.35 -26.16 42.35 -32.94 42.35 l-6.59 0 0 -63.44 c-0.19 -41.04 -1.32 -81.51 -3.58 -114.07 -1.88 -28.05 -2.64 -51.20 -1.88 -52.14 0.94 -0.75 21.27 -4.14 44.99 -7.53 166.78 -22.96 185.41 -25.98 185.41 -30.31 0 -6.59 -13.74 -5.84 -149.08 9.04 -45.18 4.89 -82.82 8.47 -83.39 7.72 -0.56 -0.56 -2.26 -11.86 -3.76 -25.22 -3.20 -28.61 -6.21 -39.34 -14.49 -53.46 -5.46 -9.04 -16.19 -18.82 -20.52 -18.82 -3.58 0 -14.68 11.86 -15.62 16.56 -0.75 2.82 0.19 18.64 1.69 35.20 1.51 16.56 2.82 35.20 2.82 41.60 l0 11.29 -31.44 3.20 c-17.51 1.88 -34.45 3.20 -37.65 3.20 -6.02 0 -6.21 -0.19 -6.21 -7.91 0 -4.52 1.32 -20.71 2.82 -36.33 5.08 -52.89 3.01 -68.33 -9.98 -75.11 -4.89 -2.45 -6.02 -2.45 -11.29 0.75 -12.05 7.34 -16.19 24.28 -22.21 89.41 -1.69 18.64 -3.20 34.07 -3.58 34.45 -0.75 0.94 -41.60 4.14 -101.65 7.91 -92.61 5.84 -98.45 6.78 -102.78 18.26 -2.45 6.40 1.88 12.99 10.54 16.75 11.86 4.89 48.94 2.26 134.40 -9.60 18.26 -2.64 38.59 -4.71 45.36 -4.71 l12.42 0 -0.75 104.09 c-0.56 102.21 -0.56 104.28 -5.27 128.38 -15.25 77.36 -52.33 140.99 -93.93 160.19 -10.92 5.08 -29.36 6.02 -39.15 2.07 -12.42 -5.27 -25.22 -23.72 -30.49 -44.05 -5.08 -19.76 -3.76 -44.24 4.33 -75.67 6.21 -24.85 6.96 -29.74 6.96 -51.95 0 -21.46 -0.56 -25.60 -4.33 -33.88 -6.21 -13.36 -12.80 -19.39 -24.66 -22.96 -20.14 -5.84 -40.09 1.69 -59.11 22.02 -23.91 25.60 -40.09 72.66 -42.16 124.24 -1.32 31.44 1.32 48.38 9.98 65.51 8.47 16.75 8.28 22.21 -0.75 29.74 -25.41 20.89 -46.68 30.87 -69.08 32.19 -13.18 0.75 -16.19 0.38 -23.53 -3.58 -16.94 -8.66 -20.71 -26.54 -20.71 -96.56 0 -44.99 2.45 -72.28 9.60 -110.68 3.39 -18.82 3.58 -20.89 0.75 -25.04 -1.51 -2.45 -3.58 -4.52 -4.52 -4.52 -0.94 0 -17.13 7.53 -36.14 16.75 -37.08 18.07 -64.19 28.42 -73.98 28.42 -6.02 0 -6.59 -0.56 -10.35 -11.29 -12.61 -34.45 -52.33 -57.22 -77.36 -44.24 -12.99 6.59 -22.21 23.15 -19.58 34.26 6.40 26.73 35.01 51.39 66.26 57.22 11.48 2.07 11.67 2.26 11.67 8.28 0 7.15 -6.96 28.24 -14.12 42.35 -18.45 36.71 -47.81 66.07 -77.36 77.18 -7.53 2.64 -14.87 3.76 -26.92 3.76 -14.31 0 -17.88 -0.75 -26.54 -5.08 -14.49 -7.53 -17.32 -12.42 -18.45 -30.49 -0.56 -11.48 0.38 -20.89 4.33 -40.47 5.08 -24.85 5.08 -25.98 2.07 -33.88 -7.53 -19.39 -25.60 -18.82 -34.26 1.13 -3.01 7.15 -3.39 12.61 -3.01 42.92 l0.38 34.82 -19.20 18.82 c-20.71 20.33 -48 39.72 -65.32 46.31 -14.87 5.84 -43.67 6.96 -52.71 2.26 -16 -8.47 -22.96 -27.11 -27.48 -74.92 -5.84 -61.93 -5.46 -181.84 0.94 -252.42 3.76 -42.35 9.98 -88.28 12.05 -90.73 1.32 -1.32 28.61 -6.78 63.44 -12.61 125.36 -20.89 259.20 -46.68 323.58 -62.31 60.42 -14.68 118.78 -37.84 114.26 -45.36 -0.75 -1.13 -30.31 4.14 -78.87 13.93 -90.35 18.26 -148.14 29.18 -218.92 40.85 -78.87 13.18 -170.54 25.60 -187.67 25.60 l-9.04 0 0 -6.96 c0 -3.95 3.95 -27.11 8.66 -51.39 9.60 -47.44 9.79 -52.89 2.07 -64 -6.78 -9.98 -13.55 -14.31 -19.58 -12.05 -12.42 4.33 -15.81 16 -25.98 86.40 -3.58 25.98 -7.34 48.75 -8.28 51.01 -2.07 4.52 -9.22 5.46 -95.25 12.05 -71.72 5.46 -84.33 7.53 -92.61 15.44 -5.65 5.27 -5.46 7.53 1.88 15.81 11.86 13.55 29.18 17.32 66.26 13.93 12.42 -1.13 32.19 -2.45 43.86 -3.20 l21.08 -1.13 0 6.02 c0 7.91 -9.04 18.64 -36.89 43.67 -41.60 37.27 -79.06 65.32 -117.84 87.91 -27.86 16.38 -34.64 19.58 -40.28 18.82 l-5.46 -0.56 0.56 -36.71 c1.69 -111.06 12.24 -227.01 26.73 -292.14 3.95 -16.94 3.95 -17.32 0.38 -22.02 -4.71 -6.40 -9.98 -6.96 -14.87 -1.69 -2.07 2.45 -9.22 14.49 -15.62 26.92 -29.36 56.09 -65.69 120.28 -100.71 176.94 -39.72 64.56 -66.26 106.92 -82.26 131.39 -16.19 24.66 -17.32 25.79 -23.34 25.79 -3.58 0 -10.35 -2.45 -16 -5.65 -28.99 -17.13 -76.61 -35.01 -106.92 -40.28 -22.96 -3.95 -36.71 -3.76 -57.60 0.56 -25.22 5.27 -42.54 14.12 -59.67 30.12 -32.94 30.87 -40.66 71.91 -19.39 102.96 16.94 24.47 48.94 32.94 110.68 28.80 15.62 -0.94 38.59 -2.26 50.82 -3.01 l22.02 -1.13 0 6.59 c0 5.27 -4.33 12.05 -26.16 41.22 -66.07 87.91 -133.08 157.74 -170.35 177.51 -7.15 3.76 -11.86 4.89 -20.71 4.89 -19.39 -0.19 -29.74 -6.96 -55.34 -37.27 -7.72 -9.04 -11.11 -11.67 -15.25 -11.67 -11.48 0 -12.42 7.91 -2.45 22.78 16.38 24.47 34.64 40.47 54.02 47.44 12.61 4.52 22.78 3.20 39.15 -5.08z" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* Small accent path for the dot/accent */}
                <motion.path 
                  d="M1418.92 579.76 c-10.73 -5.84 -17.32 -18.45 -17.32 -33.69 0 -14.87 4.52 -24.85 15.81 -34.45 12.80 -11.11 28.42 -13.74 42.54 -7.34 20.71 9.41 23.15 42.92 4.89 64.38 -12.24 14.12 -31.25 18.82 -45.93 11.11z" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
              </g>
            </svg>
          </div>

          {/* 3. Toggle Button - Mobile: Right side (ml-auto) | Desktop: Middle-Right */}
          <button 
            onClick={toggleTheme}
            className="order-3 md:order-3 ml-auto md:ml-0 p-3 flex-shrink-0 rounded-full bg-gray-100 dark:bg-[#303134] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* 4. Search Bar - Mobile: Full width below top items | Desktop: Middle (flex-1) */}
          <div className="order-4 md:order-2 w-full md:flex-1 md:max-w-[692px] relative group flex items-center">
            <div className="w-full flex items-center gap-3 bg-white dark:bg-[#303134] rounded-full shadow-md border border-gray-200 dark:border-transparent hover:shadow-lg focus-within:shadow-lg transition-shadow px-5 py-3">
              <span className="text-gray-400">🔍</span>
              <input 
                type="text" 
                readOnly 
                value="Search my portfolio..." 
                className="w-full outline-none text-[16px] bg-transparent text-gray-800 dark:text-gray-200 cursor-default"
              />
              <div className="flex gap-3 border-l pl-3 border-gray-200 dark:border-gray-600">
                 <span className="cursor-pointer">🎙️</span>
                 <span className="cursor-pointer">📷</span>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Tabs - Remains Completely Unchanged */}
        <nav className="flex px-4 md:ml-[160px] mt-4 gap-6 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 pb-3 px-1 text-sm transition-colors whitespace-nowrap border-b-4 ${
                activeTab === tab.name
                  ? 'border-[#1A73E8] text-[#1A73E8] dark:text-[#8ab4f8] dark:border-[#8ab4f8]'
                  : 'border-transparent text-[#70757a] dark:text-[#9aa0a6] hover:text-black dark:hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area - Remains Completely Unchanged */}
      <main className="flex-1 px-4 md:ml-[160px] mt-2 max-w-[652px]">
        <p className="text-sm text-[#70757a] dark:text-[#9aa0a6] py-3">
          About {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} ({Math.random().toFixed(2)} seconds)
        </p>

        <section className="mt-2 mb-16 space-y-8">
          {filteredResults.map((entry) => (
            <article key={entry.id} className="group">
              <Link to={entry.path} className="block">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-7 h-7 bg-gray-100 dark:bg-[#3c4043] rounded-full flex items-center justify-center text-[10px] text-gray-500 dark:text-[#9aa0a6]">
                    {entry.urlDisplay.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#202124] dark:text-[#e8eaed] leading-tight">{entry.urlDisplay}</span>
                    <span className="text-[12px] text-[#70757a] dark:text-[#9aa0a6] leading-tight">{entry.path}</span>
                  </div>
                </div>
                <h2 className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] group-hover:underline pt-1">
                  {entry.title}
                </h2>
              </Link>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug mt-1">
                <span className="text-[#70757a] dark:text-[#9aa0a6]">Mar 5, 2026 — </span>
                {entry.snippet}
              </p>
            </article>
          ))}
        </section>
      </main>

      {/* Footer - Remains Completely Unchanged */}
      <footer className="bg-[#f2f2f2] dark:bg-[#171717] border-t border-gray-300 dark:border-gray-800 px-4 md:px-[160px] py-3 text-sm text-[#70757a] dark:text-[#9aa0a6] transition-colors">
        <div className="flex gap-6">
          <span className="font-bold border-r pr-6 border-gray-300 dark:border-gray-700">India</span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;