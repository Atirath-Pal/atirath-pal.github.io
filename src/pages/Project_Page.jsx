import React from 'react';

const ProjectPage = () => {
  return (
    <section className="bg-[#F9FAF7] px-6 py-12 md:px-20 lg:px-40 font-sans">
      {/* Header - Updated for Project */}
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-12">Personal Project</h1>

      {/* Introduction Block */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-20">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-[#D9F2B1]">
          {/* Update this path to your project image in the assets folder */}
          <img src="/assets/Project-Screenshot.jpg" alt="Project Preview" className="w-full h-auto" />
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            Describe what this project is, the problem it solves, and the tech stack you used (like React and Tailwind).
          </p>
        </div>
      </div>

      {/* Skills or Tech Stack Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Tech Stack & Tools</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          A brief description of the technologies used to build this specific project...
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center text-sm font-bold">React</div>
          <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-sm font-bold">Tailwind CSS</div>
          <div className="h-48 bg-yellow-50 rounded-xl flex items-center justify-center text-sm font-bold">PostCSS</div>
        </div>
      </div>

      {/* Project Milestones / Features */}
      <div className="border-t border-gray-200 pt-8">
        {[
          { name: "Initial Design", year: "Phase 1" },
          { name: "Core Development", year: "Phase 2" },
          { name: "Final Deployment", year: "Phase 3" }
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-xl font-bold">{item.name}</span>
            <span className="text-gray-400 text-sm">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;