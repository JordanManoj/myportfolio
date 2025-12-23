'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />

      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I am a B.Tech graduate in Artificial Intelligence & Data Science
          (2021–2025) with strong foundations in machine learning, deep
          learning, and data analytics. I specialize in building end-to-end AI
          systems, covering data preprocessing, feature engineering, model
          training, evaluation, and deployment.
        </p>

        <p className="mb-4">
          My work focuses on healthcare-oriented AI solutions, natural language
          processing, and computer vision. I have hands-on experience working
          with PyTorch, TensorFlow, Scikit-learn, SQL, and modern web
          frameworks, and I actively apply research-driven approaches to solve
          real-world problems.
        </p>

        <p>
          I am actively seeking opportunities in AI, machine learning, and data
          science roles where I can contribute to impactful projects, grow
          technically, and work on challenging problems at scale.
        </p>
      </div>

      <Skills />
    </motion.section>
  );
};
