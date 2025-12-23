import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Jordan Manoj | AI & Data Science Engineer',
  description:
    "Hello, I'm Jordan Manoj. I am an AI & Data Science Engineer specializing in Machine Learning, Deep Learning, Computer Vision, and NLP. I build end-to-end intelligent systems and data-driven applications with a strong focus on real-world impact.",
  keywords: [
    'Jordan Manoj',
    'AI Engineer',
    'Data Scientist',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Artificial Intelligence',
    'Data Science',
    'Python',
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'FastAPI',
    'MLOps',
    'Model Deployment',
    'Explainable AI',
    'AI Projects',
    'Portfolio',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
