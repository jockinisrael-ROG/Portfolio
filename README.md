# Futuristic 3D AI Portfolio

A stunning, premium, responsive 3D developer portfolio showcasing milestones, open-source projects, tech stacks, and professional journey with a modern sci-fi cyberpunk aesthetic.

Live Demo: [https://jockinisrael-rog.github.io/Portfolio/](https://jockinisrael-rog.github.io/Portfolio/)

## 🚀 Key Features

*   **Interactive 3D Background**: Real-time interactive particle/shape animations powered by Three.js and React Three Fiber.
*   **Neural Net Loading Page**: A custom-designed, state-of-the-art loading screen featuring dynamic terminal logs, ambient glows, and a gradient circular progress indicator.
*   **Dynamic Stats (In Numbers)**: Auto-updating milestone counters aligned with codebase entries and GitHub profile metrics.
*   **Responsive Glassmorphism Grid**: Modern styling incorporating smooth micro-animations, neon text shadows, cybernetic design accents, and custom pointer trackers.
*   **Open Source Integration**: Dynamic listings of top repositories and stats directly representing live GitHub API figures.
*   **CI/CD Automated Deployment**: Integrated GitHub Actions pipeline for compiling and publishing the portfolio directly onto GitHub Pages.

## 🛠️ Technology Stack

*   **Core**: React 19, TypeScript, HTML5
*   **Styling**: TailwindCSS, CSS Variables, Custom Keyframe Animations
*   **3D Graphics**: Three.js, React Three Fiber, React Three Drei
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Bundler & Server**: Vite

## 💻 Local Installation & Development

To get the project running locally on your machine:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/jockinisrael-ROG/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build Production Single File**:
    ```bash
    npm run build
    ```
    This generates a optimized, self-contained single-file `index.html` inside the `dist` directory.

## 📦 Deployment

This repository is configured for automated deployments using **GitHub Actions**. Any push to the `main` branch will automatically compile the codebase and publish it onto **GitHub Pages**.