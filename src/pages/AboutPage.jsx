import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Code2,
  Brain,
  Languages as LanguagesIcon,
  CalendarDays,
  MapPin,
  Award,
  CheckCircle2,
  BriefcaseBusiness,
  Building2,
  Trophy,
} from "lucide-react";

import {
  education,
  coursework,
  technicalSkills,
  softSkills,
  languages,
} from "../data/aboutData";

import { experiences } from "../data/experiencesData";
import {
  competitions,
  certifications,
  publication,
} from "../data/achievementsData";

import DetailModal from "../components/DetailModal";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">

        {/* BACK LINK */}
        <Link
          to="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#777D75] transition-colors hover:text-[#16382E] sm:mb-10"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* COMPACT PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] sm:text-sm">
              ABOUT
            </span>
            <div className="h-px w-12 bg-[#D4A843] sm:w-16" />
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.06em] text-[#16382E] sm:text-5xl md:text-6xl lg:text-7xl">
            Background, Experience
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              & Achievements.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#777D75] sm:mt-5 sm:text-sm md:text-base">
            Digital Business graduate from Universitas Padjadjaran specializing in strategic research,
            business analytics, and ecosystem development.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* 1. EDUCATION */}
        {/* ======================================================== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="education"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-10 sm:w-10">
                <GraduationCap size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Education
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              Degree & Honors
            </span>
          </div>

          <div className="rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 sm:p-7 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <div className="mb-1.5 flex items-center gap-2 text-xs text-[#777D75]">
                  <MapPin size={13} />
                  <span>{education.location}</span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                  {education.university}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#242924] sm:text-base">
                  {education.degree} — Majoring in {education.major}
                </p>

                <p className="text-xs text-[#777D75]">
                  {education.faculty}
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-[#F8F7F2] px-3.5 py-1.5 text-xs font-medium text-[#16382E]">
                <CalendarDays size={14} />
                <span>{education.period}</span>
              </div>
            </div>

            {/* GPA BADGE */}
            <div className="mt-6 flex items-center gap-3.5 border-t border-[#E8E6DC] pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Award size={20} className="text-[#16382E]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-[#777D75] uppercase">
                  Cumulative GPA
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#16382E] sm:text-2xl">
                    {education.gpa}
                  </span>
                  <span className="text-xs text-[#777D75]">
                    (Graduated with honors)
                  </span>
                </div>
              </div>
            </div>

            {/* RELEVANT COURSEWORK PILLS */}
            <div className="mt-6 border-t border-[#E8E6DC] pt-5">
              <p className="mb-3 text-xs font-semibold text-[#16382E]">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-[#F8F7F2] px-3 py-1 text-xs text-[#16382E]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ======================================================== */}
        {/* 2. PROFESSIONAL EXPERIENCE */}
        {/* ======================================================== */}
        <section
          id="experiences"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16382E]/10 sm:h-10 sm:w-10">
                <BriefcaseBusiness size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Professional Experiences
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              3 Roles
            </span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 sm:p-7 transition-all duration-300 hover:border-[#D4A843]/50 hover:shadow-lg"
              >
                {/* HEADER */}
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#D4A843] uppercase tracking-wider">
                        <Building2 size={13} />
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span className="rounded-full bg-[#D4A843]/20 px-2.5 py-0.5 text-[10px] font-semibold text-[#16382E]">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#16382E] sm:text-xl">
                      {exp.position}
                    </h3>

                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-[#777D75]">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={13} className="text-[#D4A843]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-[#D4A843]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(exp)}
                    className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#16382E] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#245342]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                {/* SUMMARY */}
                <p className="mt-3 text-xs leading-relaxed text-[#555D55] sm:text-sm">
                  {exp.summary}
                </p>

                {/* 3 HIGHLIGHT METRICS (COMPACT) */}
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 border-t border-[#E8E6DC] pt-4">
                  {exp.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[#E8E6DC] bg-[#F8F7F2] p-3 text-center"
                    >
                      <p className="text-base font-bold text-[#16382E] sm:text-lg">
                        {h.value}
                      </p>
                      <p className="text-[11px] text-[#777D75] line-clamp-1">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* TAGS */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F8F7F2] px-2.5 py-0.5 text-[11px] text-[#555D55]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. ACHIEVEMENTS (COMPETITIONS) */}
        {/* ======================================================== */}
        <section
          id="achievements"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-10 sm:w-10">
                <Trophy size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Achievements & Competitions
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              Business Cases
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {competitions.map((comp) => (
              <div
                key={comp.id}
                onClick={() => setSelectedItem(comp)}
                className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:shadow-lg sm:p-6"
              >
                <div>
                  <div className="mb-3 flex items-start justify-between">
                    <span className="rounded-full bg-[#16382E]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#16382E]">
                      {comp.type}
                    </span>
                    <span className="rounded-full bg-[#D4A843]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#16382E]">
                      {comp.achievement}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug text-[#16382E] sm:text-lg">
                    {comp.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#D4A843]">
                    Organizer: {comp.company}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#777D75]">
                    {comp.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8E6DC] pt-3 text-xs font-semibold text-[#16382E] group-hover:text-[#D4A843]">
                  <span>View Details</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. CERTIFICATIONS */}
        {/* ======================================================== */}
        <section
          id="certifications"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-10 sm:w-10">
                <Award size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Certifications
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedItem(cert)}
                className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:shadow-lg sm:p-6"
              >
                <div>
                  <div className="mb-3 flex items-start justify-between">
                    <span className="rounded-full bg-[#16382E]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#16382E]">
                      {cert.type}
                    </span>
                    <span className="rounded-full bg-[#D4A843]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#16382E]">
                      {cert.achievement}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug text-[#16382E] sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#D4A843]">
                    Issued by: {cert.company}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#777D75]">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8E6DC] pt-3 text-xs font-semibold text-[#16382E] group-hover:text-[#D4A843]">
                  <span>View Credential</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. PUBLICATIONS */}
        {/* ======================================================== */}
        <section
          id="publications"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-10 sm:w-10">
                <BookOpen size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Publication
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              Peer-Reviewed
            </span>
          </div>

          <div
            onClick={() => setSelectedItem(publication)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#16382E] p-6 text-white transition-all duration-300 hover:shadow-xl sm:p-8"
          >
            <div className="relative z-10">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#D4A843] px-3 py-0.5 text-[11px] font-bold text-[#16382E]">
                  {publication.indexing}
                </span>
                <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] text-white/80">
                  {publication.role}
                </span>
                <span className="text-xs text-white/60">
                  {publication.date}
                </span>
              </div>

              <h3 className="text-base font-semibold leading-snug sm:text-xl">
                {publication.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">
                {publication.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-xs font-semibold text-[#D4A843]">
                <span>Click to view full publication study & highlights</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. SKILLS */}
        {/* ======================================================== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="skills"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]/15 sm:h-10 sm:w-10">
                <Code2 size={18} className="text-[#16382E]" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-[#16382E] sm:text-2xl">
                Skills
              </h2>
            </div>
            <span className="text-xs font-semibold tracking-widest text-[#777D75] uppercase">
              Tools & Strengths
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {/* TECHNICAL SKILLS */}
            <div className="rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16382E]">
                  <Code2 size={17} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#16382E]">
                    Technical & Analytical Skills
                  </h3>
                  <p className="text-[11px] text-[#777D75]">
                    Tools, Frameworks & Software
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-[#E8E6DC] bg-[#F8F7F2] px-3 py-1.5 text-xs font-medium text-[#16382E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="rounded-3xl border border-[#E8E6DC] bg-white/90 p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A843]">
                  <Brain size={17} className="text-[#16382E]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#16382E]">
                    Soft Skills & Strengths
                  </h3>
                  <p className="text-[11px] text-[#777D75]">
                    Problem Solving & Working Dynamics
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-[#E8E6DC] bg-[#F8F7F2] px-3 py-1.5 text-xs font-medium text-[#16382E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ======================================================== */}
        {/* 7. LANGUAGES */}
        {/* ======================================================== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="languages"
          className="mb-14 border-t border-[#E8E6DC] pt-10 sm:mb-16 sm:pt-12"
        >
          <div className="mb-6 flex items-center gap-2.5">
            <LanguagesIcon size={20} className="text-[#D4A843]" />
            <h2 className="text-xl font-semibold text-[#16382E] sm:text-2xl">
              Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {languages.map((language) => (
              <div
                key={language.name}
                className="rounded-2xl border border-[#E8E6DC] bg-white/90 p-4 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#16382E]">
                    {language.name}
                  </span>
                  <span className="rounded-full bg-[#D4A843]/15 px-2.5 py-0.5 text-xs font-semibold text-[#16382E]">
                    {language.level}
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-[#F8F7F2]">
                  <div
                    className="h-full rounded-full bg-[#16382E]"
                    style={{ width: language.proficiency }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ======================================================== */}
        {/* 8. GET IN TOUCH (COMPACT CTA) */}
        {/* ======================================================== */}
        <section id="contact-cta" className="mt-14 sm:mt-16">
          <div className="rounded-3xl bg-[#16382E] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <p className="mb-2 text-xs font-medium tracking-[0.2em] text-[#D4A843] uppercase">
              Let's Connect
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Interested in collaboration
              <br />
              <span className="font-serif font-normal italic text-[#D4A843]">
                or discussing opportunities?
              </span>
            </h2>
            <Link
              to="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D4A843] px-6 py-3 text-sm font-semibold text-[#16382E] transition-transform hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </div>

      {/* UNIFIED DETAIL MODAL */}
      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </main>
  );
};

export default AboutPage;
