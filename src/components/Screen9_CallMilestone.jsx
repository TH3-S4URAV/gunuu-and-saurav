import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, ArrowRight, ArrowLeft, PhoneCall } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen9_CallMilestone({ onNext, onPrev }) {
  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-5 py-1.5 rounded-full bg-rose-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-rose-300 shadow-sm"
      >
        Chapter 07 • 16 September 2026
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-2"
      >
        Jab Pehli Baar Teri Awaaz Suni 📞❤️
      </motion.h2>

      <p className="text-stone-700 text-sm mb-6 font-light">
        "Texts se nikal kar achanak teri awaaz mere kaan mein aayi..."
      </p>

      {/* Audio Call Interface Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-romantic-card w-full p-6 sm:p-7 rounded-3xl mb-6 shadow-2xl border-2 border-pink-300 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4 border-b-2 border-pink-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
            First Proper Audio Call
          </div>
          <span className="text-xs font-mono font-bold text-rose-900 bg-pink-100 px-3 py-1 rounded-full border border-pink-200">
            ~1 Hour of Pure Magic
          </span>
        </div>

        {/* Audio Wave Visualizer */}
        <div className="flex items-center justify-center gap-2 my-6 h-14">
          {[40, 75, 100, 60, 90, 100, 80, 50, 95, 70, 85, 55].map((height, i) => (
            <motion.span
              key={i}
              animate={{ height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.08,
                ease: 'easeInOut'
              }}
              className="w-2 rounded-full bg-gradient-to-t from-pink-500 via-rose-500 to-red-400 shadow-md"
            />
          ))}
        </div>

        {/* Emotional text */}
        <div className="text-left space-y-3.5 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-light italic text-stone-700">
            "Sach batau na Gunuu? Jab tune pehli baar call pe bola... mere haath sach mein kaanp rahe the!"
          </p>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-rose-950 font-serif-romantic italic text-base sm:text-lg font-bold">
            "Itne mahino baad teri awaaz suni... aur ek ghanta kaise beet gaya pata hi nahi chala. Uss din dil ne confirm bol diya ki tu hi meri manzil hai."
          </div>
        </div>

        {/* Bihar to Punjab Connection */}
        <div className="mt-6 pt-4 border-t-2 border-pink-100 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-stone-800 font-bold">
            <MapPin className="w-4 h-4 text-rose-600" />
            Bihar (Saurav)
          </div>

          <div className="flex items-center gap-1 text-rose-500 font-semibold">
            <span className="text-[10px]">1200 KM</span>
            <div className="w-8 sm:w-14 border-t-2 border-dashed border-rose-400" />
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600 animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 text-stone-800 font-bold">
            <MapPin className="w-4 h-4 text-rose-600" />
            Punjab (Gunuu)
          </div>
        </div>
      </motion.div>

      {/* Promise of meeting */}
      <div className="p-4 rounded-3xl bg-white/90 border-2 border-pink-300 mb-6 text-xs sm:text-sm text-stone-800 font-medium text-center shadow-lg">
        "Abhi hum do screens ke peeche hain aur distance hai...
        <span className="font-bold text-rose-700 block mt-1 text-sm font-serif-romantic">
          Par bohot jaldi main tumhare samne baith ke ye sab bolunga. That's my promise." ❤️
        </span>
      </div>

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
          <span>Ask AI Bestie 🤖</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
