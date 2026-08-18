export const portfolioData = {
  profile: {
    name: "Faaris Khairrudin",
    role: "Data Science Student & AI Practitioner",
    location: "Bandung / Bekasi, Indonesia",
    email: "faariskhairrudin@gmail.com",
    github: "https://github.com/FaarisKhairrudin",
    linkedin: "https://www.linkedin.com/in/faaris-khairrudin-a10209310",
    instagram: "https://www.instagram.com/faaris_khairrudin",
    cv: "/cv_FaarisKhairrudin.pdf",
    image: "/formal_image.jpeg",
    headline:
      "From raw data to production AI - I build, compete, and ship.",
    summary:
      "Turning research ideas and competition problems into working AI systems, dashboards, and decision pipelines. 3.93 GPA at Telkom University, focused on multimodal AI, computer vision, forecasting, and big data.",
  },
  metrics: [
    { value: "3.93", label: "GPA / 4.00", countTo: 3.93 },
    { value: "10+", label: "Data & AI competitions", countTo: 10, suffix: "+" },
    { value: "4th", label: "National rank, Satria Data", countTo: 4, suffix: "th" },
    { value: "Top 7", label: "Datathon UI national finalist", countTo: 7, prefix: "Top " },
  ],
  focusAreas: [
    "Machine Learning & AI",
    "Data Analytics",
    "Data Engineering",
    "Big Data Analytics",
    "Computer Vision",
    "Time-Series Forecasting",
    "Deep Reinforcement Learning",
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
      summary:
        "Automatically turns social media videos into structured insight: transcripts, topics, key entities, and sentiment, so analysts get answers without watching hours of footage.",
      stack: ["Whisper", "BLIP-2", "BERTopic", "GLiNER", "Qwen", "HuggingFace", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/social-video-multimodal-analysis",
      type: "Multimodal AI",
      categories: ["Featured", "AI & Deep Learning"],
      star: {
        situation:
          "Satria Data 2025 (Data Mining category) challenged teams to extract meaningful insight from social media video content across audio, text, and visual modalities.",
        task: "Build a system that turns raw videos into structured, queryable insight instead of relying on manual viewing and note-taking.",
        action: [
          "Transcribed audio with Whisper speech-to-text.",
          "Extracted visual information from frames with BLIP-2 image captioning.",
          "Ran BERTopic topic modeling to surface the main themes in each video.",
          "Used GLiNER named entity recognition to detect people, places, and organizations.",
          "Generated emotion and sentiment signals plus an LLM summary with Qwen.",
          "Served everything through an interactive Next.js dashboard.",
        ],
        result:
          "Finished 4th nationally (Juara Harapan 1) and delivered a reusable end-to-end multimodal pipeline that goes from raw video to analysis-ready insight.",
      },
    },
    {
      title: "Lenta AI Operations System",
      badge: "AI Agent & Business Automation",
      image: "/assets/project/lenta-ai-operations-system.webp",
      summary:
        "A WhatsApp AI assistant that runs customer service and stock management for a water and gas delivery business, plus a dashboard for the owner.",
      stack: ["n8n", "Supabase", "OpenRouter", "AI Agent", "Tool Calling", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/lenta-ai-operations-system",
      type: "AI Automation",
      categories: ["Featured", "AI & Deep Learning", "Data & Automation"],
      star: {
        situation:
          "A busy depot's operations were drowning: customers messaged for orders and prices at all hours, while stock and order records were tracked by hand.",
        task: "Build a WhatsApp AI assistant that serves customers automatically and helps the owner manage stock and order summaries.",
        action: [
          "Built 4 integrated n8n workflows with 2 AI agents: a Customer Service Agent (DeepSeek) for customers and a Stock Manager Agent for the owner.",
          "Designed a multi-message buffer (15 second delay) so the AI waits for the short, rapid messages Indonesian customers send in bursts before executing tools.",
          "Engineered the agent persona to reply in natural, human-like WhatsApp style instead of robotic language.",
          "Used tool calling heavily: the AI extracts order details, calculates delivery fees, and writes transactions to the database.",
          "Designed a relational Supabase schema (customers, products, orders, order_items, inventory, buffer_message).",
        ],
        result:
          "Customer service and stock management now run on autopilot: precise order capture, automatic stock deduction, low-stock alerts, and a monitoring dashboard for daily rekap, all tied to real business logic.",
      },
    },
    {
      title: "IDX Smart Rebalance",
      badge: "Top 7 National Finalist - Datathon UI 2025",
      image: "/assets/project/idx-smart-rebalance.webp",
      summary:
        "An AI advisor for Indonesian stock portfolios that forecasts market moves, reads geopolitical news, and recommends when and how to rebalance.",
      stack: ["Python", "FastAPI", "Stable-Baselines3", "NeuralForecast", "DRL"],
      link: "https://github.com/FaarisKhairrudin/idx-smart-rebalance",
      type: "Financial AI",
      categories: ["Featured", "AI & Deep Learning"],
      star: {
        situation:
          "Investors struggle to time portfolio rebalancing; decisions are driven by gut feeling or static rules that ignore market and news signals.",
        task: "Design a system that recommends adaptive stock allocation for the Indonesia Stock Exchange by combining forecasts, external signals, and reinforcement learning.",
        action: [
          "Built forecasting models with NeuralForecast to read short-term market dynamics.",
          "Integrated geopolitical and sentiment news signals as external features.",
          "Trained a Deep Reinforcement Learning agent with Stable-Baselines3 to learn the rebalancing strategy.",
          "Exposed the system through a FastAPI backend with a simple web interface.",
        ],
        result:
          "Top 7 national finalist at Datathon UI 2025, showing a working pipeline from market data and news to a concrete portfolio recommendation.",
      },
    },
    {
      title: "PETI Detection Research",
      badge: "Research Assistant - Telkom University",
      image: "/assets/project/peti-detection-research.webp",
      summary:
        "Satellite imagery and machine learning used to detect illegal gold mining (PETI) across Jambi and Central Kalimantan, where on-the-ground monitoring is impractical.",
      stack: ["Python", "Google Earth Engine", "Satellite Imagery", "Geospatial ML"],
      link: "",
      type: "Research",
      categories: ["Featured", "Forecasting & Machine Learning"],
      star: {
        situation:
          "Illegal gold mining (PETI) causes deforestation and environmental damage, but monitoring vast remote areas on foot is impractical.",
        task: "Design a classification approach to detect indications of PETI from large-scale satellite data.",
        action: [
          "Processed large-scale remote sensing imagery through Google Earth Engine.",
          "Extracted geospatial features from satellite images.",
          "Designed and experimented with classification models to flag PETI indicators.",
        ],
        result:
          "Supported an institutional research effort at Telkom University with a reproducible geospatial ML pipeline and hands-on experience with satellite data at scale.",
      },
    },
    {
      title: "Crowd Detection & Counting",
      badge: "Hology 8.0 - Data Mining Track",
      image: "/assets/project/crowd-detection-counting.webp",
      summary:
        "A computer vision system that estimates how many people are in dense, crowded scenes, built for the Hology 8.0 data mining track.",
      stack: ["PyTorch", "CSRNet", "VGG-16", "Albumentations"],
      link: "https://github.com/Frenwin/Hology-8.0-Crowd-Detection",
      type: "Computer Vision",
      categories: ["Featured", "AI & Deep Learning"],
      star: {
        situation:
          "Counting people in highly congested scenes (rallies, stadiums, transit hubs) fails with standard object detection because bodies occlude each other.",
        task: "Build a crowd counting model robust to occlusion and extreme density.",
        action: [
          "Implemented CSRNet with a VGG-16 backbone for density map regression.",
          "Built adaptive k-NN Gaussian density maps to supervise training.",
          "Applied Albumentations augmentation to improve generalization.",
        ],
        result:
          "Delivered a working density-based crowd counter for Hology 8.0, demonstrating practical computer vision and deep learning skills.",
      },
    },
    {
      title: "Smart Face Anti-Spoofing",
      badge: "Find IT UGM 2026",
      image: "/assets/project/smart-face-anti-spoofing.webp",
      summary:
        "Detects whether a face in front of a camera is real or a spoof attack (photo, video, mask), a core safety layer for biometric systems.",
      stack: ["PyTorch", "Transformers", "DINOv3", "Focal Loss"],
      link: "https://github.com/FaarisKhairrudin/Smart-Face-AntiSpoofing",
      type: "AI Security",
      categories: ["AI & Deep Learning"],
      star: {
        situation:
          "Face recognition systems are easily fooled by printed photos, replayed videos, or masks, which is a real security risk for biometric access.",
        task: "Build a classifier that distinguishes real faces from multiple spoofing attack types.",
        action: [
          "Used a DINOv3 transformer backbone as the visual encoder.",
          "Applied image augmentation to harden the model against varied capture conditions.",
          "Used focal loss to handle hard examples and class imbalance.",
          "Added multi-scale test-time inference for better generalization.",
        ],
        result:
          "Built for Find IT UGM 2026, the project shows a complete deep learning flow for AI security and biometric verification.",
      },
    },
    {
      title: "SQL Data Warehouse Project",
      badge: "Data Engineering Project",
      image: "/assets/project/sql-data-warehouse-project.webp",
      summary:
        "A production-style SQL Server data warehouse that turns raw ERP and CRM CSV files into clean, analytics-ready tables.",
      stack: ["SQL Server", "ETL", "Data Modeling", "Medallion Architecture"],
      link: "https://github.com/FaarisKhairrudin/SQL-Data-Warehouse-Project",
      type: "Data Engineering",
      categories: ["Data & Automation"],
      star: {
        situation:
          "Raw sales data from ERP and CRM systems is inconsistent: duplicated rows, mixed formats, and mismatched IDs make analysis unreliable.",
        task: "Design a data warehouse that cleans and transforms this data into analytics-ready dimensions and facts.",
        action: [
          "Built a Bronze, Silver, Gold medallion pipeline using SQL Server stored procedures with TRY/CATCH error handling and load-time logging.",
          "Ingested 6 ERP and CRM CSV files with BULK INSERT using truncate-then-load for idempotency.",
          "Cleaned data in Silver: deduplication with ROW_NUMBER(), standardized categories, normalized IDs, fixed sales inconsistencies, and validated dates.",
          "Modeled a star schema in Gold: dim_customers, dim_products, and fact_sales with surrogate keys and a CRM-primary, ERP-fallback hierarchy.",
          "Wrote data quality checks for duplicates, NULLs, sales = quantity x price, and referential integrity.",
        ],
        result:
          "A complete, documented ETL and data modeling project that demonstrates data engineering fundamentals end to end.",
      },
    },
    {
      title: "DATAVIDIA ISPU Prediction",
      badge: "DATAVIDIA 2026 Preliminary",
      image: "/assets/project/DATAVIDIA-ISPU-Prediction.png",
      summary:
        "Predicts Jakarta's daily air quality category (ISPU) days ahead, so people and city agencies can prepare for unhealthy days.",
      stack: ["Python", "NeuralForecast", "TFT", "Pandas", "Scikit-learn"],
      link: "https://github.com/FaarisKhairrudin/neuralforecast-air-quality-jakarta",
      type: "Forecasting",
      categories: ["Forecasting & Machine Learning"],
      star: {
        situation:
          "Jakarta's air quality fluctuates sharply, and residents only know it is bad after the fact.",
        task: "Build a pipeline that forecasts the daily air quality category in advance.",
        action: [
          "Built a multivariate time-series forecasting pipeline with NeuralForecast.",
          "Used Temporal Fusion Transformer for the forecasting stage.",
          "Applied a regression-then-classification approach: predict the numeric index, then convert it to an ISPU category.",
          "Optimized classification thresholds to improve F1-Macro.",
        ],
        result:
          "Submitted to DATAVIDIA 2026 preliminary, showing a complete forecasting and classification pipeline for urban environmental data.",
      },
    },
    {
      title: "Bank Customer Deposit Prediction",
      badge: "Data Science Indonesia Challenge",
      image: "/assets/project/bank-customer-deposit-prediction.webp",
      summary:
        "Predicts which bank customers will sign up for a term deposit, so marketing teams can focus their outreach on the right people.",
      stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "Ensemble"],
      link: "https://github.com/FaarisKhairrudin/bank-customer-deposit-prediction",
      type: "Tabular ML",
      categories: ["Forecasting & Machine Learning"],
      star: {
        situation:
          "Banks run costly marketing campaigns, but most customers who are contacted never subscribe to term deposits.",
        task: "Predict subscription likelihood from customer profile and contact data so effort goes to the right people.",
        action: [
          "Performed feature engineering on customer and campaign attributes.",
          "Handled class imbalance so the minority subscribed class was not ignored.",
          "Combined XGBoost, LightGBM, and CatBoost in an ensemble approach with careful evaluation.",
        ],
        result:
          "A solid tabular ML project from the Data Science Indonesia challenge, showing business-oriented machine learning with strong evaluation discipline.",
      },
    },
    {
      title: "Narapangan",
      badge: "Applied Forecasting System",
      image: "/assets/project/Narapangan.png",
      summary:
        "Tells F&B owners whether Bandung red chili prices will rise in the next 4 weeks, so they know when to stock up before prices spike.",
      stack: ["Python", "N-BEATSx", "N-HiTS", "Forecasting", "Web App"],
      link: "https://github.com/FaarisKhairrudin/Prescriptive-food-price-intelligence",
      type: "Forecasting",
      categories: ["Featured", "Forecasting & Machine Learning"],
      star: {
        situation:
          "F&B SMEs in Bandung buy chili at market prices, so a sudden price spike directly cuts their margins. Procurement is usually guesswork.",
        task: "Build a web app that predicts chili prices weeks ahead and turns the forecast into a procurement signal.",
        action: [
          "Ingested daily PIHPS market prices for Bandung red chili.",
          "Added external signals: NASA POWER weather from Garut and Hijri calendar features (demand spikes around holidays).",
          "Trained N-BEATSx and N-HiTS forecasting models and served the best stored model.",
          "Generated a 4-week price forecast plus a buy or no-buy procurement signal in a web app.",
        ],
        result:
          "A practical applied-forecasting system born from the ADIKARA 2024 finalist project, showing time-series forecasting with real business value.",
      },
    },
    {
      title: "COPPA Violation Detection",
      badge: "FindIT UGM - Data Science Track",
      image: "/assets/project/COPPA-Violation-Detection.png",
      summary:
        "Flags mobile apps that may violate children's online privacy rules (COPPA) by analyzing app metadata, built for FindIT UGM.",
      stack: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering", "EDA"],
      link: "https://github.com/FaarisKhairrudin/coppa-violation-detection",
      type: "Classification",
      categories: ["Forecasting & Machine Learning"],
      star: {
        situation:
          "Thousands of apps target children, and regulators struggle to identify which ones collect data in ways that violate COPPA.",
        task: "Build a classification model that predicts whether an app carries COPPA risk from its metadata.",
        action: [
          "Explored the app metadata dataset with EDA.",
          "Engineered features such as genre, developer country, download counts, privacy policy presence, target audience, and rating.",
          "Trained ensemble ML models to predict the coppaRisk target and evaluated them thoroughly.",
        ],
        result:
          "Built for FindIT UGM's data science track, applying machine learning to digital privacy and child safety, a problem with clear social value.",
      },
    },
    {
      title: "Financial Document Extraction & Reconciliation",
      badge: "n8n Automation Workflow",
      image: "/assets/project/financial-doc-extraction.webp",
      summary:
        "Reads invoices from your inbox, extracts the details with AI, and files them into a spreadsheet automatically, so nobody types invoice data by hand.",
      stack: ["n8n", "Gemini 2.5 Flash", "Gmail", "Google Drive", "Google Sheets", "Telegram"],
      link: "",
      type: "AI Automation",
      categories: ["Data & Automation"],
      star: {
        situation:
          "Businesses receive many invoices or financial notes via email that must be extracted, classified, and rekap-ed manually into spreadsheets.",
        task: "Automate the end-to-end pipeline from incoming email to data reconciliation, cutting data entry time and typo risk.",
        action: [
          "Built an n8n workflow that monitors incoming email, filters attachments (PDF and images), and archives them to Google Drive as an audit trail.",
          "Used Gemini 2.5 Flash vision and document LLMs to classify documents (invoice vs non-invoice) and extract structured data with a strict JSON schema.",
          "Applied business logic routing: auto-approve invoices with reasonable amounts and complete fields, manual review via Telegram alert for large or anomalous invoices.",
        ],
        result:
          "Invoice reconciliation is 100% automated with a robust parent-child schema (Data_Invoice and Detail_Item) in Google Sheets, plus minimal-friction human-in-the-loop validation.",
      },
    },
    {
      title: "AI-Powered Personal Finance & Money Management",
      badge: "n8n Automation Workflow",
      image: "/assets/project/personal-finance-ai.webp",
      summary:
        "Reads your bank transaction emails and categorizes spending automatically with AI, so personal bookkeeping stays tidy without manual entry.",
      stack: ["n8n", "DeepSeek LLM", "Gmail", "Telegram", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["Data & Automation"],
      star: {
        situation:
          "Recording daily spending from digital bank receipts (QRIS, BI Fast, Mandiri transfers) is time-consuming and often skipped.",
        task: "Build an autonomous money management system that records every transaction instantly and classifies spending categories without manual work for recurring transactions.",
        action: [
          "Built a regex HTML parser in n8n to extract amount, time, and recipient from bank notification emails.",
          "Integrated DeepSeek LLM (via OpenRouter) to guess spending categories for new merchants and store merchant rules, so similar future transactions are recognized automatically.",
          "Built a human-in-the-loop confirmation UI via Telegram inline keyboard to correct AI guesses or set categories for transfers.",
        ],
        result:
          "Real-time adaptive financial tracking; the AI's spending model improves with user feedback, and personal bookkeeping stays organized without consuming time.",
      },
    },
    {
      title: "Automated Invoice & Debt Collector",
      badge: "n8n Automation Workflow",
      image: "/assets/project/invoice-debt-collector.webp",
      summary:
        "Chases unpaid invoices automatically on WhatsApp and email, politely and on schedule, so cash flow stays healthy without nagging clients by hand.",
      stack: ["n8n", "Gmail", "GOWA", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["Data & Automation"],
      star: {
        situation:
          "Client follow-up for overdue invoices often gets neglected because checking is manual, while aggressive automated collection risks burning relationships with spam-like messages.",
        task: "Build a consistent, on-time, polite debt collection bot with anti-spam mechanics.",
        action: [
          "Designed a daily scheduled n8n workflow that reads the invoice master database (Google Sheets).",
          "Implemented anti-spam filtering: reminders only trigger after the due date with a buffer, max 1 message per 3 days.",
          "Sent reminders simultaneously via professional HTML email and WhatsApp chat, with invoice details and a ready-to-pay payment link.",
        ],
        result:
          "Drastically shortened the cash flow cycle for late payments, improved bookkeeping discipline via payment status sync, and freed the operations team from manual chasing.",
      },
    },
    {
      title: "Hyper-Targeted B2B Lead Generator",
      badge: "n8n Automation Workflow",
      image: "/assets/project/b2b-lead-generator.webp",
      summary:
        "Finds high-quality B2B prospects from a single keyword, researches each one with AI, and drafts personalized cold outreach ready to send.",
      stack: ["n8n", "Apify", "DeepSeek LLM", "Telegram", "GOWA", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["Data & Automation"],
      star: {
        situation:
          "B2B marketing teams waste hours finding leads manually, and generic cold outreach converts poorly.",
        task: "Automate the full lead generation cycle: one keyword input yields high-reputation leads plus highly personalized outreach messages.",
        action: [
          "Packaged the pipeline into 2 n8n workflows. Stage 1: keyword injection from Telegram, Apify (Google Maps Scraper) calls, eligibility filtering (minimum 3.5 rating), and website content mining for each prospect.",
          "Routed website content to DeepSeek LLM to extract key client parameters (business summary, pain points) and turn them into commercial message drafts.",
          "Stage 2: once drafts are reviewed and approved (manual override in Google Sheets), the status trigger executes automated WhatsApp sending.",
        ],
        result:
          "Sharp drop in prospecting research costs, a large hyper-personalized outreach database, and higher conversion thanks to highly contextual messages.",
      },
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
