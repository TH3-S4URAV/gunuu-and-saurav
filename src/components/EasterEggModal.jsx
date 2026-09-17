import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function EasterEggModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleClose = () => {
    playChime();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          className="glass-romantic-card p-6 sm:p-8 rounded-3xl max-w-md w-full text-center relative border-4 border-pink-300 shadow-2xl bg-white"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-pink-100 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-5xl mb-3 animate-bounce">🌸</div>

          <span className="text-xs uppercase tracking-widest text-rose-600 font-extrabold block mb-2">
            The Secret Easter Egg 🤫
          </span>

          <h3 className="text-2xl sm:text-3xl font-serif-romantic font-extrabold text-rose-950 mb-4">
            P.S. Tumhe laga sab khatam ho gaya? 😭
          </h3>

          <div className="space-y-3.5 text-stone-800 text-sm sm:text-base font-light leading-relaxed mb-6 text-left bg-pink-50/70 p-4 rounded-2xl border border-pink-200">
            <p>
              Maine ye poori kahani shuru ki thi:
            </p>
            <p className="font-serif-romantic italic text-2xl text-rose-600 font-bold text-center">
              "Hey Gunuu... 🌷"
            </p>
            <p>
              Toh main isko khatam bhi bilkul waise hi karna chahta hoon:
            </p>
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-serif-romantic italic text-lg sm:text-xl font-bold text-center shadow-md">
              "Hey Gunuu... Ready to make our next chapter together, meri future wiffeyyy? ❤️"
            </div>
          </div>

          <button
            onClick={handleClose}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold uppercase tracking-wider hover:scale-105 shadow-xl transition-all"
          >
            Smile Karke Band Karo 🙈
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
