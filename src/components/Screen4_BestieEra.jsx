import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Smile, Sparkles, Heart, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Screen4_BestieEra({ onNext, onPrev }) {
  const steps = [
    {
      icon: MessageCircle,
      title: "One conversation became many",
      desc: "Checking messages became a habit, not just a notification.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Smile,
      title: "Conversations became comfort",
      desc: "Talking about everything and nothing at 2 AM with zero filters.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Comfort became friendship",
      desc: "Sharing moods, daily rants, and unspoken understanding.",
      color: "from-pink-500 to-purple-400"
    },
    {
      icon: Heart,
      title: "And eventually... Besties ❤️",
      desc: "The one person Saurav couldn't go a single day without talking to.",
      color: "from-rose-500 to-red-400"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-8 text-center max-w-lg mx-auto">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-1.5 rounded-full bg-pink-100/90 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200"
      >
        Chapter 02 • The Bestie Era
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-serif-romantic text-rose-900 font-bold mb-3"
      >
        Then we became besties...
      </motion.h2>

      <p className="text-stone-600 text-sm mb-6 max-w-md font-light">
        "There was no single dramatic moment. It simply happened naturally."
      </p>

      {/* Interactive Vertical Timeline */}
      <div className="w-full space-y-3 mb-8 text-left">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass-romantic p-4 rounded-2xl border border-pink-100/80 flex items-start gap-3.5 shadow-sm transition-all"
            >
              <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${step.color} text-white shadow-sm shrink-0 mt-0.5`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-800 font-serif-romantic">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed font-light">
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
          className="p-3.5 rounded-full bg-white/80 border border-pink-200 text-stone-500 hover:text-rose-600 hover:bg-white transition-all shadow-sm"
          title="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onNext}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white font-medium shadow-lg shadow-pink-300/50 hover:shadow-xl transition-all flex items-center gap-2 text-sm sm:text-base"
        >
          <span>Meet "Gunuu Mode"</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
