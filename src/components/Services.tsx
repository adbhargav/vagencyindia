import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  TrendingUp,
  Clapperboard,
  Award,
  Zap,
  Code2,
  X
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Performance & Growth",
    subtitle: "The engine that scales your revenue.",
    description: "Data-driven growth strategies backed by ₹15 Cr+ in managed ad spend. We architect conversion funnels that turn clicks into customers, leveraging battle-tested frameworks that have generated millions in revenue for our clients.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    features: [
      "Precision Meta Ads (Leveraging ₹15 Cr+ Ad Spend Data)",
      "Scientific A/B Testing (Creative & Audience Iteration)",
      "Hyper-Detailed Targeting (Behavioral & Interest Layering)",
      "Google PPC & Search (High-Intent Capture)",
      "Conversion Funnel Architecture"
    ],
    benefits: [
      "3-5x ROAS improvement within 90 days",
      "Predictable, scalable customer acquisition",
      "Real-time performance dashboards",
      "Lower CAC through continuous optimization"
    ],
    process: [
      "Audit & Strategy - Deep dive into your current funnel",
      "Campaign Architecture - Build high-converting ad systems",
      "Launch & Test - Scientific iteration at scale",
      "Scale & Optimize - Turn winners into profit machines"
    ],
    metrics: {
      experience: "₹15 Cr+",
      label: "Ad Spend Managed"
    }
  },
  {
    id: "02",
    title: "Creative Studio",
    subtitle: "Visuals engineered to stop the scroll.",
    description: "Premium content creation that captures attention in milliseconds. From viral scripts to cinematic brand films, we craft visuals that convert. Our creative team combines storytelling mastery with performance marketing principles to create content that doesn't just look good—it sells.",
    icon: Clapperboard,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    features: [
      "Ad Film Production & Brand Shoots",
      "Viral Scripting & Storyboarding",
      "High-Conversion Video Editing (Reels/Shorts)",
      "Premium Graphic Design (Social & Ad Assets)",
      "Motion Graphics & Animation",
      "Brand Intros & Motion Identity (Logo Reveals & Animations)"
    ],
    benefits: [
      "Scroll-stopping content that drives engagement",
      "Professional brand aesthetics across all platforms",
      "Fast turnaround without compromising quality",
      "Content libraries optimized for paid & organic"
    ],
    process: [
      "Creative Brief - Understand your brand DNA",
      "Concept Development - Scripts, storyboards, style frames",
      "Production - Shoot, edit, animate with precision",
      "Delivery & Iteration - Refinement based on performance"
    ],
    metrics: {
      experience: "500+",
      label: "Videos Produced"
    }
  },
  {
    id: "03",
    title: "Brand Authority",
    subtitle: "Building trust that lowers your acquisition costs.",
    description: "Strategic brand positioning that transforms your social presence into a trust-building machine. Authority reduces friction, increases conversions, and creates a moat around your business. We help you become the obvious choice in your category through consistent, strategic brand building.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    features: [
      "360° Social Media Management (SMM)",
      "Content Strategy & Calendars",
      "Search Engine Optimization (SEO)",
      "Brand Identity & Positioning",
      "Community Management"
    ],
    benefits: [
      "Establish thought leadership in your industry",
      "Higher conversion rates from warm audiences",
      "Reduced reliance on cold paid traffic",
      "Long-term brand equity that compounds over time"
    ],
    process: [
      "Brand Audit - Assess current positioning & perception",
      "Strategy Framework - Define voice, values, visual identity",
      "Content Engine - Deploy consistent, valuable content",
      "Community Growth - Engage, nurture, convert"
    ],
    metrics: {
      experience: "50+",
      label: "Brands Managed"
    }
  },
  {
    id: "04",
    title: "Tech & Automation",
    subtitle: "Systems that nurture leads while you sleep.",
    description: "Intelligent automation that works 24/7. Connect every touchpoint, nurture every lead, and never miss an opportunity with our sales enablement systems. We build the infrastructure that turns your marketing into a predictable revenue machine, eliminating manual work and human error.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    features: [
      "WhatsApp API Automation",
      "CRM Integration & Lead Flow",
      "Automated Nurture Sequences",
      "Sales Enablement Setup"
    ],
    benefits: [
      "Instant lead response (under 60 seconds)",
      "Zero leads slip through the cracks",
      "Automated follow-ups that convert",
      "Complete visibility into your sales pipeline"
    ],
    process: [
      "System Mapping - Understand your current workflow",
      "Integration Setup - Connect all your tools seamlessly",
      "Automation Build - Create intelligent nurture sequences",
      "Training & Handoff - Your team becomes power users"
    ],
    metrics: {
      experience: "10,000+",
      label: "Messages Automated Daily"
    }
  },
  {
    id: "05",
    title: "Web Development",
    subtitle: "Conversion-focused websites that sell 24×7.",
    description: "Blazing-fast, SEO-optimized, conversion-focused websites built for scale. From high-converting landing pages to full-stack e-commerce and custom web apps, we engineer digital experiences that turn visitors into revenue. Every pixel, every load-time, every CTA — engineered for one thing: conversions.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    features: [
      "High-Converting Landing Pages",
      "E-Commerce Websites (Shopify / Custom)",
      "Full-Stack Web Applications",
      "SEO-Optimized & Blazing Fast (Core Web Vitals)",
      "Meta Pixel + CAPI + GA4 Integration",
      "Ongoing Maintenance & Optimization"
    ],
    benefits: [
      "Sub-2s load times that lift conversion",
      "Pixel-perfect, mobile-first UX",
      "Built-in tracking so every ₹ is measurable",
      "Scales seamlessly with your ad traffic"
    ],
    process: [
      "Discovery - Map audience, goals, funnel",
      "Design - High-converting UX + brand-aligned UI",
      "Development - Fast, secure, SEO-ready build",
      "Launch & Optimize - Ship, measure, iterate"
    ],
    metrics: {
      experience: "200+",
      label: "Websites Shipped"
    }
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const modalVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#EB392F]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-6">
              Expert Digital Services to{" "}
              <span className="serif-italic text-gradient-orange">Grow your Brand</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8 font-sans">
              From strategy to execution, we offer a full range of digital marketing 
              and content creation services tailored to help your brand thrive online.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              style={{ background: "linear-gradient(90deg,#131B2A 0%,#2a1a2a 100%)" }}
            >
              <span>Discuss Your Project</span>
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45"
                    style={{ background: "linear-gradient(135deg,#FF8000,#EB392F)" }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-[#EB392F]/40 transition-all duration-300 cursor-pointer relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300"
                        style={{ background: "linear-gradient(135deg,#131B2A 0%,#2a1a2a 60%,#EB392F 130%)" }}
                      >
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="big-num text-3xl text-slate-200 group-hover:text-[#EB392F]/20 transition-colors">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-[#131B2A] mb-2 group-hover:text-[#EB392F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EB392F]">
                      {service.metrics.experience} {service.metrics.label}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#131B2A] group-hover:bg-[#EB392F] group-hover:text-white transition-all">
                      <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedService(null)}
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-card border-2 border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-v-red hover:text-background hover:border-v-red transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Image Header */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <motion.img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    
                    {/* Floating Metrics Badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-background/90 backdrop-blur-md border-2 border-v-red rounded-2xl px-6 py-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-2xl font-bold text-v-red">{selectedService.metrics.experience}</div>
                      <div className="text-xs text-muted-foreground font-semibold">{selectedService.metrics.label}</div>
                    </motion.div>

                    {/* Service Icon Badge */}
                    <motion.div
                      className="absolute bottom-6 left-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center shadow-xl">
                        <selectedService.icon className="w-10 h-10 text-background" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Header Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-8"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-0.5 bg-v-red" />
                        <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
                          Service {selectedService.id}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">
                        {selectedService.title}
                      </h3>
                      
                      <p className="text-xl text-v-red font-semibold mb-6">
                        {selectedService.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {selectedService.description}
                      </p>
                    </motion.div>

                    {/* Two Column Layout for Features & Benefits */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-v-cream/30 rounded-2xl p-6 border border-border"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center">
                            <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg">What's Included</h4>
                        </div>
                        <div className="space-y-3">
                          {selectedService.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-v-red mt-2 flex-shrink-0" />
                              <p className="text-sm text-foreground leading-relaxed">{feature}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Benefits */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-v-red/5 to-v-yellow/5 rounded-2xl p-6 border border-v-red/20"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-v-red flex items-center justify-center">
                            <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg">Key Benefits</h4>
                        </div>
                        <div className="space-y-3">
                          {selectedService.benefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <svg className="w-5 h-5 text-v-red mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <p className="text-sm text-foreground font-medium leading-relaxed">{benefit}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Process Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center">
                          <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg">Our Process</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedService.process.map((step, index) => {
                          const [title, description] = step.split(' - ');
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="relative bg-card border border-border rounded-xl p-5 hover:border-v-red/30 transition-all duration-300"
                            >
                              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-v-yellow to-v-red flex items-center justify-center text-background font-bold text-sm shadow-lg">
                                {index + 1}
                              </div>
                              <h5 className="font-bold text-base mb-2 text-v-red">{title}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-v-cream/50 to-v-yellow/20 rounded-2xl p-8 border border-v-red/20"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Ready to Get Started?</h4>
                          <p className="text-muted-foreground">Let's discuss how we can help grow your business.</p>
                        </div>
                        <motion.a
                          href="#contact"
                          onClick={() => setSelectedService(null)}
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-v-yellow to-v-red text-background font-semibold rounded-full hover:shadow-lg hover:shadow-v-red/30 transition-all duration-300 whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Book a Call
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;