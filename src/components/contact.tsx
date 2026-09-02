'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { sendEmailAction } from '@/actions/send-email';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

const Heading = () => (
  <h2 className="font-display max-w-[820px] text-[clamp(34px,6vw,72px)] font-bold leading-[0.98] tracking-[-0.005em]">
    Let&apos;s build the <em className="text-flame1 not-italic">next</em>{' '}
    deployed model together.
  </h2>
);

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: TFormSchema) => {
    const result = await sendEmailAction(data);
    if (result.error) {
      toast.error(result.error);
      return;
    }
    toast.success("Thanks — I'll get back to you at that address.");
    reset();
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-flame1 font-heading mb-4 text-[13px] font-bold">
          Get In Touch
        </div>
        <Heading />
        <div
          aria-hidden="true"
          className="text-ink-faint pointer-events-none select-none opacity-45"
          style={{
            transform: 'scaleY(-1)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 60%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 60%)',
          }}
        >
          <Heading />
        </div>

        <div className="border-border mt-14 grid grid-cols-1 gap-16 border-t pt-[34px] md:grid-cols-2">
          <div>
            <p className="text-muted-foreground max-w-[380px] text-[15px]">
              Open to Machine Learning Engineer, AI Engineer, Data Scientist and
              Forward Deployed Engineer roles across Germany and the EU.
            </p>

            <div className="mt-[30px] flex flex-col gap-[18px]">
              <div>
                <div className="text-ink-faint text-[11px] uppercase tracking-[0.14em]">
                  Email
                </div>
                <div className="mt-[5px] text-[15px]">
                  <a
                    href="mailto:jordi.manoj@gmail.com"
                    className="hover:text-flame1 transition-colors"
                  >
                    jordi.manoj@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div className="text-ink-faint text-[11px] uppercase tracking-[0.14em]">
                  Location
                </div>
                <div className="mt-[5px] text-[15px]">Hannover, Germany</div>
              </div>
              <div>
                <div className="text-ink-faint text-[11px] uppercase tracking-[0.14em]">
                  Availability
                </div>
                <div className="text-ok mt-[5px] flex items-center gap-2 text-[15px]">
                  <span className="bg-ok inline-block size-[7px] rounded-full shadow-[0_0_10px_var(--ok)]" />
                  Open to opportunities
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <a
                href="mailto:jordi.manoj@gmail.com"
                aria-label="Email"
                className="border-border hover:border-flame1 hover:text-flame1 font-heading flex size-11 items-center justify-center rounded-full border text-[12.5px] font-bold transition-all hover:-translate-y-0.5"
              >
                @
              </a>
              <a
                href="https://www.linkedin.com/in/jordan-manoj-cheruvathoor-096a8a225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="border-border hover:border-flame1 hover:text-flame1 font-heading flex size-11 items-center justify-center rounded-full border text-[12.5px] font-bold transition-all hover:-translate-y-0.5"
              >
                in
              </a>
              <a
                href="https://github.com/JordanManoj/Jordan-Manoj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="border-border hover:border-flame1 hover:text-flame1 font-heading flex size-11 items-center justify-center rounded-full border text-[12.5px] font-bold transition-all hover:-translate-y-0.5"
              >
                gh
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[18px]"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className={cn(
                  'text-ink-faint text-[11px] uppercase tracking-[0.12em]',
                  errors.email && 'text-destructive'
                )}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                {...register('email')}
                className={cn(
                  'bg-card border-border rounded-xl border px-4 py-[14px] text-[14.5px]',
                  'placeholder:text-muted-foreground',
                  'focus-visible:border-flame1 focus-visible:outline-none',
                  errors.email && 'border-destructive'
                )}
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className={cn(
                  'text-ink-faint text-[11px] uppercase tracking-[0.12em]',
                  errors.message && 'text-destructive'
                )}
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="What are you working on?"
                {...register('message')}
                className={cn(
                  'bg-card border-border min-h-[130px] resize-none rounded-xl border px-4 py-[14px] text-[14.5px]',
                  'placeholder:text-muted-foreground',
                  'focus-visible:border-flame1 focus-visible:outline-none',
                  errors.message && 'border-destructive'
                )}
              />
              {errors.message && (
                <p className="text-destructive text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-flame inline-flex w-fit items-center gap-2 rounded-full px-[26px] py-[15px] font-sans text-sm font-semibold text-[#0a0605] shadow-[0_8px_30px_-8px_var(--flame-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              Send Message ↗
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
