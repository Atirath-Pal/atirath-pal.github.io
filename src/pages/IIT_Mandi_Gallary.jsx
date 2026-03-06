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
    /* md:h-screen and md:overflow-hidden locks the main page scroll on desktop */
    <div className={`min-h-screen md:h-screen bg-[#FAFAFA] flex flex-col p-4 md:p-12 md:overflow-hidden ${selectedImg ? '' : ''}`}>
      
      {/* Header Section - Shrink-0 prevents it from being squished */}
      <div className="max-w-7xl w-full mx-auto mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
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
      </div>

      {/* Main Layout Container - flex-1 allows it to take remaining height */}
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-8 flex-1 min-h-0">
        
        {/* LEFT SIDE: Independent Scrollable Column */}
        <div
          className={`w-full md:pr-4 custom-scrollbar md:overflow-y-auto md:h-full no-scrollbar ${
            selectedImg ? 'md:w-1/2' : 'md:w-full'
          }`}
        >
          <div className="columns-2 gap-3 space-y-4 pb-12">
            {allImages.map((img) => (
              <div 
                key={img.id} 
                onClick={() => setSelectedImg(img)}
                className={`break-inside-avoid group cursor-pointer transition-all duration-300 ${
                  selectedImg?.id === img.id ? 'md:ring-2 md:ring-[#8FB94B] md:ring-offset-4 rounded-xl' : ''
                }`}
              >
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 md:group-hover:shadow-lg">
                  <img 
                    src={img.thumb} 
                    alt={img.label} 
                    className="w-full h-auto object-cover transition-transform duration-700 md:group-hover:scale-105"
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                </div>
              
                <div className="mt-2 px-1">
                  <p className={`text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight transition-colors ${
                    selectedImg?.id === img.id ? 'text-[#8FB94B]' : 'text-gray-700'
                  }`}>
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic Canvas (only when an image is selected on desktop) */}
        {selectedImg && (
          <div className="hidden md:flex w-1/2 md:h-full items-center justify-center bg-white/50 rounded-3xl border-2 border-dashed border-gray-100 mb-12 md:mb-0 md:overflow-y-auto no-scrollbar relative">
            <button
              type="button"
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 backdrop-blur-sm p-1.5 text-gray-500 hover:text-gray-800 shadow-sm transition-colors"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <div
              key={selectedImg.id}
              className="w-full h-full flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in-95 duration-500"
            >
              <div className="relative w-full flex-1 min-h-0 mb-6 flex items-center justify-center">
                <img 
                  src={selectedImg.full} 
                  alt={selectedImg.label} 
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-gray-100"
                />
              </div>
              <div className="text-center shrink-0">
                <h2 className="text-2xl font-light italic text-gray-900 border-b-2 border-[#8FB94B] pb-2 inline-block capitalize">
                  {selectedImg.label}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE ONLY: Modal (Unchanged) */}
      <div className="md:hidden">
        {selectedImg && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-4 right-4 text-white">
              <X size={32} />
            </button>
            <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImg.full} 
                alt={selectedImg.label}
                className="max-h-[75vh] w-auto rounded-lg shadow-2xl border border-white/10"
              />
              <div className="mt-6 text-center">
                <h3 className="text-[#D9F2B1] text-xl font-light tracking-wide italic capitalize px-4">
                  {selectedImg.label}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IITMandiGallery;