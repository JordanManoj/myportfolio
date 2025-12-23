'use client';

import { motion } from 'framer-motion';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { title, description, technologies } = project;
  const featured = 'featured' in project && project.featured;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={`flex h-full flex-col rounded-xl border p-6 transition ${
        featured ? 'border-primary bg-primary/5' : 'border-border'
      }`}
    >
      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-auto flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full border px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
