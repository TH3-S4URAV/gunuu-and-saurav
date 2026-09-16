# 💗 Gunuu × Saurav — Interactive Proposal Experience

A dreamy, romantic, 3D animated interactive proposal web application made exclusively for **GurneeT (Gunuu)** from **Saurav (Kaddu)**.

---

## ✨ Features

- **3D Interactive Scene:** Floating Three.js sakura petals, ambient stardust, and glowing particles.
- **Narrative Story Flow (14 Screens):**
  1. *Hey Gunuu...* The Gentle Opening
  2. *5 Hidden Clues:* Interactive mystery mini-game to unlock the story fragments
  3. *December 2024:* The random Instagram group chat where it all began
  4. *The Bestie Era:* Conversations turning into comfort and true friendship
  5. *Gunuu Mode:* Personality diagnostic meter (Nakhre 100%, ULTRA PRO MAXX Gussa ⚡, Pyaar 200%, Saurav Resistance 0%)
  6. *When Feelings Changed:* Transition from besties to favourite person
  7. *Gunuu & Kaddu:* The inside joke nickname cards
  8. *Digital Scrapbook:* Romantic polaroids with handwritten notes & interactive photo uploader
  9. *16 September 2026:* First audio call milestone (~1 hour) & Bihar to Punjab connection
  10. *Ask AI Bestie:* Playful interactive Q&A chatbot widget
  11. *The Sealed Letter:* Wax-sealed envelope that unfolds with Saurav's full heartfelt letter
  12. *The Proposal:* "Will you be my girlfriend? Will you be mine? Will you be my wiffeyyy?"
  13. *Celebration (YES):* Confetti explosion, "Chapter One: Us", and direct WhatsApp response button to Saurav (+917250021311)
  14. *Gentle Reassurance (Need Time):* Respectful, zero-pressure emotional message
  15. *Easter Egg:* Hidden flower P.S. note modal
- **Music Player:** Ambient romantic background music player with Web Audio API fallback.
- **Mobile First:** Designed to look stunning on any smartphone screen.

---

## 📸 How to Add Gunuu's Real Photos

1. **Option A (Instant in Browser):** When viewing Screen 8 (Scrapbook), simply tap the 📷 camera icon on any polaroid card to pick her photo directly from your phone gallery!
2. **Option B (In Code):** Drop image files into `public/` and update references in `src/data/proposalData.js`.

---

## 🎵 How to Change the Background Music

In `src/components/MusicPlayer.jsx`, you can replace the audio URL in the `<audio>` tag with any song MP3 URL or local file in `public/music.mp3`.
