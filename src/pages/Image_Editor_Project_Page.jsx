import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Cpu, Rocket, Zap, ChevronDown } from 'lucide-react';

// 1. THE REUSABLE SECTION WRAPPER (From your Internship Page)
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
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm mb-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors rounded-t-xl"
      >
        <div className="flex items-center gap-4">
          <span
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isOpen ? 'bg-[#D9F2B1] text-black' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {icon}
          </span>
          <span className="text-xl font-bold">{title}</span>
        </div>
        <ChevronDown
          className={`transition-transform duration-500 ease-in-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height }}
      >
        <div ref={contentRef} className="p-6 pt-0 border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

// 2. THE MAIN PROJECT PAGE
const Image_Editor_Project = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="bg-[#F9FAF7] min-h-screen px-6 py-12 md:px-20 lg:px-40 font-sans text-black">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
        >
          ← Back to Search
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Online Image Editor</h1>
        <p className="text-lg text-gray-500 italic">High-Performance Client-Side Pixel Manipulation</p>
      </header>

      {/* INTRODUCTION BLOCK */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/5 group">
          <div className="rounded-3xl overflow-hidden bg-[#D9F2B1] p-4 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
            <img 
              src="/assets/Image_Editor.png" 
              alt="Interface mockup showing the filter and adjustment panels" 
              className="w-full h-auto rounded-2xl object-contain transform transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          </div>
        </div>
        
        <div className="w-full lg:w-3/5 text-justify">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-[#D9F2B1] inline-block">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Online Image Editor is a high-performance, browser-based photo editing application designed with a mobile-first approach. It enables users to apply professional-grade filters and fine-tune image properties instantly without any server-side processing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By leveraging the <span className="font-semibold text-black">Canvas API</span>, all manipulation occurs locally. This ensures complete data privacy and near-zero latency, as no image data ever leaves the user's device.
          </p>
          
          <div className="mt-8 flex flex-col gap-4">
            <p className="text-gray-900 font-bold flex items-center gap-2">
              Wanna try it now? <span className="animate-bounce">🚀</span>
            </p>
            <a 
              href="https://atirath-pal.github.io/Image-Editor-2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all group w-fit gap-6"
            >
              <span className="font-bold tracking-wide text-sm text-white">Launch Editor</span>
              <div className="bg-[#D9F2B1] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 1. FEATURES SECTION */}
      <SectionWrapper
        title="Core Features"
        icon={<Sparkles className="w-5 h-5" />}
        isOpen={!!openSections.features}
        onToggle={() => toggleSection('features')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 mt-6">
          <div className="lg:col-span-7 space-y-8 text-justify">
            <div className="text-gray-600 space-y-4">
              <h3 className="text-md font-bold text-gray-800 uppercase tracking-tight">Non-Destructive Manipulation</h3>
              <p className="leading-relaxed">
                The editor employs a <b>buffer-based rendering system</b>. Instead of overwriting the original image data, adjustments like Brightness, Contrast, and Saturation are calculated in real-time against a source buffer, allowing for instant "Undo/Redo" without quality loss.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-left">
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D9F2B1]">
                  <span className="font-bold text-sm block">Precision Control</span>
                  <p className="text-xs text-gray-500 mt-1">Fine-tuned adjustments using mathematical matrix transformations.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D9F2B1]">
                  <span className="font-bold text-sm block">Instant Presets</span>
                  <p className="text-xs text-gray-500 mt-1">Professional-grade filters (Grayscale, Sepia, Vintage) applied in &lt;10ms.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm p-2">
               <img src="/assets/Desktop_UI_Image_Editor_Project.png" alt="Adjustment Panel UI" className="w-full h-auto object-contain mx-auto" />
            </div>
            <p className="text-[10px] text-gray-400 text-center italic uppercase">UI: Filter & Adjustment Controls</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. TECH STACK SECTION */}
      <SectionWrapper
        title="Technical Architecture"
        icon={<Cpu className="w-5 h-5" />}
        isOpen={!!openSections.tech}
        onToggle={() => toggleSection('tech')}
      >
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             <div className="lg:col-span-8 space-y-6">
                <p className="text-gray-600 leading-relaxed text-justify">
                  To achieve maximum performance without a backend, the project utilizes the <b>HTML5 Canvas API</b>. This allows for direct pixel-level access, enabling custom image processing algorithms written in pure JavaScript.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center md:text-left">
                      <span className="text-[#8FB94B] font-bold text-xs uppercase tracking-widest">Engine</span>
                      <p className="text-sm font-bold text-gray-800">Canvas API</p>
                   </div>
                   <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center md:text-left">
                      <span className="text-[#8FB94B] font-bold text-xs uppercase tracking-widest">Logic</span>
                      <p className="text-sm font-bold text-gray-800">ES6+ JavaScript</p>
                   </div>
                   <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center md:text-left">
                      <span className="text-[#8FB94B] font-bold text-xs uppercase tracking-widest">Deployment</span>
                      <p className="text-sm font-bold text-gray-800">GitHub Actions</p>
                   </div>
                </div>

                <div className="bg-black text-white p-6 rounded-2xl flex justify-between items-center px-12">
                   <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Server Latency</p>
                      <p className="text-2xl font-bold text-[#D9F2B1]">0 ms</p>
                   </div>
                   <div className="w-px h-10 bg-gray-800"></div>
                   <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Data Privacy</p>
                      <p className="text-2xl font-bold text-[#D9F2B1]">100% Local</p>
                   </div>
                </div>
             </div>
             
             <div className="lg:col-span-4 flex items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-6">
                <p className="text-xs text-gray-400 text-center italic">
                  [Flowchart: Source Image → Canvas Context2D → Filter Matrix → Viewport Render]
                </p>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. FUTURE ROADMAP SECTION */}
      <SectionWrapper
        title="Future Roadmap"
        icon={<Rocket className="w-5 h-5" />}
        isOpen={!!openSections.future}
        onToggle={() => toggleSection('future')}
      >
        <div className="mt-8 flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto pb-6">
          <div className="flex-1 space-y-6">
            <div className="relative pl-6 border-l-2 border-[#D9F2B1] space-y-2">
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider">v3.0 - Intelligent Editing</h4>
              <p className="text-sm text-gray-600 text-justify">Integrating <b>TensorFlow.js</b> for client-side background removal and object detection without requiring an internet connection.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-gray-200 space-y-2">
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider">Advanced Layering</h4>
              <p className="text-sm text-gray-600 text-justify">Moving from a single-canvas system to a stack-based architecture to allow text overlays and multi-image compositing.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-gray-200 space-y-2">
              <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider">PWA Support</h4>
              <p className="text-sm text-gray-600 text-justify">Transforming the editor into a Progressive Web App for a native, offline-capable mobile experience.</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 bg-[#D9F2B1]/10 rounded-3xl border border-[#D9F2B1]/30 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#D9F2B1] rounded-full flex items-center justify-center mb-4 shadow-sm">
               <Zap className="text-black w-6 h-6" />
            </div>
            <h5 className="font-bold text-sm">Vision</h5>
            <p className="text-[11px] text-gray-500 mt-2">Building the fastest, most secure alternative to cloud-based editors.</p>
          </div>
        </div>
      </SectionWrapper>

      <footer className="mt-20 text-center py-16 bg-black text-white rounded-3xl relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Explore the Code</h2>
        <a 
          href="https://github.com/atirath-pal/Image-Editor-2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#D9F2B1] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all"
        >
          View on GitHub
        </a>
      </footer>
    </section>
  );
};

export default Image_Editor_Project;