export const links = {
  email: "mailto:shrihanvijay06@gmail.com",
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/shrihan-vijay-0b5b86313/",
  github: "https://github.com/shrihan-vijay",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const experiences = [
  {
    company: "Idea Nirvana",
    role: "AI Engineer Intern",
    period: "June 2026 – Present",
    location: "Ashburn, VA",
    logo: "/logo-idea-nirvana.png",
    skills: ["React", "FastAPI", "PostgreSQL", "Microsoft SharePoint", "LangGraph", "RAG", "MCP", "Vector Search"],
    bullets: [
      "Architected an enterprise AI-powered Learning Management System (React, FastAPI, PostgreSQL, Microsoft SharePoint) with 5+ LangGraph agents and 10+ workflow states, leveraging RAG, MCP, and vector search for personalized tutoring and onboarding",
      "Engineered RAG chunking and embedding pipelines with agent-to-agent handoff logic, grounding responses in 100+ enterprise documents via SharePoint MCP connectors to power role-based adaptive learning paths",
      "Built scalable FastAPI backend services and REST APIs to orchestrate multi-agent workflows and PostgreSQL-backed learner state, cutting end-to-end API latency 30% through performance optimizations",
      "Authored technical documentation and system diagrams for the multi-agent architecture, partnering with product and engineering stakeholders to translate feature requirements into implementation specs",
    ],
  },
  {
    company: "GuidePoint Security",
    role: "Cybersecurity Engineer Intern",
    period: "May 2026 – Present",
    location: "Remote",
    logo: "/logo-guidepoint.png",
    skills: ["Terraform", "Ansible", "Ludus", "WireGuard", "Kali Linux", "Splunk", "Nessus", "SOC Operations", "Network Monitoring"],
    bullets: [
      "Automated deployment of 5 enterprise SOC lab environments with Terraform and Ansible, cutting environment setup time 70% and improving deployment consistency",
      "Configured and operated 10–25 endpoint environments across Windows and Linux systems with centralized Splunk telemetry for security monitoring and threat detection",
      "Ran attack simulations (Ludus, WireGuard, Kali Linux) and Nessus vulnerability assessments to identify security gaps and validate system hardening",
    ],
  },
  {
    company: "U.S. Department of the Treasury",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug. 2023",
    location: "Washington, D.C.",
    logo: "/logo-treasury.png",
    skills: ["Python", "pandas", "SQL", "scikit-learn", "JavaScript", "REST APIs", "Machine Learning", "TF-IDF Vectorization"],
    bullets: [
      "Built a Python (pandas) workflow-routing script and optimized SQL queries to prioritize approval requests by urgency and analyst workload, cutting average request turnaround time 20% across multiple bureaus",
      "Improved document classification accuracy by 30% by training machine learning pipelines using scikit-learn, TF-IDF vectorization, and logistic regression models",
      "Built user-facing analytics dashboards and REST API integrations using JavaScript and SQL databases to support operational tracking tools for 40+ users",
    ],
  },
];

export const projects = [
  {
    name: "HireReady",
    period: "Feb. 2026 – July 2026",
    description:
      "Full-stack AI career copilot (React, FastAPI, Supabase) integrating Groq LLM and Whisper inference behind JWT-authenticated REST/SSE APIs to deliver resume scoring and voice-transcribed interview coaching. Architected three agentic patterns, a Groq tool-calling adaptive interviewer, a concurrent fan-out job ranker, and a sequential LangGraph pipeline, integrating GitHub's MCP server and cutting job-scoring latency up to 5x. Also engineered a RAG pipeline (MiniLM embeddings, Supabase pgvector search) to ground ATS scoring and skill-gap analysis in resume-specific context, plus a full application tracking system.",
    tags: ["React", "TypeScript", "FastAPI", "Supabase", "LangGraph", "RAG", "pgvector", "Groq", "Whisper"],
    github: "https://github.com/shrihan-vijay/hire-ready",
    demo: "https://hire-ready-sable-pi.vercel.app",
    demoGif: "/hireready-demo.gif",
    featured: true,
  },
  {
    name: "CodeCartographer",
    period: "May 2026 – Present",
    description:
      "Static-analysis and semantic-search tool that constructs symbol/call graphs across Python and TypeScript repos (tree-sitter, recursive-CTE queries in Postgres) and AST-aware semantic chunks (pgvector embeddings), indexing 200+ symbols and 500+ call/import/contains edges per repo in under 2 seconds. Serves cited natural-language Q&A through an agentic retrieval layer (Ollama/Llama 3.1, FastAPI) that autonomously chains graph and vector-search tool calls, grounding every answer in 180+ indexed chunks with symbol-level citations, all running locally with no paid API. Also ships a Chrome side-panel extension as a second client on the same FastAPI backend.",
    tags: ["Python", "TypeScript", "tree-sitter", "PostgreSQL", "pgvector", "FastAPI", "Ollama"],
    github: "https://github.com/shrihan-vijay/codecartographer",
    featured: false,
  },
  {
    name: "Audia",
    period: "Nov. 2025 – May 2026",
    description:
      "Full-stack social music discovery platform (React, Node.js, Express, Firebase) with 29 RESTful endpoints across 4 services for discovery, forums, and messaging. Integrated Spotify OAuth and the Spotify Web API for personalized discovery features, backed by 28 automated tests ensuring reliability across core services.",
    tags: ["React", "Node.js", "Express", "Firebase", "Spotify API", "REST APIs"],
    github: "https://github.com/shrihan-vijay/audia",
    featured: false,
  },
  {
    name: "Deep Learning Pneumonia Detection",
    period: "June 2023 – July 2023",
    description:
      "Computer vision research pipeline using CNNs, TensorFlow, and Keras to analyze 1,000+ chest X-ray images with 95% diagnostic accuracy. Applied transfer learning across 200+ pretrained models to improve reliability, generalization, and classification performance.",
    tags: ["Python", "TensorFlow", "Keras", "CNNs", "Transfer Learning", "Computer Vision"],
    github: null,
    featured: false,
  },
];

export type SkillUsage = { label: string; href?: string };
export type SkillItem = { name: string; icon?: string; usedIn: SkillUsage[] };
export type SkillGroup = { category: string; items: SkillItem[] };

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      {
        name: "Python",
        icon: `${DI}/python/python-original.svg`,
        usedIn: [
          { label: "U.S. Treasury" },
          { label: "Pneumonia Detection" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "Java",
        icon: `${DI}/java/java-original.svg`,
        usedIn: [],
      },
      {
        name: "SQL",
        usedIn: [
          { label: "U.S. Treasury" },
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
        ],
      },
      {
        name: "JavaScript",
        icon: `${DI}/javascript/javascript-original.svg`,
        usedIn: [{ label: "U.S. Treasury" }],
      },
      {
        name: "TypeScript",
        icon: `${DI}/typescript/typescript-original.svg`,
        usedIn: [
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "Audia", href: "https://github.com/shrihan-vijay/audia" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      {
        name: "OpenAI",
        icon: `${SI}/openai`,
        usedIn: [{ label: "Idea Nirvana" }],
      },
      {
        name: "Claude",
        icon: `${SI}/anthropic`,
        usedIn: [{ label: "Idea Nirvana" }],
      },
      {
        name: "LLMs",
        usedIn: [
          { label: "Idea Nirvana" },
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "Ollama",
        icon: `${SI}/ollama`,
        usedIn: [{ label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" }],
      },
      {
        name: "Embeddings",
        usedIn: [
          { label: "Idea Nirvana" },
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "Vector Search",
        usedIn: [
          { label: "Idea Nirvana" },
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "Prompt Engineering",
        usedIn: [{ label: "Idea Nirvana" }],
      },
      {
        name: "Retrieval-Augmented Generation",
        usedIn: [
          { label: "Idea Nirvana" },
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
        ],
      },
      {
        name: "Model Context Protocol",
        usedIn: [{ label: "Idea Nirvana" }],
      },
      {
        name: "AI Agents",
        usedIn: [
          { label: "Idea Nirvana" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "TensorFlow",
        icon: `${DI}/tensorflow/tensorflow-original.svg`,
        usedIn: [{ label: "U.S. Treasury" }, { label: "Pneumonia Detection" }],
      },
      {
        name: "scikit-learn",
        icon: `${SI}/scikitlearn`,
        usedIn: [{ label: "U.S. Treasury" }],
      },
      {
        name: "CNNs",
        usedIn: [{ label: "Pneumonia Detection" }],
      },
    ],
  },
  {
    category: "Frameworks & Databases",
    items: [
      {
        name: "React",
        icon: `${DI}/react/react-original.svg`,
        usedIn: [
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "Audia", href: "https://github.com/shrihan-vijay/audia" },
          { label: "Idea Nirvana" },
        ],
      },
      {
        name: "FastAPI",
        icon: `${DI}/fastapi/fastapi-original.svg`,
        usedIn: [
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "Idea Nirvana" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "Express",
        icon: `${DI}/express/express-original.svg`,
        usedIn: [{ label: "Audia", href: "https://github.com/shrihan-vijay/audia" }],
      },
      {
        name: "Supabase",
        icon: `${SI}/supabase`,
        usedIn: [{ label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" }],
      },
      {
        name: "Node.js",
        icon: `${DI}/nodejs/nodejs-original.svg`,
        usedIn: [{ label: "Audia", href: "https://github.com/shrihan-vijay/audia" }],
      },
      {
        name: "Next.js",
        icon: `${DI}/nextjs/nextjs-original.svg`,
        usedIn: [],
      },
      {
        name: "REST APIs",
        usedIn: [
          { label: "U.S. Treasury" },
          { label: "Audia", href: "https://github.com/shrihan-vijay/audia" },
        ],
      },
      {
        name: "PostgreSQL",
        icon: `${DI}/postgresql/postgresql-original.svg`,
        usedIn: [
          { label: "HireReady", href: "https://github.com/shrihan-vijay/hire-ready" },
          { label: "Idea Nirvana" },
          { label: "CodeCartographer", href: "https://github.com/shrihan-vijay/codecartographer" },
        ],
      },
      {
        name: "MySQL",
        icon: `${DI}/mysql/mysql-original.svg`,
        usedIn: [],
      },
      {
        name: "Firebase",
        icon: `${DI}/firebase/firebase-original.svg`,
        usedIn: [{ label: "Audia", href: "https://github.com/shrihan-vijay/audia" }],
      },
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      {
        name: "AWS",
        icon: `${SI}/amazonaws`,
        usedIn: [{ label: "Idea Nirvana" }, { label: "GuidePoint Security" }],
      },
      {
        name: "Docker",
        icon: `${DI}/docker/docker-original.svg`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Kubernetes",
        icon: `${DI}/kubernetes/kubernetes-original.svg`,
        usedIn: [{ label: "Idea Nirvana" }],
      },
      {
        name: "Git/GitHub",
        icon: `${DI}/git/git-original.svg`,
        usedIn: [{ label: "GitHub Profile", href: "https://github.com/shrihan-vijay" }],
      },
      {
        name: "Splunk",
        icon: `${SI}/splunk`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Ansible",
        icon: `${DI}/ansible/ansible-original.svg`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Terraform",
        icon: `${DI}/terraform/terraform-original.svg`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "JUnit",
        usedIn: [],
      },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      {
        name: "Kali Linux",
        icon: `${SI}/kalilinux`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "WireGuard",
        icon: `${SI}/wireguard`,
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "SOC Operations",
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Network Monitoring",
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Threat Detection",
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Ludus",
        usedIn: [{ label: "GuidePoint Security" }],
      },
      {
        name: "Nessus",
        usedIn: [{ label: "GuidePoint Security" }],
      },
    ],
  },
];
