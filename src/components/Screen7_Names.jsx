import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen7_Names({ onNext, onPrev }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-1.5 rounded-full bg-pink-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200"
      >
        Chapter 04 • The Inside Joke
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-4"
      >
        Gunuu & Kaddu 😂❤️
      </motion.h2>

      <p className="text-stone-600 text-sm mb-6 font-light max-w-md">
        "Two completely random names... but somehow, they became exclusively ours."
      </p>

      {/* Dual Interactive Nickname Cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-5 w-full mb-8">
        {/* Card 1: Gunuu */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: -1 }}
          className="glass-romantic-card p-5 rounded-3xl text-center border border-pink-200 shadow-md relative overflow-hidden"
        >
          <div className="text-4xl mb-2">🌷</div>
          <span className="text-[10px] uppercase font-bold text-pink-500 tracking-wider">
            Saurav calls her
          </span>
          <h3 className="text-2xl font-serif-romantic font-bold text-rose-900 mt-1">
            Gunuu ❤️
          </h3>
          <p className="text-xs text-stone-500 mt-2 font-light">
            Real Name: GurneeT <br />
            Specialty: Unlimited Nakhre & being his favourite
          </p>
        </motion.div>

        {/* Card 2: Kaddu */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="glass-romantic-card p-5 rounded-3xl text-center border border-amber-200 shadow-md relative overflow-hidden bg-gradient-to-b from-white to-amber-50/40"
        >
          <div className="text-4xl mb-2">🎃</div>
          <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
            Gunuu calls him
          </span>
          <h3 className="text-2xl font-serif-romantic font-bold text-stone-800 mt-1">
            Kaddu 😂
          </h3>
          <p className="text-xs text-stone-500 mt-2 font-light">
            Real Name: Saurav <br />
            Status: Fully surrendered to Gunuu's orders
          </p>
        </motion.div>
      </div>

      {/* Funny confession dialogue card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-romantic p-5 rounded-3xl text-left border border-pink-100 mb-8 space-y-2.5 text-sm text-stone-700 shadow-md"
      >
        <div className="flex items-center gap-2 text-rose-800 font-serif-romantic font-semibold text-base">
          <Sparkles className="w-4 h-4 text-pink-500" />
          The Official Legal Agreement:
        </div>
        <p className="font-light italic text-stone-600">
          "The whole world calls me Saurav... but you arbitrarily decided I was a Kaddu.
          And unfortunately... I happily accepted the new identity because you're the one who gave it." 😂
        </p>
        <p className="text-xs text-rose-500 font-medium">
          bbe • bby • bbu • wiffeyyy 💕
        </p>
      </motion.div>

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
          <span>The Memory Scrapbook</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
