/* =========================
   NAVIGATION
========================= */
export const links = [
  { name: 'Work', hash: '#work' },
  { name: 'Philosophy', hash: '#philosophy' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Contact', hash: '#contact' },
] as const;

/* =========================
   MARQUEE / STACK
========================= */
export const stackData = [
  'PyTorch',
  'TensorFlow',
  'YOLOv8',
  'LangChain',
  'RAG',
  'FAISS',
  'BERT / RoBERTa',
  'MLOps',
  'FastAPI',
  'Docker',
  'Airflow',
  'SHAP / XAI',
] as const;

/* =========================
   PHILOSOPHY / APPROACH
========================= */
export const philosophyData = {
  eyebrow: 'The Philosophy',
  statement:
    'Every model is a decision that has to survive contact with production.',
  supporting:
    "Three things I hold constant, whether I'm fine-tuning a transformer or reworking an ETL pipeline.",
  cards: [
    {
      mark: '01',
      title: 'Ship end-to-end',
      description:
        'Data engineering, training, evaluation and deployment are one pipeline, not four handoffs. I own the path from raw data to an API a team can actually call.',
    },
    {
      mark: '02',
      title: 'Explain everything',
      description:
        "A model that can't be interpreted can't be trusted in healthcare, finance, or anywhere a human has to sign off. SHAP and LIME aren't an afterthought — they're a requirement.",
    },
    {
      mark: '03',
      title: 'Design for scale',
      description:
        "Containerised, versioned, monitored. Whether it's real-time inference on video streams or a RAG pipeline over 10,000+ documents, latency and reliability are part of the spec.",
    },
  ],
} as const;

/* =========================
   STATS
========================= */
export const statsData = [
  {
    num: '94.2%',
    label: 'Accuracy — peer-reviewed ensemble CNN, ICDSAAI 2025',
  },
  {
    num: '€120K+',
    label: 'Annual savings identified from 50,000+ record spend analysis',
  },
  {
    num: '15%',
    label: 'False-positive reduction on real-time YOLOv8 pipeline',
  },
  { num: '<2s', label: 'Retrieval latency across 10,000+ docs in RAG system' },
] as const;

/* =========================
   PROJECTS
========================= */
export const projectsData = [
  {
    title: 'Deep Research Bot',
    kicker: 'Agentic AI / RAG',
    description:
      'Autonomous multi-agent research system: crawls the web, indexes with FAISS, and runs retrieval-augmented generation over the Gemini API. Deployed as a containerised Streamlit app with sub-2-second retrieval across 10,000+ documents.',
    technologies: ['LangChain', 'LangGraph', 'FAISS', 'Docker'],
    href: 'https://github.com/JordanManoj/Deep-Research-Bot',
    cover: 1,
  },
  {
    title: 'Breast Cancer Classification',
    kicker: 'Deep Learning / Healthcare AI',
    description:
      'Dual-stream ensemble CNN for histopathology image classification, published at ICDSAAI 2025. 94.2% accuracy on BreakHis and PatchCamelyon, with SHAP/LIME explainability for clinical use.',
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'XAI'],
    href: 'https://github.com/JordanManoj',
    cover: 2,
  },
  {
    title: 'Sentiment Insight',
    kicker: 'NLP / Production Deployment',
    description:
      'Fine-tuned RoBERTa on 15,000+ product and social reviews, hitting 92.3% F1 across five classes. Exported to ONNX for low-latency inference in production.',
    technologies: ['Hugging Face', 'RoBERTa', 'ONNX'],
    href: 'https://github.com/JordanManoj/Sentiment-Insight',
    cover: 3,
  },
  {
    title: 'Diabetic Readmission Risk Predictor',
    kicker: 'Data Science / Explainable AI',
    description:
      'ML model predicting 30-day diabetic patient readmission at 87% AUC-ROC, shipped as an interactive Streamlit app with real-time SHAP-based explainability for clinical decision support.',
    technologies: ['Scikit-learn', 'Streamlit', 'SHAP'],
    href: 'https://github.com/JordanManoj/Diabetic-Readmission-Risk-Predictor',
    cover: 4,
  },
] as const;

/* =========================
   EXPERIENCE
========================= */
export const experiencesData = [
  {
    title: 'Associate Software Engineer, Computer Vision',
    company: 'Cloud Orbit Technologies',
    period: 'Sep 2025 — Aug 2026',
    type: 'Full-time · Industry',
    bullets: [
      'Designed and deployed a production-grade YOLOv8 pipeline for automatic face and sensitive-data anonymisation across images and real-time video.',
      'Built for GDPR-compliant enterprise processing at scale.',
      'Cut false-positive rates 15% through Optuna tuning and augmentation.',
    ],
    technologies: ['OpenCV', 'YOLOv8', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Data Science & Machine Learning Intern',
    company: 'White Fire Technologies',
    period: 'Sep 2025 — Mar 2026',
    type: 'Internship',
    bullets: [
      'Ran a large-scale spend analysis across 50,000+ enterprise records.',
      'Surfaced €120,000+ in potential annual savings.',
      'Built Power BI dashboards for C-level reporting.',
      'Built Apache Airflow ETL pipelines with CI/CD via GitHub Actions.',
    ],
    technologies: ['SQL', 'Power BI', 'Airflow', 'Python'],
  },
  {
    title: 'AI & Data Science Researcher — ICDSAAI 2025',
    company: 'Independent Research',
    period: 'Dec 2024 — Mar 2025',
    type: 'Research',
    bullets: [
      'Authored a peer-reviewed paper on ensemble deep learning for breast cancer classification.',
      'Reached 94.2% accuracy on BreakHis and PatchCamelyon.',
      'Applied SHAP and LIME for clinical interpretability.',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Explainable AI'],
  },
] as const;
