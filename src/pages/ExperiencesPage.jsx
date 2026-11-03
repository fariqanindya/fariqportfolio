import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { experiences, experienceStats } from "../data/experiencesData";

const ExperiencesPage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* BACK LINK */}
        <Link
          to="/"
          className="group mb-14 inline-flex items-center gap-2 text-sm font-medium text-[#777D75] transition-colors hover:text-[#16382E]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              PORTFOLIO / EXPERIENCES
            </span>
            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#16382E] md:text-7xl lg:text-8xl">
            Professional
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              Experience & Impact.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#777D75] md:text-lg">
            A comprehensive look at my professional journey across market intelligence,
            macroeconomic analysis, ecosystem development, and data-driven partner coaching.
            Every role reflects an uncompromising commitment to strategic accuracy and organizational value.
          </p>
        </motion.div>

        {/* STATS STRIP */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-[#E8E6DC] bg-white/70 p-6 md:p-8"
            >
              <div className="mb-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-[#16382E] md:text-5xl">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-sm font-medium text-[#D4A843]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h4 className="text-base font-semibold text-[#16382E]">
                {stat.label}
              </h4>
              <p className="mt-1 text-xs text-[#777D75]">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* DETAILED EXPERIENCES LIST */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-[#E8E6DC] bg-white/80 p-8 md:p-12 transition-all duration-500 hover:border-[#D4A843]/50 hover:shadow-xl hover:shadow-[#16382E]/5"
            >
              {/* CARD HEADER */}
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2 text-sm font-medium text-[#777D75]">
                      <Building2 size={16} className="text-[#D4A843]" />
                      {experience.company}
                    </span>
                    {experience.current && (
                      <span className="flex items-center gap-1.5 rounded-full bg-[#D4A843]/20 px-3 py-1 text-xs font-semibold text-[#16382E]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4A843]" />
                        Current Role
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-4xl">
                    {experience.position}
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-[#777D75]">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={15} />
                      {experience.period}
                    </div>
                    <span className="rounded-full bg-[#F8F7F2] px-3 py-1 text-xs font-medium text-[#16382E]">
                      {experience.type}
                    </span>
                  </div>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#16382E]/5">
                  <BriefcaseBusiness size={24} className="text-[#16382E]" />
                </div>
              </div>

              {/* SUMMARY */}
              <p className="mt-8 text-base leading-relaxed text-[#555D55] md:text-lg">
                {experience.summary}
              </p>

              {/* ACHIEVEMENTS / RESPONSIBILITIES BULLETS */}
              <div className="mt-8 border-t border-[#E8E6DC] pt-8">
                <h3 className="mb-6 text-sm font-semibold tracking-wider text-[#16382E] uppercase">
                  Key Responsibilities & Deliverables
                </h3>

                <div className="space-y-4">
                  {experience.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4A843]/20">
                        <CheckCircle2 size={14} className="text-[#16382E]" />
                      </div>
                      <p className="text-sm leading-7 text-[#555D55] md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TAGS & ACTION */}
              <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[#E8E6DC] pt-6 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E8E6DC] bg-[#F8F7F2] px-4 py-2 text-xs font-medium text-[#16382E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedExperience(experience)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#16382E] transition-colors hover:text-[#D4A843]"
                >
                  Quick View Summary
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-28 rounded-[2.5rem] bg-[#16382E] px-8 py-16 text-center md:px-16 md:py-20">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#D4A843] uppercase">
            Have an open opportunity?
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let's discuss how my experience
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              can bring value to your team.
            </span>
          </h2>
          <Link
            to="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A843] px-7 py-4 text-sm font-semibold text-[#16382E] transition-transform hover:-translate-y-1"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>

      {/* MODAL POPUP */}
      <Dialog
        open={!!selectedExperience}
        onOpenChange={(open) => {
          if (!open) setSelectedExperience(null);
        }}
      >
        <DialogContent className="max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border-[#E8E6DC] bg-[#F8F7F2] p-0 sm:max-w-2xl">
          {selectedExperience && (
            <div>
              <div className="border-b border-[#E8E6DC] p-6 md:p-10">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#D4A843] uppercase">
                  {selectedExperience.company}
                </span>
                <DialogHeader className="mt-2">
                  <DialogTitle className="text-left text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                    {selectedExperience.position}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-left text-sm text-[#777D75]">
                    {selectedExperience.period} • {selectedExperience.location}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="p-6 md:p-10">
                <h4 className="mb-4 text-sm font-semibold text-[#16382E]">
                  Responsibilities Highlight
                </h4>
                <div className="space-y-4">
                  {selectedExperience.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-1 text-[#D4A843] shrink-0" />
                      <p className="text-sm leading-relaxed text-[#555D55]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ExperiencesPage;
