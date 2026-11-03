import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { experiences, experienceStats } from "../data/experiencesData";

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

const Experience = () => {
  return (
    <section
      id="experience"
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
              02 / EXPERIENCE
            </span>
            <div className="h-px w-16 bg-[#D4A843]" />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#16382E] md:text-6xl lg:text-7xl">
                Where strategy meets
                <br />
                <span className="font-serif font-normal italic text-[#D4A843]">
                  real-world impact.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#777D75] md:text-lg">
                Delivering actionable business intelligence, market analysis,
                and performance optimization across leading Indonesian enterprises.
              </p>
            </div>

            {/* QUICK LINK TO FULL PAGE */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/experiences"
                className="group inline-flex items-center gap-3 rounded-full bg-[#16382E] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#245342] hover:shadow-xl hover:shadow-[#16382E]/15"
              >
                <span>View All Experiences</span>
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
          {experienceStats.map((stat, index) => (
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

        {/* CONCISE EXPERIENCES PREVIEW LIST */}
        <div className="mt-10 space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl border border-[#E8E6DC] bg-white/70 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-lg md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16382E]/5 transition-colors group-hover:bg-[#D4A843]/15">
                    <BriefcaseBusiness size={22} className="text-[#16382E]" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[#16382E]">
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span className="rounded-full bg-[#D4A843]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#16382E]">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-[#242924] md:text-xl">
                      {exp.position}
                    </h3>
                    <p className="mt-1 text-xs text-[#777D75] md:text-sm">
                      {exp.metricHighlight}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <div className="text-right">
                    <span className="text-xs font-semibold tracking-wider text-[#777D75] uppercase">
                      {exp.period}
                    </span>
                    <p className="text-xs text-[#777D75]">{exp.location}</p>
                  </div>

                  <Link
                    to="/experiences"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8E6DC] text-[#16382E] transition-all group-hover:border-[#16382E] group-hover:bg-[#16382E] group-hover:text-white"
                    aria-label={`View details for ${exp.position}`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;