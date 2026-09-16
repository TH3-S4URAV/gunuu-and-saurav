import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen3_December2024({ onNext, onPrev }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-pink-100/90 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-pink-200"
      >
        Chapter 01 • The Beginning
      </motion.div>

      {/* Screen Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-6"
      >
        Where it all started...
      </motion.h2>

      {/* Aesthetic Instagram Chat Mockup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic-card w-full p-6 rounded-3xl mb-8 relative overflow-hidden shadow-xl"
      >
        {/* Soft background gradient orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl" />

        <div className="flex items-center justify-between border-b border-pink-100 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              GC
            </div>
            <div className="text-left">
              <span className="text-xs font-semibold text-stone-700 block">
                Random Instagram GC
              </span>
              <span className="text-[10px] text-stone-400">December 2024</span>
            </div>
          </div>
          <span className="text-xs bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-full font-medium">
            Cosmic Timing
          </span>
        </div>

        {/* Narrative quotes */}
        <div className="space-y-3.5 text-left text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-white/70 border border-pink-100/60 shadow-sm">
            <p className="italic text-stone-600 font-light">
              "I don't even remember what our first conversation was about..."
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-pink-200/80 shadow-sm text-rose-900">
            <p className="font-serif-romantic italic text-base sm:text-lg">
              "But somehow... that random group chat led me to you."
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/70 border border-pink-100/60 shadow-sm text-stone-600 font-light">
            <p>
              Two strangers who didn't know each other exists.
              No grand announcement. Just a simple notification.
            </p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-pink-100/70 text-center">
          <p className="text-xs sm:text-sm font-medium text-rose-700 font-serif-romantic">
            And I had absolutely no idea how important you'd become. ❤️
          </p>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
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
          <span>The Next Chapter</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
