# Syntax Master AI — Bilingual English Grammar PWA

**Professional offline-first Progressive Web App** for learning English Syntax (Articles 451–489, Exercises 65–70) with full bilingual (English + Bengali) support.

Designed for West Bengal Board students (Classes IX–XII), teachers, and self-learners.

## Features

- **12 complete lessons** covering Articles 451–489 with English + Bengali explanations and textbook examples
- **Interactive Practice Zone** — MCQ, Fill blanks, Correct the sentence, True/False, Error detection
- **Click-to-reveal answers** with bilingual explanations and “Explain My Mistake”
- **Textbook Exercises 65–70** kept separate and fully interactive
- **Quick Quiz** & **Exam Mode** (timed, optional negative marking, review)
- **Mistake Book** & **Smart Revision**
- **Progress tracking** (LocalStorage) — topics, accuracy, streak, history
- **Voice Learning** via Web Speech API
- **Teacher Zone** — create, export/import questions (JSON)
- **Grammar Rule Map** — visual topic connections
- **Light/Dark theme**, language toggle (EN / বাংলা / BOTH)
- **Installable PWA** — works offline after first visit
- **Mobile-first**, print-friendly

## How to run

1. Open the folder in any static server, or simply open `index.html` in a modern browser (Chrome/Edge recommended for full PWA + speech).
2. For full offline/PWA behaviour, serve over `http://` or `https://` (not `file://`).

```bash
# Example with Python
cd syntax-master-ai
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Project structure

```
syntax-master-ai/
├── index.html      # App shell & pages
├── style.css       # Mobile-first design + dark mode
├── script.js       # All logic, lessons, questions, exercises
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (cache versioning)
├── assets/
│   └── icons/      # App icons (replace with real 192/512 PNGs)
└── README.md
```

## Content sources

Rules, examples and Exercises 65–70 are based on the supplied textbook pages (Chapter XXXIX — Syntax). Original practice questions are generated from the rules; they are **not** presented as direct textbook quotations.

## Extending

- Add more questions in the `QUESTIONS` array in `script.js`
- Teacher-created questions are stored in LocalStorage and can be exported/imported as JSON
- Replace placeholder icons with proper 192×192 and 512×512 PNGs
- Future: cloud sync, AI explanation, Supabase backend

## Browser support

Chrome, Edge, Firefox, Safari (recent). Speech synthesis and PWA install work best on Chromium-based browsers on Android/desktop.

---

**Version 1.0** — Offline-first educational PWA.
