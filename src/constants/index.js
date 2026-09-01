// // index.js
// export const servicesData = [
//   {
//     title: "FullStack Development",
//     description:
//       "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
//     items: [
//       {
//         title: "Backend Engineering",
//         description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
//       },
//       {
//         title: "Frontend Excellence",
//         description: "(React, Vue, TypeScript, Interactive UI/UX)",
//       },
//       {
//         title: "Database Design",
//         description: "(SQL/NoSQL Optimization, Scalable Structures)",
//       },
//     ],
//   },
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       {
//         title: "Server Management ",
//         description: "(Linux, Nginx, Load Balancing)",
//       },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression, Lighthouse 90+ Scores)",
//       },
//     ],
//   },
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   {
//     title: "Web & Mobile Apps",
//     description:
//       "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
//     items: [
//       {
//         title: "Cross-Platform Apps",
//         description: "(Single codebase for iOS/Android/Web)",
//       },
//       {
//         title: "PWAs",
//         description: "(Offline mode, Push Notifications)",
//       },
//       {
//         title: "E-Commerce",
//         description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//       },
//     ],
//   },
// ];
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I build fast, modern, and scalable web apps with clean architecture, robust state management, and seamless UI/UX. From SaaS platforms to interactive dashboards — engineered for performance and conversion.",
    items: [
      { title: "Frontend Engineering", description: "(React 18/19, Next.js 15, TypeScript, Tailwind CSS, Zustand)" },
      { title: "Backend & API Design", description: "(Node.js, Express, RESTful APIs, JWT Auth, Microservices)" },
      { title: "Database Architecture", description: "(PostgreSQL, MongoDB, Prisma ORM, Mongoose, Redis)" },
    ],
  },
  {
    title: "Agentic AI & RAG Systems",
    description:
      "I design intelligent, context-grounded AI solutions — from autonomous agent workflows to private local-first RAG pipelines with source citations and embeddings.",
    items: [
      { title: "Retrieval-Augmented Generation", description: "(Pinecone Vector DB, Gemini Embeddings, Document Chunking)" },
      { title: "Local & Cloud LLMs", description: "(Local Ollama, Google Gemini 2.5/3.6, LLaMA 3.3 Groq, OpenAI)" },
      { title: "Agentic Workflows", description: "(5-stage AI pipelines, Tool Calling, Autonomous Agents)" },
    ],
  },
  {
    title: "Backend & API Optimization",
    description:
      "High-throughput backend engineering with optimized database queries, containerized microservices, and rock-solid security implementations.",
    items: [
      { title: "Performance Tuning", description: "(Query optimization, Caching, 35%+ latency reduction)" },
      { title: "Authentication & Security", description: "(JWT, NextAuth.js, Bcrypt, Role-Based Access Control, CORS)" },
      { title: "Document & Media Pipelines", description: "(Multer, PDF extraction, OCR Tesseract, Sharp processing)" },
    ],
  },
  {
    title: "DevOps & Cloud Deployment",
    description:
      "Streamlined containerization, continuous integration, and dependable cloud deployments ensuring maximum uptime and effortless scalability.",
    items: [
      { title: "Containerization", description: "(Docker, Multi-stage builds, Environment isolation)" },
      { title: "CI/CD & Version Control", description: "(GitHub Actions, Git workflows, Automated deployments)" },
      { title: "Cloud Hosting", description: "(Vercel, Render, AWS, MongoDB Atlas, Hostinger)" },
    ],
  },
];




