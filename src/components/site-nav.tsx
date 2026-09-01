'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { links } from '@/lib/data';

export const SiteNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const label = isOpen ? 'Close' : heroVisible ? 'Dive In' : 'Menu';

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 py-6"
        style={{ mixBlendMode: 'difference' }}
      >
        <div className="container flex items-center justify-between">
          <Link href="#home" className="font-heading text-[17px] font-bold">
            JM<span className="text-flame1">.</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-foreground border-foreground inline-flex items-center gap-[9px] rounded-full border px-5 py-[11px] font-sans text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
          >
            <span>{label}</span>
            <span
              className={`inline-block text-[15px] transition-transform duration-300 ${
                isOpen ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
        </div>
      </header>

      <div
        className={`bg-background/95 fixed inset-0 z-[90] flex items-center backdrop-blur-xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="border-border text-foreground hover:border-flame1 absolute right-8 top-6 flex size-11 items-center justify-center rounded-full border text-lg transition-transform hover:rotate-90"
        >
          ×
        </button>
        <div className="container">
          <nav className="flex flex-col gap-0.5">
            {links.map(({ name, hash }, i) => (
              <Link
                key={name}
                href={hash}
                onClick={() => setIsOpen(false)}
                className="text-ink-faint hover:text-foreground font-heading flex items-baseline gap-5 py-2 text-[clamp(34px,7.5vw,74px)] font-bold uppercase leading-tight tracking-[-0.01em] transition-all hover:translate-x-4"
              >
                <span className="text-flame1 font-sans text-sm font-semibold tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {name}
              </Link>
            ))}
          </nav>
          <div className="border-border text-ink-faint mt-14 flex flex-wrap gap-7 border-t pt-6 text-sm">
            <a
              href="mailto:jordi.manoj@gmail.com"
              className="hover:text-flame2"
            >
              jordi.manoj@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jordan-manoj-cheruvathoor-096a8a225/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-flame2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JordanManoj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-flame2"
            >
              GitHub
            </a>
            <span>Hannover, Germany</span>
          </div>
        </div>
      </div>
    </>
  );
};
