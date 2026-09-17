import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Music2 } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen1_Intro({ onNext }) {
  const handleStart = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 text-center max-w-lg mx-auto relative z-10">
      {/* Fairy lights dangling glow */}
      <div className="w-full h-4 fairy-lights opacity-70 mb-4 rounded-full" />

      {/* Floating Sparkle Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border-2 border-pink-300 shadow-lg shadow-pink-200 text-pink-600 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md"
      >
        <Sparkles className="w-4 h-4 text-pink-500 animate-spin" />
        Saurav's Private World For Gunuu
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
      </motion.div>

      {/* Hero Greeting */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif-romantic text-rose-950 mb-5 leading-tight font-extrabold"
      >
        Hey Gunuu... <span className="inline-block animate-bounce">🌷</span>
      </motion.h1>

      {/* Natural, Heartfelt Desi Tone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl mb-8 border-2 border-pink-200/80 shadow-2xl space-y-3.5 text-stone-800 text-base sm:text-lg leading-relaxed text-left"
      >
        <p className="font-handwriting text-3xl text-rose-600 font-bold text-center">
          "Maine tumhare liye kuch bohot pyara banaya hai..."
        </p>

        <p className="font-light text-stone-700">
          Ye koi aam website nahi hai meri jaan. Ye hum dono ki wo pyari si kahani hai jo do screens ke beech shuru hui thi...
        </p>

        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300 text-rose-900 font-medium text-center shadow-inner">
          Aur is poori kahani mein, meri sabse pyari main character sirf aur sirf <span className="font-bold underline decoration-rose-400">Gunuu</span> hai! ❤️
        </div>
      </motion.div>

      {/* Interactive Start Button */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleStart}
        className="relative group px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-base tracking-wide shadow-2xl shadow-pink-400/70 hover:shadow-pink-500/80 transition-all flex items-center gap-3 animate-pulse-pink"
      >
        <span className="flex items-center gap-2">
          Humari Kahani Dekho ✨
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex items-center gap-1.5 text-xs text-rose-500 font-medium bg-white/70 px-4 py-1.5 rounded-full border border-pink-200"
      >
        <Music2 className="w-3.5 h-3.5 animate-bounce" />
        <span>Earphones laga lo aur background music on kar lo 🎧❤️</span>
      </motion.div>
    </div>
  );
}
