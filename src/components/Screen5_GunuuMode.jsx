import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Flame, Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function Screen5_GunuuMode({ onNext, onPrev }) {
  const [isShaking, setIsShaking] = useState(false);

  const stats = [
    { label: "Nakhre Level", value: "100%", color: "bg-pink-500" },
    {
      label: "Gussa Mode",
      value: "ULTRA PRO MAXX ⚡",
      color: "bg-rose-600",
      highlight: true
    },
    { label: "Pyaar (Care & Love)", value: "200% ❤️", color: "bg-pink-600" },
    { label: "Apni Baat Manwana", value: "100%", color: "bg-purple-500" },
    { label: "Saurav Ki Resistance", value: "0% (Fully Surrendered 😂)", color: "bg-stone-300" }
  ];

  const triggerGussaShake = () => {
    playChime();
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  const handleNext = () => {
    playChime();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto relative z-10">
      {/* Warning Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-5 py-2 rounded-full bg-amber-200/90 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border-2 border-amber-300 flex items-center gap-2 shadow-sm"
      >
        <AlertTriangle className="w-4 h-4 text-amber-700 animate-bounce" />
        Official Personality Diagnostic
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-950 font-extrabold mb-2"
      >
        "Gunuu Mode" Activated! 😂⚡
      </motion.h2>

      <p className="text-stone-700 text-sm mb-6 font-light">
        Scientific proof ki GurneeT ke aage Saurav ki ek nahi chalti:
      </p>

      {/* Meter Diagnostic Card */}
      <motion.div
        animate={isShaking ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="glass-romantic-card w-full p-6 sm:p-7 rounded-3xl mb-6 shadow-2xl text-left border-2 border-pink-300 relative overflow-hidden"
      >
        <div className="space-y-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-stone-800">{stat.label}</span>
                <span
                  onClick={stat.highlight ? triggerGussaShake : undefined}
                  className={`font-extrabold cursor-pointer transition-transform ${
                    stat.highlight
                      ? 'text-rose-600 animate-pulse bg-rose-100 px-3 py-1 rounded-xl border-2 border-rose-300 shadow-sm hover:scale-105'
                      : 'text-stone-700'
                  }`}
                  title={stat.highlight ? "Tap karke dekho gussa!" : undefined}
                >
                  {stat.value}
                </span>
              </div>
              <div className="w-full bg-pink-100/60 h-3 rounded-full overflow-hidden p-0.5 border border-pink-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: stat.label.includes('Resistance') ? '3%' : '100%' }}
                  transition={{ duration: 0.9, delay: 0.1 * idx }}
                  className={`h-full rounded-full ${stat.color} shadow-sm`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cute punchline */}
        <div className="mt-6 pt-4 border-t-2 border-pink-100 text-center space-y-2">
          <p className="text-sm text-stone-800 italic font-medium">
            "Tu kuch bhi bolti hai na... toh Saurav ke paas bas ek hi option hota hai: <br />
            <span className="font-bold text-rose-600 font-serif-romantic text-lg">
              'Okay Gunuu, jaise aap bolo.' 😂
            </span>"
          </p>
          <p className="text-xs text-rose-600 font-bold">
            Aur sach batau? Tere inhi nakhron pe toh main sabse zyada fida hoon! ❤️
          </p>
        </div>
      </motion.div>

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
          <span>Dil Ki Baat Kaise Badli</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
