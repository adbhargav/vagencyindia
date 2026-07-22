import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden hero-mesh">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#EB392F]/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#FF8000]/10 blur-3xl animate-pulseGlow pointer-events-none" />
      <div className="absolute inset-0 premium-grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Main Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EB392F] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#EB392F]">
                Digital Marketing Agency
              </span>
            </div>

            {/* 3-Line Editorial Split Headline */}
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

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#services"
                className="group pl-7 pr-3 py-3.5 rounded-full bg-[#131B2A] text-white hover:bg-slate-800 font-bold text-sm tracking-wider uppercase inline-flex items-center gap-4 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Our Services
                <span className="w-8 h-8 rounded-full bg-[#EB392F] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
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

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm max-w-lg">
              <div className="text-center p-2">
                <div className="big-num text-2xl sm:text-3xl text-[#131B2A]">₹15Cr+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Ad Spend</div>
              </div>
              <div className="text-center p-2 border-x border-slate-200/70">
                <div className="big-num text-2xl sm:text-3xl text-gradient-orange">10k+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">A/B Tests</div>
              </div>
              <div className="text-center p-2">
                <div className="big-num text-2xl sm:text-3xl text-[#131B2A]">50+</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Brands Scaled</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 p-6 sm:p-8 rounded-[32px] glass-premium border border-white/80 shadow-2xl">
              {/* Image with subtle hover zoom */}
              <div className="relative overflow-hidden rounded-2xl mb-6 group">
                <img
                  src="https://i.ibb.co/8nFgw3Nn/metaaa.png"
                  alt="V Agency Partner Spend"
                  className="w-full max-w-md mx-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Verified Metrics list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/90 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#EB392F]/10 flex items-center justify-center text-[#EB392F]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#131B2A]">₹15 Cr+ Ad Spend</h4>
                      <p className="text-[11px] text-slate-500">Strategies built on massive real data</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold uppercase">Verified</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/90 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#131B2A]">10,000+ A/B Tests</h4>
                      <p className="text-[11px] text-slate-500">Ruthless optimization for maximum ROI</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EB392F]/10 border border-[#EB392F]/20 text-[#EB392F] text-[10px] font-extrabold uppercase">Active</span>
                </div>
              </div>
            </div>
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

export default Hero;