import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen11_SealedLetter({ onNext, onPrev }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-rose-200 flex items-center gap-1.5"
      >
        <Mail className="w-3.5 h-3.5 text-rose-500" />
        For Gunuu's Eyes Only
      </motion.div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Sealed Envelope View */
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-3">
              A Letter From Kaddu 💌
            </h2>
            <p className="text-stone-600 text-sm mb-8 font-light max-w-sm">
              "You've found almost everything. But there is one thing left I wrote straight from my heart."
            </p>

            {/* Glowing Envelope */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-rose-50 to-pink-100 border border-pink-200 shadow-2xl shadow-pink-200/60 flex flex-col items-center w-72 sm:w-80 transition-all"
            >
              {/* Envelope flap aesthetic */}
              <div className="w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform mb-4 ring-4 ring-rose-200">
                <Heart className="w-8 h-8 fill-white animate-pulse" />
              </div>

              <span className="font-serif-romantic font-bold text-xl text-rose-900">
                Tap to Open
              </span>
              <span className="text-xs text-rose-500 font-handwriting text-lg mt-1">
                Seal with love ❤️
              </span>

              <div className="absolute inset-0 rounded-3xl border-2 border-pink-300/40 pointer-events-none group-hover:border-rose-400/60 transition-colors" />
            </motion.div>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 px-6 py-2.5 rounded-full bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider hover:bg-rose-600 shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Break Wax Seal
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
            <div className="glass-romantic-card p-6 sm:p-8 rounded-3xl text-left border border-rose-100 shadow-2xl space-y-4 max-h-[60vh] overflow-y-auto mb-6 relative">
              <div className="border-b border-pink-100 pb-3 mb-2 flex justify-between items-center">
                <span className="font-handwriting text-3xl font-bold text-rose-900">
                  Dear Gunuu,
                </span>
                <span className="text-xs text-stone-400 font-serif-romantic italic">
                  From Saurav
                </span>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                I kept thinking about how I should say this. <br />
                Should I make it simple? <br />
                Should I make it dramatic? <br />
                Should I just text you?
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                But then I realised... after everything we've shared, I don't need a rehearsed line.
                I just need to tell you the complete truth.
              </p>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-pink-200/70 text-rose-950 font-light text-sm sm:text-base leading-relaxed space-y-2">
                <p>
                  You came into my life as a random person from an Instagram group chat.
                  Then you became my friend. Then my bestie.
                </p>
                <p className="font-serif-romantic italic text-base sm:text-lg text-rose-900">
                  And somewhere along the way... you became someone I started imagining in my entire future.
                </p>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                I love talking to you. I love your random messages. I love your little reactions.
                I love your nakhre. I even love your ULTRA PRO MAXX gussa. 😂
                And I love the way you somehow always manage to get your way.
              </p>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                We haven't met yet. We're still separated by distance and phone screens.
                But I don't want that to be where our story ends.
                I want to meet you. I want to make real memories with you.
              </p>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium">
                And today... I want to stop calling this "almost." <br />
                I want to give it a name.
              </p>

              <div className="pt-2 text-center">
                <span className="text-xl sm:text-2xl font-serif-romantic font-bold text-rose-700 block">
                  I love you, Gunuu. ❤️
                </span>
                <span className="text-xs text-stone-500 font-handwriting text-lg">
                  Always your Kaddu...
                </span>
              </div>
            </div>

            {/* Navigation to final screen */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-medium shadow-xl shadow-pink-300/60 hover:shadow-2xl transition-all flex items-center gap-2 text-base tracking-wide animate-pulse"
            >
              <span>Turn to the Final Page...</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={onPrev}
          className="mt-6 text-xs text-stone-500 hover:text-rose-600 flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to AI Bestie
        </button>
      )}
    </div>
  );
}
