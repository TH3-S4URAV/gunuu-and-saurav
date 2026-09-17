import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Smile, Sparkles, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen4_BestieEra({ onNext, onPrev }) {
  const steps = [
    {
      icon: MessageCircle,
      title: "Ek text se shuru hui baatein",
      desc: "Checking messages became my favourite addiction.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Smile,
      title: "Baatein bani comfort zone",
      desc: "Raat ke 2 baje bina kisi filter ke apne saare rants share karna.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "Comfort ban gaya sacchi dosti",
      desc: "Ek dusre ke mood ko bina bole samajh jaana.",
      color: "from-pink-600 to-purple-500"
    },
    {
      icon: Heart,
      title: "Aur aakhir mein... Hum ban gaye Besties ❤️",
      desc: "Wo insan jiske bina ek din bhi guzaarna namumkin ho gaya.",
      color: "from-rose-600 to-red-500"
    }
  ];

  const handleStepClick = () => {
    playChime();
  };

  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 py-1.5 rounded-full bg-pink-200/90 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-pink-300 shadow-sm"
      >
        Chapter 02 • The Bestie Era
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-3"
      >
        Fir Hum Besties Ban Gaye! 🧸
      </motion.h2>

      <p className="text-stone-700 text-sm mb-6 max-w-md font-light">
        "Koi dramatic confession nahi tha. Hum bas baat karte gaye aur tum meri aadat ban gayi."
      </p>

      {/* Interactive Vertical Timeline */}
      <div className="w-full space-y-3.5 mb-8 text-left">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={handleStepClick}
              className="glass-romantic-card p-4 sm:p-5 rounded-3xl border-2 border-pink-200 flex items-start gap-4 shadow-md transition-all cursor-pointer hover:border-pink-400"
            >
              <div className={`p-3 rounded-2xl bg-gradient-to-tr ${step.color} text-white shadow-md shrink-0 mt-0.5 ring-2 ring-pink-200`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-rose-950 font-serif-romantic">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
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
          <span>Meet "Gunuu Mode" 😂</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
