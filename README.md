# 🚀 Mohammad Saif Imtiyaj Rakhangi — Developer Portfolio

<div align="center">

![Portfolio Preview](public/Portfolio%20self%20image.png)

**A modern, full-stack developer portfolio** built with React + Vite, featuring a cinematic loading screen, 3D animated background, ambient music, and smooth scroll animations.

[![Live Demo](https://img.shields.io/badge/Live-Demo-FF4103?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Mohammadsaif1915-001621?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mohammadsaif1915)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)

</div>

---

## ✨ Features

- 🎬 **Cinematic Loading Screen** — Typewriter animation, SVG progress ring, auto-transitions into the portfolio
- 🎵 **Ambient Music Player** — Looping background audio with mute/unmute control
- 🌐 **3D Animated Background** — Turbulent wireframe grid + floating particles via Three.js / `@react-three/fiber`
- 📹 **Video Background** — Full-screen looping video with a dark navy overlay
- 🖼️ **Dramatic Hero Photo** — Circular frame with animated gradient border, glow effects, and hover animations
- ✨ **Scroll-triggered Animations** — Every section animates in using `framer-motion`
- 🗺️ **Education Roadmap** — Curved SVG path showing the academic journey (SSC → HSC → B.Tech)
- 📱 **Fully Responsive** — Works beautifully across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, Vite 8 |
| **3D / Animation** | Three.js, `@react-three/fiber`, `@react-three/drei`, Framer Motion |
| **Styling** | Vanilla CSS with CSS Variables (no Tailwind) |
| **Icons** | `react-icons` (Font Awesome + Simple Icons) |
| **Color Palette** | `#FF4103` (Accent), `#001621` (Background) |
| **Fonts** | Space Grotesk, JetBrains Mono, Inter (Google Fonts) |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Portfolio self image.png  # Hero section photo
│   ├── bg-video.mp4              # Background video (add your own)
│   ├── ambient.mp3               # Ambient music track
│   └── animal_bgm.mp3            # Background music
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx     # Cinematic entry screen
│   │   ├── VideoBackground.jsx   # Full-screen video BG
│   │   ├── CanvasBackground.jsx  # 3D Three.js background
│   │   ├── MusicPlayer.jsx       # Ambient music controller
│   │   ├── HeroSection.jsx       # Landing / intro section
│   │   ├── TechStackSection.jsx  # Animated tech orbs
│   │   ├── EducationSection.jsx  # SVG road map timeline
│   │   ├── InternshipsSection.jsx# Work experience cards
│   │   ├── ProjectsSection.jsx   # Featured projects grid
│   │   ├── ContactSection.jsx    # Contact form + links
│   │   └── Footer.jsx            # Footer
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme management
│   ├── App.jsx                   # Root component, audio init
│   ├── index.css                 # Global styles + CSS variables
│   └── main.jsx                  # Entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohammadsaif1915/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎥 Adding the Video Background

Place a looping `.mp4` video file in the `public/` folder and name it exactly:

```
public/bg-video.mp4
```

The video will automatically play full-screen behind all content. Recommended: abstract, looping cinematic videos (available for free at [Pexels](https://www.pexels.com/videos/) or [Pixabay](https://pixabay.com/videos/)).

---

## 💼 Featured Projects

| # | Project | Tech | Live |
|---|---------|------|------|
| 01 | **CyberShield** — Cybersecurity awareness platform | JS, Web Dev | — |
| 02 | **TRUEMARK-AI** — AI-powered surveillance intelligence | TypeScript, React, AI/ML | — |
| 03 | **DSE College Predictor** — Engineering college admission tool | JS, React | [Live ↗](https://dse-college-predictor-cvoa.vercel.app/) |
| 04 | **EID Special Online Bazaar** — Holiday e-commerce platform | JS, Full Stack | [Live ↗](https://eid-special-online-bazaar-theta.vercel.app) |
| 05 | **MD CYBER HUB** — Digital government services platform | JS, Web Dev | [Live ↗](https://md-cyber-hub.vercel.app) |

---

## 💼 Experience

| Role | Company | Duration |
|------|---------|----------|
| Web Developer | CodSoft | May 2026 – Aug 2026 |
| MERN Stack Developer | CyberShield | Nov 2025 – Apr 2026 |
| Full-Stack Developer | Alfa Diesel Services | Jun 2025 – Aug 2025 |
| Python & Machine Learning | Udemy | Aug 2025 – Jul 2026 |

---

## 📬 Contact

- **Email:** [your-email@example.com]
- **LinkedIn:** [linkedin.com/in/mohammadsaif](#)
- **GitHub:** [github.com/Mohammadsaif1915](https://github.com/Mohammadsaif1915)
- **Location:** Mumbai, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by <strong>Mohammad Saif Imtiyaj Rakhangi</strong>
</div>
