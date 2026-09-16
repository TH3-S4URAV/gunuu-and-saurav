import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, Lock, KeyRound } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen2_Mystery({ onNext }) {
  const [unlockedClues, setUnlockedClues] = useState([]);
  const [activeClue, setActiveClue] = useState(null);

  const clues = PROPOSAL_CONFIG.hiddenClues;

  const handleClueClick = (clue) => {
    if (!unlockedClues.includes(clue.id)) {
      setUnlockedClues((prev) => [...prev, clue.id]);
    }
    setActiveClue(clue);
  };

  const allUnlocked = unlockedClues.length >= clues.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-xl mx-auto">
      {/* Intro prompt */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <span className="text-3xl sm:text-4xl mb-2 inline-block">🧩</span>
        <h2 className="text-2xl sm:text-3xl font-serif-romantic text-rose-900 font-semibold mb-2">
          The 5 Hidden Clues
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto">
          "There's something I want to tell you... but I don't want to say it all at once.
          Tap the pieces to find our memories." 🫣
        </p>
      </motion.div>

      {/* Progress pill */}
      <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-pink-100/70 border border-pink-200 text-pink-700 text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span>Discovered: {unlockedClues.length} of {clues.length} pieces</span>
      </div>

      {/* 5 Hidden Memory Cards */}
      <div className="grid grid-cols-5 gap-2.5 sm:gap-4 w-full mb-8">
        {clues.map((clue, idx) => {
          const isUnlocked = unlockedClues.includes(clue.id);
          const isSelected = activeClue?.id === clue.id;

          return (
            <motion.button
              key={clue.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClueClick(clue)}
              className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 border ${
                isUnlocked
                  ? 'bg-gradient-to-b from-white to-pink-50 border-pink-300 shadow-md shadow-pink-200/50'
                  : 'bg-white/60 backdrop-blur-sm border-pink-100 hover:border-pink-300'
              } ${isSelected ? 'ring-2 ring-rose-400 ring-offset-2' : ''}`}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 transition-transform duration-300">
                {isUnlocked ? clue.icon : '✨'}
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-stone-600 truncate w-full text-center">
                #{idx + 1}
              </span>

              {isUnlocked && (
                <div className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Active Clue Inspector */}
      <div className="w-full min-h-[120px] mb-8">
        <AnimatePresence mode="wait">
          {activeClue ? (
            <motion.div
              key={activeClue.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="glass-romantic-card p-5 rounded-2xl text-left border border-rose-100/80 shadow-lg shadow-pink-100/40"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-2xl">{activeClue.icon}</span>
                <div>
                  <h4 className="text-sm sm:text-base font-serif-romantic font-bold text-rose-900">
                    {activeClue.title}
                  </h4>
                  <span className="text-[11px] text-rose-400 tracking-wider uppercase font-semibold">
                    Memory Fragment Unlocked
                  </span>
                </div>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mt-2 font-light">
                {activeClue.revealedText}
              </p>
            </motion.div>
          ) : (
            <div className="p-5 rounded-2xl border border-dashed border-pink-200 text-stone-400 text-xs sm:text-sm flex items-center justify-center gap-2">
              <KeyRound className="w-4 h-4 text-pink-300" />
              Tap on any icon above to reveal the clues!
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onNext}
        className={`px-8 py-3.5 rounded-full font-medium flex items-center gap-2 text-sm sm:text-base shadow-lg transition-all ${
          allUnlocked || unlockedClues.length >= 2
            ? 'bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white shadow-pink-300/60'
            : 'bg-white/80 text-stone-500 border border-pink-200 hover:bg-white hover:text-rose-600'
        }`}
      >
        <span>{allUnlocked ? "All Clues Found! Let's Begin" : "Continue to Story"}</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
