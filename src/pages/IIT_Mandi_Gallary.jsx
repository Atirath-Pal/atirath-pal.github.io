import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, X, Maximize2 } from 'lucide-react';

const IITMandiGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const importAll = (r) => {
    return r.keys().map((item, index) => {
      const fileNameWithExt = item.replace('./', '');
      const fileNameNoExt = fileNameWithExt.split('.')[0];

      return {
        id: index + 1,
        thumb: r(item),
        full: `${process.env.PUBLIC_URL}/assets/Mandi_pic/originals/${fileNameNoExt}.jpg`,
        label: fileNameNoExt.replace(/_/g, ' ')
      };
    });
  };

  const allImages = importAll(
    require.context('../assets/Mandi_pic/thumbs', false, /\.(webp)$/)
  );

  return (
    <div className={`min-h-screen bg-[#FAFAFA] p-4 md:p-12 ${selectedImg ? 'overflow-hidden' : ''}`}>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Link 
            to="/internships/iit-mandi" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-4 md:mb-6 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm font-medium">Back to Internship Details</span>
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <Camera className="text-[#8FB94B] w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase">
              Kamand Valley
            </h1>
          </div>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl italic">
            "{allImages.length} optimized memories from IIT Mandi."
          </p>
        </div>

        <div className="hidden md:block bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          Performance Mode: WebP + Lazy Load
        </div>
      </div>

      {/* The Gallery Grid */}
      <div className="max-w-7xl mx-auto columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4 space-y-4 md:space-y-6">
        {allImages.map((img) => (
          <div 
            key={img.id} 
            onClick={() => setSelectedImg(img)}
            className="break-inside-avoid group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 md:group-hover:shadow-xl">
              <img 
                src={img.thumb} 
                alt={img.label} 
                className="w-full h-auto object-cover transition-transform duration-700 md:group-hover:scale-105"
                loading="lazy" 
              />
              {/* Subtle Icon Overlay (Optional: keeps the "Expand" hint without the text) */}
              <div className="absolute inset-0 bg-black/10 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-5 h-5" />
              </div>
            </div>
        
            {/* NEW: The Caption Below the Image */}
            <div className="mt-2 px-1">
              <p className="text-[9px] md:text-[11px] font-bold text-gray-700 uppercase tracking-wider leading-tight">
                {img.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:rotate-90 transition-transform duration-300">
            <X size={32} className="md:w-10 md:h-10" />
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg.full} 
              alt={selectedImg.label}
              className="max-h-[75vh] md:max-h-[80vh] w-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10"
            />
            <div className="mt-6 md:mt-8 text-center">
              <h3 className="text-[#D9F2B1] text-xl md:text-2xl font-light tracking-wide italic capitalize px-4">
                {selectedImg.label}
              </h3>
              <div className="h-1 w-10 md:w-12 bg-[#D9F2B1] mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 md:mt-20 py-10 text-center border-t border-gray-100 text-gray-400 text-[10px] tracking-widest uppercase">
        End of Gallery • {allImages.length} High-Resolution Captures
      </footer>
    </div>
  );
};

export default IITMandiGallery;