import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    serviceType: "",
    requirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg font-sans">
                Book a free strategy call and we'll map a conversion-focused digital presence tailored to your goals.
              </p>

              {/* Automation Payment card */}
              <a
                href="https://pay.vagencyindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block max-w-md p-5 rounded-2xl bg-gradient-to-br from-[#FF8000] to-[#EB392F] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mb-12"
              >
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-bold text-white/80 mb-2">
                  WhatsApp • Instagram • Website Automation
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading font-extrabold text-lg sm:text-xl leading-tight">
                    💳 Automation Payment
                  </span>
                  <span className="w-9 h-9 shrink-0 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-2">
                  Pay your automation setup, subscription, or renewal securely.
                </p>
              </a>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  {/* Overlapping Founder Portraits */}
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
                      "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                      "https://images.pexels.com/photos/37676879/pexels-photo-37676879.jpeg?w=100&h=100&fit=crop",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Founder ${i + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-[#0F1523] object-cover shadow-sm bg-slate-200"
                        loading="lazy"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0F1523] bg-gradient-to-br from-[#EB392F] to-[#FF8000] flex items-center justify-center text-[10px] font-extrabold text-white shadow-sm">
                      +145
                    </div>
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
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden">
              {/* Ambient gradient corner */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFB84D]/30 via-[#EB392F]/20 to-transparent blur-2xl pointer-events-none" />

              <div className="mb-6 relative">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EB392F]/10 border border-[#EB392F]/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F] animate-ping" />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#EB392F]">
                    QUICK QUERY
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#131B2A] leading-tight">
                  Tell us about your <span className="serif-italic text-gradient-orange">project</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1.5">
                  Takes 40 seconds · No spam · Reply within 24 hrs
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rajesh Kumar"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all placeholder:text-slate-400 text-[#131B2A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajesh@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all placeholder:text-slate-400 text-[#131B2A]"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all text-[#131B2A] appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled>Select Industry</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="D2C / E-commerce">D2C / E-commerce</option>
                        <option value="EdTech">EdTech</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Beauty / Personal Care">Beauty / Personal Care</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5">
                      Service Type
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all text-[#131B2A] appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled>Select Service</option>
                        <option value="Performance Marketing">Performance Marketing</option>
                        <option value="Meta Ads Management">Meta Ads Management</option>
                        <option value="Google Ads Management">Google Ads Management</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Creative & Ad Production">Creative & Ad Production</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Branding">Branding</option>
                        <option value="Web Development">Web Development</option>
                        <option value="WhatsApp Automation">WhatsApp Automation</option>
                        <option value="SEO">SEO</option>
                        <option value="Full Growth Partnership">Full Growth Partnership</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5">
                    Requirement Description
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={3}
                    placeholder="A few lines about your goals, current ad spend, timeline, or challenges…"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EB392F]/20 focus:border-[#EB392F] transition-all placeholder:text-slate-400 text-[#131B2A] resize-none"
                    required
                  />
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Min. 20 characters</span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {formData.requirement.length}/500
                    </span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-3.5 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(90deg,#131B2A 0%,#2a1a2a 100%)" }}
                  >
                    <span>Submit Inquiry</span>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45"
                          style={{ background: "linear-gradient(135deg,#FF8000,#EB392F)" }}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#EB392F]/5 text-[#EB392F] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#EB392F]/10 transition-colors border border-[#EB392F]/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Consultation</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] text-slate-500 tracking-wide">
                    Your details are safe. We never share them.
                  </span>
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