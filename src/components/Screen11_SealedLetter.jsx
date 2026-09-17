import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { playChime, playRingBoxOpen } from '../utils/soundEffects';

export default function Screen11_SealedLetter({ onNext, onPrev }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    playRingBoxOpen();
    setIsOpen(true);
  };

  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-5 py-1.5 rounded-full bg-rose-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-rose-300 flex items-center gap-2 shadow-sm"
      >
        <Mail className="w-4 h-4 text-rose-600" />
        Sirf Gunuu Ke Liye 💌
      </motion.div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-3">
              Kaddu Ka Dil Se Likha Letter 💌
            </h2>
            <p className="text-stone-700 text-sm mb-8 font-light max-w-sm">
              "Ab tak ki saari baatein ek taraf... aur ye letter ek taraf. Isko maine sach mein poore dil se likha hai."
            </p>

            {/* Glowing Interactive Envelope */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenEnvelope}
              className="relative cursor-pointer group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-pink-50 to-rose-100 border-2 border-pink-300 shadow-2xl shadow-pink-300/70 flex flex-col items-center w-72 sm:w-80 transition-all"
            >
              {/* Wax Seal */}
              <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform mb-4 ring-4 ring-pink-200">
                <Heart className="w-9 h-9 fill-white animate-pulse" />
              </div>

              <span className="font-serif-romantic font-extrabold text-2xl text-rose-950">
                Tap to Open
              </span>
              <span className="text-sm text-rose-600 font-handwriting text-xl mt-1 font-bold">
                Sealed with eternal love ❤️
              </span>
            </motion.div>

            <button
              onClick={handleOpenEnvelope}
              className="mt-8 px-7 py-3 rounded-full bg-rose-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-rose-600 shadow-lg transition-all flex items-center gap-2 animate-pulse"
            >
              <Sparkles className="w-4 h-4" />
              Seal Kholo Aur Padhlo
            </button>
          </motion.div>
        ) : (
          /* Unfolded Letter View */
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            <div className="glass-romantic-card p-6 sm:p-8 rounded-3xl text-left border-2 border-pink-300 shadow-2xl space-y-4 max-h-[62vh] overflow-y-auto mb-6 relative bg-white/95">
              <div className="border-b-2 border-pink-100 pb-3 mb-2 flex justify-between items-center">
                <span className="font-handwriting text-3xl font-extrabold text-rose-950">
                  Meri Pyari Gunuu,
                </span>
                <span className="text-xs text-rose-600 font-serif-romantic font-bold bg-pink-100 px-3 py-1 rounded-full">
                  From Your Kaddu ❤️
                </span>
              </div>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
                Pata nahi main is baat ko kitne dino se kehne ki koshish kar raha tha... <br />
                Sochta tha text kar doon? Call pe bol doon? Ya chup rahu?
              </p>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
                Lekin tere sath reh kar maine ek cheez seekhi hai—mujhe koi rehearsed ya filmy line nahi chahiye. Mujhe bas apna saccha dil tumhare aage rakh dena hai.
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-300 text-rose-950 font-light text-sm sm:text-base leading-relaxed space-y-2">
                <p>
                  December 2024 mein tu mere liye bas ek random Instagram notification thi. Fir hum dost bane. Fir besties.
                </p>
                <p className="font-serif-romantic italic text-base sm:text-lg text-rose-950 font-bold">
                  Aur pata nahi kab... tu meri aane wali har kal ka hissa ban gayi.
                </p>
              </div>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
                Mujhe teri har baat pasand hai. Tere random messages, teri cute si smile, tere 100 nakhre, aur tera wo ULTRA PRO MAXX gussa bhi! 😂 Aur sabse zyada... mujhe tera mujhpe haq jatana pasand hai.
              </p>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
                Hum Bihar aur Punjab ke beech do alag screens pe hain. Hum abhi tak mile nahi... par mera dil roz tere paas hota hai. Main chahta hoon hum bohot jaldi milein, tumhara haath pakdu, aur tere sath real memories banau.
              </p>

              <p className="text-stone-900 text-sm sm:text-base leading-relaxed font-bold">
                Aur aaj... main is rishte ko "almost" nahi kehna chahta. <br />
                Main isko ek pakka naam dena chahta hoon.
              </p>

              <div className="pt-2 text-center">
                <span className="text-2xl sm:text-3xl font-serif-romantic font-extrabold text-rose-600 block">
                  I Love You, Gunuu. ❤️
                </span>
                <span className="text-xs text-stone-600 font-handwriting text-xl font-bold">
                  Hamesha sirf tumhara Kaddu...
                </span>
              </div>
            </div>

            {/* Navigation to final screen */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleNext}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold shadow-2xl shadow-pink-400/80 hover:shadow-pink-500 transition-all flex items-center gap-3 text-base tracking-wide animate-pulse-pink"
            >
              <span>The Grand Proposal (Aakhiri Sawal) 💍✨</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={onPrev}
          className="mt-6 text-xs font-bold text-stone-600 hover:text-rose-600 flex items-center gap-1 bg-white/70 px-4 py-1.5 rounded-full border border-pink-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to AI Bestie
        </button>
      )}
    </div>
  );
}
