# SpeakTogether – English Speaking Practice Community

A modern, fast, and responsive Next.js web application built with **TypeScript**, **App Router**, **Vanilla CSS & modern tokens**, and **API routes**, precisely replicating and elevating the SpeakTogether design.

---

## 🚀 Features

- **Modern Clean Aesthetic**: Replaced dull backgrounds with crisp, light slate radial ambient glows, elegant cards with soft multi-layered drop shadows, and refined Indigo/Emerald color accents (`#4f46e5`, `#10b981`).
- **Interactive Live Video Call Mockup**:
  - Main learner video feed + picture-in-picture partner camera.
  - Interactive call controls (Mic mute/unmute, Camera toggle, Live duration timer).
  - Floating **"Smart Suggestions During Call"** with dynamic topic, sentence starters, and vocabulary switcher.
- **Hindi to English Learning Bridge**:
  - Interactive Hindi phrase buttons that instantly demonstrate natural English translations, sentence starters, and key vocabulary.
- **Popular Conversation Topics**:
  - Filterable conversation cards with an interactive discussion prompts drawer.
- **Simplified High-Converting Early Access Modal**:
  - Replaced long multi-step clicks with a single, elegant card collecting Full Name, Email, Native Language (Hindi, Marathi, Bengali, Spanish, Other), and English Level.
  - Zero friction, instant validation, and smooth celebratory confetti upon submission.
- **Automated Dual-Email Notification System**:
  - **Admin Lead Notification**: Every submission instantly sends an email with full learner details to `aashikmansuri9636@gmail.com`.
  - **Learner Confirmation Email**: Automatically sends a branded welcome email to the learner stating: *"Thank you for your interest! Our team will reach out to you shortly."*
- **Next.js App Router API Endpoints**:
  - `POST /api/early-access`: Handles waitlist registrations, validation, email dispatch, and queue position assignments.
  - `GET /api/early-access`: Returns live cohort statistics and features.
  - `GET /api/topics`: Serves categorized conversation prompts.
  - `POST /api/helper`: Provides contextual phrase translation and sentence starters.

---

## 📁 Project Folder Structure

```
.
├── public/
│   └── images/
│       ├── hero-learner.jpg      # High-quality photo of learner on video call
│       └── partner-learner.jpg   # Photo of speaking partner waving
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── early-access/
│   │   │   │   └── route.ts     # Early access / waitlist API
│   │   │   ├── helper/
│   │   │   │   └── route.ts     # Translation & sentence assist API
│   │   │   └── topics/
│   │   │       └── route.ts     # Conversation topics API
│   │   ├── globals.css          # Design system, CSS tokens, glassmorphism & animations
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, viewport, font optimization
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky responsive header with navigation & CTA
│   │   ├── Hero.tsx             # Hero section with headline, badges & video mockup
│   │   ├── VideoCallMockup.tsx  # Interactive video call simulator & smart suggestions
│   │   ├── Features.tsx         # 6 feature cards with soft tinted icon circles
│   │   ├── HowItWorks.tsx       # 4-step interactive timeline with doodle notes
│   │   ├── LanguageBridge.tsx   # Hindi-to-English progress path & interactive phrases
│   │   ├── TopicsGrid.tsx       # 6 conversation topics with interactive prompt drawer
│   │   ├── Testimonials.tsx     # Authentic user reviews with ratings & avatars
│   │   ├── EarlyAccessModal.tsx # 6-step interactive onboarding with confetti
│   │   └── Footer.tsx           # Dark footer with navigation, socials, and copyright
│   ├── data/
│   │   ├── features.ts          # Feature highlights
│   │   ├── topics.ts            # Conversation topics & discussion questions
│   │   ├── examples.ts          # Hindi-English bilingual examples
│   │   └── testimonials.ts      # Learner stories and ratings
│   └── types/
│       └── index.ts             # TypeScript definitions
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠️ How to Run Locally

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```
