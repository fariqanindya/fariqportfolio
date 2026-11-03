import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import DetailModal from "../components/DetailModal";

const categories = [
  "All Projects",
  ...new Set(projects.map((project) => project.category)),
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">

        {/* BACK LINK */}
        <Link
          to="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#777D75] transition-colors hover:text-[#16382E] sm:mb-14"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] sm:text-sm">
              PROJECTS
            </span>
            <div className="h-px w-12 bg-[#D4A843] sm:w-16" />
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.06em] text-[#16382E] sm:text-6xl md:text-7xl lg:text-8xl">
            Selected
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              Projects & Case Studies.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#777D75] sm:mt-8 sm:text-base md:text-lg">
            Explore my work across market research, business
            strategy, startup valuation, and data analytics.
            Each project represents an analytical approach and tangible business impact.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="mb-10 flex flex-wrap gap-2.5 sm:mb-12 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`
                rounded-full border px-4 py-2 text-xs font-medium sm:px-5 sm:py-2.5 sm:text-sm
                transition-all duration-300
                ${activeCategory === category
                  ? "border-[#16382E] bg-[#16382E] text-white shadow-sm"
                  : "border-[#E8E6DC] bg-white text-[#777D75] hover:border-[#16382E] hover:text-[#16382E]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT COUNT */}
        <div className="mb-8 flex items-center justify-between border-b border-[#E8E6DC] pb-4">
          <p className="text-xs text-[#777D75] sm:text-sm">
            Showing{" "}
            <span className="font-semibold text-[#16382E]">
              {filteredProjects.length}
            </span>{" "}
            case studies
          </p>

          <span className="text-[11px] tracking-widest text-[#777D75] uppercase sm:text-xs">
            Portfolio
          </span>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 rounded-[2.5rem] bg-[#16382E] px-6 py-12 text-center sm:px-12 sm:py-16 md:px-16 md:py-20">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#D4A843] uppercase sm:mb-4">
            Have a project in mind?
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's create something
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              meaningful together.
            </span>
          </h2>

          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#D4A843] px-6 py-3.5 text-sm font-semibold text-[#16382E] transition-transform hover:-translate-y-1 sm:mt-9 sm:px-7 sm:py-4"
          >
            <span>Let's Collaborate</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* UNIFIED DETAIL MODAL */}
      <DetailModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
};

export default ProjectsPage;
