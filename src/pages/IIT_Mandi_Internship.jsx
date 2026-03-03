import React from 'react';

const IITMandiInternship = () => {
  return (
    <section className="bg-[#F9FAF7] px-6 py-12 md:px-20 lg:px-40 font-sans">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-12">Internship at IIT Mandi</h1>

      {/* Introduction Block: Switches from Column (Mobile) to Row (Desktop) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-20">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-[#D9F2B1]">
          {/* Using the public path for the image */}
          <img src="/assets/IIT-Mandi-Campus.jpg" alt="Illustration" className="w-full h-auto" />
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            A little paragraph introduction that gives a sense of what you do, who you are...
          </p>
        </div>
      </div>

      {/* Interests and Hobbies Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-4">Interests and hobbies</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          A little section to round out the professional purpose of this webpage...
        </p>
        
        {/* Grid for hobby cards: 1 col on mobile, 3 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gradient-to-br from-pink-200 to-green-200 rounded-xl"></div>
          <div className="h-48 bg-blue-100 rounded-xl flex items-center justify-center">
             {/* Add your textured/patterned images here */}
          </div>
          <div className="h-48 bg-green-50 rounded-xl"></div>
        </div>
      </div>

      {/* Experience List */}
      <div className="border-t border-gray-200 pt-8">
        {[
          { name: "Agency name", year: "2025" },
          { name: "Studio name", year: "2024" },
          { name: "Company name", year: "2023" }
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

export default IITMandiInternship;