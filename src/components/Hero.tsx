import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  Target,
  Zap,
  Rocket,
  Sparkles,
  Activity,
} from "lucide-react";

/* -------- animated counter helper -------- */
const AnimatedCounter = ({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) =>
    decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN")
  );
  const [display, setDisplay] = useState<string>(String(from));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setDisplay(v as string));
    return () => {
      controls.stop();
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

/* -------- Meta Business Partner Logo (SVG - infinity mark) -------- */
const MetaLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 24" fill="none">
    <defs>
      <linearGradient id="metaGrad" x1="0" y1="12" x2="36" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0064E1" />
        <stop offset="50%" stopColor="#0082FB" />
        <stop offset="100%" stopColor="#00C6FF" />
      </linearGradient>
    </defs>
    {/* Meta infinity mark - two overlapping loops */}
    <path
      d="M9 4C4.03 4 1 8.03 1 12s3.03 8 8 8c3.5 0 6-2 8.5-5.5l1.7-2.4C21 9 22.7 6.5 26 6.5c2.8 0 4.5 2.5 4.5 5.5s-1.7 5.5-4.5 5.5c-1.7 0-3-1.2-4.5-3.5l-1-1.6-2.4 3.5C15.4 18.7 12.7 20 9 20c-4.4 0-8-3.6-8-8s3.6-8 8-8c3.5 0 6.2 1.8 8.4 4.5l1.6 2.1 2.5-3.6C23.9 4.4 25.8 3 28.5 3 31.5 3 34 5.5 34 9.5S31.5 16 28.5 16c-1.7 0-3-.8-4.3-2.8l-1.4-2.1 2.6-3.8c1.1-1.5 2.1-2.3 3.6-2.3 2 0 3.5 1.7 3.5 4s-1.5 4-3.5 4c-.9 0-1.8-.4-2.7-1.7l-.8-1.1L23.9 12l.9 1.2c1 1.4 2.1 2 3.5 2 2.6 0 4.7-2.3 4.7-5.7s-2.1-5.7-4.7-5.7c-2.1 0-3.7 1.2-5.5 3.7l-2 2.9-1.5-2C17 5.7 13.7 4 9 4z"
      fill="url(#metaGrad)"
      fillRule="evenodd"
    />
  </svg>
);

