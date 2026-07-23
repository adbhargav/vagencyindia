import { motion } from "framer-motion";
import { Monitor, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "5+ Years Of Experience",
    description: "V Agency has been in the market for more than 5 years, and our expert team leads have 10+ years of experience in the industry.",
  },
  {
    icon: Users,
    title: "100% Customer Satisfaction",
    description: "We work for the satisfaction of the client and support as much as possible from all the different aspects.",
  },
  {
    icon: Clock,
    title: "24/7 Hours Support",
    description: "We assign a dedicated point of contact who is available to answer all your queries 24×7.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl leading-tight tracking-tight mb-6">
              What Makes <span className="serif-italic text-gradient-orange">V Agency</span> Different from Others
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-lg font-sans">
              We are a team of experienced marketing professionals who believe in 
              delivering results with an accurate Digital Marketing strategy that 
              will outrank your competitors.
            </p>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300"
                    style={{ background: "linear-gradient(135deg,#131B2A 0%,#2a1a2a 55%,#EB392F 130%)" }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#131B2A] mb-1 group-hover:text-[#EB392F] transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#131B2A] text-white rounded-[32px] p-10 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative radial ambient glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#EB392F]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FF8000]/20 blur-3xl pointer-events-none" />
              
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB392F] inline-block mb-4 animate-ping" />

              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                Let's Start a{" "}
                <span className="serif-italic text-gradient-orange">New Project</span>
                {" "}Together
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto font-sans">
                Take the first step towards revolutionizing your business with us.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-white text-[#131B2A] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get Your Plan</span>
                <span className="w-8 h-8 rounded-full bg-[#EB392F] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
