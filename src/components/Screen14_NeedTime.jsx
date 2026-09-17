import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playChime } from '../utils/soundEffects';

export default function Screen14_NeedTime({ onBackToProposal, onOpenEasterEgg }) {
  const whatsappUrl = `https://wa.me/${PROPOSAL_CONFIG.whatsAppNumber}?text=${PROPOSAL_CONFIG.whatsAppTimeMessage}`;

  const handleBack = () => {
    playChime();
    onBackToProposal();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-3xl mb-4 shadow-md ring-4 ring-pink-100"
      >
        🌸
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-4"
      >
        Koi Baat Nahi Meri Gunuu ❤️
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-2xl border-2 border-pink-300 space-y-4 text-stone-800 text-left"
      >
        <p className="font-light text-sm sm:text-base leading-relaxed">
          "Maine ye website tumpar koi pressure ya jaldbazi karne ke liye nahi banayi thi."
        </p>

        <p className="font-light text-sm sm:text-base leading-relaxed">
          Main bas chahta tha ki tumhe pata chale ki tum mere liye kitni special ho, aur Saurav ke dil mein tumhare liye kitna sachha pyar hai.
        </p>

        <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-rose-950 font-serif-romantic italic text-base font-bold">
          "Tum jitna time lena chaho aaram se lo. Tumhara jo bhi jawab hoga... main hamesha shukrguzaar rahunga ki kismat ne mujhe tumse milwaya."
        </div>

        <p className="text-center font-bold text-rose-600 text-sm pt-2">
          No pressure. Just honesty. Hamesha tumhara Kaddu ❤️
        </p>
      </motion.div>

      {/* WhatsApp Message */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Kaddu Se WhatsApp Par Baat Karo
        </a>

        <button
          onClick={handleBack}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-stone-700 border-2 border-pink-300 hover:bg-pink-50 text-sm font-bold transition-all"
        >
          Wapas Sawal Dekho
        </button>
      </div>

      <button
        onClick={onOpenEasterEgg}
        className="mt-8 text-xs text-rose-600 hover:text-rose-800 font-handwriting text-xl font-bold"
      >
        🌸 P.S. Ek chota sa phool abhi bhi yahan hai...
      </button>
    </div>
  );
}
