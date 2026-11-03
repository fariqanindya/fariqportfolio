import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Sparkles,
  BarChart3,
} from "lucide-react";

import heroPhoto from "../assets/DSC_0016.jpg";

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", "#contact");
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", "#projects");
    }
  };

  const scrollToExplore = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#F8F7F2] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:min-h-screen lg:py-0"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-[#D4A843]/5 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#16382E]/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12">
        {/* ================================= */}
        {/* LEFT SIDE - TEXT CONTENT */}
        {/* ================================= */}
        <div className="flex flex-col items-start lg:col-span-7">
          {/* MAIN HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-2 text-base font-medium text-[#777D75] sm:mb-3 sm:text-lg md:text-xl">
              Hello, I'm Fariq
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.06em] text-[#16382E] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
              Strategy
              <br />
              <span className="font-serif font-normal italic text-[#D4A843]">
                &
              </span>{" "}
              Analyst<span className="text-[#D4A843]">.</span>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-[#777D75] sm:mt-7 sm:text-base md:text-lg"
          >
            Passionate about uncovering meaningful insights through research and
            analysis. I transform complex information into clear,
            actionable strategies that drive smarter decisions and create impact.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            {/* PRIMARY CTA (SMOOTH SCROLL TO CONTACT) */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#16382E] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#245342] hover:shadow-xl hover:shadow-[#16382E]/15 sm:px-7 sm:py-4"
            >
              <Mail size={17} />
              <span>Contact Me</span>
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* SECONDARY CTA (SMOOTH SCROLL TO PROJECTS) */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#16382E]/20 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#16382E] backdrop-blur-sm transition-all duration-300 hover:border-[#16382E] hover:bg-[#16382E]/5 sm:px-7 sm:py-4"
            >
              <span>Explore My Work</span>
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* BOTTOM SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToExplore}
            className="mt-10 flex cursor-pointer items-center gap-3 sm:mt-12 lg:mt-14"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#16382E]/15 transition-transform hover:translate-y-1 sm:h-10 sm:w-10">
              <ArrowDownRight size={17} className="text-[#16382E]" />
            </div>

            <span className="text-[11px] font-semibold tracking-[0.15em] text-[#777D75] uppercase sm:text-xs">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* ================================= */}
        {/* RIGHT SIDE - PROFILE IMAGE */}
        {/* ================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-4 w-full max-w-[290px] sm:max-w-[360px] lg:col-span-5 lg:mt-0 lg:max-w-[430px]"
        >
          {/* DECORATIVE FRAME */}
          <div className="absolute -top-3 -right-3 h-full w-full rounded-[2rem] border-2 border-[#D4A843]/50 sm:-top-5 sm:-right-5 sm:rounded-[2.5rem]" />

          {/* IMAGE CONTAINER */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E8E6DC] sm:rounded-[2.5rem] shadow-xl shadow-black/5">
            <img
              src={heroPhoto}
              alt="Portrait of Fariq"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* IMAGE GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16382E]/40 via-transparent to-transparent" />

            {/* BOTTOM PHOTO LABEL */}
            <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between sm:right-6 sm:bottom-6 sm:left-6">
              <span className="text-xs font-semibold text-white sm:text-sm">
                Fariq.
              </span>

              <span className="text-[10px] tracking-wider text-white/80 uppercase sm:text-xs">
                Business Strategy & Analyst
              </span>
            </div>
          </div>

          {/* FLOATING CARD (RESPONSIVE ALIGNED) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-4 -left-2 flex items-center gap-3 rounded-2xl border border-[#E8E6DC] bg-white/95 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-md sm:-bottom-6 sm:-left-6 sm:px-5 sm:py-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-11 sm:w-11">
              <BarChart3 size={20} className="text-[#16382E]" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#16382E] sm:text-sm">
                Data-Driven
              </p>

              <p className="text-[11px] text-[#777D75] sm:text-xs">
                Business Insights
              </p>
            </div>
          </motion.div>

          {/* DECORATIVE SPARKLE */}
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-5 -left-3 text-[#D4A843] sm:-top-8 sm:-left-8"
          >
            <Sparkles size={32} strokeWidth={1.5} className="sm:h-10 sm:w-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
