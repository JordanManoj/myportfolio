'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async () => {
    toast.success('Thanks! Please contact me via email.');
    reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              asChild
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline underline-offset-4 transition-colors"
            >
              <Link href="mailto:jordi.manoj@gmail.com">
                jordi.manoj@gmail.com
              </Link>
            </Button>
            .
          </>
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        {/* Email */}
        <div className="w-full max-w-xl">
          <label
            htmlFor="email"
            className={cn(
              'text-sm font-medium',
              errors.email && 'text-destructive'
            )}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="hello@gmail.com"
            {...register('email')}
            className={cn(
              'bg-background mt-2 h-10 w-full rounded-md border px-3 py-2 text-sm',
              'border-input placeholder:text-muted-foreground',
              'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              errors.email && 'border-destructive'
            )}
          />
          {errors.email && (
            <p className="text-destructive mt-1 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="w-full max-w-xl">
          <label
            htmlFor="message"
            className={cn(
              'text-sm font-medium',
              errors.message && 'text-destructive'
            )}
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hello! What's up?"
            {...register('message')}
            className={cn(
              'bg-background mt-2 h-60 w-full resize-none rounded-md border px-3 py-2 text-sm',
              'border-input placeholder:text-muted-foreground',
              'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              errors.message && 'border-destructive'
            )}
          />
          {errors.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button size="lg" type="submit">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
