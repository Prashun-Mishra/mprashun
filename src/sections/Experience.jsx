import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experiences } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const text = `Proven real-world engineering impact,
optimizing high-throughput backend APIs
and containerized systems at scale.`;

  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal main role header with scrub-like feel
    gsap.fromTo(
      ".exp-header",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 85%",
        },
      }
    );

    // Expand divider lines on scroll
    gsap.fromTo(
      ".exp-line",
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".exp-line",
          start: "top 85%",
        },
      }
    );

    // Staggered list items reveal
    gsap.fromTo(
      ".exp-item",
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-item-container",
          start: "top 85%",
        },
      }
    );

    // Tech badges stagger in
    gsap.fromTo(
      ".exp-tag",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".exp-tag-container",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="min-h-screen bg-black text-white rounded-b-4xl pb-24 relative overflow-hidden"
    >
      <AnimatedHeaderSection
        subTitle={"Track Record"}
        title={"Experience"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col font-light px-10 gap-16 mt-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col pt-4">
            {/* Top Divider */}
            <div className="exp-line w-full h-[2px] bg-white/30 mb-8" />

            {/* Header: Role & Period */}
            <div className="exp-header flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h2 className="lg:text-[38px] text-[26px] leading-tight font-light uppercase text-white tracking-wide">
                {exp.role}
              </h2>
              <span className="text-sm md:text-base uppercase tracking-widest text-gold shrink-0">
                {exp.period}
              </span>
            </div>

            {/* Sub-header: Company & Location */}
            <div className="exp-header flex items-center gap-3 text-sm md:text-base uppercase tracking-widest text-white/60 mt-2">
              <span className="text-white/90 font-normal">{exp.company}</span>
              <span>—</span>
              <span className="text-white/40">{exp.location}</span>
            </div>

            {/* Inner Divider */}
            <div className="exp-line w-full h-px my-6 bg-white/20" />

            {/* Overview description */}
            <p className="exp-header text-xl md:text-2xl leading-relaxed tracking-wide text-white/60 font-light text-pretty max-w-5xl">
              {exp.description}
            </p>

            {/* Deliverables / Highlights list */}
            <div className="exp-item-container flex flex-col gap-5 mt-10 text-xl sm:text-2xl text-white/80 font-light">
              {exp.highlights.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="exp-item group transition-transform duration-300 hover:translate-x-3 cursor-default"
                >
                  <p className="flex items-start">
                    <span className="mr-8 md:mr-12 text-base md:text-lg text-white/30 group-hover:text-gold transition-colors duration-300 shrink-0 mt-1 font-mono">
                      0{itemIdx + 1}
                    </span>
                    <span className="leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </p>
                  {itemIdx < exp.highlights.length - 1 && (
                    <div className="w-full h-px my-4 bg-white/10" />
                  )}
                </div>
              ))}
            </div>

            {/* Tech stack items formatted with { } */}
            <div className="exp-tag-container flex flex-wrap items-center gap-x-4 gap-y-2 mt-12 text-xs md:text-sm uppercase tracking-widest text-white/40 font-light">
              <span className="text-white/60 mr-2">Core Stack:</span>
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="exp-tag hover:text-gold hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {"{ "}{tech}{" }"}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
