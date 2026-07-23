import { useState } from "react";

const links = {
  email: "mailto:shrihanvijay06@gmail.com",
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/shrihan-vijay-0b5b86313/",
  github: "https://github.com/shrihan-vijay",
};

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

const experiences = [
  {
    company: "Idea Nirvana",
    role: "AI Engineer Intern",
    period: "June 2026 – Present",
    location: "Ashburn, VA",
    logo: "/logo-idea-nirvana.png",
    skills: ["React", "FastAPI", "PostgreSQL", "Microsoft SharePoint", "LangGraph", "RAG", "MCP", "Vector Search"],
    bullets: [
      "Architected an enterprise AI-powered Learning Management System (React, FastAPI, PostgreSQL, Microsoft SharePoint) with 5+ LangGraph agents and 10+ workflow states, leveraging RAG, MCP, and vector search for personalized tutoring and onboarding",
      "Built multi-agent workflows that retrieve, reason over, and act upon 100+ enterprise documents via SharePoint MCP and PostgreSQL-backed context, producing grounded responses and adaptive assessments",
    ],
  },
  {
    company: "GuidePoint Security",
    role: "Cybersecurity Engineer Intern",
    period: "May 2026 – Present",
    location: "Remote",
    logo: "/logo-guidepoint.png",
    skills: ["Terraform", "Ansible", "Ludus", "WireGuard", "Kali Linux", "Splunk", "SOC Operations", "Network Monitoring"],
    bullets: [
      "Deployed 5 enterprise security lab environments, provisioning infrastructure with Terraform and Ansible and simulating real-world attacks via Ludus, WireGuard, and Kali Linux",
      "Administered SOC operations across a 10–25 endpoint environment, monitoring network traffic in Splunk, hardening systems, and running vulnerability assessments for threat detection and infrastructure management",
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
      "Developed Python (pandas) and SQL workflow automation systems that reduced multi-bureau approval turnaround time by 20%",
      "Improved document classification accuracy by 30% by training machine learning pipelines using scikit-learn, TF-IDF vectorization, and logistic regression models",
      "Built user-facing analytics dashboards and REST API integrations using JavaScript and SQL databases to support operational tracking tools for 40+ users",
    ],
  },
];

