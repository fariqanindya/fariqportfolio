import { motion } from "motion/react";
import {
  MapPin,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Recognizable clean SVG logos for the tools section
const ToolLogo = ({ name }) => {
  const lower = name.toLowerCase();

  // Excel
  if (lower.includes("excel")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#107C41] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#107C41" />
          <path d="M19 7h-6v18h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" fill="#0A5A2E" />
          <path d="M7 9c0-1.1.9-2 2-2h8v18H9c-1.1 0-2-.9-2-2V9z" fill="#185C37" />
          <text x="9.5" y="20.5" fill="white" fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">X</text>
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // PostgreSQL / SQL
  if (lower.includes("sql") || lower.includes("postgres")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#336791] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#336791" />
          <path d="M16 6c-4.4 0-8 2-8 4.5v11c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-11C24 8 20.4 6 16 6z" fill="#295679" />
          <ellipse cx="16" cy="10.5" rx="8" ry="4.5" fill="#5890C5" />
          <path d="M8 15c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M8 19.5c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // Tableau
  if (lower.includes("tableau")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#E97627] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#F4F4F4" />
          <circle cx="16" cy="16" r="3.5" fill="#E97627" />
          <circle cx="16" cy="8" r="2.2" fill="#6A808C" />
          <circle cx="16" cy="24" r="2.2" fill="#D3362D" />
          <circle cx="8" cy="16" r="2.2" fill="#4B6382" />
          <circle cx="24" cy="16" r="2.2" fill="#E8963B" />
          <circle cx="10.5" cy="10.5" r="1.8" fill="#D3362D" />
          <circle cx="21.5" cy="10.5" r="1.8" fill="#5B92A8" />
          <circle cx="10.5" cy="21.5" r="1.8" fill="#427840" />
          <circle cx="21.5" cy="21.5" r="1.8" fill="#A2406D" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // KNIME
  if (lower.includes("knime")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#F6D000] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#231F20" />
          <circle cx="16" cy="16" r="6" fill="#F6D000" />
          <circle cx="9" cy="16" r="2.5" fill="#F6D000" />
          <circle cx="23" cy="16" r="2.5" fill="#F6D000" />
          <line x1="9" y1="16" x2="23" y2="16" stroke="#F6D000" strokeWidth="2" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // Python
  if (lower.includes("python")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#3776AB] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#2E3440" />
          <path d="M15.8 7c-4 0-3.8 1.7-3.8 1.7l0 1.8h3.9v.6h-5.4c-2.3 0-4 1.4-4 3.7 0 2.7 1.8 3.7 1.8 3.7h1.1v-1.6c0-2.3 1.9-2.3 1.9-2.3h3.7c1.8 0 1.9-1.8 1.9-1.8v-3.8c0-2-1.2-2-1.2-2zm-1.1 1.2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#3776AB" />
          <path d="M16.2 25c4 0 3.8-1.7 3.8-1.7l0-1.8h-3.9v-.6h5.4c2.3 0 4-1.4 4-3.7 0-2.7-1.8-3.7-1.8-3.7h-1.1v1.6c0 2.3-1.9 2.3-1.9 2.3h-3.7c-1.8 0-1.9 1.8-1.9 1.8v3.8c0 2 1.2 2 1.2 2zm1.1-1.2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // PowerPoint / Slides
  if (lower.includes("powerpoint") || lower.includes("slide") || lower.includes("deck")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#D04423] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#D04423" />
          <rect x="7" y="7" width="18" height="18" rx="2" fill="#B73A1E" />
          <text x="11.5" y="21" fill="white" fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">P</text>
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // Google Sheets / Workspace
  if (lower.includes("google") || lower.includes("sheets")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#0F9D58] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#0F9D58" />
          <rect x="10" y="9" width="12" height="14" rx="1.5" fill="white" />
          <path d="M12 13h8M12 16h8M12 19h5" stroke="#0F9D58" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // Meta Ads / Social
  if (lower.includes("meta") || lower.includes("ads") || lower.includes("social")) {
    return (
      <div
        className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#0081FB] hover:shadow-md"
        title={name}
      >
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#0081FB" />
          <path d="M16 17.5c-1.8 2.2-3.4 3.5-5.2 3.5-2.5 0-4.3-2-4.3-5s1.8-5 4.3-5c1.8 0 3.4 1.3 5.2 3.5 1.8-2.2 3.4-3.5 5.2-3.5 2.5 0 4.3 2 4.3 5s-1.8 5-4.3 5c-1.8 0-3.4-1.3-5.2-3.5z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
          {name}
        </span>
      </div>
    );
  }

  // Generic / Custom Framework or Model
  return (
    <div
      className="group flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E8E6DC] bg-white p-2.5 transition-all hover:border-[#D4A843] hover:shadow-md"
      title={name}
    >
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="7" fill="#16382E" />
        <path d="M16 8l7 4v8l-7 4-7-4v-8l7-4z" stroke="#D4A843" strokeWidth="1.8" fill="none" />
        <circle cx="16" cy="16" r="2.5" fill="#D4A843" />
      </svg>
      <span className="max-w-[70px] truncate text-[10px] font-semibold text-[#16382E]">
        {name}
      </span>
    </div>
  );
};

const DetailModal = ({ item, project, experience, achievement, onClose }) => {
  // Normalize whatever object is passed in
  const data = item || project || experience || achievement;

  if (!data) return null;

  const photo = data.image || data.photo || "/projects/unilever.svg";
  const company = data.company || data.organizer || data.shortCompany || "Organization";
  const role = data.role || data.position || data.achievement || data.title;
  const title = data.title || data.position || data.company;
  const time = data.period || data.date || data.year || "Ongoing";
  const location = data.location || "Indonesia";
  const category = data.category || data.type || "Case Study";
  const description = data.description || data.summary || "";

  // Highlights (ensure array of up to 3 items)
  const highlights = (data.highlights && data.highlights.length > 0)
    ? data.highlights.slice(0, 3)
    : [
      { value: "100%", label: "Target Execution" },
      { value: "Verified", label: "Quality Standard" },
      { value: "Impact", label: "Strategic Value" },
    ];

  // What I Did (responsibilities or achievements list)
  const whatIDid = data.responsibilities || data.achievements || (data.highlight ? [data.highlight] : []);

  // Competencies (Skills)
  const competencies = (data.skills && data.skills.length > 0)
    ? data.skills
    : (data.tags || []);

  // Tools
  const tools = (data.tools && data.tools.length > 0)
    ? data.tools
    : (data.skills ? data.skills.slice(0, 3) : ["Microsoft Excel", "PowerPoint"]);

  const credentialUrl = data.credential || data.url || "#";

  return (
    <Dialog
      open={!!data}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-h-[90vh] w-[calc(100%-1.5rem)] max-w-3xl overflow-y-auto rounded-3xl border-[#E8E6DC] bg-[#F8F7F2] p-0 shadow-2xl sm:max-w-3xl">
        <div>
          {/* PHOTO / BANNER */}
          <div className="relative h-48 overflow-hidden bg-[#16382E] sm:h-60 md:h-64">
            <img
              src={photo}
              alt={title}
              onError={(e) => {
                e.target.style.display = "none";
              }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#16382E] via-[#16382E]/40 to-transparent" />

            {/* CATEGORY PILL */}
            <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#16382E] shadow-sm backdrop-blur-md sm:top-5 sm:left-6 md:left-8">
              {category}
            </span>

            {/* TIME PILL ON BANNER */}
            <span className="absolute top-4 right-14 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md sm:top-5 sm:right-16">
              {data.year || time}
            </span>

            {/* COMPANY BADGE */}
            <div className="absolute right-6 bottom-4 left-4 sm:bottom-5 sm:left-6 md:left-8">
              <span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase">
                {company}
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl line-clamp-1">
                {title}
              </h3>
            </div>
          </div>

          {/* HEADER & META INFO */}
          <div className="border-b border-[#E8E6DC] p-5 sm:p-7 md:p-8">
            <DialogHeader>
              <DialogTitle className="text-left text-2xl font-semibold tracking-tight text-[#16382E] sm:text-3xl">
                {role}
              </DialogTitle>

              {description && (
                <DialogDescription className="mt-2.5 text-left text-xs leading-relaxed text-[#777D75] sm:text-sm">
                  {description}
                </DialogDescription>
              )}
            </DialogHeader>

            {/* TIME & LOCATION META */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs font-medium text-[#777D75] sm:gap-4 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-full border border-[#E8E6DC] bg-white px-3 py-1 text-[#16382E]">
                <CalendarDays size={14} className="text-[#D4A843]" />
                {time}
              </span>

              <span className="flex items-center gap-1.5 rounded-full border border-[#E8E6DC] bg-white px-3 py-1 text-[#16382E]">
                <MapPin size={14} className="text-[#D4A843]" />
                {location}
              </span>

              <span className="flex items-center gap-1.5 rounded-full border border-[#E8E6DC] bg-white px-3 py-1 text-[#16382E]">
                <Briefcase size={14} className="text-[#D4A843]" />
                {company}
              </span>
            </div>
          </div>

          {/* BODY CONTENT */}
          <div className="p-5 sm:p-7 md:p-8 space-y-8">

            {/* 1. HIGHLIGHTS */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-[#D4A843]" />
                <h4 className="text-xs font-bold tracking-widest text-[#777D75] uppercase">
                  Highlights
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center justify-between rounded-2xl border border-[#E8E6DC] bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <p className="break-words text-2xl font-bold tracking-tight text-[#16382E]">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-[#777D75]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. WHAT I DID */}
            {whatIDid.length > 0 && (
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#D4A843]" />
                  <h4 className="text-xs font-bold tracking-widest text-[#777D75] uppercase">
                    What I Did
                  </h4>
                </div>

                <div className="space-y-3 rounded-2xl border border-[#E8E6DC] bg-white p-4 sm:p-5">
                  {whatIDid.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D4A843]/20">
                        <CheckCircle2
                          size={12}
                          className="text-[#16382E]"
                        />
                      </div>
                      <p className="text-xs leading-relaxed text-[#444C44] sm:text-sm">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. COMPETENCIES & 4. TOOLS */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* COMPETENCIES */}
              <div className="rounded-2xl border border-[#E8E6DC] bg-white p-4 sm:p-5">
                <h4 className="mb-3 text-xs font-bold tracking-widest text-[#777D75] uppercase">
                  Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#16382E]/5 px-3 py-1.5 text-xs font-medium text-[#16382E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* TOOLS (JUST LOGO OF THE TOOLS INSIDE THIS SECTION) */}
              <div className="rounded-2xl border border-[#E8E6DC] bg-white p-4 sm:p-5">
                <h4 className="mb-3 text-xs font-bold tracking-widest text-[#777D75] uppercase">
                  Tools
                </h4>
                <div className="flex flex-wrap items-center gap-2.5">
                  {tools.map((tool) => (
                    <ToolLogo key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </div>

            {/* CREDENTIAL BUTTON (ALWAYS VISIBLE TO LATER INCLUDE HYPERLINK) */}
            <div className="pt-2 border-t border-[#E8E6DC] flex items-center justify-between">
              <a
                href={credentialUrl}
                target={data.credential || data.url ? "_blank" : undefined}
                rel={data.credential || data.url ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!data.credential && !data.url) {
                    e.preventDefault();
                    // Ready for user to include hyperlink
                  }
                }}
                className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${data.credential || data.url
                  ? "bg-[#16382E] text-white hover:bg-[#245342] hover:shadow-lg"
                  : "bg-[#16382E] text-white hover:bg-[#245342] hover:shadow-md cursor-pointer"
                  }`}
              >
                <span>Credential</span>
                <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-[11px] text-[#777D75]">
                {data.credential || data.url ? "Verified Project Link" : "Project File / Certificate"}
              </span>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
