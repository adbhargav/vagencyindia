import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0F1523] rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Background Grid Pattern & Glows */}
          <div className="absolute inset-0 premium-grid-bg opacity-30" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#EB392F]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EB392F]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Sparkles className="w-4 h-4 text-[#EB392F]" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/80">
                  LET'S GROW YOUR BUSINESS
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
                Ready for a website that <span className="serif-italic text-gradient-orange font-normal">actually</span> generates leads?
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-lg font-sans">
                Book a free strategy call and we'll map a conversion-focused digital presence tailored to your goals.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  {/* Overlapping Circles */}
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-[#EB392F] border-2 border-[#0F1523] opacity-90 shadow-sm" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    150+ founders trust us
                  </span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10" />

                <div>
                  <span className="text-sm italic text-slate-400 font-serif">
                    Reply within 24 hours · No pressure
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-xl relative">
              <div className="mb-8">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#EB392F] block mb-2">
                  QUICK INQUIRY
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#131B2A]">
                  Start a conversation
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all placeholder:text-slate-400 text-[#131B2A]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rajesh@company.com"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all placeholder:text-slate-400 text-[#131B2A]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">
                    INDUSTRY
                  </label>
                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#EB392F]/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all text-[#131B2A] appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="text-slate-400">Select Industry</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#131B2A] text-white rounded-xl font-bold text-sm hover:bg-[#131B2A]/90 transition-colors group"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#EB392F]/5 text-[#EB392F] rounded-xl font-bold text-sm hover:bg-[#EB392F]/10 transition-colors border border-[#EB392F]/10"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Consultation</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;