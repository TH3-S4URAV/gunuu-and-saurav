import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Screen1_Intro({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center max-w-lg mx-auto">
      {/* Soft glowing badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200/80 shadow-sm text-pink-600 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" />
        A Private World For Gunuu
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
      </motion.div>

      {/* Main Greeting */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif-romantic text-rose-900 mb-6 leading-tight"
      >
        Hey Gunuu... <span className="inline-block animate-bounce">🌷</span>
      </motion.h1>

      {/* Warm emotional text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-light mb-10"
      >
        <p className="font-serif-romantic italic text-xl text-rose-700">
          "I made something for you."
        </p>
        <p>
          It's not exactly a normal website.
        </p>
        <p className="text-stone-600">
          It's a little story about two people who met across screens...
        </p>
        <p className="font-medium text-rose-800 text-lg">
          And somehow, you became the main character. ❤️
        </p>
      </motion.div>

      {/* Interactive Start Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={onNext}
        className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white font-medium shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/60 transition-all flex items-center gap-3 text-base tracking-wide"
      >
        <span className="relative z-10 flex items-center gap-2">
          Start our story
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-xs text-rose-400/80 font-handwriting text-lg"
      >
        (Put on your earphones for the best feel 🎧)
      </motion.p>
    </div>
  );
}
