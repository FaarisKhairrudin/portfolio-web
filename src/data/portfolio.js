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
  projects: [
    {
      title: "Social Video Intelligence",
      badge: "Juara Harapan 1 / 4th Place National - Satria Data 2025",
      description:
        "A multimodal social-media video analytics system that transforms video, audio, and text into structured insight through transcription, topic modeling, NER, summarization, and an interactive dashboard.",
      stack: ["Whisper", "BLIP-2", "BERTopic", "GLiNER", "Qwen", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/social-video-multimodal-analysis",
      type: "Multimodal AI",
      impact:
        "Shows end-to-end AI system building across text, audio, visual, and dashboard layers.",
    },
    {
      title: "IDX Smart Rebalance",
      badge: "Top 7 National Finalist - Datathon UI 2025",
      description:
        "An AI-powered Indonesian stock allocation system combining NeuralForecast, geopolitical news signals, and Deep Reinforcement Learning for adaptive sector rebalancing.",
      stack: ["Python", "FastAPI", "Stable-Baselines3", "NeuralForecast", "DRL"],
      link: "https://github.com/FaarisKhairrudin/idx-smart-rebalance",
      type: "Financial AI",
      impact:
        "Connects forecasting, external risk signals, and decision automation in one pipeline.",
    },
    {
      title: "PETI Detection Research",
      badge: "Research Assistant - Telkom University",
      description:
        "A geospatial machine learning research project for detecting illegal gold mining activity in Jambi and Central Kalimantan using satellite imagery and Google Earth Engine.",
      stack: ["Python", "Google Earth Engine", "Satellite Imagery", "Geospatial ML"],
      link: "",
      type: "Research",
      impact:
        "Applies machine learning to a real environmental and social-impact problem.",
    },
    {
      title: "Crowd Detection & Counting",
      badge: "Hology 8.0 - Data Mining Track",
      description:
        "A computer vision system for estimating crowd density in congested scenes using CSRNet, VGG-16 backbones, adaptive Gaussian density maps, and augmentation.",
      stack: ["PyTorch", "CSRNet", "VGG-16", "Albumentations"],
      link: "https://github.com/Frenwin/Hology-8.0-Crowd-Detection",
      type: "Computer Vision",
      impact:
        "Demonstrates deep learning for difficult visual scenes with occlusion and high density.",
    },
    {
      title: "Smart Face Anti-Spoofing",
      badge: "Find IT UGM 2026",
      description:
        "A face anti-spoofing classifier for multiple attack types using DINOv3-based computer vision, focal loss, image augmentation, and multi-scale test-time inference.",
      stack: ["PyTorch", "Transformers", "DINOv3", "Focal Loss"],
      link: "https://github.com/FaarisKhairrudin/Smart-Face-AntiSpoofing",
      type: "AI Security",
      impact:
        "Targets biometric security and real-world model robustness.",
    },
    {
      title: "SQL Data Warehouse Project",
      badge: "Data Engineering Project",
      description:
        "A medallion-architecture data warehouse with Bronze, Silver, and Gold layers, ETL pipelines, and analytics-ready SQL Server schemas.",
      stack: ["SQL Server", "ETL", "Data Modeling", "Medallion Architecture"],
      link: "https://github.com/FaarisKhairrudin/SQL-Data-Warehouse-Project",
      type: "Data Engineering",
      impact:
        "Highlights the data pipeline foundation behind reliable analytics and ML systems.",
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
