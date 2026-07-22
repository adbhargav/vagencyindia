import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const WhatWeDo = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB392F]/5 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Eyebrow & Title */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
            <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
              OUR CORE IDENTITY
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            What <span className="serif-italic text-gradient-orange">we do</span> for your growth
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Big Feature Callout */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 rounded-3xl bg-[#131B2A] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#EB392F]/20 blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EB392F] mb-4 block">
                01 / PERFORMANCE
              </span>
              <h3 className="big-num text-5xl sm:text-6xl text-white mb-6">
                What <br />
                <span className="text-[#EB392F]">we</span> <br />
                do<span className="text-gradient-orange">?</span>
              </h3>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-400 text-sm font-sans leading-relaxed">
                Full-scale growth agency scaling D2C, E-commerce, and high-ticket service brands with data-driven precision.
              </p>
            </div>
          </motion.div>

          {/* Center Column - Digital */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between hover-lift shadow-sm relative group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EB392F]/10 flex items-center justify-center text-[#EB392F] mb-6 font-bold text-lg">
                02
              </div>
              <h3 className="font-heading font-bold text-3xl text-[#131B2A] mb-3">Digital.</h3>
              <p className="serif-italic text-lg text-[#EB392F] mb-4">
                We create super-rich experiences online!
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                V Agency is a full-scale Digital Marketing Agency based out of India. 
                We mix our years of experience and knowledge to create solutions for 
                our clients which are not only performance driven, but also creative. 
                We are running kick-ass digital campaigns for our clients, even as you 
                read this!
              </p>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#131B2A] hover:text-[#EB392F] transition-colors group/link"
            >
              <span>ABOUT US</span>
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-[#EB392F] group-hover/link:text-white transition-all">
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Right Column - And More Digital */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between hover-lift shadow-sm relative group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 font-bold text-lg">
                03
              </div>
              <h3 className="font-heading font-bold text-3xl text-[#131B2A] mb-3">
                And More Digital.
              </h3>
              <p className="serif-italic text-lg text-orange-600 mb-4">
                Marketing brands with care
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                What is marketing if it is not performance driven? We create digital 
                experiences which stick with audiences and also reach the end objective. 
                Trust us with making your brand visible and desired, with highly focused 
                performance marketing.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#131B2A] hover:text-[#EB392F] transition-colors group/link"
            >
              <span>OUR SERVICES</span>
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-[#EB392F] group-hover/link:text-white transition-all">
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;
