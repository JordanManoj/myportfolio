'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { HeroName } from '@/components/hero-name';
import { Icons } from '@/components/icons';
import { ScrollCue } from '@/components/scroll-cue';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home', 0.3);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center pb-[70px] pt-[120px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-muted-foreground mb-[26px] flex items-center gap-[9px] font-sans text-[13px] tracking-wide"
      >
        <span className="pulse-dot bg-flame1 inline-block size-[7px] rounded-full shadow-[0_0_12px_var(--flame-1)]" />
        OPEN TO MLE · AI ENGINEER · FDE ROLES — EU / REMOTE
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <HeroName text="Jordan Manoj" gradientStartWord={1} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="text-flame2 mt-[18px] flex items-center gap-[14px] font-mono text-[13px] font-medium tracking-[0.06em]"
      >
        <span className="bg-flame inline-block h-px w-[34px]" />
        Building models that ship, not papers that sit
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="text-muted-foreground mt-[30px] max-w-screen-sm text-[clamp(16px,2vw,19px)] leading-[1.7]"
      >
        Machine Learning Engineer building{' '}
        <strong className="text-foreground font-semibold">
          computer vision, NLP and agentic AI systems
        </strong>{' '}
        that ship — from a GDPR-compliant YOLOv8 anonymisation pipeline in
        production to a peer-reviewed cancer-classification model at 94.2%
        accuracy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="mt-[42px] flex flex-wrap items-center gap-4"
      >
        <Link
          href="#work"
          className="bg-flame inline-flex items-center gap-2 rounded-full px-[26px] py-[15px] font-sans text-sm font-semibold text-[#0a0605] shadow-[0_8px_30px_-8px_var(--flame-glow)] transition-transform hover:-translate-y-0.5"
        >
          Explore Work <Icons.arrowRight className="size-4" />
        </Link>
        <Link
          href="#contact"
          className="border-border text-foreground hover:border-muted-foreground inline-flex items-center gap-2 rounded-full border px-[26px] py-[15px] font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s Talk →
        </Link>
        <a
          href="/Jordan_Manoj_Resume.pdf"
          download
          className="border-border text-foreground hover:border-muted-foreground hidden items-center gap-2 rounded-full border px-[26px] py-[15px] font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          Resume <Icons.download className="size-4" />
        </a>
        <a
          href="https://github.com/JordanManoj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="border-border text-foreground hover:border-muted-foreground inline-flex size-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
        >
          <Icons.github className="size-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-manoj-cheruvathoor-096a8a225/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="border-border text-foreground hover:border-muted-foreground inline-flex size-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
        >
          <Icons.linkedin className="size-5" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="border-border text-ink-faint mt-20 flex items-center justify-between gap-3 border-t pt-[22px] text-[13px]"
      >
        <div className="text-muted-foreground">Hannover, Germany</div>
        <div>MSc Informatik — Leibniz Universität Hannover</div>
      </motion.div>

      <ScrollCue />
    </section>
  );
};
