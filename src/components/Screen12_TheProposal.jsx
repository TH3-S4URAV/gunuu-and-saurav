import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function Screen12_TheProposal({ onYes, onNeedTime }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Soft floating stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-rose-300/60 mx-auto animate-bounce">
          <Heart className="w-8 h-8 fill-white" />
        </div>
      </motion.div>

      {/* Hero Name Reveal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif-romantic text-rose-950 font-bold mb-4 tracking-tight"
      >
        GUNUU... <span className="text-rose-500">❤️</span>
      </motion.h1>

      {/* The Three Sacred Questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-4 text-stone-700 text-base sm:text-lg mb-8 font-light"
      >
        <p className="font-serif-romantic italic text-xl text-rose-800">
          Will you be my girlfriend?
        </p>
        <p className="font-serif-romantic italic text-xl text-rose-800">
          Will you be mine?
        </p>
        <p className="font-serif-romantic italic text-2xl text-rose-900 font-semibold">
          And someday... will you be my wiffeyyy? 🫣❤️
        </p>
      </motion.div>

      {/* The Central Question Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-2xl border border-pink-200"
      >
        <span className="text-xs uppercase tracking-widest text-rose-500 font-bold block mb-2">
          From Kaddu to Gunuu
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-900">
          Will you choose Saurav? ❤️
        </h2>
      </motion.div>

      {/* Dual Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
      >
        {/* YES Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={onYes}
          className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-semibold text-base sm:text-lg shadow-xl shadow-pink-300/70 hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 animate-pulse-glow"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>YES, SAURAV 💗</span>
        </motion.button>

        {/* I Need Some Time Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNeedTime}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-stone-600 hover:text-rose-600 hover:bg-white border border-pink-200 text-sm font-medium transition-all shadow-sm"
        >
          <span>🌸 I need some time</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
