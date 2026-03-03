import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header/Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-950">Atira's Portfolio</h1>
          <div className="space-x-4 text-gray-600">
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#experience" className="hover:text-sky-700">Experience</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-sky-950 mb-6">
            Engineering the Future at IIT Mandi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspiring professional focusing on [Insert Field] with experience in React, Python, and Data Analysis.
          </p>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-sky-950 mb-10">Internship Experience</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-sky-600">
            <h4 className="text-2xl font-semibold text-gray-800">Research Intern</h4>
            <p className="text-sky-700 font-medium mb-4">IIT Mandi | [Insert Dates]</p>
            <p className="text-gray-600 mb-4">
              Worked on [Project Name], focusing on [Objective].
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed [Software/Model] using Python and TensorFlow.</li>
              <li>Analyzed dataset of [Size] to identify [Insight].</li>
              <li>Presented findings to the research team.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-sky-950 text-white py-10 mt-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <p className="mb-4">Feel free to reach out for collaborations or opportunities.</p>
          <a href="mailto:email@example.com" className="bg-white text-sky-950 px-6 py-2 rounded-full font-medium hover:bg-gray-200">
            Send Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;