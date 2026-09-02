'use client';

import { motion } from 'framer-motion';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { title, kicker, description, technologies, href, cover } = project;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="border-border hover:border-muted-foreground/60 group relative block overflow-hidden rounded-[20px] border transition-transform duration-300 hover:-translate-y-1 md:aspect-[4/3]"
    >
      <div
        className={`work-dot-grid cover-${cover} relative flex h-48 items-center justify-center p-8 text-center transition-transform duration-500 group-hover:scale-[1.06] md:absolute md:inset-0 md:h-auto`}
      >
        <span className="work-id font-heading relative z-[1] select-none text-[clamp(22px,2.6vw,34px)] font-black uppercase leading-[1.15] text-transparent">
          {title}
        </span>
      </div>

      <div className="text-foreground group-hover:bg-flame absolute right-[18px] top-[18px] z-[2] flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[15px] backdrop-blur-md transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-105 group-hover:text-[#0a0605]">
        ↗
      </div>

      <div className="work-overlay-bg bg-card relative z-[2] px-[22px] py-5 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:px-[26px] md:pb-[26px] md:pt-[70px]">
        <div className="text-flame1 mb-2 text-xs font-semibold uppercase tracking-wide">
          {kicker}
        </div>
        <h3 className="font-heading text-[19px] font-bold md:text-[21px]">
          {title}
        </h3>
        <p className="text-muted-foreground mt-2 max-h-[120px] overflow-hidden text-[13.5px] opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-[120px] md:group-hover:opacity-100">
          {description}
        </p>
        <div className="mt-[14px] flex translate-y-0 flex-wrap gap-[7px] opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-foreground rounded-full border border-white/[0.18] bg-white/5 px-[10px] py-1 text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
