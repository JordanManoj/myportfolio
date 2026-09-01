'use client';

import { useEffect, useState } from 'react';

export const ScrollCue = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`text-ink-faint fixed bottom-[30px] left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-[10px] font-sans text-[10.5px] uppercase tracking-[0.35em] transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <span>Scroll</span>
      <span className="relative h-[34px] w-px overflow-hidden bg-white/10">
        <span className="scroll-flow bg-flame absolute left-0 top-0 h-2/5 w-full" />
      </span>
    </div>
  );
};
