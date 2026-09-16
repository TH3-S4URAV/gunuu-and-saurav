import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen6_Feelings({ onNext, onPrev }) {
  const evolution = [
    { title: "Strangers", subtitle: "Dec 2024", active: false },
    { title: "Friends", subtitle: "Everyday talks", active: false },
    { title: "Besties", subtitle: "Comfort & jokes", active: false },
    { title: "My Person ❤️", subtitle: "Today & Forever", active: true }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-rose-200"
      >
        Chapter 03 • The Shift
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-6"
      >
        Somewhere along the way...
      </motion.h2>

      {/* Evolution Pill Steps */}
      <div className="flex items-center justify-between w-full mb-8 relative px-2">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-pink-200 -translate-y-1/2 -z-0" />
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
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-all ${
                item.active
                  ? 'bg-gradient-to-tr from-rose-500 to-pink-500 text-white ring-4 ring-rose-200 animate-pulse'
                  : 'bg-white text-stone-600 border border-pink-200'
              }`}
            >
              {item.active ? '❤️' : idx + 1}
            </div>
            <span
              className={`text-[11px] sm:text-xs font-semibold mt-1.5 ${
                item.active ? 'text-rose-700' : 'text-stone-500'
              }`}
            >
              {item.title}
            </span>
            <span className="text-[9px] text-stone-400">{item.subtitle}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Emotional Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl mb-8 text-left space-y-4 shadow-xl border border-pink-100"
      >
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
          "I don't know exactly when it happened. There wasn't one particular day."
        </p>

        <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
          We just kept talking... laughing over dumb jokes, handling your drama, your angry moments, and every small thing in between.
        </p>

        <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-100/60 via-pink-100/60 to-purple-100/60 border border-pink-200 text-rose-900 font-serif-romantic italic text-base sm:text-lg">
          "And somewhere along the way... you stopped feeling like just my bestie.
          You became my favourite person."
        </div>
      </motion.div>

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
          <span>The "Kaddu" Inside Joke</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
