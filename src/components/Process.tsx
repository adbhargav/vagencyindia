import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, audience, and objectives to craft a roadmap that guarantees ROI."
  },
  {
    title: "Design & Development",
    description: "Our creative team builds high-converting assets, from landing pages to ad creatives, tailored to your identity."
  },
  {
    title: "Launch & Optimize",
    description: "We deploy the campaigns across all channels, continuously A/B testing and optimizing for the lowest acquisition cost."
  },
  {
    title: "Scale & Dominate",
    description: "Once we hit the winning formula, we scale the budgets profitably to dominate your market share."
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full p-4 md:p-8 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#131B2A] rounded-full transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-bold text-sm tracking-wider uppercase">Back to Home</span>
        </Link>
      </div>

      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(235,57,47,0.08)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,128,0,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
                OUR PROCESS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-tight">
              How we <span className="serif-italic text-gradient-orange">engineer</span> growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative" ref={containerRef}>
            {/* Scroll Progress Bar */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-slate-100 rounded-full">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#EB392F] to-[#FF8000] origin-top rounded-full"
                style={{ scaleY, height: "100%" }}
              />
            </div>

            <div className="space-y-24">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative pl-16 md:pl-24">
                  <div className="absolute left-2 md:left-[1.35rem] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#EB392F] shadow-[0_0_0_4px_white] z-10" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mb-2 block">
                    Phase {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#131B2A] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;