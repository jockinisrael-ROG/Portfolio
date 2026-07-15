import { useEffect, useRef } from "react";

/**
 * Lightweight canvas background: drifting particles + soft gradient blobs.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];
    const colors = ["#22d3ee", "#8b5cf6", "#ec4899"];
    const count = Math.min(50, Math.floor((w * h) / 30000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.4 + 0.4,
        c: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Soft blobs
      const t = Date.now() * 0.00008;
      const drawBlob = (x: number, y: number, color: string, size: number) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, size);
        g.addColorStop(0, color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(x - size, y - size, size * 2, size * 2);
      };
      drawBlob(w * 0.2 + Math.sin(t) * 80, h * 0.3 + Math.cos(t) * 60, "rgba(139,92,246,0.08)", 350);
      drawBlob(w * 0.8 + Math.cos(t * 1.2) * 100, h * 0.6 + Math.sin(t * 1.2) * 80, "rgba(34,211,238,0.07)", 400);
      drawBlob(w * 0.5 + Math.sin(t * 0.8) * 120, h * 0.85 + Math.cos(t * 0.8) * 50, "rgba(236,72,153,0.06)", 300);

      // Particles + connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.5;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.c;
            ctx.globalAlpha = (1 - d / 140) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at top, #0a0a1a 0%, #050505 70%)" }}
    />
  );
}
