import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen7_Names({ onNext, onPrev }) {
  const handleCardClick = () => {
    playChime();
  };

  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 py-1.5 rounded-full bg-pink-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-pink-300 shadow-sm"
      >
        Chapter 05 • The Secret Names
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-4"
      >
        Gunuu & Kaddu 😂❤️
      </motion.h2>

      <p className="text-stone-700 text-sm mb-6 font-light max-w-md">
        "Do bilkul ajeeb naam... jo sirf hum dono ke beech sabse pyare ban gaye!"
      </p>

      {/* Dual Interactive Nickname Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full mb-7">
        {/* Card 1: Gunuu */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCardClick}
          className="glass-romantic-card p-5 sm:p-6 rounded-3xl text-center border-2 border-pink-300 shadow-xl cursor-pointer bg-gradient-to-b from-white to-pink-50"
        >
          <div className="text-5xl mb-2 animate-bounce">🌷</div>
          <span className="text-[10px] uppercase font-bold text-pink-600 tracking-wider">
            Saurav calls her
          </span>
          <h3 className="text-2xl font-serif-romantic font-bold text-rose-950 mt-1">
            Gunuu ❤️
          </h3>
          <p className="text-xs text-stone-600 mt-2 font-light">
            Real: GurneeT (Punjab) <br />
            Superpower: Unlimited nakhre
          </p>
        </motion.div>

        {/* Card 2: Kaddu */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCardClick}
          className="glass-romantic-card p-5 sm:p-6 rounded-3xl text-center border-2 border-amber-300 shadow-xl cursor-pointer bg-gradient-to-b from-white to-amber-50"
        >
          <div className="text-5xl mb-2 animate-bounce">🎃</div>
          <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
            Gunuu calls him
          </span>
          <h3 className="text-2xl font-serif-romantic font-bold text-stone-800 mt-1">
            Kaddu 😂
          </h3>
          <p className="text-xs text-stone-600 mt-2 font-light">
            Real: Saurav (Bihar) <br />
            Status: Fully trapped in her love
          </p>
        </motion.div>
      </div>

      {/* Confession dialogue card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic-card p-5 sm:p-6 rounded-3xl text-left border-2 border-pink-300 mb-8 space-y-2.5 text-sm text-stone-800 shadow-xl"
      >
        <div className="flex items-center gap-2 text-rose-800 font-serif-romantic font-bold text-base">
          <Sparkles className="w-4 h-4 text-pink-500" />
          The Official Legal Agreement:
        </div>
        <p className="font-light italic text-stone-700">
          "Poori duniya ke liye main Saurav hoon... par ek din tumne mujhe 'Kaddu' bola, aur maine chup-chaap accept kar liya! Kyunki tumhare muh se nikla har naam mujhe acha lagta hai." 😂
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-xs text-rose-700 font-bold">
          <span className="bg-pink-100 px-2.5 py-1 rounded-full border border-pink-300">bbe 💕</span>
          <span className="bg-pink-100 px-2.5 py-1 rounded-full border border-pink-300">bby 🌸</span>
          <span className="bg-pink-100 px-2.5 py-1 rounded-full border border-pink-300">bbu 🥺</span>
          <span className="bg-rose-200 text-rose-900 px-3 py-1 rounded-full border border-rose-300 font-extrabold">wiffeyyy 🫣💍</span>
        </div>
      </motion.div>

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
          <span>Memory Scrapbook 📸</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
