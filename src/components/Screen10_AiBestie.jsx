import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';
import { playChime } from '../utils/soundEffects';

export default function Screen10_AiBestie({ onNext, onPrev }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const questions = PROPOSAL_CONFIG.aiQuestions;

  const handleSelectQuestion = (idx) => {
    playChime();
    setSelectedIdx(idx);
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
        className="px-5 py-1.5 rounded-full bg-purple-200/90 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-purple-300 flex items-center gap-2 shadow-sm"
      >
        <Bot className="w-4 h-4 text-purple-700" />
        AI Bestie Diagnostics
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-2"
      >
        Ask the "AI Bestie" 🤖😂
      </motion.h2>

      <p className="text-stone-700 text-sm mb-6 font-light">
        "Maine is AI ko humare pure WhatsApp chats aur yaadon se train kiya hai!"
      </p>

      {/* Interactive Question Chips */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-6 max-w-md">
        {questions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectQuestion(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedIdx === idx
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-300 scale-105 ring-2 ring-purple-300'
                : 'bg-white/80 text-stone-700 hover:bg-white border-2 border-purple-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            {item.q}
          </button>
        ))}
      </div>

      {/* Chat Bubble Interface */}
      <div className="w-full mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-romantic-card p-6 rounded-3xl text-left border-2 border-purple-300 shadow-2xl space-y-4"
          >
            {/* User Question */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none shadow-md max-w-[85%] font-bold">
                {questions[selectedIdx].q}
              </div>
            </div>

            {/* AI Answer */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md ring-2 ring-purple-200">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white border-2 border-purple-200 p-4 rounded-3xl rounded-tl-none text-stone-800 text-xs sm:text-sm leading-relaxed shadow-sm font-medium">
                {questions[selectedIdx].a}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          className="p-4 rounded-full bg-white border-2 border-pink-300 text-stone-600 hover:text-rose-600 hover:bg-pink-50 transition-all shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold shadow-xl shadow-pink-400/60 hover:shadow-2xl transition-all flex items-center gap-2.5 text-sm sm:text-base animate-pulse-pink"
        >
          <span>Saurav Ka Letter 💌</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
