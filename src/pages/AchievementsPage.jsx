import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";

import {
  competitions,
  certifications,
  publication,
  achievementStats,
} from "../data/achievementsData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AchievementsPage = () => {
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
              PORTFOLIO / ACHIEVEMENTS
            </span>
            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[#16382E] md:text-7xl lg:text-8xl">
            Competitions,
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              Certificates & Research.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#777D75] md:text-lg">
            A comprehensive overview of business competitions, rigorous leadership development
            with McKinsey.org, technical data bootcamp certifications, and peer-reviewed
            academic publications.
          </p>
        </motion.div>

        {/* STATS STRIP */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {achievementStats.map((stat, index) => (
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

        {/* ================================= */}
        {/* 1. COMPETITIONS */}
        {/* ================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 border-t border-[#E8E6DC] pt-16"
        >
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Trophy size={22} className="text-[#16382E]" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                  Business & Case Competitions
                </h2>
                <p className="mt-1 text-sm text-[#777D75]">
                  National-level business strategy and marketing challenges.
                </p>
              </div>
            </div>
            <span className="hidden text-xs font-semibold tracking-widest text-[#777D75] uppercase sm:block">
              3 Competitions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {competitions.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <span className="rounded-full bg-[#16382E]/5 px-3.5 py-1.5 text-xs font-semibold text-[#16382E]">
                      {item.type}
                    </span>
                    <span className="rounded-full bg-[#D4A843]/20 px-3 py-1 text-xs font-semibold text-[#16382E]">
                      {item.achievement}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-[#16382E]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#D4A843]">
                    Organizer: {item.organizer}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#777D75]">
                    {item.highlight}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E8E6DC] pt-5 text-xs text-[#777D75]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {item.date}
                  </span>
                  {item.credential ? (
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#16382E] hover:text-[#D4A843]"
                    >
                      Credential
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-[#A0A59D]">Verified Record</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ================================= */}
        {/* 2. CERTIFICATIONS */}
        {/* ================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 border-t border-[#E8E6DC] pt-16"
        >
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
                <Award size={22} className="text-[#16382E]" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                  Certifications & Executive Learning
                </h2>
                <p className="mt-1 text-sm text-[#777D75]">
                  Professional courses, analytical bootcamps, and language tests.
                </p>
              </div>
            </div>
            <span className="hidden text-xs font-semibold tracking-widest text-[#777D75] uppercase sm:block">
              3 Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {certifications.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <span className="rounded-full bg-[#16382E]/5 px-3.5 py-1.5 text-xs font-semibold text-[#16382E]">
                      {item.type}
                    </span>
                    <span className="rounded-full bg-[#D4A843]/20 px-3 py-1 text-xs font-semibold text-[#16382E]">
                      {item.achievement}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-[#16382E]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#D4A843]">
                    Issued by: {item.organizer}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#777D75]">
                    {item.highlight}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E8E6DC] pt-5 text-xs text-[#777D75]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {item.date}
                  </span>
                  {item.credential ? (
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#16382E] hover:text-[#D4A843]"
                    >
                      Certificate
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-[#A0A59D]">Verified Credential</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ================================= */}
        {/* 3. RESEARCH PUBLICATION */}
        {/* ================================= */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 border-t border-[#E8E6DC] pt-16"
        >
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/15">
              <BookOpen size={22} className="text-[#16382E]" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#16382E] md:text-3xl">
                Academic Research Publication
              </h2>
              <p className="mt-1 text-sm text-[#777D75]">
                Peer-reviewed contribution to entrepreneurship and family business management.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#16382E] p-8 text-white md:p-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-12 -bottom-40 h-96 w-96 rounded-full border border-[#D4A843]/20" />

            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#D4A843] px-4 py-1.5 text-xs font-bold text-[#16382E]">
                  {publication.indexing}
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white/80">
                  {publication.role}
                </span>
                <span className="flex items-center gap-2 text-xs text-white/60">
                  <CalendarDays size={14} />
                  {publication.date}
                </span>
              </div>

              <h3 className="max-w-4xl text-2xl font-semibold leading-snug md:text-4xl">
                {publication.title}
              </h3>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                {publication.description}
              </p>

              <div className="my-8 h-px w-full bg-white/15" />

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-[#D4A843] uppercase">
                    Field of Study
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    {publication.field}
                  </p>
                </div>

                {publication.url ? (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D4A843] px-6 py-3.5 text-sm font-semibold text-[#16382E] transition-all hover:bg-[#E6BB5C]"
                  >
                    Read Published Paper
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="text-xs text-white/60">
                    Journal indexing verified (August 2026)
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* BOTTOM CTA */}
        <div className="mt-28 rounded-[2.5rem] bg-[#16382E] px-8 py-16 text-center text-white md:px-16 md:py-20">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#D4A843] uppercase">
            Let's collaborate
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Interested in research synergy
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              or analytical problem solving?
            </span>
          </h2>
          <Link
            to="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A843] px-7 py-4 text-sm font-semibold text-[#16382E] transition-transform hover:-translate-y-1"
          >
            Connect With Me
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default AchievementsPage;
