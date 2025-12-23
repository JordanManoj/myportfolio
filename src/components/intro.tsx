'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
    >
      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-sm">
            Open to AI / ML / Data Science roles
          </span>
        </Link>
      </motion.div>

      {/* Name + Role */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Jordan Manoj
        </span>
        <br />
        AI & Data Science Engineer
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-muted-foreground max-w-xl"
      >
        I design and build intelligent systems using machine learning, deep
        learning, and data analytics. My work focuses on healthcare AI, NLP,
        computer vision, and end-to-end ML pipelines from data preprocessing to
        deployment.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <Button asChild size="lg">
          <Link href="#projects">
            View Projects <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/Jordan_Manoj_Resume.pdf" download>
            Download Resume <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/jordan-manoj-096a8a225/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/JordanManoj"
            aria-label="GitHub"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