const projects = [
  {
    name: "HireReady",
    period: "Feb. 2026 – July 2026",
    description:
      "Full-stack AI career copilot (React, FastAPI, Supabase) integrating Groq LLM and Whisper inference behind JWT-authenticated REST/SSE APIs to deliver resume scoring and voice-transcribed interview coaching. Architected three agentic patterns, a Groq tool-calling adaptive interviewer, a concurrent fan-out job ranker, and a sequential LangGraph pipeline, integrating GitHub's MCP server and cutting job-scoring latency up to 5x. Also engineered a RAG pipeline (MiniLM embeddings, ChromaDB vector search) to ground ATS scoring and skill-gap analysis in resume-specific context, plus a full application tracking system.",
    tags: ["React", "TypeScript", "FastAPI", "Supabase", "LangGraph", "RAG", "ChromaDB", "Groq", "Whisper"],
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

type SkillUsage = { label: string; href?: string };
type SkillItem = { name: string; icon?: string; usedIn: SkillUsage[] };
type SkillGroup = { category: string; items: SkillItem[] };

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const skills: SkillGroup[] = [
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
    ],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-slate-950">
          Shrihan Vijay
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-150 hover:text-slate-950"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-slate-200 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-orange-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_65%_0%,rgba(251,146,60,0.08),transparent)]" />
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange-700">
          CS @ University of Virginia
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Shrihan Vijay
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">Graduating Dec 2027</p>
        <p className="mt-5 text-xl text-slate-700">
          Software Engineer · AI Engineer · Cybersecurity
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I build intelligent, secure software at the intersection of AI, machine learning, and
          cybersecurity. Currently interning at Idea Nirvana and GuidePoint Security while
          pursuing my BS in Computer Science at UVA.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-700"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950"
            href={links.resume}
          >
            Resume
          </a>
          <a
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[290px] md:justify-self-end">
        <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-200">
          <img
            src="/headshot.png"
            alt="Shrihan Vijay"
            className="aspect-[290/315] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About" eyebrow="Background">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <p className="text-lg font-medium leading-8 text-slate-800">
          CS student at UVA building at the intersection of AI, software engineering, and
          cybersecurity.
        </p>
        <div className="space-y-5 text-base leading-7 text-slate-600">
          <p>
            My work spans AI/ML engineering, full-stack development, and cybersecurity operations.
            I enjoy turning ambiguous technical problems into reliable systems, whether that means
            building a multi-agent RAG pipeline, training a computer vision model, or hardening
            enterprise security infrastructure.
          </p>
          <p>
            I am currently seeking Summer 2027 software engineering and AI internship opportunities
            where I can contribute to meaningful products, learn from strong engineering teams, and
            keep building at the frontier of intelligent software.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CompanyLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  if (failed) {
    return (
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600 ring-1 ring-slate-200">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className="h-12 w-12 flex-shrink-0 rounded-xl bg-white object-contain p-1 ring-1 ring-slate-200"
      onError={() => setFailed(true)}
    />
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Work">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
          >
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <CompanyLogo name={exp.company} logo={exp.logo} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{exp.company}</h3>
                  <span className="mt-1 inline-block rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                    {exp.role}
                  </span>
                </div>
              </div>
              <div className="text-right text-sm text-slate-500">
                <p className="font-medium text-slate-700">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-slate-100" />

            {/* Bullets */}
            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-6 text-slate-600">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function GitHubArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="flex-shrink-0"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" title="Projects" eyebrow="Selected Work">
      {/* Featured project */}
      <div className="mb-4">
        <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-orange-100/40 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  Featured Project
                </span>
                <h3 className="mt-1 text-2xl font-semibold text-slate-950">{featured.name}</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                {featured.period}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {featured.description}
            </p>
            {featured.demoGif && (
              <img
                src={featured.demoGif}
                alt={`${featured.name} demo walkthrough`}
                className="mt-5 w-full max-w-2xl rounded-lg border border-slate-200 shadow-sm"
              />
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-150 hover:border-slate-950 hover:text-slate-950"
                >
                  <GitHubArrow />
                  View on GitHub
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </a>
              )}
              {featured.demo && (
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-orange-700"
                >
                  Try It
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </div>

      {/* Other projects */}
      <div className="grid gap-4 md:grid-cols-2">
        {rest.map((project, i) => (
          <article
            key={project.name}
            className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="h-0.5 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {project.period}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:text-orange-700"
              >
                <GitHubArrow />
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState(skills[0].category);
  const [selected, setSelected] = useState<SkillItem | null>(null);
  const activeGroup = skills.find((s) => s.category === activeTab)!;

  function handleTabChange(cat: string) {
    setActiveTab(cat);
    setSelected(null);
  }

  function handlePillClick(skill: SkillItem) {
    if (skill.usedIn.length === 0) return;
    setSelected(selected?.name === skill.name ? null : skill);
  }

  return (
    <Section id="skills" title="Skills" eyebrow="Toolkit">
      {/* Tab strip */}
      <div className="mb-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <button
            key={s.category}
            onClick={() => handleTabChange(s.category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
              activeTab === s.category
                ? "bg-slate-950 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950"
            }`}
          >
            {s.category}
          </button>
        ))}
      </div>

      {/* Skills panel — key forces remount so stagger animation replays */}
      <div key={activeTab} className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
          {activeGroup.items.length} skills · click any to see where it was used
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {activeGroup.items.map((skill, i) => {
            const isSelected = selected?.name === skill.name;
            const hasContext = skill.usedIn.length > 0;
            return (
              <li
                key={skill.name}
                onClick={() => handlePillClick(skill)}
                className={`skill-pill flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors duration-150 ${
                  hasContext ? "cursor-pointer" : "cursor-default"
                } ${
                  isSelected
                    ? "border-orange-400 bg-orange-50 text-orange-800"
                    : hasContext
                    ? "border-slate-200 bg-slate-50 text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800"
                    : "border-slate-200 bg-slate-50 text-slate-400"
                }`}
                style={{ animationDelay: `${i * 35}ms` }}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-4 w-4 flex-shrink-0 object-contain"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
                {skill.name}
              </li>
            );
          })}
        </ul>

        {/* "Used in" callout */}
        {selected && (
          <div className="callout-in mt-5 flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Used in
            </span>
            <div className="flex flex-wrap gap-2">
              {selected.usedIn.map((u) =>
                u.href ? (
                  <a
                    key={u.label}
                    href={u.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-white px-3 py-0.5 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-50"
                  >
                    {u.label}
                    <span className="text-orange-400">→</span>
                  </a>
                ) : (
                  <span
                    key={u.label}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-0.5 text-sm font-medium text-slate-700"
                  >
                    {u.label}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Let's Talk" eyebrow="Get in Touch">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-orange-50/50 p-10">
        <p className="max-w-2xl text-lg leading-8 text-slate-700">
          I am open to Summer 2027 software engineering and AI internship opportunities,
          research collaborations, and conversations about intelligent, secure systems.
          Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-700"
            href={links.email}
          >
            shrihanvijay06@gmail.com
          </a>
          <a
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Shrihan Vijay.</p>
        <p>Built with React, TypeScript, Tailwind CSS, and Vite.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
