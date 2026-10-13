/* =========================================================
   RESUME MASTER DATA  —  edit this file only
   ========================================================= */
const RESUME = {
  contact: {
    name: "Anirudh Parameswaran",
    tagline: "M.Sc. Data Science · Machine Learning for Complex Dynamical Systems",
    location: "Dortmund, Germany",
    email: "anirudhparameswaran@gmail.com",
    links: [
      { label: "linkedin.com/in/anirudhparameswaran", url: "https://linkedin.com/in/anirudhparameswaran" },
      { label: "github.com/anirudhparameswaran",     url: "https://github.com/anirudhparameswaran" },
      { label: "anirudhparameswaran.me",             url: "http://anirudhparameswaran.me/" }
    ],
    languages: "German (B1) · English (Fluent)",
    pdf: "" // e.g. "files/Anirudh_Parameswaran_CV.pdf" — leave "" to hide
  },

  summary: {
    heading: "Profile",
    text: "Data scientist and ML researcher moving from applied modelling toward methodological research. " +
          "Nearly four years building simulation, forecasting, routing and geospatial decision systems for " +
          "large operational networks, now specialising in simulation-based inference, deep learning and " +
          "uncertainty quantification. Core interest: making models trustworthy when the data describing " +
          "the real system is sparse, multi-scale or incomplete."
  },

  skills: {
    heading: "Technical Skills",
    groups: [
      { group: "Machine Learning",   items: ["PyTorch", "Deep Learning", "Deep RL", "Transfer Learning", "Graph Analysis", "XGBoost", "Scikit-learn"] },
      { group: "Probabilistic / SBI", items: ["BayesFlow", "Simulation-Based Inference", "Gaussian Processes", "Uncertainty Quantification", "Design of Experiments"] },
      { group: "Simulation",          items: ["Discrete-Event Simulation", "NVIDIA Isaac Sim", "Cosmos World Models", "FEM Surrogates", "Digital Twins"] },
      { group: "NLP / LLM",           items: ["BERT fine-tuning", "LangGraph", "Agentic RAG", "spaCy", "BERTopic", "LLM Evaluation"] },
      { group: "Data Engineering",    items: ["Python", "SQL", "AWS", "Pandas", "Neo4j", "SQLAlchemy", "R"] },
      { group: "Geospatial & BI",     items: ["OpenStreetMap", "Vehicle Routing", "Looker Studio", "Time Series (SARIMAX)"] }
    ]
  },

  experience: {
    heading: "Experience",
    items: [
      {
        company: "Fraunhofer IMS",
        role: "Master Thesis Researcher",
        date: "Jul 2026 – Feb 2027",
        location: "Duisburg, Germany",
        bullets: [
          "Ongoing thesis <em>“Fail2Learn”</em>: fine-tuning VLA policy representations using failure-seeded synthetic datasets generated via physics-based world models.",
          "Engineered a scalable synthetic data generation pipeline synthesising multimodal video and robot action trajectories, reducing costly real-world data collection overhead.",
          "Built virtual simulation workflows and digital-twin evaluation pipelines to validate robotic control policies against synthetic disturbance data, correlating simulation metrics with physical test trajectories.",
          "Fine-tuned Franka Emika Panda manipulation policies on failure-seeded episodes generated with NVIDIA Cosmos in Isaac Sim and validated on physical hardware, closing the sim-to-real gap."
        ]
      },
      {
        company: "Data Annotation Tech",
        role: "AI Engineer (Contract)",
        date: "May 2026 – Jul 2026",
        location: "Remote",
        bullets: [
          "Engineered adversarial prompt suites to red-team frontier LLMs, evaluating code generation across large repositories to identify and mitigate reasoning failure modes.",
          "Evaluated multi-turn reasoning, autonomous planning trajectories and context retention across state-of-the-art LLMs, RAG architectures and agent frameworks.",
          "Designed evaluation benchmarks, quality metrics and safety rubrics for LLM outputs and agent trajectories, establishing structured governance standards for production deployment."
        ]
      },
      {
        company: "Delhivery Ltd.",
        role: "Senior Business Intelligence Analyst → Data Scientist",
        date: "Nov 2021 – Aug 2024",
        location: "Hyderabad, India",
        bullets: [
          "Formulated discrete-event simulation models in Python to resolve sorting-hub bottlenecks, validating virtual runtimes against ground truth to cut linehaul transit delays by 14%.",
          "Developed a cross-functional KPI Sensitivity Playbook using lag analysis, multivariate correlation and outlier detection to model operational shock propagation from central hubs to 200+ downstream distribution centres.",
          "Architected an automated operational stress-flagging engine across national distribution centres (SQL, Python, AWS), distilling XGBoost feature importance into explainable rules and saving 5,000+ man-hours weekly.",
          "Engineered a geospatial decision engine integrating OpenStreetMap network topology, population density matrices and merchant coordinates to optimise siting of regional distribution centres and intermediate hubs.",
          "Integrated haulage weight constraints into the core vehicle routing algorithm via trip-load payload analysis, reducing cumulative linehaul trips by 15% at constant shipment volume.",
          "Constructed an NLP-driven address disambiguation pipeline using fine-tuned BERT models and fuzzy string matching, decreasing pickup dispatch trips by 30% in pilot zones.",
          "Optimised the proprietary “CatFight” SKU categorisation engine by adding Word2Vec description embeddings to downstream XGBoost classifiers, improving accuracy by 7%."
        ]
      },
      {
        company: "Octathorpe Pvt. Ltd.",
        role: "Product Analyst",
        date: "Dec 2019 – Oct 2021",
        location: "Hyderabad, India",
        bullets: [
          "Architected an A/B experimentation inference dashboard processing Google Analytics clickstream events, delivering feature optimisations that increased Day-10+ retention by 15%.",
          "Built Marketing Mix Models with Robyn (R/Python) to evaluate ad spend efficiency across digital, social and offline channels, driving budget reallocation and maximising ROAS.",
          "Conducted CAC and LTV cohort analyses across acquisition channels; increased ARPU by designing dynamic in-app promotion triggers from engagement segmentations."
        ]
      }
    ]
  },

  education: {
    heading: "Education",
    items: [
      {
        institution: "Technische Universität Dortmund",
        degree: "M.Sc. Data Science",
        date: "Oct 2024 – Apr 2027",
        location: "Dortmund, Germany",
        bullets: [
          "<strong>Academic standing:</strong> GPA 1.9; awarded Best Venture Creation Project by DLAB for an AI-powered smart-glass solution for SME warehouse operations.",
          "<strong>Coursework:</strong> Deep Learning, Deep Reinforcement Learning, Graph Analysis, Simulation-Based Inference, Natural Language Processing, Big Data Architectures.",
          "<strong>Research &amp; presentations:</strong> technical seminar on recursive reasoning dynamics (“Less is More: Recursive Reasoning with Tiny Networks”).",
          "<strong>Community:</strong> active member of the AI Grid research network; facilitated cross-institutional technical exchanges and academic seminars on neural reasoning architectures."
        ]
      },
      {
        institution: "Vellore Institute of Technology",
        degree: "B.Tech. Electronics and Computer Engineering",
        date: "Jun 2016 – Sep 2020",
        location: "Vellore, India",
        bullets: [
          "<strong>Honours:</strong> VITEEE Merit Scholarship for 5 of 8 academic semesters.",
          "<strong>Coursework:</strong> Data Structures &amp; Algorithms, Operating Systems, Distributed &amp; Cloud Computing, Mathematical Statistics.",
          "<strong>Technical leadership:</strong> AI Engineer, Technocrats Robotics — tuned PID controllers and Hough-transform vision models, adapting idealised perception algorithms to fluctuating factory lighting and physical noise."
        ]
      }
    ]
  },

  projects: {
    heading: "Selected Projects",
    items: [
      {
        title: "Amortized Bayesian Parameter Estimation in Cognitive Models",
        link: "http://anirudhparameswaran.me/bayesflow.html",
        stack: "Python · BayesFlow · PyTorch · Simulation-Based Inference",
        bullets: [
          "Formulated a Drift Diffusion Model to simulate reaction-time distributions and error rates under speed–accuracy tradeoffs.",
          "Trained BayesFlow invertible neural networks for amortized posterior recovery; identified prior-predictive coverage as the binding constraint on parameter recoverability."
        ]
      },
      {
        title: "Surrogate Modelling & Uncertainty Quantification in Solar Sails",
        link: "http://anirudhparameswaran.me/design_of_experiments.html",
        stack: "Python · Genetic Algorithms · Gaussian Process Regression · SVR",
        bullets: [
          "Engineered a GA-optimised Latin Hypercube Sampling design-of-experiments framework to emulate computationally intensive FEM simulations.",
          "Benchmarked GPR against SVR surrogates to quantify maximal stress uncertainty across sun-sail membranes, mapping regions where the surrogate is untrustworthy."
        ]
      },
      {
        title: "Autonomous Agentic RAG for Relational Databases",
        link: "",
        stack: "LangGraph · SQLAlchemy · GPT-4o · Pandas",
        bullets: [
          "Architected an autonomous SQL agent that inspects database schemas, generates multi-table queries and self-heals execution errors via reasoning loops.",
          "Built an automated reporting engine producing real-time plots and interpretive statistical summaries for non-technical stakeholders."
        ]
      },
      {
        title: "Graph-Based Narrative Modelling & Plot Similarity Engine",
        link: "https://github.com/anirudhparameswaran/Movies-Graph",
        stack: "Python · spaCy · BERTopic · Neo4j · NetworkX · Doc2Vec",
        bullets: [
          "Benchmarked Doc2Vec against BERTopic to project plot-synopsis embeddings into a shared vector space for semantic similarity discovery.",
          "Engineered a Neo4j property graph using spaCy NER to model cross-entity narrative relationships between films."
        ]
      },
      {
        title: "Computer Vision Weather Classification",
        link: "https://github.com/anirudhparameswaran/Rome-Weather-Classification",
        stack: "Python · PyTorch · Torchvision · ResNet-18",
        bullets: [
          "Extended ResNet-18 with a 256-unit dense layer and multi-class head for meteorological pattern recognition.",
          "Achieved 81.1% test accuracy — top-performing submission on the target Kaggle dataset."
        ]
      },
      {
        title: "AI-Powered Warehouse Process Optimization (PackZilla)",
        link: "",
        stack: "Python · Augmented Reality · Genetic Algorithms · OpenCV",
        bullets: [
          "Architected a human-in-the-loop AR assistive tool for SME warehouse logistics, automating barcode scanning, pick-and-put flows and GA-optimised packing layouts.",
          "Winner, Venture Creation Pitch Award, DLAB TU Dortmund."
        ]
      },
      {
        title: "Spotify Recommendation Logic & Feature Drift Analysis",
        link: "",
        stack: "Python · Spotify API · Scikit-learn · HDBSCAN · PCA · t-SNE",
        bullets: [
          "Extracted audio-feature distributions via the Spotify Web and ReccoBeats APIs to evaluate recommendation pipeline dynamics.",
          "Applied PCA/t-SNE with HDBSCAN clustering to model genre boundaries and quantify algorithmic drift from seed tracks."
        ]
      },
      {
        title: "Predictive BEV Sales Forecasting & Market Expansion",
        link: "",
        stack: "Python · SARIMAX · Time Series · Sensitivity Analysis",
        bullets: [
          "Built a SARIMAX forecasting dashboard modelling EV adoption trends under alternative policy scenarios.",
          "Conducted multivariate sensitivity analyses translating market dynamics into actionable strategic recommendations."
        ]
      }
    ]
  }
};