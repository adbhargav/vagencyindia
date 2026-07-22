import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Onboard = () => {
  const handleRegisterClick = () => {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfDv7dgUC9ZcqSLtsCwEHXlGX-WCFaYwJtaWbr2aIOkeow4NA/viewform?usp=header";
    window.location.href = googleFormUrl;
  };

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-slate-50 relative overflow-hidden hero-mesh py-12">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#EB392F]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#FF8000]/10 blur-3xl pointer-events-none" />

      {/* Back to Home Button */}
      <motion.button
        onClick={handleBackToHome}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-[#EB392F] group-hover:-translate-x-1 transition-transform" />
        <span className="text-slate-700 text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Back to Home
        </span>
      </motion.button>
        
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 260,
        }}
        className="relative w-full max-w-md bg-white border border-slate-200/80 rounded-[32px] shadow-2xl overflow-hidden p-8 sm:p-10"
      >
        {/* Logo Section */}
        <div className="pb-4 flex justify-center">
          <img
            src="https://i.ibb.co/8nVFNhw8/vl.png"
            alt="V Agency Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
            <span className="text-[10px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
              CLIENT ONBOARDING
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading font-extrabold text-[#131B2A] text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
            Let's{" "}
            <span className="serif-italic text-gradient-orange">
              Get Started
            </span>{" "}
            Together!
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 mb-6 text-sm leading-relaxed font-sans">
            Complete our quick onboarding form to help us understand your needs
            and deliver the best results for your business.
          </p>

          {/* Benefits List */}
          <div className="mb-8 space-y-3 text-left">
            {[
              "Quick & easy form – takes 3 minutes",
              "Personalized onboarding experience",
              "Our team will contact you within 24 hours",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-[#EB392F]/10 text-[#EB392F] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-slate-700 text-xs font-semibold">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            className="w-full group py-4 px-6 rounded-full bg-[#131B2A] text-white font-bold tracking-wider uppercase text-xs flex items-center justify-between shadow-lg hover:bg-slate-800 transition-all cursor-pointer"
          >
            <span>Complete Onboarding Form</span>
            <span className="w-8 h-8 rounded-full bg-[#EB392F] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          {/* Privacy Text */}
          <p className="text-[11px] text-slate-400 mt-4 leading-relaxed font-sans">
            Your information is secure with us. We'll only use it to provide you
            with the best service experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Onboard;