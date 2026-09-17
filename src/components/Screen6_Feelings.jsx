import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, ArrowLeft, Gift } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playChime } from '../utils/soundEffects';

export default function Screen6_Feelings({ onNext, onPrev }) {
  const [currentReasonIdx, setCurrentReasonIdx] = useState(0);
  const reasons = PROPOSAL_CONFIG.loveReasons;

  const evolution = [
    { title: "Strangers", subtitle: "Dec 2024", active: false },
    { title: "Dost", subtitle: "Everyday chats", active: false },
    { title: "Besties", subtitle: "Comfort & jokes", active: false },
    { title: "My Person ❤️", subtitle: "Today & Forever", active: true }
  ];

  const handleNextReason = () => {
    playChime();
    setCurrentReasonIdx((prev) => (prev + 1) % reasons.length);
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
        Chapter 04 • The Realisation
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-6"
      >
        Baaton-Baaton Mein Pyar... ❤️
      </motion.h2>

      {/* Evolution Pill Steps */}
      <div className="flex items-center justify-between w-full mb-7 relative px-2">
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-pink-300 -translate-y-1/2 -z-0" />
        {evolution.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className={`relative z-10 flex flex-col items-center text-center ${
              item.active ? 'scale-110' : ''
            }`}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-all ${
                item.active
                  ? 'bg-gradient-to-tr from-pink-500 to-rose-600 text-white ring-4 ring-rose-300 animate-pulse'
                  : 'bg-white text-stone-700 border-2 border-pink-300'
              }`}
            >
              {item.active ? '❤️' : idx + 1}
            </div>
            <span
              className={`text-xs font-bold mt-1.5 ${
                item.active ? 'text-rose-700 font-serif-romantic' : 'text-stone-600'
              }`}
            >
              {item.title}
            </span>
            <span className="text-[10px] text-pink-600">{item.subtitle}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Emotional Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl mb-6 text-left space-y-4 shadow-2xl border-2 border-pink-300"
      >
        <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
          "Mujhe sach mein nahi pata ye kis din hua. Koi ek tareekh nahi thi."
        </p>

        <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
          Hum bas roz baat karte rahe... tere drama, tere nakhre, teri hasi, aur un hazaron baaton ke beech...
        </p>

        <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-rose-950 font-serif-romantic italic text-base sm:text-lg font-bold">
          "Kab tu sirf bestie se aage badhkar meri sabse favourite person ban gayi... mujhe pata hi nahi chala." ❤️
        </div>
      </motion.div>

      {/* Interactive "Why Saurav loves Gunuu" Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={handleNextReason}
        className="w-full p-5 rounded-3xl bg-white/90 border-2 border-pink-300 shadow-lg cursor-pointer mb-7 text-left relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-pink-500" />
            Reason #{currentReasonIdx + 1} Why I Love You
          </span>
          <span className="text-[11px] text-pink-500 font-semibold bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
            Tap for next note 💌
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentReasonIdx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="font-handwriting text-2xl text-rose-900 font-semibold leading-snug"
          >
            "{reasons[currentReasonIdx]}"
          </motion.p>
        </AnimatePresence>
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
          <span>Kaddu & Gunuu Story 😂</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
