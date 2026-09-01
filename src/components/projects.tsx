'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Work');

  return (
    <section ref={ref} id="work" className="my-10 w-full scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 max-w-screen-sm"
      >
        <div className="text-flame1 font-heading mb-4 text-[13px] font-bold">
          Selected Projects
        </div>
        <h2 className="font-heading text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.01em]">
          Four systems, four different problems.
        </h2>
        <p className="text-muted-foreground mt-[18px] max-w-[520px] text-base">
          Picked to show range across agentic AI, applied deep learning, NLP in
          production, and interpretable data science.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
