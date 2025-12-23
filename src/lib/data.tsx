import { Icons } from '@/components/icons';

/* =========================
   NAVIGATION
========================= */
export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
] as const;

/* =========================
   PROJECTS
========================= */
export const projectsData = [
  {
    title: 'Breast Cancer Classification (Histopathology Images)',
    description:
      'Research-grade deep learning system for automated breast cancer classification using histopathological images. Implements CNN-based architectures, ensemble learning, hyperparameter optimization, and explainable AI techniques (SHAP, LIME) to improve robustness and clinical interpretability.',
    technologies: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'Explainable AI',
    ],
    featured: true,
  },
  {
    title: 'Computer Vision Data Masking System',
    description:
      'Computer vision solution designed to automatically detect and blur faces and high-confidential visual information in images and videos. Built with a focus on accuracy, reliability, and real-world robustness. Currently in testing phase as part of a team-based development workflow.',
    technologies: ['Computer Vision', 'Deep Learning', 'Python'],
  },
  {
    title: 'Toxic Speech Detection: Naive Bayes vs BERT',
    description:
      'Comparative NLP study evaluating classical machine learning (Naive Bayes with TF-IDF) against transformer-based BERT models for toxic speech detection. Analyzed performance, generalization, and computational trade-offs.',
    technologies: ['Python', 'Scikit-learn', 'Hugging Face', 'NLP'],
  },
  {
    title: 'Web-Whisperer',
    description:
      'Automated web scraping system that crawls websites, extracts structured textual content, and prepares clean datasets for downstream NLP and machine learning workflows.',
    technologies: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
  },
  {
    title: 'NLP Sentiment & Toxicity Analysis System',
    description:
      'Text analytics system for sentiment analysis and toxicity detection using classical machine learning and transformer-based NLP approaches. Designed for scalable text classification tasks.',
    technologies: ['Python', 'NLP', 'Machine Learning'],
  },
  {
    title: 'AI-Powered Text Classification Engine',
    description:
      'Generic text classification engine capable of categorizing large volumes of unstructured text using feature extraction, model training, and evaluation pipelines. Designed for extensibility across multiple NLP use cases.',
    technologies: ['Python', 'NLP', 'Data Analytics'],
  },
] as const;

/* =========================
   EXPERIENCE
========================= */
export const experiencesData = [
  {
    title: 'Associate Software Engineer',
    company: 'Industry Project (Confidential)',
    description:
      'Working as part of a development team on a computer vision–based solution designed to automatically detect and blur faces and other high-confidential visual data. Responsible for building and testing CV models focused on accuracy, reliability, and real-world robustness. The project is currently in the testing phase, with active collaboration across team members to refine performance and deployment readiness.',
    period: 'Sep 2025 – Present',
    technologies: [
      'Computer Vision',
      'Deep Learning',
      'Python',
      'Model Evaluation',
      'Team Collaboration',
    ],
  },
  {
    title: 'AI & Data Science Researcher',
    company: 'Academic Research Publication',
    description:
      'Authored and published a peer-reviewed research paper titled "Advanced Ensemble Learning and Feature Enhancement for Robust Breast Cancer Classification in Histopathological Images". The work proposes an ensemble-based deep learning approach to improve classification robustness and accuracy in medical imaging. Focused on model optimization, explainable AI techniques, and ethical considerations for clinical deployment.',
    period: 'Dec 2024 – Mar 2025',
    technologies: [
      'Deep Learning',
      'Ensemble Learning',
      'Computer Vision',
      'PyTorch',
      'Explainable AI',
    ],
  },
] as const;

/* =========================
   SKILLS
========================= */
export const skillsData = [
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },

  // AI / ML / Data
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.streamlit className="size-12" /> },

  // Backend / Infra
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },

  // Workflow
  { icon: <Icons.github className="size-12" /> },
] as const;
