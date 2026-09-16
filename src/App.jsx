import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundCanvas3D from './components/BackgroundCanvas3D';
import MusicPlayer from './components/MusicPlayer';
import Screen1_Intro from './components/Screen1_Intro';
import Screen2_Mystery from './components/Screen2_Mystery';
import Screen3_December2024 from './components/Screen3_December2024';
import Screen4_BestieEra from './components/Screen4_BestieEra';
import Screen5_GunuuMode from './components/Screen5_GunuuMode';
import Screen6_Feelings from './components/Screen6_Feelings';
import Screen7_Names from './components/Screen7_Names';
import Screen8_Scrapbook from './components/Screen8_Scrapbook';
import Screen9_CallMilestone from './components/Screen9_CallMilestone';
import Screen10_AiBestie from './components/Screen10_AiBestie';
import Screen11_SealedLetter from './components/Screen11_SealedLetter';
import Screen12_TheProposal from './components/Screen12_TheProposal';
import Screen13_Accepted from './components/Screen13_Accepted';
import Screen14_NeedTime from './components/Screen14_NeedTime';
import EasterEggModal from './components/EasterEggModal';
import { Heart } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const totalMainScreens = 12;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-rose-200">
      {/* 3D Floating Petals and Sparkles Background */}
      <BackgroundCanvas3D />

      {/* Floating Romantic Music Player */}
      <MusicPlayer />

      {/* Soft Ambient Header Progress */}
      {currentScreen <= totalMainScreens && (
        <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white/40 backdrop-blur-md border-b border-pink-100/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-serif-romantic font-semibold text-rose-800">
            <span>Gunuu</span>
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            <span>Saurav</span>
          </div>

          {/* Progress dots or bar */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-medium text-stone-500">
              {currentScreen} / {totalMainScreens}
            </span>
            <div className="w-16 h-1.5 bg-pink-100 rounded-full overflow-hidden ml-1.5">
              <div
                className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(currentScreen / totalMainScreens) * 100}%` }}
              />
            </div>
          </div>
        </header>
      )}

      {/* Main Dynamic Screen Viewport */}
      <main className="relative z-10 flex-grow pt-16 pb-12 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentScreen === 1 && (
              <Screen1_Intro onNext={() => setCurrentScreen(2)} />
            )}
            {currentScreen === 2 && (
              <Screen2_Mystery onNext={() => setCurrentScreen(3)} />
            )}
            {currentScreen === 3 && (
              <Screen3_December2024
                onNext={() => setCurrentScreen(4)}
                onPrev={() => setCurrentScreen(2)}
              />
            )}
            {currentScreen === 4 && (
              <Screen4_BestieEra
                onNext={() => setCurrentScreen(5)}
                onPrev={() => setCurrentScreen(3)}
              />
            )}
            {currentScreen === 5 && (
              <Screen5_GunuuMode
                onNext={() => setCurrentScreen(6)}
                onPrev={() => setCurrentScreen(4)}
              />
            )}
            {currentScreen === 6 && (
              <Screen6_Feelings
                onNext={() => setCurrentScreen(7)}
                onPrev={() => setCurrentScreen(5)}
              />
            )}
            {currentScreen === 7 && (
              <Screen7_Names
                onNext={() => setCurrentScreen(8)}
                onPrev={() => setCurrentScreen(6)}
              />
            )}
            {currentScreen === 8 && (
              <Screen8_Scrapbook
                onNext={() => setCurrentScreen(9)}
                onPrev={() => setCurrentScreen(7)}
              />
            )}
            {currentScreen === 9 && (
              <Screen9_CallMilestone
                onNext={() => setCurrentScreen(10)}
                onPrev={() => setCurrentScreen(8)}
              />
            )}
            {currentScreen === 10 && (
              <Screen10_AiBestie
                onNext={() => setCurrentScreen(11)}
                onPrev={() => setCurrentScreen(9)}
              />
            )}
            {currentScreen === 11 && (
              <Screen11_SealedLetter
                onNext={() => setCurrentScreen(12)}
                onPrev={() => setCurrentScreen(10)}
              />
            )}
            {currentScreen === 12 && (
              <Screen12_TheProposal
                onYes={() => setCurrentScreen(13)}
                onNeedTime={() => setCurrentScreen(14)}
              />
            )}
            {currentScreen === 13 && (
              <Screen13_Accepted onOpenEasterEgg={() => setShowEasterEgg(true)} />
            )}
            {currentScreen === 14 && (
              <Screen14_NeedTime
                onBackToProposal={() => setCurrentScreen(12)}
                onOpenEasterEgg={() => setShowEasterEgg(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Romantic Footer */}
      <footer className="relative z-10 py-4 text-center text-xs text-rose-400 font-light border-t border-pink-100/40 bg-white/20 backdrop-blur-sm">
        <p className="flex items-center justify-center gap-1">
          Made with endless love by Saurav for Gunuu
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 inline" />
        </p>
      </footer>

      {/* Easter Egg Secret Note */}
      <EasterEggModal
        isOpen={showEasterEgg}
        onClose={() => setShowEasterEgg(false)}
      />
    </div>
  );
}
