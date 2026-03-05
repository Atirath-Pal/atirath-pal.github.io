import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Code, Map, Microscope, Users, Star, ArrowRight } from 'lucide-react';

const IITMandiInternship = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Reusable Wrapper to keep the toggle logic consistent but the design flexible
  const SectionWrapper = ({ id, title, icon, children }) => (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300 shadow-sm mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className={`p-2 rounded-lg text-black ${openSection === id ? 'bg-[#D9F2B1]' : 'bg-gray-100'}`}>
            {icon}
          </span>
          <span className="text-xl font-bold">{title}</span>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${openSection === id ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${openSection === id ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-6 pt-0 border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );

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

      {/* INTRODUCTION: Standard Layout */}
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
            I developed a framework that reduces manual processing time by <strong>90%</strong>, transforming a 50-minute manual process into a 5-minute automated workflow using <strong>AutoDock Vina</strong> and <strong>Streamlit</strong>.
          </p>
        </div>
      </div>

      {/* SECTION 1: CODING - Split Layout */}
      <SectionWrapper id="coding" title="Development & Automation" icon={<Code />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="text-justify text-gray-600 space-y-4">
            <p>I built the backend using Python, integrating Selenium for automated data scraping from NCBI. This allowed for high-throughput docking without manual file downloads.</p>
            <div className="bg-[#F3F4F1] p-4 rounded-lg border-l-4 border-[#D9F2B1]">
              <span className="text-sm font-bold block mb-1">Tech Stack:</span>
              <p className="text-xs font-mono">Python, Selenium, RDKit, Streamlit</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-100 aspect-video flex items-center justify-center bg-white shadow-inner">
            <img 
              src="/assets/Loading-Screen.png" // Replace this with your actual file path later
              alt="Automated Docking Streamlit Interface" 
              className="w-full h-full object-cover" 
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Streamlit+Dashboard+Coming+Soon"; }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 2: ARCHITECTURE - Full Width Focus */}
      <SectionWrapper id="flowchart" title="System Architecture" icon={<Map />}>
        <div className="mt-6 space-y-6">
          <p className="text-gray-600 text-justify">The docking pipeline follows a strict modular logic to ensure reproducibility across different protein-ligand pairs.</p>
          <div className="w-full rounded-xl bg-white p-4 md:p-8 flex flex-col items-center justify-center border border-gray-200 shadow-sm">
            <img 
              src="/assets/flowchart.svg" 
              alt="Automated Molecular Docking Pipeline Flowchart" 
              className="max-w-full h-auto rounded-lg shadow-md object-contain"
              style={{ maxHeight: '600px' }} // Keeps the diagram from being too tall on large screens
            />
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Logic: Retrieval → Preparation → Docking → Analysis
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 3: RESEARCH - Detailed List Layout */}
      <SectionWrapper id="research" title="Research & User Study" icon={<Microscope />}>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 text-justify text-gray-600">
            <p>I conducted a quantitative user study with research scholars at IIT Mandi. We measured "Time-to-Task" completion and "System Usability Scale" (SUS) scores to refine the UI.</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-center">
            <h4 className="text-[#D9F2B1] font-bold text-xl mb-2">Key Result</h4>
            <p className="text-3xl font-bold">90%</p>
            <p className="text-sm text-gray-400">Reduction in manual error</p>
          </div>
          <div className="lg:col-span-3 rounded-xl border border-gray-100 aspect-video flex items-center justify-center bg-gray-50">
             <span className="text-gray-400 font-bold italic">Image 3: Research Report Snippet</span>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 4: NATURE - Gallery/Scrapbook Layout */}
      <SectionWrapper id="nature" title="Life in Kamand Valley" icon={<Users />}>
        <div className="mt-6">
          <p className="text-gray-600 mb-6 text-justify">The mountains of Mandi taught me independence. From trekking the North Campus hills to late-night discussions with friends at the South Campus canteen, the environment was as much a teacher as the lab.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center italic text-xs text-gray-400">Image 4A</div>
             <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center italic text-xs text-gray-400">Image 4B</div>
             <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center italic text-xs text-gray-400">Image 4C</div>
             <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center italic text-xs text-gray-400">Image 4D</div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 5: HC VERMA - Spotlight Layout */}
      <SectionWrapper id="hcverma" title="Meeting a Legend" icon={<Star />}>
        <div className="mt-6 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-48 h-48 rounded-full border-4 border-[#D9F2B1] overflow-hidden mb-6 flex items-center justify-center bg-gray-100">
             <span className="text-gray-400 italic text-sm text-center px-4">Image 5: Selfie with HC Verma Sir</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">A Transformative Discussion</h3>
          <p className="text-gray-600 text-justify mb-6">
            Attending discussions with <strong>Prof. H.C. Verma</strong> was a surreal moment. His simplicity and clarity in explaining complex physics mirrored the kind of researcher I aspire to be: someone who makes the complex accessible.
          </p>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="mt-20 text-center py-16 bg-black text-white rounded-3xl relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h2 className="text-3xl font-bold mb-4">Leaving a Mark</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            "I left my signature on the hostel wall—a tiny mark of my presence, even if only for a short while."
          </p>
          <a href="https://github.com/ODOR-SIG/Automated-Molecular-Docking" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#D9F2B1] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            View the Github Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default IITMandiInternship;