'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION = 1900;

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export const Loader = () => {
  const [pct, setPct] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [mounted, setMounted] = useState(true);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let raf = 0;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      setPct(Math.floor(ease(raw) * 100));

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPct(100);
        setTimeout(() => {
          setHiding(true);
          document.body.style.overflow = '';
          setTimeout(() => setMounted(false), 700);
        }, 300);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`bg-background fixed inset-0 z-[999] flex flex-col items-center justify-center transition-all duration-700 ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="font-heading text-foreground text-[clamp(56px,9vw,96px)] font-black tabular-nums leading-none">
        {pct}
      </div>
      <div className="text-muted-foreground mt-4 font-sans text-[13px] font-semibold uppercase tracking-[0.28em]">
        Jordan Manoj
      </div>
      <div className="bg-border relative mt-6 h-px w-[220px] overflow-hidden">
        <span
          className="bg-flame absolute left-0 top-0 h-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
