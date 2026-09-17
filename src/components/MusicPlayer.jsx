import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';
import { playChime } from '../utils/soundEffects';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Soft romantic lofi chord notes
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

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.15);
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
    } catch (err) {}
  };

  const stopSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    setIsSynthesizing(false);
  };

  const togglePlay = () => {
    playChime();
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
            playSynthChime();
            setIsPlaying(true);
          });
      } else {
        playSynthChime();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
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
        className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 shadow-xl border-2 ${
          isPlaying
            ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white border-pink-300 shadow-pink-400/60 scale-105'
            : 'bg-white/90 backdrop-blur-md text-stone-700 hover:bg-white hover:text-rose-600 border-pink-300'
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

        <span className="text-xs font-bold tracking-wide">
          {isPlaying ? (
            <span className="flex items-center gap-1">
              Song for Gunuu 🎵
              <span className="flex gap-0.5 items-end h-3 ml-1">
                <span className="w-1 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-3"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5"></span>
              </span>
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Music className="w-3.5 h-3.5 text-pink-500" /> Tap for Song 🎵
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
