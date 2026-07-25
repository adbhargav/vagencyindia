import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  Bot,
  Globe2,
  Sparkles,
  Rocket,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const pillars = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Meta & Google ads engineered to hit CAC targets — not vanity metrics.",
  },
  {
    icon: DollarSign,
    title: "Revenue & Lead Generation",
    desc: "Full-funnel systems that convert clicks into pipeline, and pipeline into revenue.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Every rupee is tracked. Every test is measured. No guesswork, only signal.",
  },
  {
    icon: Target,
    title: "ROI & ROAS Optimization",
    desc: "Ruthless creative iteration + audience layering to compound your return.",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    desc: "WhatsApp, CRM, and AI-powered creative testing that scales without adding headcount.",
  },
  {
    icon: Globe2,
    title: "Conversion-Focused Websites",
    desc: "Sub-2s, pixel-perfect landing pages engineered to convert paid traffic.",
  },
  {
    icon: Sparkles,
    title: "Meta Ads Expertise",
    desc: "₹15 Cr+ ad spend managed. CAPI, pixels, and detailed targeting done right.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth Systems",
    desc: "Repeatable playbooks that scale from ₹5L to ₹5Cr/month — predictably.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB392F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[30rem] h-[30rem] bg-[#FF8000]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
            <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
              OUR CORE IDENTITY
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
            A performance-driven <br className="hidden sm:block" />
            <span className="serif-italic text-gradient-orange">growth partner</span> — not another agency.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            We don't sell impressions. We engineer revenue systems. V Agency partners with ambitious founders and
            marketing leaders to turn paid channels into predictable, profitable growth engines — powered by data,
            AI and battle-tested playbooks.
          </p>
        </motion.div>

        {/* Two Column Feature Row */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Feature Callout */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 rounded-3xl text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl"
            style={{
              background:
                "linear-gradient(135deg,#131B2A 0%,#1a1225 50%,#2a1520 100%)",
            }}
          >
            <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-[#EB392F]/25 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-[#FF8000]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8000] mb-4 block">
                01 / OUR MISSION
              </span>
              <h3 className="big-num text-5xl sm:text-6xl text-white mb-6 leading-[1]">
                We build <br />
                <span className="text-gradient-orange">growth engines</span>, <br />
                not campaigns.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                Backed by ₹15 Cr+ in managed ad spend across 100+ brands, we bring a numbers-first approach to
                D2C, real estate, EdTech, SaaS and high-ticket service businesses. Our team obsesses over ROAS,
                CAC, LTV and pipeline velocity — so you can obsess over building a great business.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center gap-6">
              <div>
                <div className="big-num text-3xl text-white">₹15Cr+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ad Spend</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="big-num text-3xl text-gradient-orange">5X+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Avg. ROAS</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="big-num text-3xl text-white">100+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Brands</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Pillars 4-grid (top 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.slice(0, 4).map((p) => (
              <div
                key={p.title}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md hover:border-[#EB392F]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg,#131B2A 0%,#2a1a2a 55%,#EB392F 130%)",
                  }}
                >
                  <p.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#131B2A] mb-1.5 group-hover:text-[#EB392F] transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Pillars 5-8 */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.slice(4).map((p) => (
            <div
              key={p.title}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md hover:border-[#EB392F]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm mb-4"
                style={{
                  background:
                    "linear-gradient(135deg,#FF8000 0%,#EB392F 100%)",
                }}
              >
                <p.icon className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#131B2A] mb-1.5 group-hover:text-[#EB392F] transition-colors">
                {p.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