export const projects = [

  {
    id: 1,
    name: "College-RAG-AI – Intelligent Assistant Platform",
    description:
      "An intelligent, production-ready Retrieval-Augmented Generation (RAG) college assistant platform. Students ask natural language questions and receive accurate, context-grounded answers extracted strictly from official college documents with precise source citations, page numbers, and relevance metrics.",
    href: "https://github.com/Prashun-Mishra/College-RAG-AI",
    image: "/assets/projects/CollegeRagAI.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js 15" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Pinecone DB" },
      { id: 4, name: "Gemini AI" },
      { id: 5, name: "Node / Express" },
      { id: 6, name: "MongoDB" },
    ],
  },
  {
    id: 2,
    name: "RakshAI – AI-Powered Emergency Response",
    description:
      "An intelligent, real-time emergency triage and first-aid response platform designed to assist users during critical first minutes of a medical emergency. Powered by Google Gemini 2.5/2.0 Flash, RakshAI assesses urgent situations, analyzes visible injury photos, locates nearby emergency services, and generates downloadable PDF clinical summary reports.",
    href: "https://github.com/Prashun-Mishra/RakshAI",
    image: "/assets/projects/RakshAI.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js 15" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Gemini Vision" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Google Places" },
    ],
  },

  {
    id: 3,
    name: "NeuroFlow AI – Agentic Document Intelligence",
    description:
      "A robust, local-first document intelligence workspace built on the MERN stack. Features isolated workspaces, multi-format document processing (PDF, DOCX, CSV, OCR), and a 5-stage agentic RAG pipeline powered by local Ollama with deterministic offline fallback.",
    href: "https://github.com/Prashun-Mishra/NeuroFlow-",
    image: "/assets/projects/NeuroFlowAI.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React 18 (Vite)" },
      { id: 2, name: "Node / Express" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Local Ollama" },
      { id: 5, name: "Agentic RAG" },
      { id: 6, name: "TanStack Query" },
    ],
  },
  {
    id: 4,
    name: "BuildIt — AI-Powered Web App Builder",
    description:
      "An elite full-stack AI website builder that transforms natural language prompts into stunning, production-ready web applications. Powered by Google Gemini AI and MERN stack with live preview, custom code editing, and full authentication.",
    href: "https://build-it-ai-powered-web-app-builder.vercel.app/",
    image: "/assets/projects/Built-It.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node / Express" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Google GenAI" },
      { id: 5, name: "Lenis Scroll" },
      { id: 6, name: "Vercel / Render" },
    ],
  },

  {
    id: 5,
    name: "Professor Oak Dev Mentor — AI Coding Chatbot",
    description:
      "An AI-powered developer mentorship chatbot with a retro Pokémon FireRed/LeafGreen aesthetic. Chat with Professor Oak — a wise, playful mentor who guides you through DSA, Web Development, project building, and career growth. Built with Next.js 16, Groq (LLaMA 3.3 70B), custom pixel-art UI, typewriter animations, retro 8-bit sound effects, and a trainer XP progression system.",
    href: "https://professor-oak-lab-your-developer-mentor-8n50wq54z.vercel.app/",
    image: "/assets/projects/Professor-Oak.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js 16" },
      { id: 2, name: "LLaMA 3.3 70B" },
      { id: 3, name: "Groq AI" },
      { id: 4, name: "Tailwind CSS v4" },
      { id: 5, name: "Web Audio API" },
      { id: 6, name: "Vercel" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/mprashun" },
  {
    name: "Twitter",
    href: "https://x.com/mishraprashun47",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prashun-mishra-b98b9724b/" },
  { name: "GitHub", href: "https://github.com/Prashun-Mishra" },
];

export const experiences = [
  {
    id: 1,
    role: "Backend Development Intern (API Development)",
    company: "Yahweh Software Solutions",
    location: "Bangalore, Remote",
    period: "05/2025 – 09/2025",
    type: "Internship",
    description:
      "Engineered and optimized high-scale RESTful APIs for ERP modules. Reduced backend response time by 35% via PostgreSQL query indexing, connection pooling, and refined endpoint architecture. Containerized backend microservices using Docker to ensure deployment consistency and high test coverage across remote environments.",
    highlights: [
      "Optimized PostgreSQL queries & REST API design to achieve 35% faster response times",
      "Containerized core backend services with Docker for scalable, seamless staging & deployment",
      "Collaborated on enterprise ERP module integrations with robust error handling and JWT authentication",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Docker", "Git", "Postman"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "2025",
    badge: "Leadership & Strategy",
    description: "Practical digital leadership, problem-solving, structured business communication, and agile adaptability in fast-paced tech environments.",
  },
  {
    id: 2,
    title: "NextWave CCBP 4.0 Academy",
    issuer: "NextWave",
    date: "2024",
    badge: "Full-Stack & DSA",
    description: "Comprehensive software engineering curriculum covering industry-standard Full-Stack development, advanced Data Structures & Algorithms, and modern React patterns.",
  },
  {
    id: 3,
    title: "Google AI Essentials V1",
    issuer: "Coursera / Google",
    date: "2024",
    badge: "Generative AI",
    description: "Core fundamentals of Generative AI, LLM prompting paradigms, AI workflow automation, and ethical/responsible AI application design.",
  },
  {
    id: 4,
    title: "Summer Analytics 2025 Capstone",
    issuer: "IIT Guwahati",
    date: "2025",
    badge: "Machine Learning",
    description: "End-to-end Machine Learning model development, exploratory data analysis, predictive pipelines, and real-world data science applications.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Tech Club Coordinator",
    organization: "Bhilai Institute of Technology",
    date: "12/2024",
    tag: "Leadership",
    description: "Led the official institute technical community, orchestrated hackathons, coding bootcamps, and technical workshops mentoring over 200+ engineering students in web development and software engineering.",
  },
  {
    id: 2,
    title: "Top 30 Innovator",
    organization: "Hack The Space 2.0",
    date: "12/2023",
    tag: "National Hackathon",
    description: "Selected among the top 30 innovative solutions nationwide out of hundreds of competing developer teams for building a high-impact technology product under rapid 36-hour sprint conditions.",
  },
];