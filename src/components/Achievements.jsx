import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  Trophy,
  Award,
  BookOpen,
  CalendarDays,
} from "lucide-react";

import {
  competitions,
  certifications,
  publication,
  achievementStats,
} from "../data/achievementsData";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#F8F7F2] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* SECTION HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-widest text-[#D4A843]">
              04 / ACHIEVEMENTS
            </span>
            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
                Milestones of
                <br />
                <span className="font-serif font-normal italic text-[#D4A843]">
                  growth & exploration.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#777D75] md:text-lg">
                Recognitions from competitive business challenges, leadership development
                with McKinsey.org, and peer-reviewed academic publication.
              </p>
            </div>

            {/* QUICK LINK TO FULL PAGE */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/achievements"
                className="group inline-flex items-center gap-3 rounded-full bg-[#16382E] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#245342] hover:shadow-xl hover:shadow-[#16382E]/15"
              >
                <span>View All Achievements</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* NUMBERS & METRICS SHOWCASE */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {achievementStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl border border-[#E8E6DC] bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl hover:shadow-[#16382E]/5 md:p-8"
            >
              <div className="mb-4 flex items-baseline gap-1">
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

        {/* 3 PILLARS HIGHLIGHT CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* 1. COMPETITIONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl md:p-8"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A843]/15">
                <Trophy size={22} className="text-[#16382E]" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-[#D4A843] uppercase">
                Competitions
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#16382E]">
                Business Case Challenges
              </h3>
              <p className="mt-2 text-sm text-[#777D75]">
                Semifinalist at ENTERNS UI BOSCH & Market Town 7Preneur, and participant at IMOTION by.U.
              </p>
            </div>

            <div className="mt-8 border-t border-[#E8E6DC] pt-4">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#16382E] transition-colors group-hover:text-[#D4A843]"
              >
                <span>Explore 3 competitions</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* 2. CERTIFICATIONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl md:p-8"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A843]/15">
                <Award size={22} className="text-[#16382E]" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-[#D4A843] uppercase">
                Professional Credentials
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#16382E]">
                McKinsey & Analytics Mastery
              </h3>
              <p className="mt-2 text-sm text-[#777D75]">
                McKinsey Forward Program graduate, MySkill Data Analysis Fullstack Mastery, and English 503.
              </p>
            </div>

            <div className="mt-8 border-t border-[#E8E6DC] pt-4">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#16382E] transition-colors group-hover:text-[#D4A843]"
              >
                <span>Explore certifications</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* 3. PUBLICATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex flex-col justify-between rounded-3xl border border-[#E8E6DC] bg-[#16382E] p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A843]/20">
                <BookOpen size={22} className="text-[#D4A843]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#D4A843] px-2.5 py-0.5 text-[11px] font-bold text-[#16382E]">
                  SINTA 4
                </span>
                <span className="text-xs text-white/70">First Author</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Academic Research Journal
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-3">
                {publication.title}
              </p>
            </div>

            <div className="mt-8 border-t border-white/15 pt-4">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A843] transition-colors hover:text-white"
              >
                <span>Read paper summary & details</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;