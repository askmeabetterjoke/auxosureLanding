import React, { useEffect, useRef } from 'react';

const COLORS = ['#E4795B', '#262A44', '#3E5C76', '#FAF7F2', '#C65D42'];

const ConfettiBurst = ({ trigger }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!trigger) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    const rect = parent?.getBoundingClientRect();
    const width = rect?.width || window.innerWidth;
    const height = Math.max(rect?.height || 400, 320);

    canvas.width = width;
    canvas.height = height;

    const originX = width * 0.78;
    const originY = height * 0.28;
    const particleCount = 160;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const isDollar = i % 4 === 0;
      return {
        x: originX + (Math.random() - 0.5) * 40,
        y: originY,
        vx: (Math.random() - 0.5) * 16,
        vy: Math.random() * -14 - 6,
        size: isDollar ? 14 + Math.random() * 8 : Math.random() * 7 + 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 14,
        shape: isDollar ? 'dollar' : Math.random() > 0.45 ? 'rect' : 'circle',
        life: 1,
        decay: Math.random() * 0.01 + 0.006,
      };
    });

    let frameId;
    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.32;
        p.vx *= 0.985;
        p.rotation += p.spin;
        p.life -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.shape === 'dollar') {
          ctx.font = `700 ${p.size}px "Schibsted Grotesk", sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('$', 0, 0);
        } else if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        }
        ctx.restore();
      }

      if (alive) {
        frameId = requestAnimationFrame(draw);
      }
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
  }, [trigger]);

  return (
    <canvas
      ref={canvasRef}
      className="delivery-confetti"
      aria-hidden="true"
    />
  );
};

export default ConfettiBurst;
