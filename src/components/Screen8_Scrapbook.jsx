import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Camera, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playChime } from '../utils/soundEffects';

export default function Screen8_Scrapbook({ onNext, onPrev }) {
  const [activeTab, setActiveTab] = useState(0);
  const [customPhotos, setCustomPhotos] = useState({});

  const photos = PROPOSAL_CONFIG.scrapbookPhotos;

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gunuu_custom_photos');
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const handleTabChange = (idx) => {
    playChime();
    setActiveTab(idx);
  };

  const handleFileUpload = (e, photoId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newMap = { ...customPhotos, [photoId]: event.target.result };
        setCustomPhotos(newMap);
        playChime();
        try {
          localStorage.setItem('gunuu_custom_photos', JSON.stringify(newMap));
        } catch (err) {}
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    playChime();
    onNext();
  };

  const currentPhoto = photos[activeTab];
  const uploadedImage = customPhotos[currentPhoto.id];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 py-1.5 rounded-full bg-pink-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-pink-300 shadow-sm"
      >
        Chapter 06 • Digital Scrapbook
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-2"
      >
        Gunuu Ki Yaadein 📸🌸
      </motion.h2>

      <p className="text-stone-700 text-sm mb-5 font-light">
        "Gusse wala face ho ya nakhre wala... mere liye sabse pyara hai!"
      </p>

      {/* Mood Selector Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-6 max-w-full">
        {photos.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(idx)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === idx
                ? 'bg-rose-500 text-white shadow-lg shadow-pink-300 scale-105'
                : 'bg-white/80 text-stone-700 hover:bg-white border border-pink-300'
            }`}
          >
            {item.emoji} {item.category}
          </button>
        ))}
      </div>

      {/* Main Polaroid Frame */}
      <div className="w-full max-w-xs sm:max-w-sm mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, rotate: 3, scale: 0.94 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -3, scale: 0.94 }}
            transition={{ duration: 0.35 }}
            className="bg-white p-4 pb-6 rounded-3xl shadow-2xl border-2 border-pink-200 relative transform hover:rotate-1 transition-transform"
          >
            {/* Cute Tape at top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-pink-300/80 rounded-sm transform -rotate-2 backdrop-blur-sm border-t border-b border-pink-400/50 shadow-sm" />

            {/* Photo Container */}
            <div
              className={`w-full aspect-[4/4] rounded-2xl overflow-hidden mb-4 relative flex flex-col items-center justify-center bg-gradient-to-tr ${currentPhoto.bgGradient} border-2 border-pink-200`}
            >
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt={currentPhoto.category}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="text-center p-6 space-y-3 text-white drop-shadow-md">
                  <div className="text-7xl animate-bounce">{currentPhoto.emoji}</div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/90 text-rose-900 px-3 py-1 rounded-full shadow-sm">
                      {currentPhoto.tag}
                    </span>
                    <p className="text-xs font-medium text-pink-100 mt-2">
                      {currentPhoto.subtext}
                    </p>
                  </div>
                </div>
              )}

              {/* Upload photo button */}
              <label
                className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white text-rose-600 shadow-lg hover:scale-110 cursor-pointer transition-all border border-pink-300"
                title="Apne phone se real photo lagao"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, currentPhoto.id)}
                  className="hidden"
                />
                <Camera className="w-4 h-4" />
              </label>
            </div>

            {/* Handwritten Caption */}
            <div className="text-center px-2">
              <p className="font-handwriting text-2xl text-stone-900 font-bold leading-tight">
                "{currentPhoto.caption}"
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-rose-600 font-bold">
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                <span>Saved in Saurav's heart forever</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-xs text-rose-600 mb-6 flex items-center gap-1 font-medium bg-pink-100/60 px-4 py-1 rounded-full border border-pink-200">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        (Camera icon par tap karke gallery se real photo laga sakte ho!)
      </p>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="p-4 rounded-full bg-white border-2 border-pink-300 text-stone-600 hover:text-rose-600 hover:bg-pink-50 transition-all shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold shadow-xl shadow-pink-400/60 hover:shadow-2xl transition-all flex items-center gap-2.5 text-sm sm:text-base animate-pulse-pink"
        >
          <span>Pehli Voice Call (16 Sept) 📞</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
