import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MessageCircle, Instagram, Globe } from "lucide-react";

/**
 * Dedicated Automation Payment section.
 * Lets existing clients pay their automation setup, subscription,
 * or renewal via pay.vagencyindia.com.
 */
const AutomationPayment = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(120deg,#131B2A 0%,#2a1a2a 60%,#3a1520 100%)" }}
        >
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8000]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#EB392F]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 premium-grid-bg opacity-20 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-14">
            {/* Left: copy */}
            <div className="lg:col-span-8">
              {/* Channel chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {[
                  { icon: MessageCircle, label: "WhatsApp" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Globe, label: "Website Automation" },
                ].map(({ icon: Icon, label }, i) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-white/80"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FF8000]" />
                    {label}
                  </span>
                ))}
              </div>

              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-4">
                💳 Automation <span className="serif-italic text-gradient-orange font-normal">Payment</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Pay your automation setup, subscription, or renewal securely.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <a
                href="https://pay.vagencyindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group pl-7 pr-3 py-4 rounded-full text-white font-bold text-sm tracking-wider uppercase inline-flex items-center gap-4 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(90deg,#FF8000,#EB392F)" }}
              >
                Pay Securely
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-xs lg:text-right">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure checkout · pay.vagencyindia.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationPayment;
