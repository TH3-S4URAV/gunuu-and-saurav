import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, MessageSquare, ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { PROPOSAL_CONFIG } from '../data/proposalData';

export default function Screen10_AiBestie({ onNext, onPrev }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const questions = PROPOSAL_CONFIG.aiQuestions;

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-purple-100/90 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-purple-200 flex items-center gap-1.5"
      >
        <Bot className="w-3.5 h-3.5 text-purple-600" />
        AI Bestie Diagnostics
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-2"
      >
        Ask the "AI Bestie" 🤖
      </motion.h2>

      <p className="text-stone-600 text-sm mb-6 font-light">
        "Ask questions about us. I trained this AI strictly with facts!" 😂
      </p>

      {/* Interactive Question Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-md">
        {questions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
              selectedIdx === idx
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200 scale-105'
                : 'bg-white/80 text-stone-600 hover:bg-white border border-purple-100'
            }`}
          >
            <MessageSquare className="w-3 h-3" />
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
            className="glass-romantic-card p-5 sm:p-6 rounded-3xl text-left border border-purple-100 shadow-xl space-y-4"
          >
            {/* User Question */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] font-medium">
                {questions[selectedIdx].q}
              </div>
            </div>

            {/* AI Answer */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white/90 border border-purple-100 p-4 rounded-2xl rounded-tl-none text-stone-700 text-xs sm:text-sm leading-relaxed shadow-sm font-light">
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
          className="p-3.5 rounded-full bg-white/80 border border-pink-200 text-stone-500 hover:text-rose-600 hover:bg-white transition-all shadow-sm"
          title="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white font-medium shadow-lg shadow-pink-300/50 hover:shadow-xl transition-all flex items-center gap-2 text-sm sm:text-base"
        >
          <span>The Sealed Letter 💌</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
