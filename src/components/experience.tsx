'use client';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      ref={ref}
      id="experience"
      className="my-10 w-full max-w-[1020px] scroll-mt-28 self-center md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 max-w-screen-sm"
      >
        <div className="text-flame1 font-heading mb-4 text-[13px] font-bold">
          Where I&apos;ve Been
        </div>
        <h2 className="font-heading text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.01em]">
          My path through research, industry and applied ML.
        </h2>
      </motion.div>

      <div className="border-border border-t">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border-border grid grid-cols-1 gap-2 border-b py-9 md:grid-cols-[140px_1fr] md:gap-9"
          >
            <div>
              <div className="text-ink-faint text-[13.5px]">{exp.period}</div>
              <span className="text-flame1 font-heading mt-2 block text-[11px] font-bold uppercase tracking-widest">
                {exp.type}
              </span>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">{exp.title}</h3>
              <div className="text-flame1 mb-4 mt-1 text-sm font-semibold">
                {exp.company}
              </div>
              <ul className="flex max-w-screen-sm flex-col gap-[9px]">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-muted-foreground relative pl-[18px] text-[14.5px]"
                  >
                    <span className="bg-flame2 absolute left-0 top-[9px] size-[5px] rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border-border text-muted-foreground rounded-full border px-3 py-[5px] text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
