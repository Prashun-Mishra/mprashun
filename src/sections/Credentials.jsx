import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { certifications, achievements } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Credentials = () => {
  const text = `Validated engineering competencies,
leadership initiatives & competitive hackathon
recognitions.`;

  const marqueeItems = [
    "Continuous Learning",
    "Technical Leadership",
    "Competitive Hackathons",
    "Industry Credentials",
    "Verified Milestones",
  ];

  const sectionRef = useRef(null);

  useGSAP(() => {
    // Divider line draw animations
    gsap.fromTo(
      ".cred-line",
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Staggered reveal for cards
    gsap.fromTo(
      ".cred-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cred-grid",
          start: "top 85%",
        },
      }
    );

    // Section header subtitles reveal
    gsap.fromTo(
      ".cred-subtitle",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="min-h-screen bg-black text-white rounded-t-4xl rounded-b-4xl pb-24 relative overflow-hidden"
    >
      <AnimatedHeaderSection
        subTitle={"Honors & Learning"}
        title={"Credentials"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Dynamic Marquee Strip */}
      <div className="my-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <Marquee
          items={marqueeItems}
          className="text-white bg-transparent text-sm uppercase tracking-[0.3em]"
        />
      </div>

      <div className="flex flex-col font-light px-10 gap-20 mt-12">
        {/* Certifications Subsection */}
        <div className="flex flex-col gap-8">
          <div className="cred-subtitle flex justify-between items-end border-b-2 border-white/30 pb-4">
            <h2 className="lg:text-[32px] text-[24px] uppercase tracking-wider text-white">
              Certifications & Programs
            </h2>
            <span className="text-xs uppercase tracking-widest text-gold hidden sm:block">
              Continuous Learning
            </span>
          </div>

          <div className="cred-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="cred-card flex flex-col border-t border-white/20 pt-5 group cursor-default transition-all duration-300 hover:border-gold/60"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-gold font-medium">
                    {cert.badge}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-light">
                    {cert.date}
                  </span>
                </div>

                <h3 className="lg:text-[26px] text-[20px] leading-snug uppercase text-white mt-2 group-hover:text-gold transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-sm uppercase tracking-widest text-white/50 mt-1">
                  Issuer: {cert.issuer}
                </p>

                <div className="w-full h-px my-3 bg-white/10 group-hover:bg-gold/30 transition-colors duration-300" />

                <p className="text-base md:text-lg text-white/60 font-light leading-relaxed tracking-wide text-pretty">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Subsection */}
        <div className="flex flex-col gap-8">
          <div className="cred-subtitle flex justify-between items-end border-b-2 border-white/30 pb-4">
            <h2 className="lg:text-[32px] text-[24px] uppercase tracking-wider text-white">
              Achievements & Leadership
            </h2>
            <span className="text-xs uppercase tracking-widest text-white/40 hidden sm:block">
              Milestones
            </span>
          </div>

          <div className="cred-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="cred-card flex flex-col border-t border-white/20 pt-5 group cursor-default transition-all duration-300 hover:border-white/60"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
                    {ach.tag}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-light">
                    {ach.date}
                  </span>
                </div>

                <h3 className="lg:text-[26px] text-[20px] leading-snug uppercase text-white mt-2 group-hover:text-white/90 transition-colors duration-300">
                  {ach.title}
                </h3>

                <p className="text-sm uppercase tracking-widest text-white/50 mt-1">
                  Organization: {ach.organization}
                </p>

                <div className="w-full h-px my-3 bg-white/10 group-hover:bg-white/30 transition-colors duration-300" />

                <p className="text-base md:text-lg text-white/60 font-light leading-relaxed tracking-wide text-pretty">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
