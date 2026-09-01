import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Jordan Manoj | Machine Learning Engineer',
  description:
    'Jordan Manoj is a Machine Learning Engineer building computer vision, NLP and agentic AI systems that ship — from a GDPR-compliant YOLOv8 anonymisation pipeline in production to a peer-reviewed cancer-classification model at 94.2% accuracy. MSc Informatik, Leibniz Universität Hannover.',
  keywords: [
    'Jordan Manoj',
    'Machine Learning Engineer',
    'AI Engineer',
    'Data Scientist',
    'Forward Deployed Engineer',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Agentic AI',
    'RAG',
    'Artificial Intelligence',
    'Python',
    'PyTorch',
    'TensorFlow',
    'YOLOv8',
    'LangChain',
    'FastAPI',
    'MLOps',
    'Model Deployment',
    'Explainable AI',
    'Hannover',
    'Portfolio',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
