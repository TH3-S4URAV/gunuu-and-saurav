import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Flame, Heart, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen5_GunuuMode({ onNext, onPrev }) {
  const [isShaking, setIsShaking] = useState(false);

  const stats = [
    { label: "Nakhre Level", value: "100%", width: "w-full", color: "bg-pink-400" },
    {
      label: "Gussa Mode",
      value: "ULTRA PRO MAXX ⚡",
      width: "w-full",
      color: "bg-rose-500",
      highlight: true
    },
    { label: "Pyaar (Care & Love)", value: "200% ❤️", width: "w-full", color: "bg-pink-500" },
    { label: "Apni baat manwana", value: "100%", width: "w-full", color: "bg-purple-400" },
    { label: "Saurav ki resistance", value: "0% 😂", width: "w-1", color: "bg-stone-300" }
  ];

  const triggerGussaShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Warning Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200 flex items-center gap-1.5"
      >
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        Official Personality Diagnostic
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-2"
      >
        "Gunuu Mode" Activated 😂
      </motion.h2>

      <p className="text-stone-600 text-sm mb-6 font-light">
        Scientific breakdown of GurneeT's superpowers over Saurav:
      </p>

      {/* Meter Diagnostic Card */}
      <motion.div
        animate={isShaking ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="glass-romantic-card w-full p-5 sm:p-6 rounded-3xl mb-6 shadow-xl text-left border border-pink-100 relative overflow-hidden"
      >
        <div className="space-y-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="font-medium text-stone-700">{stat.label}</span>
                <span
                  onClick={stat.highlight ? triggerGussaShake : undefined}
                  className={`font-semibold cursor-pointer ${
                    stat.highlight
                      ? 'text-rose-600 animate-pulse bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200'
                      : 'text-stone-600'
                  }`}
                  title={stat.highlight ? "Click to feel the gussa!" : undefined}
                >
                  {stat.value}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-pink-100/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: stat.label.includes('resistance') ? '2%' : '100%' }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                  className={`h-full rounded-full ${stat.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cute affectionate punchline */}
        <div className="mt-6 pt-4 border-t border-pink-100 text-center space-y-2">
          <p className="text-xs sm:text-sm text-stone-700 italic font-light">
            "She says something... and somehow Saurav has no option except: <br />
            <span className="font-semibold text-rose-700 font-serif-romantic text-base">
              'Okay Gunuu.' 😂
            </span>"
          </p>
          <p className="text-xs text-rose-600 font-medium">
            And after all that nakhre... you're still the only person he wants around. ❤️
          </p>
        </div>
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
          <span>When Feelings Changed</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
