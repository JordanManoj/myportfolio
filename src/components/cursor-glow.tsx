'use client';

import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      glow.classList.add('is-active');
      glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    const onLeave = () => glow.classList.remove('is-active');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};
