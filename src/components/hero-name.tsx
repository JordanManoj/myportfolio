'use client';

import { useEffect, useRef } from 'react';

const RADIUS = 130;

type Props = {
  text: string;
  gradientStartWord?: number;
};

export const HeroName = ({ text, gradientStartWord = 1 }: Props) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = Array.from(
      container.querySelectorAll<HTMLSpanElement>('[data-letter]')
    );
    let mouseX = -9999;
    let mouseY = -9999;
    let ticking = false;

    const apply = () => {
      letters.forEach((span) => {
        const r = span.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RADIUS) {
          const f = 1 - dist / RADIUS;
          span.style.transform = `translateY(${-f * 20}px) scale(${1 + f * 0.28})`;
        } else {
          span.style.transform = 'translateY(0) scale(1)';
        }
      });
      ticking = false;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!ticking) {
        requestAnimationFrame(apply);
        ticking = true;
      }
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const words = text.split(' ');

  return (
    <h1
      ref={containerRef}
      className="font-display relative whitespace-normal text-[clamp(30px,13vw,112px)] font-bold uppercase leading-[0.98] tracking-[-0.01em] sm:whitespace-nowrap sm:text-[clamp(34px,8.2vw,112px)]"
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {Array.from(word).map((ch, ci) => (
            <span
              key={ci}
              data-letter
              className={`hero-letter ${
                wi >= gradientStartWord ? 'text-gradient' : ''
              }`}
            >
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span data-letter className="hero-letter inline-block w-[0.32em]">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </h1>
  );
};
