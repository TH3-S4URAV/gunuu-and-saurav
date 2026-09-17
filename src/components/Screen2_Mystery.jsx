import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, KeyRound, Heart } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playChime } from '../utils/soundEffects';

export default function Screen2_Mystery({ onNext }) {
  const [unlockedClues, setUnlockedClues] = useState([]);
  const [activeClue, setActiveClue] = useState(null);

  const clues = PROPOSAL_CONFIG.hiddenClues;

  const handleClueClick = (clue) => {
    playChime();
    if (!unlockedClues.includes(clue.id)) {
      setUnlockedClues((prev) => [...prev, clue.id]);
    }
    setActiveClue(clue);
  };

  const handleContinue = () => {
    playChime();
    onNext();
  };

  const allUnlocked = unlockedClues.length >= clues.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-xl mx-auto relative z-10">
      {/* Intro prompt */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5"
      >
        <span className="text-4xl mb-2 inline-block animate-bounce">🧩</span>
        <h2 className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-2">
          5 Secret Memories 🔐
        </h2>
        <p className="text-stone-700 text-sm sm:text-base max-w-md mx-auto font-light">
          "Mujhe tumse kuch bohot zaroori kehna hai... par aaram se! <br />
          Pehle in 5 tukdo par tap karke humari yaadein khojo." 🫣
        </p>
      </motion.div>

      {/* Progress pill */}
      <div className="flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-pink-200/80 border-2 border-pink-300 text-rose-800 text-xs font-bold shadow-sm">
        <Sparkles className="w-4 h-4 text-rose-600 animate-spin" />
        <span>Uncovered: {unlockedClues.length} of {clues.length} pieces</span>
      </div>

      {/* 5 Hidden Memory Cards */}
      <div className="grid grid-cols-5 gap-2.5 sm:gap-4 w-full mb-6">
        {clues.map((clue, idx) => {
          const isUnlocked = unlockedClues.includes(clue.id);
          const isSelected = activeClue?.id === clue.id;

          return (
            <motion.button
              key={clue.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleClueClick(clue)}
              className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-3xl transition-all duration-300 border-2 ${
                isUnlocked
                  ? 'bg-gradient-to-b from-white to-pink-100 border-pink-400 shadow-lg shadow-pink-300/50'
                  : 'bg-white/70 backdrop-blur-md border-pink-200 hover:border-pink-400'
              } ${isSelected ? 'ring-4 ring-rose-400 ring-offset-2' : ''}`}
            >
              <div className="text-3xl sm:text-4xl mb-1.5 transition-transform duration-300">
                {isUnlocked ? clue.icon : '✨'}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-rose-800 truncate w-full text-center">
                #{idx + 1}
              </span>

              {isUnlocked && (
                <div className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white rounded-full p-1 shadow-md animate-bounce">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Active Clue Inspector */}
      <div className="w-full min-h-[130px] mb-8">
        <AnimatePresence mode="wait">
          {activeClue ? (
            <motion.div
              key={activeClue.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="glass-romantic-card p-6 rounded-3xl text-left border-2 border-pink-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-3xl">{activeClue.icon}</span>
                <div>
                  <h4 className="text-base sm:text-lg font-serif-romantic font-bold text-rose-950">
                    {activeClue.title}
                  </h4>
                  <span className="text-[11px] text-pink-600 tracking-wider uppercase font-bold">
                    Memory Unlocked ✨
                  </span>
                </div>
              </div>
              <p className="text-stone-800 text-sm leading-relaxed mt-2 font-medium">
                {activeClue.revealedText}
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-3xl border-2 border-dashed border-pink-300 text-rose-700 text-xs sm:text-sm flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm">
              <KeyRound className="w-4 h-4 text-pink-500 animate-pulse" />
              Upar kisi bhi icon par tap karo pehle!
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleContinue}
        className={`px-9 py-4 rounded-full font-bold flex items-center gap-2.5 text-sm sm:text-base shadow-xl transition-all ${
          allUnlocked || unlockedClues.length >= 2
            ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-pink-400/60 animate-pulse-pink'
            : 'bg-white text-stone-600 border-2 border-pink-300 hover:bg-pink-50'
        }`}
      >
        <span>{allUnlocked ? "Saari Yaadein Mil Gayi! Aage Chalein ❤️" : "Aage Dekho"}</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
