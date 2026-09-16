import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, MessageCircle } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen13_Accepted({ onOpenEasterEgg }) {
  useEffect(() => {
    // Fire beautiful heart and golden confetti explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#ff69b4', '#ff1493', '#ffd700']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#f472b6', '#fb7185', '#ffe4e6']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 1.2,
      colors: ['#e11d48', '#fda4af', '#ffffff']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#ffb6c1', '#db2777']
    });

    const interval = setInterval(() => {
      confetti({
        particleCount: 20,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() * 0.4 },
        colors: ['#ff69b4', '#fda4af', '#f43f5e']
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = `https://wa.me/${PROPOSAL_CONFIG.whatsAppNumber}?text=${PROPOSAL_CONFIG.whatsAppYesMessage}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Celebration badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="px-5 py-2 rounded-full bg-rose-500 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-rose-300 flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-amber-200" />
        Official Best Day Ever
        <Heart className="w-4 h-4 fill-white" />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif-romantic text-rose-950 font-bold mb-4"
      >
        SHE SAID YES! <span className="text-rose-500">❤️</span>
      </motion.h1>

      {/* Love Story Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-2xl border border-pink-200 space-y-4 text-stone-700"
      >
        <p className="text-xs text-rose-500 uppercase font-semibold tracking-wider">
          December 2024 • A random Instagram GC
        </p>
        <p className="font-light text-sm sm:text-base leading-relaxed">
          Two people who didn't know what was coming... <br />
          A friendship. A thousand little conversations. Inside jokes.
        </p>

        <div className="py-2 border-y border-pink-100">
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-900">
            GUNUU ❤️ SAURAV
          </h2>
          <span className="text-xs text-stone-400 font-medium">Chapter One: Us</span>
        </div>

        <p className="text-xs sm:text-sm text-rose-700 italic font-serif-romantic">
          "This isn't the end of our story. It's the beginning of the next chapter."
        </p>
      </motion.div>

      {/* WhatsApp Send Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-xl shadow-emerald-200/80 transition-all flex items-center justify-center gap-2.5 mb-6"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>Tell Saurav on WhatsApp 💌</span>
      </motion.a>

      {/* Easter egg trigger flower */}
      <button
        onClick={onOpenEasterEgg}
        className="text-xs text-rose-400 hover:text-rose-600 font-handwriting text-lg flex items-center gap-1 transition-colors"
      >
        🌸 P.S. Click here for one last secret...
      </button>
    </div>
  );
}
