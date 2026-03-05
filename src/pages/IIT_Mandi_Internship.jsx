import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Code, Map, Microscope, Users, Star, ArrowRight } from 'lucide-react';

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
        <div
          ref={contentRef}
          className="p-6 pt-0 border-t border-gray-50"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const IITMandiInternship = () => {
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
        <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors">
          ← Back to Search
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Internship at IIT Mandi</h1>
        <p className="text-lg text-gray-500 italic">Centre for Human Computer Interaction (CHCi)</p>
      </header>

      {/* INTRODUCTION */}
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-gray-200 aspect-video shadow-lg">
          <img src="/assets/IIT-Mandi-Campus.jpg" alt="IIT Mandi" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 text-justify">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-[#D9F2B1] inline-block">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During my research internship at the CHCi Lab, IIT Mandi, I worked under the supervision of <strong>Prof. Dr. Shubhajit Roy Chowdhury</strong> and my mentor <strong>Mr. Divyanshu Bajpai</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I developed a framework that reduces manual processing time by <strong>90%</strong>, transforming a 50-minute manual process into a 5-minute automated workflow.
          </p>
        </div>
      </div>

      {/* SECTIONS */}
      <SectionWrapper
        title="Development & Automation"
        icon={<Code />}
        isOpen={!!openSections.coding}
        onToggle={() => toggleSection('coding')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="text-justify text-gray-600 space-y-4">
            <p>I built the backend using Python, integrating Selenium for automated data scraping. This allowed for high-throughput docking without manual file downloads.</p>
            <div className="bg-[#F3F4F1] p-4 rounded-lg border-l-4 border-[#D9F2B1]">
              <span className="text-sm font-bold block mb-1">Tech Stack:</span>
              <p className="text-xs font-mono">Python, Selenium, RDKit, Streamlit</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 aspect-video bg-white shadow-inner">
            <img src="/assets/Loading-Screen.png" alt="Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="System Architecture"
        icon={<Map />}
        isOpen={!!openSections.flowchart}
        onToggle={() => toggleSection('flowchart')}
      >
        <div className="mt-6 space-y-6">
          <p className="text-gray-600 text-justify">The docking pipeline follows a modular logic to ensure reproducibility across protein-ligand pairs.</p>
          <div className="w-full rounded-xl bg-white p-4 md:p-8 border border-gray-200 shadow-sm flex flex-col items-center">
            <img src="/assets/flowchart.svg" alt="Flowchart" className="max-w-full h-auto object-contain" style={{ maxHeight: '600px' }} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Research & User Study"
        icon={<Microscope />}
        isOpen={!!openSections.research}
        onToggle={() => toggleSection('research')}
      >
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 text-justify text-gray-600">
            <p>I conducted a quantitative user study with research scholars at IIT Mandi to refine the UI based on SUS scores.</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-center text-center">
            <p className="text-3xl font-bold text-[#D9F2B1]">90%</p>
            <p className="text-sm text-gray-400">Error Reduction</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Life in Kamand Valley"
        icon={<Users />}
        isOpen={!!openSections.nature}
        onToggle={() => toggleSection('nature')}
      >
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 italic">Image 4{String.fromCharCode(64+i)}</div>
           ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Meeting a Legend"
        icon={<Star />}
        isOpen={!!openSections.hcverma}
        onToggle={() => toggleSection('hcverma')}
      >
        <div className="mt-6 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-48 h-48 rounded-full border-4 border-[#D9F2B1] bg-gray-100 mb-6 flex items-center justify-center italic text-gray-400">Image 5</div>
          <p className="text-gray-600 italic">"His simplicity and clarity in explaining physics mirrored the kind of researcher I aspire to be."</p>
        </div>
      </SectionWrapper>

      {/* FOOTER */}
      <footer className="mt-20 text-center py-16 bg-black text-white rounded-3xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Leaving a Mark</h2>
          <a href="https://github.com/ODOR-SIG/Automated-Molecular-Docking" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#D9F2B1] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all">
            View Github <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default IITMandiInternship;