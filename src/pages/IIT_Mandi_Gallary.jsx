import React from 'react';
import { Link } from 'react-router-dom'; // or your routing library
import { ArrowLeft } from 'lucide-react';

const IIT_Mandi_Gallary = () => {
  // You will eventually put all 52 image paths here
  const allImages = [
    { src: "/assets/IIT-Mandi-North-Campus.jpg", label: "North Campus" },
    { src: "/assets/Selfie-with-HC-Verma.jpg", label: "Legendary Meeting" },
    // ... add all 52 here
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] p-6 md:p-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
        <div>
            <Link 
              to="/internships/iit-mandi" 
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-4 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to IIT Mandi Internship</span>
            </Link>
          <h1 className="text-4xl font-bold text-gray-900">Kamand Valley Memories</h1>
          <p className="text-gray-500 mt-2">A collection of 52 moments from my time at IIT Mandi.</p>
        </div>
      </div>

      {/* Responsive Grid - The Logic */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {allImages.map((img, index) => (
          <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <img 
              src={img.src} 
              alt={img.label} 
              className="w-full h-auto object-cover"
              loading="lazy" // Critical for 52 images!
            />
            {img.label && (
              <div className="p-3 bg-white">
                <p className="text-xs text-gray-500 italic">{img.label}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IIT_Mandi_Gallary;