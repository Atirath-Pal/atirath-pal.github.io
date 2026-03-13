import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Cpu, Rocket, ChevronDown, Code2, Terminal, Zap, Globe } from 'lucide-react';

// --- SHARED UI COMPONENTS (Internalized) ---

const SectionWrapper = ({ title, icon, isOpen, onToggle, children }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#303134] shadow-sm mb-4 transition-colors duration-300">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors rounded-t-xl"
      >
        <div className="flex items-center gap-4">
          <span
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isOpen ? 'bg-[#D9F2B1] text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}
          >
            {icon}
          </span>
          <span className="text-xl font-bold dark:text-white">{title}</span>
        </div>
        <ChevronDown
          className={`transition-transform duration-500 ease-in-out dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height }}
      >
        <div ref={contentRef} className="p-6 pt-0 border-t border-gray-50 dark:border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

const ImageSlider = ({ desktopImg, mobileImg }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const isMobileView = window.innerWidth < 1024;
    setIsMobileDevice(isMobileView);
    if (isMobileView) {
      setImages([mobileImg, desktopImg]); 
    } else {
      setImages([desktopImg, mobileImg]); 
    }
  }, [desktopImg, mobileImg]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 1 ? 0 : 1));
  
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const getCaption = () => {
    if (isMobileDevice) {
      return currentIndex === 0 ? "Mobile View" : "Desktop View";
    }
    return currentIndex === 0 ? "Desktop View" : "Mobile View";
  };

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700 group">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-2 bg-white dark:bg-gray-800">
              <img 
                src={img} 
                alt={getCaption()} 
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ChevronDown className="rotate-90 w-5 h-5" />
        </button>
        <button onClick={nextSlide} className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <ChevronDown className="-rotate-90 w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'bg-black dark:bg-white w-4' : 'bg-gray-300 dark:bg-gray-600 w-1.5'}`} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-px w-8 bg-gray-200 dark:bg-gray-700"></div>
        <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] animate-pulse">
          {getCaption()}
        </p>
        <div className="h-px w-8 bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

// --- MAIN PROJECT COMPONENT ---

const AlgoMentorProject = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="bg-[#F9FAF7] dark:bg-[#202124] min-h-screen px-6 py-12 md:px-20 lg:px-40 font-sans text-black dark:text-white transition-colors duration-300">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Search
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">Algo-Mentor</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 italic">Universal Code Compiler & Algorithm Playground</p>
      </header>

      {/* INTRODUCTION BLOCK */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/5 group">
          <div className="rounded-3xl overflow-hidden bg-[#D9F2B1] p-4 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
            <img 
              src="/assets/Algo_Mentor_Mockup.png" 
              alt="Algo-Mentor UI" 
              className="w-full h-auto rounded-2xl object-contain transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
        </div>
        
        <div className="w-full lg:w-3/5 text-justify">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-[#D9F2B1] inline-block dark:text-white">
            Project Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Algo-Mentor is an advanced <span className="font-semibold text-black dark:text-white">cloud-integrated code editor</span> built for speed and precision. It allows developers to write, test, and debug algorithms across 20+ programming languages with zero local setup.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By integrating the <span className="font-semibold text-black dark:text-white">Monaco Editor engine</span> and Judge0 API, the platform provides a production-grade coding environment directly in the browser, featuring real-time syntax highlighting and instantaneous output.
          </p>
          
          <div className="mt-8 flex flex-col gap-4">
            <p className="text-gray-900 dark:text-gray-200 font-bold flex items-center gap-2">
              Ready to code? <span className="animate-bounce">💻</span>
            </p>
            <a 
              href="https://algo-mentor-rust.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all group w-fit gap-6"
            >
              <span className="font-bold tracking-wide text-sm text-white">Start Compiling</span>
              <div className="bg-[#D9F2B1] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <Zap size={18} fill="black" stroke="black" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 1. FEATURES SECTION */}
      <SectionWrapper
        title="Core Capabilities"
        icon={<Sparkles className="w-5 h-5" />}
        isOpen={!!openSections.features}
        onToggle={() => toggleSection('features')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 mt-6 items-center text-left">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Developer Experience</h3>
            <ul className="space-y-5">
              {[
                { title: "Intelligent Autocomplete", desc: "Monaco-powered IntelliSense for faster coding." },
                { title: "Multi-Language Runtime", desc: "Support for C++, Python, Java, JS, and more." },
                { title: "Standard Input/Output", desc: "Simulate real competitive programming environments." },
                { title: "Dynamic Themes", desc: "Toggle between VS Code-inspired Dark and Light modes." },
                { title: "Error Diagnostics", desc: "Direct stack trace reporting and syntax error highlighting." }
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#D9F2B1] shrink-0 shadow-[0_0_8px_rgba(217,242,177,0.5)]" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-gray-100 block">{feature.title}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-7">
            <ImageSlider 
              desktopImg="/assets/Algo_Mentor_Desktop.png" 
              mobileImg="/assets/Algo_Mentor_Mobile.png" 
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. TECH STACK SECTION */}
      <SectionWrapper
        title="Technical Stack"
        icon={<Cpu className="w-5 h-5" />}
        isOpen={!!openSections.tech}
        onToggle={() => toggleSection('tech')}
      >
        <div className="mt-6 max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify md:text-center max-w-3xl mx-auto">
              To build a reliable editor, I chose technologies that balance performance with extensibility. The project utilizes a serverless architecture for code execution via RESTful APIs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Interface Engine", title: "Monaco Editor", img: "/assets/monaco_logo.webp", alt: "Monaco" },
                { label: "Frontend Library", title: "React + Tailwind", img: "/assets/react_logo.png", alt: "React" },
                { label: "Execution Layer", title: "Judge0 API", img: "/assets/compiler_logo.webp", alt: "API" },
              ].map((tech, i) => (
                <div key={i} className="bg-white dark:bg-[#3c4043] border border-gray-100 dark:border-gray-700 p-5 rounded-2xl shadow-sm flex items-center gap-4 transition-colors">
                  <div className="w-24 h-12 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center p-2">
                    <img src={tech.img} alt={tech.alt} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[#8FB94B] font-bold text-[10px] uppercase tracking-widest block">{tech.label}</span>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{tech.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. FUTURE ROADMAP SECTION */}
      <SectionWrapper
        title="Evolution Strategy"
        icon={<Rocket className="w-5 h-5" />}
        isOpen={!!openSections.future}
        onToggle={() => toggleSection('future')}
      >
        <div className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto pb-6">
          <div className="flex-1 space-y-8">
            <div className="relative pl-6 border-l-2 border-[#D9F2B1] space-y-2">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 uppercase text-xs tracking-wider">AI Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                Implementing <b>AI Refactoring</b> tools to suggest code optimizations and explain time complexity of the written algorithm.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-[#D9F2B1] space-y-2">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 uppercase text-xs tracking-wider">Live Pair Programming</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                Using <b>WebSockets (Socket.io)</b> to allow multiple users to collaborate on the same code snippet in real-time.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex items-center justify-center">
             <div className="p-8 bg-[#D9F2B1]/10 rounded-full animate-pulse">
                <Code2 size={80} className="text-[#D9F2B1]" />
             </div>
          </div>
        </div>
      </SectionWrapper>

      <footer className="mt-20 text-center py-16 bg-black dark:bg-[#171717] text-white rounded-3xl relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Ready to Inspect?</h2>
        <a 
          href="https://github.com/Atirath-Pal/NextGenHack-Sneaky_Coderz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#D9F2B1] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all"
        >
          View Source on GitHub
        </a>
      </footer>
    </section>
  );
};

export default AlgoMentorProject;