export const portfolioData = {
  profile: {
    name: "Faaris Khairrudin",
    role: "AI Engineer & Data Scientist",
    location: "Bandung / Bekasi, Indonesia",
    email: "faariskhairrudin@gmail.com",
    github: "https://github.com/FaarisKhairrudin",
    linkedin: "https://www.linkedin.com/in/faaris-khairrudin-a10209310",
    instagram: "https://www.instagram.com/faaris_khairrudin",
    cv: "/cv_FaarisKhairrudin.pdf",
    image: "/formal_image.jpeg",
    headline:
      "From raw data to production AI - I build, automate, and ship.",
    summary:
      "Turning research ideas and competition problems into working AI systems, dashboards, and decision pipelines. 3.93 GPA at Telkom University, focused on multimodal AI, computer vision, forecasting, and big data.",
  },
  metrics: [
    { value: "3.93", label: "GPA / 4.00", countTo: 3.93 },
    { value: "15+", label: "AI & data projects shipped", countTo: 15, suffix: "+" },
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
      image: "/assets/project/Social Video Insight/1.png",
      images: [
        "/assets/project/Social Video Insight/1.png",
        "/assets/project/Social Video Insight/2.png",
        "/assets/project/Social Video Insight/3.png",
        "/assets/project/Social Video Insight/4.png",
        "/assets/project/Social Video Insight/5.png",
        "/assets/project/Social Video Insight/6.png",
        "/assets/project/Social Video Insight/7.png",
        "/assets/project/Social Video Insight/8.png",
        "/assets/project/Social Video Insight/9.png",
      ],
      summary:
        "Automatically turns social media videos into structured insight: transcripts, topics, key entities, and sentiment, so analysts get answers without watching hours of footage.",
      stack: ["Whisper", "BLIP-2", "BERTopic", "GLiNER", "Qwen", "HuggingFace", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/social-video-multimodal-analysis",
      demo: "https://faariskhairrudin.github.io/social-video-insights-dashboard/",
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
      title: "ARIA Property Matchmaker",
      badge: "AI Sales Agent & WhatsApp Automation",
      image: "/assets/project/ARIA/1.jpg",
      images: [
        "/assets/project/ARIA/1.jpg",
        "/assets/project/ARIA/2.jpg",
        "/assets/project/ARIA/3.jpg",
        "/assets/project/ARIA/4.jpg",
        "/assets/project/ARIA/5.jpg",
        "/assets/project/ARIA/6.jpg",
        "/assets/project/ARIA/7.jpg",
      ],
      summary:
        "A WhatsApp AI sales agent that answers property questions from official brochures, sends unit photos, books site surveys, simulates KPR installments with PDF, and follows up leads automatically.",
      stack: ["n8n", "OpenAI", "pgvector", "PostgreSQL", "GOWA", "Google Calendar"],
      link: "",
      type: "AI Automation",
      categories: ["Featured", "AI & Deep Learning", "AI Automation"],
      star: {
        situation:
          "Property prospects chat on WhatsApp at all hours asking about specs, prices, installments, photos, and survey slots, while human CS cannot reply instantly every time and manual follow-up lets warm leads go cold.",
        task: "Build ARIA, a WhatsApp AI sales agent that responds instantly like a human salesperson: answering from official brochures, sending the right unit photos, booking surveys, simulating KPR, scoring every lead, and handing over to human CS when needed.",
        action: [
          "Built the main agent flow on n8n with instant webhook reply, duplicate-message guard, AI/human mode switch, and emotion classification that routes buyers who ask for a human straight to CS.",
          "Grounded every answer with RAG over brochure PDFs (98 chunks in pgvector with Gemini embeddings), so specs, prices, and installments come from official documents instead of hallucinations.",
          "Equipped the agent with tools: keyword-matched unit photo sender, survey booking via Google Calendar recorded to the CRM sheet, KPR annuity simulation delivered as PDF over WhatsApp, and automatic lead scoring (hot/warm/cold, 0-100) with per-number chat memory.",
          "Automated the full lead lifecycle: H+1/H+2 follow-ups, survey reminders 2 hours before, a daily report for the manager, and a centralized error handler with retries on external calls.",
        ],
        result:
          "A complete WhatsApp sales pipeline on autopilot: instant brochure-accurate answers, faster survey bookings, no lead left behind, and human CS only stepping in where truly needed. Verified live answering specs and installments end to end.",
      },
    },
    {
      title: "Lenta AI Operations System",
      badge: "AI Agent & Business Automation",
      image: "/assets/project/Lenta AI/1.png",
      images: [
        "/assets/project/Lenta AI/1.png",
        "/assets/project/Lenta AI/2.png",
        "/assets/project/Lenta AI/3.png",
        "/assets/project/Lenta AI/4.png",
        "/assets/project/Lenta AI/5.png",
      ],
      summary:
        "A WhatsApp AI assistant that runs customer service and stock management for a water and gas delivery business, plus a dashboard for the owner.",
      stack: ["n8n", "Supabase", "OpenRouter", "AI Agent", "Tool Calling", "Next.js"],
      link: "https://github.com/FaarisKhairrudin/lenta-ai-operations-system",
      type: "AI Automation",
      categories: ["Featured", "AI Automation"],
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
          "Illegal gold mining (PETI) causes deforestation and environmental damage across Jambi and Central Kalimantan, but monitoring vast remote areas on foot is impractical.",
        task: "Build a multi-year satellite ML pipeline that maps PETI expansion from 2022 to 2025 and delivers clean spatial data for an interactive monitoring map.",
        action: [
          "Fused optical and SAR radar satellite imagery at province scale in Google Earth Engine and trained a Random Forest classifier for mine detection.",
          "Engineered hybrid spatial filters (water bodies, roads, seasonal farmland, settlements) that removed tens of thousands of hectares of false positive noise.",
          "Ran year by year trend analysis (2022-2025) to map expansion, fragmentation, and shifting mining areas in both provinces.",
          "Exported the final spatial dataset as Shapefiles for integration into the PETI Map web monitoring platform.",
        ],
        result:
          "Achieved 98.88% F1 in Central Kalimantan and 90.88% F1 in Jambi, supporting a Telkom University research effort with measured, map-ready results.",
      },
    },
    {
      title: "Crowd Detection & Counting",
      badge: "Hology 8.0 - Data Mining Track",
      image: "/assets/project/crowd-detection-counting.webp",
      summary:
        "Density-based crowd counter for packed venues and public spaces. Estimates headcount where standard detectors fail on occlusion.",
      stack: ["PyTorch", "CSRNet", "VGG-16", "Albumentations"],
      link: "https://github.com/Frenwin/Hology-8.0-Crowd-Detection",
      type: "Computer Vision",
      categories: ["AI & Deep Learning"],
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
        "Face liveness check for biometric systems. Blocks photo, video, and mask spoofing before it reaches authentication.",
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
      categories: ["Data Engineering & Analytics"],
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
        "Daily air quality early warning for Jakarta. Forecasts the ISPU category days ahead so residents and agencies act before the bad air day, not after.",
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
        "Deposit propensity scorer for bank marketing teams. Ranks who is most likely to subscribe so outreach budget goes to the right customers.",
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
      badge: "Capstone Project, Telkom University",
      image: "/assets/project/Narapangan.png",
      summary:
        "An end-to-end AI system predicting commodity food prices 4 weeks ahead in Bandung and turning forecasts into prescriptive procurement advice for F&B MSMEs via Gemini 2.5 Flash.",
      stack: [
        "Python",
        "NeuralForecast",
        "N-BEATSx",
        "Gemini 2.5 Flash",
        "Playwright",
        "React",
        "Recharts",
        "SQLite",
      ],
      link: "https://github.com/FaarisKhairrudin/Prescriptive-food-price-intelligence",
      type: "Forecasting & GenAI",
      categories: ["Featured", "Forecasting & Machine Learning", "AI & Deep Learning"],
      star: {
        situation:
          "F&B MSMEs in Bandung struggle with volatile commodity prices (chili, shallots, garlic, eggs), where procurement guesswork directly cuts profit margins.",
        task: "Build an end-to-end system that automates daily market & weather ingestion, forecasts prices 4 weeks ahead, and provides actionable procurement advice using LLMs.",
        action: [
          "Built automated daily pipelines using Playwright (PIHPS market prices) and NASA POWER API (Garut weather), plus Hijri holiday calendar features.",
          "Engineered exogenous climate lags: found 8-week temperature and 13-week humidity lags strongly correlate with Bandung price dynamics.",
          "Benchmarked 5 deep time-series models: N-BEATSx achieved best accuracy (MAE Rp 3,030, MAPE 6.33%) and N-HiTS achieved 93.3% Directional Accuracy.",
          "Integrated Gemini 2.5 Flash to generate plain-language price fluctuation drivers and personalized procurement schedules based on MSME capacity.",
          "Engineered an interactive AI Consultation Chat with domain guardrails and fallback chains, served through a Python REST API and React 19 dashboard.",
        ],
        result:
          "Delivered a production-ready AI pipeline combining deep time-series forecasting, climate exogenous features, and Generative AI to optimize food procurement for MSMEs.",
      },
    },
    {
      title: "COPPA Violation Detection",
      badge: "FindIT UGM - Data Science Track",
      image: "/assets/project/COPPA-Violation-Detection.png",
      summary:
        "COPPA risk screener for kids apps. Flags privacy violating data collection from app metadata to help regulators and parents act early.",
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
      badge: "100% Automated Reconciliation",
      image: "/assets/project/financial-doc-extraction.webp",
      summary:
        "Reads invoices from your inbox, extracts the details with AI, and files them into a spreadsheet automatically, so nobody types invoice data by hand.",
      stack: ["n8n", "Gemini 2.5 Flash", "Gmail", "Google Drive", "Google Sheets", "Telegram"],
      link: "",
      type: "AI Automation",
      categories: ["AI Automation"],
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
      badge: "Self-Updating Money Tracker",
      image: "/assets/project/personal-finance-ai.webp",
      summary:
        "Reads your bank transaction emails and categorizes spending automatically with AI, so personal bookkeeping stays tidy without manual entry.",
      stack: ["n8n", "DeepSeek LLM", "Gmail", "Telegram", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["AI Automation"],
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
      badge: "Auto Debt Collection Bot",
      image: "/assets/project/invoice-debt-collector.webp",
      summary:
        "Chases unpaid invoices automatically on WhatsApp and email, politely and on schedule, so cash flow stays healthy without nagging clients by hand.",
      stack: ["n8n", "Gmail", "GOWA", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["AI Automation"],
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
      badge: "Hyper-Personalized Outreach Engine",
      image: "/assets/project/b2b-lead-generator.webp",
      summary:
        "Finds high-quality B2B prospects from a single keyword, researches each one with AI, and drafts personalized cold outreach ready to send.",
      stack: ["n8n", "Apify", "DeepSeek LLM", "Telegram", "GOWA", "Google Sheets"],
      link: "",
      type: "AI Automation",
      categories: ["AI Automation"],
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
      period: "Mar 2026 - Jun 2026",
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
