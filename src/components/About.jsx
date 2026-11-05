import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

// Exactly 3 key achievement numbers for the landing page
const landingAchievementNumbers = [
  {
    value: "3",
    suffix: "Roles",
    label: "Internship Experiences",
    sublabel: "Adira Finance, ParagonCorp, Eigerindo MPI",
  },
  {
    value: "3",
    suffix: "Cases",
    label: "Case Competitions",
    sublabel: "Unilever, BOSCH, 7Preneur",
  },
  {
    value: "1st",
    suffix: "Author",
    label: "SINTA 4 Journal",
    sublabel: "Peer-Reviewed Research",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
        {/* SECTION HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 sm:mb-12"
        >
          {/* BADGE */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] sm:text-sm">
              ABOUT
            </span>
            <div className="h-px w-12 bg-[#D4A843] sm:w-16" />
          </div>

          {/* HEADLINE (CONSISTENT FONT SIZE ACROSS SECTIONS) */}
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#16382E] sm:text-3xl lg:text-4xl">
            Turning curiosity into
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              meaningful insights.
            </span>
          </h2>

          {/* A LITTLE CAPTION (CONSISTENT BODY FONT SIZE) */}
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#777D75] sm:text-sm">
            I'm Fariq, a Digital Business graduate from Universitas
            Padjadjaran blending business, data, marketing, and technology
            rigor to solve complex business challenges with strategic clarity.
          </p>
        </motion.div>

        {/* 3 NUMBER OF ACHIEVEMENT */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {landingAchievementNumbers.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-[#E8E6DC] bg-white/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A843]/50 hover:bg-white hover:shadow-xl hover:shadow-[#16382E]/5 sm:p-8 text-center"
            >
              <div className="mb-3 flex justify-center items-baseline gap-1.5 sm:mb-4">
                <span className="text-4xl font-bold tracking-tight text-[#16382E] sm:text-5xl">
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
              <p className="mt-1 text-xs text-[#777D75] sm:text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON PLACED AFTER THE 3 NUMBERS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 sm:mt-6"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-[#16382E] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#245342] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
          >
            <span>Read Full Story</span>
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
