import { motion } from "framer-motion";
import { 
  Users, 
  Building, 
  ShoppingCart, 
  Film, 
  Landmark, 
  Building2, 
  GraduationCap, 
  Globe, 
  Heart, 
  Ticket, 
  UtensilsCrossed, 
  Briefcase 
} from "lucide-react";

const industries = [
  { name: "Social Networking", icon: Users, color: "bg-industry-cyan" },
  { name: "Real Estate", icon: Building, color: "bg-industry-yellow" },
  { name: "Ecommerce", icon: ShoppingCart, color: "bg-industry-mint" },
  { name: "Video", icon: Film, color: "bg-industry-peach" },
  { name: "Banking", icon: Landmark, color: "bg-industry-lime" },
  { name: "Enterprise", icon: Building2, color: "bg-industry-pink" },
  { name: "Education", icon: GraduationCap, color: "bg-industry-lavender" },
  { name: "Tour and Travels", icon: Globe, color: "bg-industry-green" },
  { name: "Healthcare", icon: Heart, color: "bg-industry-cyan" },
  { name: "Event & Ticket", icon: Ticket, color: "bg-industry-blue" },
  { name: "Restaurant", icon: UtensilsCrossed, color: "bg-industry-cream" },
  { name: "Business Consultant", icon: Briefcase, color: "bg-industry-mint" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Industries = () => {
  return (
    <section id="industries" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-4">
              Some of our favorite{" "}
              <span className="serif-italic text-gradient-orange">Industries & Niches</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Tailored growth models optimized specifically for audience demographics, buying intent, and conversion behaviors across distinct sectors.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div 
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <motion.div
                  key={industry.name}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 cursor-pointer shadow-sm hover:shadow-md hover:border-[#EB392F]/40 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#131B2A 0%,#2a1a2a 55%,#EB392F 130%)" }}
                  >
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-[#131B2A] text-xs group-hover:text-[#EB392F] transition-colors">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
