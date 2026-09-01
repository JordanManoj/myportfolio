'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { philosophyData } from '@/lib/data';

export const Philosophy = () => {
  const { ref } = useSectionInView('Philosophy');

  return (
    <section
      ref={ref}
      id="philosophy"
      className="my-10 w-full scroll-mt-28 md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mb-16 max-w-screen-sm"
      >
        <svg
          viewBox="0 0 400 400"
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 -z-10 hidden size-[380px] opacity-50 md:block"
        >
          <defs>
            <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--flame-1)" />
              <stop offset="1" stopColor="var(--flame-2)" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#netGrad)" strokeWidth={1} opacity={0.55}>
            <line x1="60" y1="80" x2="180" y2="60" />
            <line x1="180" y1="60" x2="300" y2="110" />
            <line x1="60" y1="80" x2="140" y2="190" />
            <line x1="180" y1="60" x2="140" y2="190" />
            <line x1="140" y1="190" x2="300" y2="110" />
            <line x1="140" y1="190" x2="230" y2="260" />
            <line x1="300" y1="110" x2="340" y2="220" />
            <line x1="230" y1="260" x2="340" y2="220" />
            <line x1="230" y1="260" x2="120" y2="320" />
            <line x1="340" y1="220" x2="300" y2="340" />
            <line x1="230" y1="260" x2="300" y2="340" />
          </g>
          <g fill="var(--flame-1)" opacity={0.9}>
            <circle cx="60" cy="80" r="5" />
            <circle cx="180" cy="60" r="4" />
            <circle cx="140" cy="190" r="6" />
            <circle cx="230" cy="260" r="5" />
            <circle cx="120" cy="320" r="4" />
          </g>
          <g fill="var(--flame-2)" opacity={0.9}>
            <circle cx="300" cy="110" r="5" />
            <circle cx="340" cy="220" r="4" />
            <circle cx="300" cy="340" r="6" />
          </g>
        </svg>

        <div className="text-flame1 font-heading mb-4 text-[13px] font-bold">
          {philosophyData.eyebrow}
        </div>
        <h2 className="font-heading text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.01em]">
          {philosophyData.statement}
        </h2>
        <p className="text-muted-foreground mt-[18px] max-w-[520px] text-base">
          {philosophyData.supporting}
        </p>
      </motion.div>

      <div className="font-heading text-ink-faint mb-5 text-[12.5px] font-bold uppercase tracking-[0.14em]">
        How I Work
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="border-border bg-border grid grid-cols-1 gap-px border md:grid-cols-3"
      >
        {philosophyData.cards.map((card) => (
          <div
            key={card.mark}
            className="bg-background hover:bg-card px-[30px] py-[38px] transition-colors"
          >
            <span
              className="font-heading mb-[22px] block text-[38px] font-black"
              style={{
                WebkitTextStroke: '1.4px var(--flame-1)',
                color: 'transparent',
              }}
            >
              {card.mark}
            </span>
            <h3 className="font-heading mb-3 text-lg font-bold">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-[14.5px]">
              {card.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
