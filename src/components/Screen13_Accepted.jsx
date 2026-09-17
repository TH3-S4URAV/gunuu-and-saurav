import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, MessageCircle, Award, CheckCircle } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playFanfare } from '../utils/soundEffects';

export default function Screen13_Accepted({ onOpenEasterEgg }) {
  useEffect(() => {
    playFanfare();

    // Explosive Fireworks & Confetti
    const duration = 6 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#ff1493', '#ff69b4', '#ffd700', '#ff8da1', '#ffffff']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#ff1493', '#ff69b4', '#ffd700', '#ff8da1', '#ffffff']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const whatsappUrl = `https://wa.me/${PROPOSAL_CONFIG.whatsAppNumber}?text=${PROPOSAL_CONFIG.whatsAppYesMessage}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      {/* Celebration badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-xs font-extrabold uppercase tracking-widest mb-5 shadow-xl shadow-pink-300 flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-amber-200 animate-spin" />
        Official Best Day of My Life
        <Heart className="w-4 h-4 fill-white animate-pulse" />
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif-romantic text-rose-950 font-extrabold mb-3"
      >
        SHE SAID YES! <span className="text-rose-600">❤️🎉</span>
      </motion.h1>

      <p className="text-stone-700 text-sm mb-6 font-light">
        December 2024 se shuru hui dosti... aaj humara pyara safar ban gayi!
      </p>

      {/* Official Love Certificate / Relationship Passport */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-2xl border-4 border-amber-300/80 space-y-4 text-stone-800 relative overflow-hidden bg-gradient-to-b from-white via-pink-50/50 to-white"
      >
        {/* Certificate Golden Seal Header */}
        <div className="flex items-center justify-center gap-2 text-amber-700 font-serif-romantic font-bold text-sm uppercase tracking-widest border-b-2 border-pink-200 pb-3">
          <Award className="w-5 h-5 text-amber-500" />
          Official Love Certificate
          <Award className="w-5 h-5 text-amber-500" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-extrabold text-rose-950">
            GUNUU ❤️ SAURAV
          </h2>
          <span className="text-xs text-rose-600 font-bold tracking-wider uppercase">
            Chapter One: Forever Us
          </span>
        </div>

        {/* Certificate Terms & Guarantees */}
        <div className="space-y-2 text-left text-xs sm:text-sm bg-white/80 p-4 rounded-2xl border border-pink-200 shadow-inner">
          <div className="flex items-center gap-2 text-stone-800">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>Gunuu's Rights:</strong> Unlimited nakhre & ULTRA PRO MAXX gussa allowed 24x7.</span>
          </div>
          <div className="flex items-center gap-2 text-stone-800">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>Saurav's Duty:</strong> Listening to everything and saying "Okay Gunuu" 😂</span>
          </div>
          <div className="flex items-center gap-2 text-stone-800">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>Validity:</strong> Lifetime agreement as Girlfriend & Future Wiffeyyy 💍</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-rose-700 italic font-serif-romantic font-bold">
          "This isn't just the end of a proposal... it's the start of our forever." ❤️
        </p>
      </motion.div>

      {/* Send Answer to Saurav on WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg shadow-2xl shadow-emerald-300 transition-all flex items-center justify-center gap-3 mb-6 animate-pulse"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span>Kaddu Ko WhatsApp Par Bolo 💌</span>
      </motion.a>

      {/* Secret Easter Egg */}
      <button
        onClick={onOpenEasterEgg}
        className="text-xs text-rose-600 hover:text-rose-800 font-handwriting text-xl flex items-center gap-1.5 transition-colors font-bold bg-white/70 px-4 py-1.5 rounded-full border border-pink-200"
      >
        🌸 P.S. Ek aakhiri secret baat yahan bhi hai...
      </button>
    </div>
  );
}
