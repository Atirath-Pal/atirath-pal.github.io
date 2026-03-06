import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';

const IITMandiGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * AUTOMATED SCAN LOGIC:
   * require.context(directory, useSubdirectories, regExp)
   * This tells Webpack to look into your src/assets/Mandi_pic folder
   * and grab every file ending in .jpg, .jpeg, .png, or .JPG
   */
  const importAll = (r) => {
    return r.keys().map((item, index) => ({
      id: index + 1,
      src: r(item),
      // This regex pulls the filename out of the path to use as a label
      label: item.replace('./', '').split('.')[0].replace(/[-_]/g, ' ')
    }));
  };

  // Note: The path is relative to THIS file (src/pages/IITMandiGallery.jsx)
  // Adjust the dots if your folder structure is different
  const allImages = importAll(
    require.context('../assets/Mandi_pic', false, /\.(png|jpe?g|svg|JPG|JPEG)$/)
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 md:p-12">
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
            "Automated log of {allImages.length} memories captured at IIT Mandi."
          </p>
        </div>

        <div className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          Dynamic Load Active
        </div>
      </div>

      {/* The Gallery Grid */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {allImages.map((img) => (
          <div 
            key={img.id} 
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 bg-white group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {img.label}
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 py-10 text-center border-t border-gray-100 text-gray-400 text-xs tracking-widest uppercase">
        End of Gallery • Total {allImages.length} Images
      </footer>
    </div>
  );
};

export default IITMandiGallery;