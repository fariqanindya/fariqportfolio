import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.07V18.5h2.79Z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const contactLinks = {
  email: "fariqanindya@gmail.com",
  linkedin: "https://www.linkedin.com/in/fariqanindya/",
  instagram: "https://www.instagram.com/fariqanindya/",
  location: "Bandung, Indonesia",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#16382E] text-[#F8F7F2]"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full border border-white/10" />
        <div className="absolute -right-20 -bottom-60 h-[550px] w-[550px] rounded-full border border-[#D4A843]/15" />
        <div className="absolute top-1/3 -left-40 h-[300px] w-[300px] rounded-full bg-[#D4A843]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pt-24">
        {/* SECTION HEADER & SIMPLE CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* SECTION BADGE */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="text-xs font-semibold tracking-widest text-[#D4A843] sm:text-sm">
              03 / GET IN TOUCH
            </span>
            <div className="h-px w-12 bg-[#D4A843] sm:w-16" />
          </div>

          {/* MAIN HEADLINE (CONSISTENT FONT SIZES WITH ABOUT & PROJECTS) */}
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="font-serif font-normal italic text-[#D4A843]">
              Let's make it
            </span>{" "}
            meaningful.
          </h2>

          {/* SIMPLE DESCRIPTION (CONSISTENT FONT SIZES WITH ABOUT & PROJECTS) */}
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
            I'm always open to discussing new opportunities, research
            collaborations, or analytical projects. Feel free to reach out.
          </p>

          {/* SIMPLE ACTION BUTTONS: EMAIL + LINKEDIN & INSTAGRAM LOGOS */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-10 sm:gap-4">
            {/* SEND AN EMAIL BUTTON */}
            <motion.a
              href={`mailto:${contactLinks.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#D4A843] px-6 py-3.5 text-sm font-semibold text-[#16382E] transition-all hover:bg-[#E5BA59] sm:px-7 sm:py-4"
            >
              <Mail size={18} />
              <span>Send an Email</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            {/* LINKEDIN LOGO BUTTON */}
            <motion.a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#16382E] sm:h-14 sm:w-14"
            >
              <LinkedInIcon size={20} />
            </motion.a>

            {/* INSTAGRAM LOGO BUTTON */}
            <motion.a
              href={contactLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#16382E] sm:h-14 sm:w-14"
            >
              <InstagramIcon size={20} />
            </motion.a>
          </div>

          {/* SIMPLE LOCATION INFO */}
          <div className="mt-8 flex items-center gap-2 text-xs text-white/60 sm:mt-10 sm:text-sm">
            <MapPin size={15} className="text-[#D4A843]" />
            <span>Based in {contactLinks.location}</span>
          </div>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-16 border-t border-white/15 pt-8 pb-10 sm:mt-24 sm:pt-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            {/* BRAND */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center gap-1"
              >
                <span className="text-2xl font-bold tracking-[-0.06em] text-white">
                  fariq
                </span>
                <span className="text-2xl font-bold text-[#D4A843] transition-transform group-hover:rotate-45">
                  .
                </span>
              </button>
              <p className="mt-1 text-xs text-white/50">
                Researcher & Analyst
              </p>
            </div>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-[#D4A843] sm:text-sm"
            >
              <span>Back to top</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all group-hover:-translate-y-0.5 group-hover:border-[#D4A843] sm:h-9 sm:w-9">
                <ArrowUp size={15} />
              </span>
            </button>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[11px] text-white/40 sm:flex-row sm:text-xs">
            <p>
              © {new Date().getFullYear()} Fariq. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#D4A843]" />
              <span>Built with curiosity & purpose.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
