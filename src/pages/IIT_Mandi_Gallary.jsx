import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, X, Maximize2 } from 'lucide-react';

const IITMandiGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * DYNAMIC LOAD LOGIC:
   * 1. Scans the 'thumbs' folder for .webp files.
   * 2. Automatically links them to the same filename in the 'originals' folder as .jpg.
   * 3. Formats the filename (e.g., 'Trek_to_River') into a clean label ('Trek to River').
   */
  const importAll = (r) => {
    return r.keys().map((item, index) => {
      const fileNameWithExt = item.replace('./', '');
      const fileNameNoExt = fileNameWithExt.split('.')[0];

      return {
        id: index + 1,
        // The path to the WebP thumbnail (managed by Webpack)
        thumb: r(item),
        // The path to the High-Res JPG (located in public/assets/Mandi_pic/originals/)
        full: `/assets/Mandi_pic/originals/${fileNameNoExt}.jpg`,
        // Clean label: replaces underscores with spaces
        label: fileNameNoExt.replace(/_/g, ' ')
      };
    });
  };

  // Note: Ensure the path '../assets/Mandi_pic/thumbs' is correct relative to this file
  const allImages = importAll(
    require.context('../assets/Mandi_pic/thumbs', false, /\.(webp)$/)
  );

  return (
    <div className={`min-h-screen bg-[#FAFAFA] p-6 md:p-12 ${selectedImg ? 'overflow-hidden' : ''}`}>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Link 
            to="/internships/iit-mandi" 
            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Internship Details</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <Camera className="text-[#8FB94B]" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
              Kamand Valley
            </h1>
          </div>
          <p className="text-gray-500 text-lg max-w-2xl italic">
            "A visual journey through {allImages.length} optimized memories."
          </p>
        </div>

        <div className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          Performance Mode: WebP + Lazy Load
        </div>
      </div>

      {/* The Gallery Grid */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {allImages.map((img) => (
          <div 
            key={img.id} 
            onClick={() => setSelectedImg(img)}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img 
                src={img.thumb} 
                alt={img.label} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <Maximize2 className="text-white mb-2" size={24} />
                <span className="text-white text-[10px] font-bold uppercase tracking-widest text-center px-3 py-1 bg-black/50 rounded-full backdrop-blur-sm">
                  {img.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Full Screen View) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300">
            <X size={40} />
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg.full} 
              alt={selectedImg.label}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10"
            />
            <div className="mt-8 text-center">
              <h3 className="text-[#D9F2B1] text-2xl font-light tracking-wide italic capitalize">
                {selectedImg.label}
              </h3>
              <div className="h-1 w-12 bg-[#D9F2B1] mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 py-10 text-center border-t border-gray-100 text-gray-400 text-xs tracking-widest uppercase">
        End of Gallery • {allImages.length} High-Resolution Captures
      </footer>
    </div>
  );
};

export default IITMandiGallery;