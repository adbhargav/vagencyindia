import { motion } from "framer-motion";

/**
 * Premium infinite marquee that showcases V Agency's core expertise.
 * Two rows scroll in opposite directions for a subtle, sophisticated motion.
 */

const rowA = [
  "Meta Conversion API",
  "Detailed Targeting",
  "A/B Testing",
  "ROAS Optimization",
  "Performance Marketing",
  "Lead Generation",
  "Conversion Tracking",
];

const rowB = [
  "Audience Segmentation",
  "WhatsApp Automation",
  "Campaign Optimization",
  "Funnel Optimization",
  "Retargeting",
  "Pixel Integration",
  "Creative Testing",
  "AI-Powered Optimization",
];

const Pill = ({ label, variant = "light" }: { label: string; variant?: "light" | "dark" }) => (
  <div
    className={`shrink-0 mx-3 sm:mx-4 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all ${
      variant === "dark"
        ? "bg-[#131B2A] border-white/10 text-white"
        : "bg-white border-slate-200 text-[#131B2A]"
    }`}
  >
    <span
      className="w-2 h-2 rounded-full"
      style={{ background: "linear-gradient(135deg,#FFB84D,#EB392F)" }}
    />
    <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] whitespace-nowrap">
      {label}
    </span>
    <svg className="w-3.5 h-3.5 text-[#EB392F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </div>
);

const ExpertiseMarquee = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-white overflow-hidden border-y border-slate-100">
      {/* Subtle ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-40 rounded-full bg-gradient-to-r from-[#FFB84D]/10 via-[#EB392F]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-12 h-[1px] bg-slate-400" />
            <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
              OUR EXPERTISE
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md sm:text-right">
            <span className="font-serif italic text-slate-700">Everything we obsess over</span>{" "}
            to scale your revenue predictably.
          </p>
        </motion.div>
      </div>

      {/* Fade overlays */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row A - forward */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-2" style={{ animationDuration: "50s" }}>
          <div className="flex items-center shrink-0">
            {rowA.map((label, i) => (
              <Pill key={`a1-${i}`} label={label} />
            ))}
          </div>
          <div className="flex items-center shrink-0" aria-hidden="true">
            {rowA.map((label, i) => (
              <Pill key={`a2-${i}`} label={label} />
            ))}
          </div>
        </div>

        {/* Row B - reverse (dark variant) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] py-2 mt-3" style={{ animationDuration: "55s" }}>
          <div className="flex items-center shrink-0">
            {rowB.map((label, i) => (
              <Pill key={`b1-${i}`} label={label} variant="dark" />
            ))}
          </div>
          <div className="flex items-center shrink-0" aria-hidden="true">
            {rowB.map((label, i) => (
              <Pill key={`b2-${i}`} label={label} variant="dark" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMarquee;
