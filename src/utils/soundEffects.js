// Romantic sound effects synthesizer using Web Audio API

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Gentle magical chime on tap / click
export function playChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.06 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.06);
      osc.stop(ctx.currentTime + idx * 0.06 + 0.5);
    });
  } catch (e) {
    // Audio suppressed or blocked
  }
}

// Gentle romantic heartbeat pulse
export function playHeartbeat() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    [0, 0.2].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, ctx.currentTime + offset);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + offset + 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + offset);
      osc.stop(ctx.currentTime + offset + 0.15);
    });
  } catch (e) {}
}

// Magical sparkle when ring box opens
export function playRingBoxOpen() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.08 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.8);
    });
  } catch (e) {}
}

// Joyful celebration chord
export function playFanfare() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const chord = [261.63, 329.63, 392.00, 523.25, 659.25];
    chord.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 2.5);
    });
  } catch (e) {}
}
