'use server';

import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    // Email service intentionally disabled during local development
    // This prevents runtime crashes due to missing API keys

    console.log('Contact form submission:', {
      email,
      message,
    });

    return {
      data: 'Message received successfully!',
    };
  } catch {
    return {
      error: 'Something went wrong!',
    };
  }
};
