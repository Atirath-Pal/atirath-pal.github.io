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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 mt-6">

          {/* LEFT SIDE: DETAILED TEXT CONTENT (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-8">

            {/* 1. Development & Automation */}
            <div className="text-justify text-gray-600 space-y-2">
              <h3 className="text-md font-bold text-gray-800">1. Development & Automation</h3>
              <p className="leading-relaxed">
                I developed a modular, high-throughput pipeline that automates the transition from biological sequences to docking results. 
                By integrating web automation with local computational engines, the system achieves a <b>90% reduction</b> in manual processing time (from 50 minutes to 5 minutes).
              </p>
            </div>

            {/* 2. Tools and Technologies Used */}
            <div className="text-justify text-gray-600 space-y-3">
              <h3 className="text-md font-bold text-gray-800">2. Tools and Technologies Used</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Python:</span> Core scripting & UI logic.</p>
                <p><span className="font-semibold text-gray-700">AutoDock Vina:</span> Primary docking engine.</p>
                <p><span className="font-semibold text-gray-700">Open Babel:</span> Structure cleaning & conversion.</p>
                <p><span className="font-semibold text-gray-700">PyMOL:</span> 3D molecular visualization.</p>
                <p><span className="font-semibold text-gray-700">Selenium:</span> SWISS-MODEL automation.</p>
                <p><span className="font-semibold text-gray-700">Biopython:</span> NCBI/Entrez data retrieval.</p>
                <p><span className="font-semibold text-gray-700">PubChem API:</span> Ligand structure downloads.</p>
                <p><span className="font-semibold text-gray-700">Shell Scripting:</span> Batch job integration.</p>
              </div>
            </div>

            {/* 3. Libraries/Modules Used */}
            <div className="text-justify text-gray-600 space-y-4">
              <h3 className="text-md font-bold text-gray-800">3. Libraries/Modules Used</h3>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-bold text-[#8FB94B] uppercase tracking-wider">Standard & System:</span>
                  <p className="text-sm mt-1 text-gray-500 italic">os, sys, shutil, subprocess (CLI Bridge), threading (Parallelism), re, glob</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#8FB94B] uppercase tracking-wider">Data & Web:</span>
                  <p className="text-sm mt-1 text-gray-500 italic">Pandas (Tabular Logs), NumPy (Calculations), Streamlit (UI), BeautifulSoup & Requests</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#8FB94B] uppercase tracking-wider">Specialized Cheminformatics:</span>
                  <p className="text-sm mt-1 text-gray-500 italic">RDKit (SMILES Parsing), Selenium Webdriver (Dynamic Automation)</p>
                </div>
              </div>

              <div className="bg-[#F3F4F1] p-3 rounded-lg border-l-4 border-[#D9F2B1] mt-4">
                <span className="text-[10px] font-bold block mb-1 uppercase tracking-wider text-gray-400">Environment</span>
                <p className="text-xs font-mono text-gray-600">Windows 11 | VS Code | Python 3.10+</p>
              </div>

              <div className="bg-[#F3F4F1] p-3 rounded-lg border-l-4 border-[#D9F2B1] mt-4">
                <span className="text-[10px] font-bold block mb-1 uppercase tracking-wider text-gray-400">Tech Stack Used</span>
                <p className="text-xs font-mono text-gray-600">Python | Selenium | RDKit | Streamlit | AutoDock Vina | Open Babel | Biopython</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 1 COLUMN, 4 ROWS (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {[
              { src: "/assets/Loading-Screen.png", label: "User Input Interface" },
              { src: "/assets/random_seed_docking.png", label: "Docking Configuration" },
              { src: "/assets/ramachandran_plot.png", label: "Ramachandran Plot Validation" },
              { src: "/assets/output_interface.png", label: "Final Docking Results" }
            ].map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm p-1">
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="w-full h-auto max-h-44 object-contain mx-auto" 
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1 italic">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="System Architecture"
        icon={<Map />}
        isOpen={!!openSections.flowchart}
        onToggle={() => toggleSection('flowchart')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          
          {/* LEFT SIDE: TEXT CONTENT (5 Cols - Narrower for more lines) */}
          <div className="lg:col-span-5 space-y-6 text-justify text-gray-600">
            <p className="leading-relaxed">
              The docking pipeline is engineered with a modular, 5-stage architecture. This design ensures that each computational step is isolated, allowing the system to handle multiple ligands simultaneously while maintaining high data integrity.
            </p>

            <div className="space-y-5">
              <div className="relative pl-4 border-l-2 border-[#D9F2B1]">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide">1. Data Retrieval</h4>
                <p className="text-sm mt-1">Automated fetching of receptor FASTA sequences from NCBI and 3D ligand structures from PubChem via Entrez and API integration.</p>
              </div>

              <div className="relative pl-4 border-l-2 border-[#D9F2B1]">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide">2. Structural Validation</h4>
                <p className="text-sm mt-1">Interfacing with SWISS-MODEL via Selenium to generate 3D models and verifying structural reliability through Ramachandran Plot analysis.</p>
              </div>

              <div className="relative pl-4 border-l-2 border-[#D9F2B1]">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide">3. Pre-Processing</h4>
                <p className="text-sm mt-1">Utilizing Open Babel for molecular 'cleaning'—adding hydrogens, removing water molecules, and adding Gasteiger charges for PDBQT conversion.</p>
              </div>

              <div className="relative pl-4 border-l-2 border-[#D9F2B1]">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide">4. Simulation Execution</h4>
                <p className="text-sm mt-1">Dynamic generation of AutoDock Vina configuration files followed by the automated execution of the docking simulation engine.</p>
              </div>

              <div className="relative pl-4 border-l-2 border-[#D9F2B1]">
                <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide">5. Result Analysis</h4>
                <p className="text-sm mt-1">Automated parsing of Vina log files to extract binding energies, ranking candidates, and exporting results into a research-ready CSV format.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FLOWCHART (7 Cols - Larger Image Area) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full rounded-xl bg-white p-2 border border-gray-100 shadow-sm overflow-hidden">
              <img 
                src="/assets/flowchart.svg" 
                alt="System Architecture Flowchart" 
                className="w-full h-auto object-contain" 
              />
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border-t border-gray-100 w-full">
               <p className="text-[11px] text-center text-gray-500 italic">
                <b>Figure:</b> Sequential Logic Flow — Illustrating the automated transition from biological database queries to final structural binding analysis.
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Research & User Study"
        icon={<Microscope />}
        isOpen={!!openSections.research}
        onToggle={() => toggleSection('research')}
      >
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDE: USER STUDY DATA & FINDINGS (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-justify text-gray-600">

            <div className="space-y-3">
              <p className="leading-relaxed text-sm">
                A quantitative study was conducted involving participants unfamiliar with molecular docking. Despite zero prior experience, <b>100% of participants</b> successfully performed experiments, validating the system's intuitive design.
              </p>
            </div>

            {/* User Study Table Summary */}
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-[11px] text-left bg-white">
                <thead className="bg-gray-50 text-gray-800">
                  <tr>
                    <th className="p-2 font-bold">Evaluation Statement (Survey)</th>
                    <th className="p-2 text-center">Avg. Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr><td className="p-2">Interface navigation and ease of use</td><td className="p-2 text-center font-bold text-[#8FB94B]">4.8/5</td></tr>
                  <tr><td className="p-2">Clarity of output (Binding Energy & Std Dev)</td><td className="p-2 text-center font-bold text-[#8FB94B]">4.2/5</td></tr>
                  <tr><td className="p-2">Trust in the tool's automated output</td><td className="p-2 text-center font-bold text-[#8FB94B]">4.8/5</td></tr>
                  <tr><td className="p-2">Preference over manual docking methods</td><td className="p-2 text-center font-bold text-[#8FB94B]">4.4/5</td></tr>
                  <tr><td className="p-2">Perceived time saving and complexity reduction</td><td className="p-2 text-center font-bold text-[#8FB94B]">4.8/5</td></tr>
                </tbody>
              </table>
            </div>

              {/* Visual Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-gray-800">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "text-[#D9F2B1] text-lg" : "text-gray-600 text-lg"}>★</span>
                  ))}
                </div>
                <p className="text-3xl font-bold text-[#D9F2B1]">4.5<span className="text-sm text-gray-400">/5</span></p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">User Satisfaction</p>
              </div>

              <div className="bg-[#D9F2B1] rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm border border-[#c5db9f]">
                <p className="text-3xl font-bold text-gray-900">~90%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-800 font-semibold text-center">Efficiency Gain</p>
                <p className="text-[9px] text-gray-700 mt-1 font-mono">50m → 5m</p>
              </div>
            </div>


            <div className="space-y-3">
              <h4 className="text-sm font-bold text-gray-800">Evaluation of Project Performance</h4>
              <ul className="text-xs space-y-2 list-disc list-inside bg-[#F9FBFA] p-4 rounded-lg border-l-4 border-[#D9F2B1]">
                <li><span className="font-semibold">Consistency:</span> Scripted automation removed manual variability and human error.</li>
                <li><span className="font-semibold">Scalability:</span> Enabled batch docking of large ligand libraries effortlessly.</li>
                <li><span className="font-semibold">Accessibility:</span> Lowered the barrier of entry for non-specialist researchers.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <div className="space-y-2">
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm p-1">
                <img src="/assets/User-study.jpg" alt="User Study Evaluation" className="w-full h-auto object-contain mx-auto" />
              </div>
              <p className="text-[10px] text-center text-gray-400 italic">Figure: Participants performing experiments using the automated pipeline.</p>
            </div>
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