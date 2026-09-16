import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Soft romantic lofi chord notes (Cmaj9, Am7, Fmaj7, Gsus4)
  const chordNotes = [
    [261.63, 329.63, 392.00, 493.88], // C, E, G, B
    [220.00, 261.63, 329.63, 392.00], // A, C, E, G
    [174.61, 220.00, 261.63, 329.63], // F, A, C, E
    [196.00, 246.94, 293.66, 392.00]  // G, B, D, G
  ];

  const playSynthChime = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let chordIdx = 0;
      let noteIdx = 0;

      synthIntervalRef.current = setInterval(() => {
        if (!ctx) return;
        const currentChord = chordNotes[chordIdx];
        const freq = currentChord[noteIdx];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Soft sine wave for gentle music box / piano feel
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft attack and lingering release
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.8);

        noteIdx++;
        if (noteIdx >= currentChord.length) {
          noteIdx = 0;
          chordIdx = (chordIdx + 1) % chordNotes.length;
        }
      }, 550);
      setIsSynthesizing(true);
    } catch (err) {
      console.warn('Audio synthesis note: ', err);
    }
  };

  const stopSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    setIsSynthesizing(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynth();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If external stream blocked, fallback to Web Audio romantic synth
            playSynthChime();
            setIsPlaying(true);
          });
      } else {
        playSynthChime();
        setIsPlaying(true);
      }
    }
  };

  // Attempt gentle autoplay on first user interaction anywhere
  useEffect(() => {
    const handleFirstClick = () => {
      if (!isPlaying) {
        // We don't force start unless user interacts with the music icon or consents
      }
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);

    return () => {
      window.removeEventListener('click', handleFirstClick);
      stopSynth();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Hidden audio element for romantic track (online fallback / custom local mp3) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
        onError={() => {
          console.log('Using ambient romantic music synth fallback');
        }}
      />

      <button
        onClick={togglePlay}
        className={`group flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-rose-500/90 text-white shadow-rose-300/50 hover:bg-rose-600'
            : 'bg-white/80 backdrop-blur-md text-stone-600 hover:bg-white hover:text-rose-600 border border-pink-100'
        }`}
        title={isPlaying ? 'Pause romantic music' : 'Play romantic music for Gunuu'}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-bounce text-pink-100" />
          ) : (
            <VolumeX className="w-4 h-4 text-stone-400 group-hover:text-rose-500" />
          )}
        </span>

        <span className="text-xs font-medium tracking-wide">
          {isPlaying ? (
            <span className="flex items-center gap-1">
              Playing For Gunuu
              <span className="flex gap-0.5 items-end h-3 ml-1">
                <span className="w-1 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-3"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5"></span>
              </span>
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Music className="w-3.5 h-3.5" /> Tap For Music 🎵
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
