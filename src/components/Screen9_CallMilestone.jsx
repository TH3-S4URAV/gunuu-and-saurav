import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Heart, ArrowRight, ArrowLeft, Mic } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen9_CallMilestone({ onNext, onPrev }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Date Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-rose-200"
      >
        Chapter 06 • The Voice Milestone
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-2"
      >
        16 • 09 • 2026 📞
      </motion.h2>

      <p className="text-stone-600 text-sm mb-6 font-light">
        "The day I finally got to hear your voice for real."
      </p>

      {/* Audio Call Interface Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-romantic-card w-full p-6 rounded-3xl mb-6 shadow-xl border border-pink-100 relative overflow-hidden"
      >
        {/* Soft background call circle */}
        <div className="flex items-center justify-between mb-4 border-b border-pink-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-rose-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
            First Audio Call
          </div>
          <span className="text-xs font-mono text-stone-500 bg-white/70 px-2.5 py-1 rounded-full border border-pink-100">
            Duration: ~1 Hour
          </span>
        </div>

        {/* Pulsing Audio Wave Visualizer */}
        <div className="flex items-center justify-center gap-1.5 my-5 h-12">
          {[40, 70, 95, 60, 85, 100, 75, 45, 90, 65, 80, 50].map((height, i) => (
            <motion.span
              key={i}
              animate={{ height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.08,
                ease: 'easeInOut'
              }}
              className="w-1.5 rounded-full bg-gradient-to-t from-pink-400 to-rose-500"
            />
          ))}
        </div>

        {/* Narrative text */}
        <div className="text-left space-y-3 text-stone-700 text-sm leading-relaxed">
          <p className="font-light">
            "Maybe it was just one phone call. Maybe it was only about an hour."
          </p>
          <div className="p-3.5 rounded-2xl bg-white/70 border border-pink-100 text-rose-950 font-serif-romantic italic text-base">
            "Hearing you talk felt completely different. And somehow, it made me even more certain that I want you in my life."
          </div>
        </div>

        {/* Bihar to Punjab Connection */}
        <div className="mt-5 pt-4 border-t border-pink-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-stone-600 font-medium">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            Bihar (Saurav)
          </div>

          <div className="flex items-center gap-1 text-rose-400">
            <span className="text-[10px]">Distance</span>
            <div className="w-10 border-t border-dashed border-rose-300" />
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </div>

          <div className="flex items-center gap-1 text-stone-600 font-medium">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            Punjab (Gunuu)
          </div>
        </div>
      </motion.div>

      {/* Promise of meeting */}
      <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-200/80 mb-6 text-xs sm:text-sm text-stone-700 font-light text-center">
        "Right now, we're still two people separated by screens. We haven't met yet...
        <span className="font-semibold text-rose-800 block mt-1">
          But someday, we will. And when that day comes, I want it to be our next chapter." ❤️
        </span>
      </div>

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
          <span>Ask AI Bestie 🤖</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
