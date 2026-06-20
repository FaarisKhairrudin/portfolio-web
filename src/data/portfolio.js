export const portfolioData = {
  profile: {
    name: "Faaris Khairrudin",
    role: "Data Science Student & AI Builder",
    location: "Bandung / Bekasi, Indonesia",
    email: "faariskhairrudin@gmail.com",
    github: "https://github.com/FaarisKhairrudin",
    linkedin: "https://www.linkedin.com/in/faaris-khairrudin-a10209310",
    instagram: "https://www.instagram.com/faaris_khairrudin",
    cv: "/cv_indo_FaarisKhairrudin.pdf",
    image: "/formal_image.jpeg",
    headline:
      "Building practical AI systems from data to decisions.",
    summary:
      "Data Science student at Telkom University with a 3.93 GPA, focused on multimodal AI, computer vision, time-series forecasting, reinforcement learning, and big data analytics. I enjoy turning research ideas and competition problems into working AI products, dashboards, and decision systems.",
  },
  metrics: [
    { value: "3.93", label: "GPA / 4.00", countTo: 3.93 },
    { value: "10+", label: "Data & AI competitions", countTo: 10, suffix: "+" },
    { value: "4th", label: "Satria Data national place", countTo: 4, suffix: "th" },
    { value: "Top 7", label: "Datathon UI national finalist", countTo: 7, prefix: "Top " },
  ],
  focusAreas: [
    "Multimodal AI",
    "Computer Vision",
    "Time-Series Forecasting",
    "Deep Reinforcement Learning",
    "Big Data Analytics",
    "Geospatial ML",
  ],
  profileImages: [
    "/assets/profile/profile-1.webp",
    "/assets/profile/profile-2.webp",
    "/assets/profile/profile-3.webp",
    "/assets/profile/profile-4.webp",
    "/assets/profile/satriadata-competition.webp",
  ],
  projects: [
    {
      title: "Social Video Intelligence",
      badge: "4th Place - Satria Data 2025",
      image: "/assets/project/social-video-intelligence.webp",
      description:
        "A multimodal social-media video analytics system that turns video, audio, and text into structured insights through transcription, topic modeling, NER, and summarization.",
      stack: ["Whisper", "BLIP-2", "BERTopic", "GLiNER", "Qwen", "HuggingFace", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/social-video-multimodal-analysis",
      type: "Multimodal AI",
      categories: ["Featured", "AI & Deep Learning"],
    },
    {
      title: "IDX Smart Rebalance",
      badge: "Top 7 National Finalist - Datathon UI 2025",
      image: "/assets/project/idx-smart-rebalance.webp",
      description:
        "An AI-powered Indonesian stock allocation system combining NeuralForecast, geopolitical news signals, and Deep Reinforcement Learning for adaptive rebalancing.",
      stack: ["Python", "FastAPI", "Stable-Baselines3", "NeuralForecast", "DRL"],
      link: "https://github.com/FaarisKhairrudin/idx-smart-rebalance",
      type: "Financial AI",
      categories: ["Featured", "AI & Deep Learning"],
    },
    {
      title: "PETI Detection Research",
      badge: "Research Assistant - Telkom University",
      image: "/assets/project/peti-detection-research.webp",
      description:
        "A geospatial machine learning research project for detecting illegal gold mining activity in Jambi and Central Kalimantan using satellite imagery and Google Earth Engine.",
      stack: ["Python", "Google Earth Engine", "Satellite Imagery", "Geospatial ML"],
      link: "",
      type: "Research",
      categories: ["Featured", "Forecasting & Machine Learning"],
    },
    {
      title: "Crowd Detection & Counting",
      badge: "Hology 8.0 - Data Mining Track",
      image: "/assets/project/crowd-detection-counting.webp",
      description:
        "A computer vision system for estimating crowd density in congested scenes using CSRNet, VGG-16 backbones, density maps, and augmentation.",
      stack: ["PyTorch", "CSRNet", "VGG-16", "Albumentations"],
      link: "https://github.com/Frenwin/Hology-8.0-Crowd-Detection",
      type: "Computer Vision",
      categories: ["Featured", "AI & Deep Learning"],
    },
    {
      title: "Smart Face Anti-Spoofing",
      badge: "Find IT UGM 2026",
      image: "/assets/project/smart-face-anti-spoofing.webp",
      description:
        "A face anti-spoofing classifier for multiple attack types using DINOv3-based computer vision, focal loss, augmentation, and multi-scale inference.",
      stack: ["PyTorch", "Transformers", "DINOv3", "Focal Loss"],
      link: "https://github.com/FaarisKhairrudin/Smart-Face-AntiSpoofing",
      type: "AI Security",
      categories: ["Featured", "AI & Deep Learning"],
    },
    {
      title: "SQL Data Warehouse Project",
      badge: "Data Engineering Project",
      image: "/assets/project/sql-data-warehouse-project.webp",
      description:
        "A medallion-architecture data warehouse with Bronze, Silver, and Gold layers, ETL pipelines, and analytics-ready SQL Server schemas.",
      stack: ["SQL Server", "ETL", "Data Modeling", "Medallion Architecture"],
      link: "https://github.com/FaarisKhairrudin/SQL-Data-Warehouse-Project",
      type: "Data Engineering",
      categories: ["Data & Automation"],
    },
    {
      title: "Lenta AI Operations System",
      badge: "AI Agent & Business Automation",
      image: "/assets/project/lenta-ai-operations-system.webp",
      description:
        "An end-to-end operations system for water and gas delivery, combining WhatsApp AI customer service, n8n workflows, Supabase data, and an operational dashboard.",
      stack: ["n8n", "Supabase", "OpenRouter", "AI Agent", "Tool Calling", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/lenta-ai-operations-system",
      type: "AI Automation",
      categories: ["Featured", "AI & Deep Learning", "Data & Automation"],
    },
    {
      title: "DATAVIDIA ISPU Prediction",
      badge: "DATAVIDIA 2026 Preliminary",
      image: "/assets/project/project-placeholder.svg",
      description:
        "A Jakarta air-quality forecasting pipeline that predicts ISPU categories using multivariate time-series modeling and optimized classification thresholds.",
      stack: ["Python", "NeuralForecast", "TFT", "Pandas", "Scikit-learn"],
      link: "",
      type: "Forecasting",
      categories: ["Forecasting & Machine Learning"],
    },
    {
      title: "Bank Customer Deposit Prediction",
      badge: "Data Science Indonesia Challenge",
      image: "/assets/project/bank-customer-deposit-prediction.webp",
      description:
        "A tabular machine learning project for predicting term-deposit subscription using feature engineering, class imbalance handling, and ensemble boosting models.",
      stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "Ensemble"],
      link: "https://github.com/FaarisKhairrudin/bank-customer-deposit-prediction",
      type: "Tabular ML",
      categories: ["Forecasting & Machine Learning"],
    },
    {
      title: "Global Food Price Forecasting",
      badge: "ADIKARA 2024 Finalist",
      image: "/assets/project/project-placeholder.svg",
      description:
        "A commodity price forecasting project for modeling global food price index movement across multiple countries using historical trend and seasonality patterns.",
      stack: ["Python", "Scikit-learn", "Time Series", "Forecasting"],
      link: "",
      type: "Forecasting",
      categories: ["Forecasting & Machine Learning"],
    },
    {
      title: "Narapangan",
      badge: "Applied Forecasting System",
      image: "/assets/project/project-placeholder.svg",
      description:
        "A web app predicting Bandung red chili prices for F&B SMEs, combining PIHPS market data, NASA POWER weather, Hijri calendar features, and N-BEATSx/N-HiTS forecasting models to generate procurement signals.",
      stack: ["Python", "N-BEATSx", "N-HiTS", "Forecasting", "Web App"],
      link: "https://github.com/FaarisKhairrudin/Prescriptive-food-price-intelligence",
      type: "Forecasting",
      categories: ["Forecasting & Machine Learning"],
    },
    {
      title: "COPPA Violation Detection",
      badge: "FindIT UGM — Data Science Track",
      image: "/assets/project/project-placeholder.svg",
      description:
        "A classification project detecting mobile apps potentially violating COPPA using app metadata, exploratory data analysis, feature engineering, and ensemble ML models.",
      stack: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering", "EDA"],
      link: "https://github.com/FaarisKhairrudin/coppa-violation-detection",
      type: "Classification",
      categories: ["Forecasting & Machine Learning"],
    },
  ],
  experience: [
    {
      title: "Vice Coordinator, Big Data Lab",
      org: "Telkom University",
      period: "2026 - Present",
      details:
        "Joined Big Data Lab in 2024 through study group, continued as a senior member, and now coordinates operational programs, member development, and research activities.",
    },
    {
      title: "Teaching Assistant",
      org: "Telkom University",
      period: "Mar 2026 - Present",
      details:
        "Assists the Intelligent Systems course by mentoring students in artificial intelligence fundamentals, algorithm implementation, and technical assignment review.",
    },
    {
      title: "Research Assistant, Illegal Gold Mining Detection",
      org: "Telkom University",
      period: "Jan 2026 - Apr 2026",
      details:
        "Built classification approaches for illegal gold mining detection using large-scale satellite data and Google Earth Engine.",
    },
  ],
  skills: {
    "AI & ML": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "HuggingFace",
      "Transformers",
      "Stable-Baselines3",
      "NeuralForecast",
    ],
    "Data & Analytics": [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "SQL Server",
      "Power BI",
      "Google Earth Engine",
    ],
    "Engineering": ["FastAPI", "Docker", "Git", "GitHub Actions", "n8n", "Go", "C++"],
  },
  techLogos: [
    {
      title: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      title: "PyTorch",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    },
    {
      title: "TensorFlow",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    {
      title: "Scikit-learn",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      title: "Pandas",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    },
    {
      title: "NumPy",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    },
    {
      title: "FastAPI",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    },
    {
      title: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      title: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      title: "GitHub Actions",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    },
    {
      title: "SQL Server",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    },
    {
      title: "n8n",
      src: "https://cdn.simpleicons.org/n8n/EA4B71",
    },
    {
      title: "Hugging Face",
      src: "https://cdn.simpleicons.org/huggingface/FFD21E",
    },
    {
      title: "Power BI",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/powerbi.svg",
    },
  ],
};
