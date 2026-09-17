import React, { useEffect, useRef } from 'react';

export default function TouchParticleTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ['#ff69b4', '#ff1493', '#ff8da1', '#ffc0cb', '#ffd700', '#f472b6'];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, isHeart = Math.random() > 0.4) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 12 + 8;
        this.speedX = (Math.random() - 0.5) * 2.5;
        this.speedY = -(Math.random() * 2 + 1.2);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.isHeart = isHeart;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.08;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
        this.rotation += this.rotSpeed;
        this.size *= 0.98;
      }

      draw(context) {
        if (this.alpha <= 0) return;
        context.save();
        context.globalAlpha = this.alpha;
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillStyle = this.color;
        context.shadowColor = this.color;
        context.shadowBlur = 10;

        if (this.isHeart) {
          // Draw heart
          const s = this.size * 0.5;
          context.beginPath();
          context.moveTo(0, -s * 0.3);
          context.bezierCurveTo(-s * 0.5, -s * 0.8, -s, -s * 0.3, -s, 0);
          context.bezierCurveTo(-s, s * 0.5, 0, s * 0.8, 0, s);
          context.bezierCurveTo(0, s * 0.8, s, s * 0.5, s, 0);
          context.bezierCurveTo(s, -s * 0.3, s * 0.5, -s * 0.8, 0, -s * 0.3);
          context.fill();
        } else {
          // Draw sparkling star
          context.beginPath();
          context.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
          context.fill();
        }
        context.restore();
      }
    }

    const addParticles = (x, y, count = 3) => {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      addParticles(clientX, clientY, e.touches ? 2 : 1);
    };

    const handlePointerDown = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      // Burst on tap
      addParticles(clientX, clientY, 8);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('touchstart', handlePointerDown, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0 || p.size <= 0.5) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    />
  );
}
