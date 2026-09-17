import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen3_December2024({ onNext, onPrev }) {
  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-5 py-1.5 rounded-full bg-pink-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-5 border-2 border-pink-300 shadow-sm"
      >
        Chapter 01 • December 2024
      </motion.div>

      {/* Screen Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-5"
      >
        Jahan Se Sab Shuru Hua... ✨
      </motion.h2>

      {/* Instagram GC Mockup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
        className="glass-romantic-card w-full p-6 sm:p-7 rounded-3xl mb-8 relative overflow-hidden border-2 border-pink-300 shadow-2xl"
      >
        {/* Header inside chat */}
        <div className="flex items-center justify-between border-b-2 border-pink-100 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md ring-2 ring-pink-200">
              GC
            </div>
            <div className="text-left">
              <span className="text-sm font-bold text-stone-800 block">
                Instagram Group Chat
              </span>
              <span className="text-[11px] text-pink-600 font-semibold">December 2024</span>
            </div>
          </div>
          <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold border border-rose-200 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Kismat
          </span>
        </div>

        {/* Real Saurav Words */}
        <div className="space-y-4 text-left text-stone-800 text-sm sm:text-base leading-relaxed font-light">
          <div className="p-4 rounded-2xl bg-white/80 border border-pink-200 shadow-sm">
            <p className="italic text-stone-700 font-medium">
              "Mujhe sach mein yaad nahi humari pehli baat kis topic pe hui thi..."
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-rose-950 font-serif-romantic italic text-base sm:text-lg font-semibold shadow-sm">
            "Lekin mujhe wo insan hamesha yaad rahega jiske paas wo random chat mujhe le aayi." ❤️
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-pink-200 shadow-sm text-stone-700">
            <p>
              Na koi planning thi, na koi expectation. Bas ek simple notification...
              aur wahan se meri life ka sabse khoobsurat chapter shuru ho gaya.
            </p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t-2 border-pink-100 text-center">
          <p className="text-sm font-bold text-rose-600 font-handwriting text-2xl">
            Aur tab mujhe bilkul andaza nahi tha ki tu itni zaroori ban jayegi! 🥺❤️
          </p>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
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
          <span>Bestie Era Mein Chalein</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
