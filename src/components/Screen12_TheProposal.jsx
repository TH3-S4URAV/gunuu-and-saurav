import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { playHeartbeat, playRingBoxOpen, playChime } from '../utils/soundEffects';

export default function Screen12_TheProposal({ onYes, onNeedTime }) {
  const [phase, setPhase] = useState(1); // 1: Heartbeat build-up, 2: 3D Ring Box, 3: The Proposal
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  // Play heartbeat sound in phase 1
  useEffect(() => {
    if (phase === 1) {
      playHeartbeat();
      const interval = setInterval(() => {
        playHeartbeat();
      }, 1400);
      const timer = setTimeout(() => {
        setPhase(2);
      }, 3500);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [phase]);

  const handleOpenBox = () => {
    playRingBoxOpen();
    setIsBoxOpen(true);
    setTimeout(() => {
      setPhase(3);
    }, 1800);
  };

  const handleYes = () => {
    playChime();
    onYes();
  };

  const handleNeedTime = () => {
    playChime();
    onNeedTime();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <AnimatePresence mode="wait">
        {/* Phase 1: Heartbeat & Suspense */}
        {phase === 1 && (
          <motion.div
            key="phase1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-rose-500 flex items-center justify-center text-white shadow-2xl shadow-rose-500/70 animate-heartbeat ring-8 ring-pink-200">
              <Heart className="w-12 h-12 fill-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-romantic font-extrabold text-rose-950">
              Hold your breath, Gunuu... 🥺
            </h2>

            <p className="text-sm font-medium text-rose-700 font-serif-romantic italic">
              Saurav's heart is beating only for this moment...
            </p>

            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
              <span className="w-3 h-3 rounded-full bg-pink-500 animate-ping delay-100" />
              <span className="w-3 h-3 rounded-full bg-rose-400 animate-ping delay-200" />
            </div>
          </motion.div>
        )}

        {/* Phase 2: The 3D Velvet Ring Box */}
        {phase === 2 && (
          <motion.div
            key="phase2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center w-full"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-rose-600 bg-pink-100 px-4 py-1.5 rounded-full border border-pink-300 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              A Special Surprise For Gunuu
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-3">
              Tap the Box to Open 🎁
            </h2>

            <p className="text-stone-700 text-sm mb-8 font-light">
              "Iske andar ek sawaal hai jo meri poori zindagi badal sakta hai."
            </p>

            {/* 3D Velvet Box */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={!isBoxOpen ? handleOpenBox : undefined}
              className="relative cursor-pointer p-8 rounded-3xl bg-gradient-to-b from-rose-900 via-rose-800 to-rose-950 border-4 border-amber-300 shadow-2xl shadow-rose-900/60 w-64 sm:w-72 aspect-square flex flex-col items-center justify-center transition-all group perspective-1000"
            >
              {/* Golden ribbon */}
              <div className="absolute inset-x-0 h-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md" />
              <div className="absolute inset-y-0 w-4 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 shadow-md" />

              {!isBoxOpen ? (
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-rose-950 flex items-center justify-center shadow-lg mb-3 ring-4 ring-amber-200 animate-bounce">
                    <Gift className="w-8 h-8" />
                  </div>
                  <span className="text-white font-bold text-base tracking-wide drop-shadow-md">
                    Tap to Open 💍
                  </span>
                  <span className="text-[11px] text-amber-200 font-light mt-1">
                    Made with love by Kaddu
                  </span>
                </div>
              ) : (
                /* Opened Ring Display with Radiant Lights */
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1.2, rotate: 0 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="text-6xl mb-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-pulse">
                    💍
                  </div>
                  <span className="text-amber-200 font-serif-romantic font-extrabold text-lg drop-shadow">
                    Forever Solitaire
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white font-bold mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                    For My Future Wiffeyyy
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Phase 3: The Grand Proposal Question */}
        {phase === 3 && (
          <motion.div
            key="phase3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            {/* Sparkling Ring Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12 }}
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-2xl shadow-rose-400/80 mb-4 ring-4 ring-pink-200 animate-bounce"
            >
              <span className="text-4xl">💍</span>
            </motion.div>

            {/* Hero Name Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl font-serif-romantic text-rose-950 font-extrabold mb-4 tracking-tight"
            >
              GUNUU... <span className="text-rose-600">❤️</span>
            </motion.h1>

            {/* The Three Emotional Questions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-3.5 text-stone-800 text-lg sm:text-xl mb-6 font-light"
            >
              <p className="font-serif-romantic italic text-rose-800 font-semibold">
                Will you be my girlfriend?
              </p>
              <p className="font-serif-romantic italic text-rose-800 font-semibold">
                Will you be mine forever?
              </p>
              <p className="font-serif-romantic italic text-2xl sm:text-3xl text-rose-950 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 drop-shadow-sm">
                And someday... will you be my wiffeyyy? 🫣💍❤️
              </p>
            </motion.div>

            {/* Central Question Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-romantic-card p-6 sm:p-7 rounded-3xl w-full mb-8 shadow-2xl border-2 border-pink-300"
            >
              <span className="text-xs uppercase tracking-widest text-rose-600 font-bold block mb-1">
                Dil Se Ek Sawal
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-romantic font-extrabold text-rose-950">
                Will you choose this Kaddu? ❤️
              </h2>
            </motion.div>

            {/* Choices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              {/* YES Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleYes}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-extrabold text-lg shadow-2xl shadow-pink-400/80 hover:shadow-pink-500 transition-all flex items-center justify-center gap-3 animate-pulse-pink"
              >
                <Heart className="w-6 h-6 fill-white" />
                <span>HAAN SAURAV, YES! 💗💍</span>
              </motion.button>

              {/* Need Time Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNeedTime}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 text-stone-700 hover:text-rose-600 hover:bg-white border-2 border-pink-300 text-sm font-bold transition-all shadow-md"
              >
                <span>🌸 I need some time</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
