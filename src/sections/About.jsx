import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture & agentic AI
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I'm Prashun Mishra — a Computer Science undergraduate (B.Tech CSE '26, BIT Durg) and Full-Stack & Agentic AI Engineer.

I engineer production-ready MERN & Next.js applications, local-first RAG systems, and autonomous AI agents designed to perform reliably at scale.

Core Highlights & Work:
⚙️ Backend & API Development — Ex-Backend Intern @ Yahweh Software Solutions (optimized RESTful APIs, improved response times by 35% with PostgreSQL & Docker)
🤖 Agentic AI & RAG Pipelines — Built multi-stage document intelligence workspaces, local Ollama pipelines, and Gemini vision triage systems
🚀 Modern Full-Stack Web Apps — Next.js 15, React 18/19, TypeScript, Tailwind CSS, TanStack Query, Zustand, MongoDB & PostgreSQL
☁️ Cloud & Tooling — Docker containerization, CI/CD pipelines, Linux environments, Vercel & Render hosting

Driven by clean code, robust system design, and building software that delivers tangible impact.`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;