/* -------- Hero -------- */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden hero-mesh">
      {/* Background Micro-Graphics */}
      <div className="absolute inset-0 premium-grid-bg opacity-40 pointer-events-none" />
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[#EB392F]/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#FF8000]/10 blur-3xl animate-pulseGlow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#FFB84D]/10 blur-3xl pointer-events-none" />

      {/* Floating micro-decorations (SVG) */}
      <svg
        className="absolute top-24 right-[8%] w-24 h-24 text-[#EB392F]/20 pointer-events-none animate-float-slow"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
      </svg>
      <svg
        className="absolute bottom-32 left-[5%] w-16 h-16 text-[#FF8000]/25 pointer-events-none animate-float-med"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path strokeWidth="1.5" strokeLinecap="round" d="M12 2v20M2 12h20" />
      </svg>

      {/* Diagonal stars micro-graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "18%", left: "42%", size: 3, delay: "0s" },
          { top: "62%", left: "48%", size: 2, delay: "0.6s" },
          { top: "34%", left: "88%", size: 4, delay: "0.3s" },
          { top: "78%", left: "8%", size: 3, delay: "1.1s" },
          { top: "12%", left: "68%", size: 2, delay: "0.8s" },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#EB392F] animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Premium single badge - Performance Marketing Agency */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-7"
            >
              <div
                className="inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full shadow-lg backdrop-blur-md border"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(19,27,42,0.95) 0%, rgba(42,20,26,0.95) 100%)",
                  borderColor: "rgba(255,184,77,0.25)",
                }}
              >
                <span
                  className="relative w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#FFB84D,#FF8000,#EB392F)" }}
                >
                  <span className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ background: "linear-gradient(135deg,#FFB84D,#EB392F)" }} />
                  <Sparkles className="w-3.5 h-3.5 text-white relative" />
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span
                    className="text-[11px] font-extrabold uppercase tracking-[0.35em]"
                    style={{
                      background: "linear-gradient(90deg,#FFB84D,#FF8000,#EB392F)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Performance Marketing Agency
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1 mb-6">
              <span className="text-[clamp(2.4rem,5.5vw,4.6rem)] font-heading font-extrabold text-[#131B2A] tracking-tight leading-[1.05]">
                Transforming
              </span>
              <span className="serif-italic text-gradient-orange text-[clamp(2.8rem,6.8vw,5.6rem)] leading-[0.98] py-1">
                Strategy Into Results
              </span>
              <span className="text-[clamp(2.2rem,5vw,4.2rem)] font-heading font-black tracking-tight leading-[1.05] text-[#131B2A] flex flex-wrap gap-x-3">
                <span className="text-outline">ENGINEERED</span>
                <span>FOR ROI</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-sans">
              Backed by <strong className="text-[#131B2A] font-bold">₹15 Cr+</strong> in managed ad spend, we bridge the gap between creative vision and measurable ROI. V Agency engineers campaigns that don't just look expensive—they scale revenue.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-7">
              <a
                href="#services"
                className="group pl-7 pr-3 py-3.5 rounded-full text-white font-bold text-sm tracking-wider uppercase inline-flex items-center gap-4 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(90deg,#131B2A 0%,#2a1a2a 100%)" }}
              >
                Our Services
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45"
                  style={{ background: "linear-gradient(135deg,#FF8000,#EB392F)" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm tracking-wider uppercase hover:border-[#131B2A] hover:text-[#131B2A] transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Premium Partner Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* Meta Business Partner */}
              <div className="inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-inner">
                  <MetaLogo className="w-6 h-6" />
                </div>
                <div className="leading-tight pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] uppercase tracking-[0.18em] font-extrabold text-slate-400">
                      Meta
                    </span>
                    <svg className="w-3 h-3 text-[#0866FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-[13px] font-extrabold text-[#131B2A] leading-none mt-0.5">
                    Business Partner
                  </div>
                </div>
              </div>

              {/* WhatsApp Business API Partner */}
              <div className="inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner"
                  style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>
                <div className="leading-tight pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] uppercase tracking-[0.18em] font-extrabold text-slate-400">
                      WhatsApp
                    </span>
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-[13px] font-extrabold text-[#131B2A] leading-none mt-0.5">
                    Business API Partner
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm max-w-lg">
              <div className="text-center p-2">
                <div className="big-num text-2xl sm:text-3xl text-[#131B2A]">₹15Cr+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Ad Spend</div>
              </div>
              <div className="text-center p-2 border-x border-slate-200/70">
                <div className="big-num text-2xl sm:text-3xl text-gradient-orange">5X+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Avg. ROAS</div>
              </div>
              <div className="text-center p-2">
                <div className="big-num text-2xl sm:text-3xl text-[#131B2A]">100+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Brands Scaled</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Premium Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <HeroAnimatedPanel />
          </motion.div>
        </div>
      </div>

      {/* Floating Social Icons Bar */}
      <div className="hidden lg:flex flex-col gap-3 fixed left-5 top-1/2 -translate-y-1/2 z-40">
        <a
          href="https://www.facebook.com/profile.php?id=61576703971924"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-[#131B2A] text-white rounded-full shadow-lg hover:bg-[#EB392F] hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/vagency_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-[#131B2A] text-white rounded-full shadow-lg hover:bg-[#EB392F] hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919392978774"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

/* -------- Right side: Premium animated dashboard panel -------- */
const HeroAnimatedPanel = () => {
  // Bar chart values - staggered growth
  const bars = [30, 45, 38, 62, 55, 78, 88];

  return (
    <div className="relative">
      {/* Main glass panel */}
      <div className="relative z-10 p-6 rounded-[32px] glass-premium border border-white/80 shadow-2xl overflow-hidden">
        {/* Ambient gradient corner */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#FFB84D]/40 via-[#EB392F]/25 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-[#131B2A]/10 via-[#EB392F]/10 to-transparent blur-2xl pointer-events-none" />

        {/* Top row: Live badge */}
        <div className="flex items-center justify-between mb-5 relative">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
              <span className="relative rounded-full w-2 h-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700">
              Live · Campaigns Running
            </span>
          </div>
          <div className="flex -space-x-1.5">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-white shadow flex items-center justify-center text-[9px] font-bold text-[#EB392F]">M</div>
            <div className="w-6 h-6 rounded-full bg-white border-2 border-white shadow flex items-center justify-center text-[9px] font-bold text-[#0866FF]">f</div>
            <div className="w-6 h-6 rounded-full bg-white border-2 border-white shadow flex items-center justify-center text-[9px] font-bold text-emerald-600">W</div>
          </div>
        </div>

        {/* Big counter - ROAS */}
        <div className="mb-5 relative">
          <div className="flex items-baseline gap-2">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-500">
              Blended ROAS · This Month
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <div
              className="text-5xl sm:text-6xl font-heading font-black leading-none"
              style={{
                background: "linear-gradient(135deg,#FFB84D,#FF8000,#EB392F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <AnimatedCounter to={6.4} decimals={1} suffix="x" duration={1.8} />
            </div>
            <div className="flex items-center gap-1 pb-1">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-extrabold text-emerald-600">+38%</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Across ₹42L this month · <span className="font-bold text-[#131B2A]">₹2.7 Cr revenue</span>
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="relative rounded-2xl bg-white/70 border border-slate-100 p-4 mb-4 backdrop-blur">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
              Daily Ad Spend (7d)
            </span>
            <span className="text-[10px] font-bold text-[#EB392F]">↗ Optimizing</span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {bars.map((val, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${val}%`, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-t-md relative overflow-hidden"
                style={{
                  background:
                    i === bars.length - 1
                      ? "linear-gradient(180deg,#EB392F,#FF8000)"
                      : "linear-gradient(180deg,#131B2A,#2a1a2a)",
                }}
              >
                {i === bars.length - 1 && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Stat cards row - animated counters */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Target className="w-3 h-3 text-[#EB392F]" />
              <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-500">Leads</span>
            </div>
            <div className="text-lg font-heading font-black text-[#131B2A] leading-none">
              <AnimatedCounter to={1284} duration={2} />
            </div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">+22%</div>
          </div>
          <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Zap className="w-3 h-3 text-[#FF8000]" />
              <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-500">CTR</span>
            </div>
            <div className="text-lg font-heading font-black leading-none"
                 style={{ background: "linear-gradient(90deg,#FF8000,#EB392F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              <AnimatedCounter to={4.8} decimals={1} suffix="%" duration={2} />
            </div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">+11%</div>
          </div>
          <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Rocket className="w-3 h-3 text-emerald-500" />
              <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-500">CAC</span>
            </div>
            <div className="text-lg font-heading font-black text-[#131B2A] leading-none">
              ₹<AnimatedCounter to={187} duration={2} />
            </div>
            <div className="text-[9px] text-emerald-600 font-bold mt-0.5">-42%</div>
          </div>
        </div>
      </div>

      {/* Floating notification cards */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="hidden md:flex items-center gap-3 absolute -left-8 top-10 z-20 bg-white pl-2 pr-4 py-2 rounded-2xl border border-slate-200 shadow-xl animate-float-med"
      >
        <span className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
          <Activity className="w-4 h-4 text-white" />
        </span>
        <div className="leading-tight">
          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
            WhatsApp Auto
          </div>
          <div className="text-xs font-extrabold text-[#131B2A]">+184 leads today</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-3 absolute -right-6 bottom-14 z-20 bg-white pl-2 pr-4 py-2 rounded-2xl border border-slate-200 shadow-xl animate-float-slow"
      >
        <span className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ background: "linear-gradient(135deg,#FFB84D,#EB392F)" }}>
          <TrendingUp className="w-4 h-4" />
        </span>
        <div className="leading-tight">
          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
            Meta Campaign
          </div>
          <div className="text-xs font-extrabold text-[#131B2A]">Scaled 3.2x today</div>
        </div>
      </motion.div>

      {/* Orbit accent SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 -z-10"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="animate-spin-slow"
          style={{ transformOrigin: "center" }}
        />
        <defs>
          <linearGradient id="orbitGrad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EB392F" />
            <stop offset="100%" stopColor="#FFB84D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
