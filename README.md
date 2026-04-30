<div align="center">
  <img src="src/assets/logo.png" alt="ThinkFast Logo" width="120" height="120" />
  <h1>ThinkFast Quiz App</h1>
  <p><strong>Think fast, act faster. Test your programming knowledge against the clock.</strong></p>

  [![Deploy with Vercel](https://vercel.com/button)](https://think-fast-quiz.vercel.app/)
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now!-6366f1?style=for-the-badge&logo=vercel)](https://think-fast-quiz.vercel.app/)
</div>

---

A fast-paced, premium quiz application designed to test your programming knowledge across multiple domains. Built with modern web technologies, ThinkFast features a sleek "Glassmorphism" UI, dynamic fluid animations, and interactive elements designed to provide an engaging user experience.

## ✨ Features

- 🧠 **Multiple Categories**: Test your skills in HTML, CSS, JavaScript, React, Python, Java, C++, Go, and Ruby.
- ⏱️ **Fast-Paced Gameplay**: You have exactly 15 seconds to answer each question.
- 🏆 **High Score Tracking**: Your best scores for each category are automatically saved to your browser and displayed on the Home dashboard.
- 💎 **Premium UI**: Built using advanced CSS techniques like backdrop filters for glassmorphism, dynamic glowing orbs, and gradient texts.
- 🌊 **Interactive Fluid Background**: Features a highly interactive WebGL fluid simulation cursor on the Home menu.
- 💻 **Letter Glitch Effect**: A unique matrix-style background animation plays during the actual quiz to add pressure and visual flair.

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: Vanilla CSS with modern variables, flexbox, grid, and animations.
- **Animations/Effects**: Custom WebGL implementation for the fluid cursor (`SplashCursor`) and interval-based text mutation for the glitch effect (`LetterGlitch`).
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Running Locally

To run this application on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/srihari2020/ThinkFast-Quiz.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd ThinkFast-Quiz
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. Open your browser to the local URL (usually `http://localhost:5173`).

## 🌐 Deployment

This application is configured for seamless deployment on Vercel. A `vercel.json` file is included to handle client-side routing.

To deploy via Vercel CLI:
```bash
npx vercel --prod
```

---
<div align="center">
  <i>Designed and developed for speed and knowledge.</i>
</div>
