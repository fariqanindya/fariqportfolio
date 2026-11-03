import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const ProjectCard = ({ project, index = 0, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8E6DC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:shadow-lg"
    >
      {/* COMPACT IMAGE (FIXED HEIGHT TO ENSURE IT FITS ONE DESKTOP SCREEN) */}
      <div
        className="relative h-28 sm:h-32 lg:h-36 w-full overflow-hidden bg-[#16382E] cursor-pointer"
        onClick={() => onClick(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16382E]/70 via-transparent to-transparent" />

        {/* CATEGORY */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
          <span className="rounded-full border border-white/20 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-[#16382E] backdrop-blur-md sm:text-[11px]">
            {project.category}
          </span>
        </div>

        {/* YEAR */}
        <div className="absolute right-2.5 bottom-2.5 sm:right-3 sm:bottom-3">
          <span className="text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full sm:text-[11px]">
            {project.year}
          </span>
        </div>
      </div>

      {/* COMPACT CARD CONTENT */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        {/* COMPANY & TIME */}
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-wider text-[#D4A843] uppercase sm:text-[11px]">
            {project.company || `PROJECT ${String(index + 1).padStart(2, "0")}`}
          </span>

          <span className="flex items-center gap-1 text-[10px] text-[#777D75] sm:text-[11px]">
            <CalendarDays size={12} />
            {project.period || project.year}
          </span>
        </div>

        {/* TITLE */}
        <h3
          onClick={() => onClick(project)}
          className="cursor-pointer text-sm font-semibold tracking-tight text-[#16382E] transition-colors hover:text-[#D4A843] sm:text-base line-clamp-1"
        >
          {project.title}
        </h3>

        {/* ROLE */}
        <p className="mt-0.5 text-[11px] font-semibold text-[#D4A843]">
          {project.role}
        </p>

        {/* DESCRIPTION (CONCISE 2 LINES) */}
        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[#777D75] sm:text-xs">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F8F7F2] px-2 py-0.5 text-[10px] font-medium text-[#555D55]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-auto pt-2.5">
          <button
            type="button"
            onClick={() => onClick(project)}
            className="flex w-full items-center justify-between border-t border-[#E8E6DC] pt-2 text-xs font-semibold text-[#16382E] transition-colors hover:text-[#B68B2E]"
          >
            <span>View Details</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16382E] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#D4A843] group-hover:text-[#16382E]">
              <ArrowUpRight size={13} />
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
