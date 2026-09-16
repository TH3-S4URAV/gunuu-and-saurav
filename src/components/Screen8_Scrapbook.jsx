import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Camera, ImagePlus, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen8_Scrapbook({ onNext, onPrev }) {
  const [activeTab, setActiveTab] = useState(0);
  const [customPhotos, setCustomPhotos] = useState({});

  const photos = PROPOSAL_CONFIG.scrapbookPhotos;

  // Load any saved custom photos from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gunuu_custom_photos');
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch (e) {
      console.log('Error reading local photos:', e);
    }
  }, []);

  const handleFileUpload = (e, photoId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newMap = { ...customPhotos, [photoId]: event.target.result };
        setCustomPhotos(newMap);
        try {
          localStorage.setItem('gunuu_custom_photos', JSON.stringify(newMap));
        } catch (err) {
          console.warn('Storage limit for photos reached');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentPhoto = photos[activeTab];
  const uploadedImage = customPhotos[currentPhoto.id];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-1.5 rounded-full bg-pink-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200"
      >
        Chapter 05 • Digital Scrapbook
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-2"
      >
        Moments of Gunuu 📸
      </motion.h2>

      <p className="text-stone-600 text-sm mb-5 font-light">
        "Every mood, every reaction, every face... all my favourites."
      </p>

      {/* Categories Tabs */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-6 max-w-full">
        {photos.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === idx
                ? 'bg-rose-500 text-white shadow-md shadow-pink-300'
                : 'bg-white/80 text-stone-600 hover:bg-white border border-pink-100'
            }`}
          >
            {item.emoji} {item.category}
          </button>
        ))}
      </div>

      {/* Main Polaroid Frame */}
      <div className="w-full max-w-xs sm:max-w-sm mb-6 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -2, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-4 pb-6 rounded-2xl shadow-2xl border border-stone-200/70 relative transform hover:rotate-1 transition-transform"
          >
            {/* Cute Washi Tape at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-200/80 rounded-sm transform -rotate-2 backdrop-blur-sm border-t border-b border-pink-300/40" />

            {/* Photo / Graphic Container */}
            <div
              className={`w-full aspect-[4/4] rounded-xl overflow-hidden mb-4 relative flex flex-col items-center justify-center bg-gradient-to-tr ${currentPhoto.bgGradient} border border-pink-100`}
            >
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt={currentPhoto.category}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center p-6 space-y-3">
                  <div className="text-6xl animate-bounce">{currentPhoto.emoji}</div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-rose-800 bg-white/70 px-3 py-1 rounded-full">
                      {currentPhoto.tag}
                    </span>
                    <p className="text-xs text-stone-600 font-light mt-2">
                      {currentPhoto.subtext}
                    </p>
                  </div>
                </div>
              )}

              {/* Upload / Swap button overlay */}
              <label
                className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-white/90 shadow-md hover:bg-white text-stone-700 cursor-pointer transition-all"
                title="Add / Change photo for this mood"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, currentPhoto.id)}
                  className="hidden"
                />
                <Camera className="w-4 h-4 text-rose-500" />
              </label>
            </div>

            {/* Handwritten Caption */}
            <div className="text-center px-2">
              <p className="font-handwriting text-2xl text-stone-800 font-semibold leading-tight">
                "{currentPhoto.caption}"
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-rose-500 font-medium">
                <Heart className="w-3 h-3 fill-rose-500" />
                <span>Captured by Saurav's heart</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-[11px] text-stone-400 mb-6 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-pink-400" />
        (Tap the camera icon on the polaroid anytime to view her real picture!)
      </p>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="p-3.5 rounded-full bg-white/80 border border-pink-200 text-stone-500 hover:text-rose-600 hover:bg-white transition-all shadow-sm"
          title="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white font-medium shadow-lg shadow-pink-300/50 hover:shadow-xl transition-all flex items-center gap-2 text-sm sm:text-base"
        >
          <span>Our First Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
