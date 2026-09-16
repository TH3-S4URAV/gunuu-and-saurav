import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen14_NeedTime({ onBackToProposal, onOpenEasterEgg }) {
  const whatsappUrl = `https://wa.me/${PROPOSAL_CONFIG.whatsAppNumber}?text=${PROPOSAL_CONFIG.whatsAppTimeMessage}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-4"
      >
        🌸
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-4"
      >
        That's completely okay, Gunuu. ❤️
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-xl border border-pink-100 space-y-4 text-stone-700 text-left"
      >
        <p className="font-light text-sm sm:text-base leading-relaxed">
          "I didn't make this website to pressure you or rush you into anything."
        </p>

        <p className="font-light text-sm sm:text-base leading-relaxed">
          I just wanted you to know how deeply special you are to me, and what is genuinely in Saurav's heart.
        </p>

        <div className="p-4 rounded-2xl bg-white/80 border border-pink-100 text-rose-900 font-serif-romantic italic text-base">
          "Take all the time you need. Whatever your answer is... I am endlessly grateful that a random Instagram group chat brought you into my life."
        </div>

        <p className="text-center font-medium text-rose-600 text-sm pt-2">
          No pressure. Just honesty. Always your Kaddu. ❤️
        </p>
      </motion.div>

      {/* Gentle message button */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-md transition-all flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Talk to Saurav on WhatsApp
        </a>

        <button
          onClick={onBackToProposal}
          className="px-6 py-3.5 rounded-full bg-white/80 text-stone-600 border border-pink-200 hover:bg-white text-sm font-medium transition-all"
        >
          Back to Question
        </button>
      </div>

      <button
        onClick={onOpenEasterEgg}
        className="mt-8 text-xs text-rose-400 hover:text-rose-600 font-handwriting text-lg"
      >
        🌸 P.S. A small flower is still waiting here...
      </button>
    </div>
  );
}
