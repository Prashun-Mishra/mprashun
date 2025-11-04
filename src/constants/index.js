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
      "I build fast, modern, and scalable web apps with clean engineering, strong backend architecture, and smooth UI/UX. From SaaS platforms to dashboards — I deliver products built to convert and scale.",
    items: [
      { title: "Backend Engineering", description: "(Node.js, Express, REST APIs, Microservices)" },
      { title: "Frontend Development", description: "(React, Next.js, Tailwind, Interactive UI/UX)" },
      { title: "Database Architecture", description: "(PostgreSQL, MongoDB, Redis, Optimized Queries)" },
    ],
  },
  {
    title: "AI Integration & Automation",
    description:
      "I integrate AI into business workflows — boosting productivity, automating tasks, and creating smart user experiences.",
    items: [
      { title: "LLM Integration", description: "(OpenAI, ChatGPT workflows, AI chatbots)" },
      { title: "Automation & AI Tools", description: "(Custom AI assistants, knowledge bots, APIs)" },
      { title: "LLM Fine-Tuning", description: "(Domain-specific training and prompt engineering)" },
    ],
  },
  {
    title: "DevOps & Cloud Deployment",
    description:
      "Secure & scalable deployments with CI/CD automation, containerization, and cloud platforms — ensuring smooth performance, uptime, and growth.",
    items: [
      { title: "CI/CD Pipelines", description: "(GitHub Actions, Docker, Deployment automation)" },
      { title: "Server Management", description: "(Linux, Nginx, Load balancing)" },
      { title: "Cloud Hosting", description: "(Vercel, Render, AWS, Hostinger, Netlify)" },
    ],
  },
  {
    title: "Mobile & Modern Web Apps",
    description:
      "I create responsive and engaging apps with clean design, fast performance, and modern user experience — whether mobile or web.",
    items: [
      { title: "Cross-Platform Apps", description: "(React Native, Expo)" },
      { title: "PWAs", description: "(Offline apps, Push notifications, Web install)" },
      { title: "E-Commerce Systems", description: "(Payments, carts, orders, dashboards, inventory)" },
    ],
  },
];




export const projects = [

  {
  id: 1,
  name: "Prepwise – AI Mock Interview Platform",
  description:
    "AI-powered mock interview platform with real-time voice conversations, instant feedback, and smart question generation. Users practice interviews with AI voice agents, track sessions, and get structured improvement insights.",
  href: "https://github.com/Prashun-Mishra/ai_mock_interviews",
  image: "/assets/projects/prepwise.jpg", // replace with your preview image
  // bgImage: "/assets/backgrounds/ai.jpg",
  bgImage: "/assets/backgrounds/blanket.jpg",
  frameworks: [
    { id: 1, name: "Next.js" },
    { id: 2, name: "Firebase" },
    { id: 3, name: "TailwindCSS" },
    { id: 4, name: "Vapi AI" },
    { id: 5, name: "Google Gemini" },
  ],
},

  {
  id: 2,
  name: "Magic Social AI – AI Content Automation Platform",
  description:
    "An AI-powered social media assistant that generates content, manages posts, and provides performance insights. Built with Next.js, Prisma, and Gemini AI — includes dashboards, content editor, AI prompts, subscription system, and smart posting workflows.",
  href: "https://github.com/Prashun-Mishra", // update if you push it live
  image: "/assets/projects/magic-social-ai.jpg", // add screenshot
  // bgImage: "/assets/backgrounds/ai-dashboard.jpg",
  bgImage: "/assets/backgrounds/curtains.jpg",
  frameworks: [
    { id: 1, name: "Next.js 14" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Prisma + PostgreSQL" },
    { id: 4, name: "Clerk Auth" },
    { id: 5, name: "Google Gemini AI" },
    { id: 6, name: "Stripe Billing" },
  ],
},

 {
  id: 3,
  name: "BITBOOK – Community Blog Platform",
  description:
    "A campus-focused blogging platform where students can publish posts, share ideas, and collaborate. Features secure auth, rich content posting, user feeds, and real-time interactions — built to encourage student-driven knowledge sharing.",
  href: "https://github.com/Prashun-Mishra/BITBook",
  image: "/assets/projects/bitbook.jpg",
  // bgImage: "/assets/backgrounds/office.jpg",
  bgImage: "/assets/backgrounds/map.jpg",
  frameworks: [
    { id: 1, name: "MongoDB" },
    { id: 2, name: "Express" },
    { id: 3, name: "HTML5" },
    { id: 4, name: "CSS3" },
    { id: 5, name: "JS" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "JWT Auth" },
  ],
},

   {
    id: 4,
    name: "Lumen – EV Charging Locator",
    description:
      "EV charging station finder with real-time availability and booking. Integrated Here Maps + OpenCharge API, user auth, and live location tracking.",
    href: "https://github.com/Prashun-Mishra/Lumen",
    image: "/assets/projects/lumen.jpg", 
    // bgImage: "/assets/backgrounds/map.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "Express" },
      { id: 3, name: "HTML5" },
      { id: 4, name: "CSS3" },
      { id: 5, name: "JS" },
      { id: 6, name: "Node.js" },
      { id: 7, name: "Rest API" },
    ],
  },

  {
  id: 5,
  name: "AI ProctorGuard – Real-Time AI Video Proctoring System",
  description:
    "A real-time AI-powered proctoring system for online interviews and exams. Detects cheating behavior like face absence, multiple persons, object usage, and gaze deviation, with automated integrity scoring and detailed violation reports.",
  href: "https://github.com/Prashun-Mishra/video-proctoring-system",
  image: "/assets/projects/ai-proctor.jpg", // replace with your screenshot
  // bgImage: "/assets/backgrounds/security.jpg",
  bgImage: "/assets/backgrounds/table.jpg",
  frameworks: [
    { id: 1, name: "Node.js" },
    { id: 2, name: "Express" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "TensorFlow.js" },
    { id: 5, name: "Socket.io" },
    { id: 6, name: "WebRTC" },
  ],
},

 {
  id: 6,
  name: "Mini-Spotify – Web Music Player",
  description:
    "A browser-based music player inspired by Spotify, allowing users to play, pause, and navigate songs with a clean UI and smooth player controls. Focused on core music playback functionality and UI interactions.",
  href: "https://github.com/Prashun-Mishra/SpotifyClone",
  image: "/assets/projects/spotify-clone.jpg", // add screenshot
  // bgImage: "/assets/backgrounds/music.jpg",
  bgImage: "/assets/backgrounds/curtains.jpg",
  frameworks: [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Audio API" },
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