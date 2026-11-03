import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import DetailModal from "./DetailModal";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative flex min-h-[calc(100vh-5rem)] lg:min-h-screen flex-col justify-center overflow-hidden bg-[#F8F7F2] py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
        {/* COMPACT SECTION HEADER (RESIZED & CONSISTENT WITH ABOUT ME) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          {/* BADGE */}
          <div className="mb-2 flex items-center gap-2.5 sm:mb-3">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843]">
              PROJECTS
            </span>
            <div className="h-px w-10 bg-[#D4A843] sm:w-12" />
          </div>

          {/* HEADLINE (RESIZED TO FIT IN ONE DESKTOP SCREEN) */}
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#16382E] sm:text-3xl lg:text-4xl">
            Ideas backed by data.
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              Strategies built for impact.
            </span>
          </h2>

          {/* CAPTION */}
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#777D75] sm:text-sm">
            Translating market observations, econometric models, and consumer insights into actionable growth blueprints.
          </p>
        </motion.div>

        {/* TOP 3 FEATURED PROJECTS (RESIZED TO FIT DESKTOP VIEWPORT) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* EXPLORE ALL PROJECTS BUTTON (PLACED AFTER THE TOP 3 PROJECTS, SAME AS ABOUT ME) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 sm:mt-6"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#16382E] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#245342] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* UNIFIED DETAIL MODAL */}
      <DetailModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
