import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';

export default function EasterEggModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          className="glass-romantic-card p-6 sm:p-8 rounded-3xl max-w-md w-full text-center relative border border-pink-200 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-600 hover:bg-pink-100/50 transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-4xl mb-3">🌸</div>

          <span className="text-xs uppercase tracking-widest text-rose-500 font-bold block mb-2">
            The Hidden Easter Egg
          </span>

          <h3 className="text-2xl font-serif-romantic font-bold text-rose-900 mb-4">
            P.S. You thought that was everything? 😭
          </h3>

          <div className="space-y-3 text-stone-700 text-sm font-light leading-relaxed mb-6">
            <p>
              I started this entire story with:
            </p>
            <p className="font-serif-romantic italic text-xl text-rose-700 font-semibold">
              "Hey Gunuu... 🌷"
            </p>
            <p>
              So I wanted to end it the exact same way:
            </p>
            <div className="p-4 rounded-2xl bg-rose-50 border border-pink-200 text-rose-900 font-serif-romantic italic text-lg font-bold">
              "Hey Gunuu... ready to make our next chapter together? ❤️"
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider hover:bg-rose-600 shadow-md transition-all"
          >
            Close with a smile 🙈
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
