import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    industry: "TECHNOLOGY",
    name: "Rajesh",
    title: "CEO",
    company: "TechVentures",
    image: "https://i.pravatar.cc/150?img=12",
    stars: 5,
    result: "100% BRAND RECOGNITION",
    textBeforeHighlight: "Exceptional creativity and professionalism! The team delivered beyond our expectations and ",
    highlight: "transformed our brand identity completely.",
    textAfterHighlight: ""
  },
  {
    id: 2,
    industry: "INNOVATION",
    name: "Priya",
    title: "Marketing Director",
    company: "InnovateCorp",
    image: "https://i.pravatar.cc/150?img=47",
    stars: 4,
    result: "RECORD PROJECT SUCCESS",
    textBeforeHighlight: "Outstanding work! Their attention to detail and commitment to excellence ",
    highlight: "made our project a huge success.",
    textAfterHighlight: " Highly recommended!"
  },
  {
    id: 3,
    industry: "STARTUP",
    name: "Venkatesh Reddy",
    title: "Founder",
    company: "StartupHub",
    image: "https://i.pravatar.cc/150?img=33",
    stars: 5,
    result: "GAME-CHANGING RESULTS",
    textBeforeHighlight: "Working with this team was a ",
    highlight: "game-changer for our business.",
    textAfterHighlight: " They understood our vision perfectly and delivered stunning results."
  },
  {
    id: 4,
    industry: "RETAIL",
    name: "Lakshmi",
    title: "Brand Manager",
    company: "RetailPro",
    image: "https://i.pravatar.cc/150?img=45",
    stars: 5,
    result: "FLAWLESS EXECUTION",
    textBeforeHighlight: "Incredible talent and dedication! They brought fresh ideas to the table and ",
    highlight: "executed flawlessly.",
    textAfterHighlight: " Our brand has never looked better."
  },
  {
    id: 5,
    industry: "FINTECH",
    name: "Arun Kumar",
    title: "VP Marketing",
    company: "FinTech Solutions",
    image: "https://i.pravatar.cc/150?img=14",
    stars: 4,
    result: "MEASURABLE ROI",
    textBeforeHighlight: "Professional, creative, and reliable. The team exceeded all our expectations and ",
    highlight: "delivered a campaign that drove real results.",
    textAfterHighlight: ""
  },
  {
    id: 6,
    industry: "MEDIA",
    name: "Divya Ramesh",
    title: "Creative Head",
    company: "MediaWorks",
    image: "https://i.pravatar.cc/150?img=48",
    stars: 5,
    result: "SEAMLESS COLLABORATION",
    textBeforeHighlight: "A pleasure to work with! Their innovative approach and ",
    highlight: "seamless execution",
    textAfterHighlight: " made our collaboration highly successful."
  },
  {
    id: 7,
    industry: "E-COMMERCE",
    name: "Suresh",
    title: "Director",
    company: "E-Commerce Plus",
    image: "https://i.pravatar.cc/150?img=51",
    stars: 4,
    result: "REMARKABLE GROWTH",
    textBeforeHighlight: "Top-notch service from start to finish. The team's expertise and creativity ",
    highlight: "helped us achieve remarkable growth",
    textAfterHighlight: " in our market."
  },
  {
    id: 8,
    industry: "ENTERPRISE",
    name: "Anjali",
    title: "Head of Communications",
    company: "GlobalTech",
    image: "https://i.pravatar.cc/150?img=44",
    stars: 5,
    result: "STUNNING DESIGNS",
    textBeforeHighlight: "Simply amazing! They ",
    highlight: "transformed our vision into reality",
    textAfterHighlight: " with stunning designs and strategic thinking. Can't recommend them enough!"
  },
  {
    id: 9,
    industry: "DIGITAL",
    name: "Karthik",
    title: "Co-Founder",
    company: "Digital Dynamics",
    image: "https://i.pravatar.cc/150?img=15",
    stars: 5,
    result: "COMPETITIVE EDGE",
    textBeforeHighlight: "Exceptional quality and professionalism. The team's creative solutions ",
    highlight: "helped us stand out in a competitive marketplace.",
    textAfterHighlight: ""
  },
  {
    id: 10,
    industry: "LOGISTICS",
    name: "Meera",
    title: "Operations Manager",
    company: "LogiCore",
    image: "https://i.pravatar.cc/150?img=26",
    stars: 4,
    result: "GOALS EXCEEDED",
    textBeforeHighlight: "Fantastic experience! Their strategic approach and creative excellence ",
    highlight: "delivered results that far exceeded our initial goals.",
    textAfterHighlight: ""
  },
  {
    id: 11,
    industry: "CONSTRUCTION",
    name: "Prakash",
    title: "Managing Director",
    company: "BuildRight",
    image: "https://i.pravatar.cc/150?img=52",
    stars: 5,
    result: "INNOVATIVE IDEAS",
    textBeforeHighlight: "The best creative partner we've worked with. Their ",
    highlight: "innovative ideas and flawless execution",
    textAfterHighlight: " made all the difference."
  },
  {
    id: 12,
    industry: "FASHION",
    name: "Deepa Raghavan",
    title: "Chief Brand Officer",
    company: "FashionForward",
    image: "https://i.pravatar.cc/150?img=38",
    stars: 5,
    result: "PERFECT ALIGNMENT",
    textBeforeHighlight: "Outstanding creativity and professionalism! They understood our brand perfectly and ",
    highlight: "delivered campaigns that resonated with our audience.",
    textAfterHighlight: ""
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#EB392F]/5 to-transparent blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-bl from-[#FF8000]/5 to-transparent blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
                VOICES FROM OUR FOUNDERS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-tight">
              Results speak <span className="serif-italic text-gradient-orange">louder</span><br />than promises.
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="text-slate-500 text-sm leading-relaxed font-sans">
              A behind-the-scenes look at the growth outcomes we've engineered for the founders we partner with — verified, measurable, on the record.
            </p>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden flex flex-col md:flex-row">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col md:flex-row w-full"
              >
                {/* Left Panel - Reviewer Info */}
                <div className="p-8 md:p-12 md:w-[35%] md:border-r border-slate-100 flex flex-col">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 block mb-8">
                      {current.industry}
                    </span>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 bg-slate-100">
                        <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#131B2A] text-base">{current.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{current.title}</p>
                        <p className="text-xs font-semibold text-[#EB392F] mt-0.5">{current.company}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#EB392F] text-[#EB392F]" />
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[#EB392F]/10 rounded-full border border-[#EB392F]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
                      <span className="text-[10px] tracking-widest uppercase font-bold text-[#EB392F]">
                        RESULT · {current.result}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Review Content */}
                <div className="p-8 md:p-12 md:w-[65%] flex flex-col justify-between border-t md:border-t-0 border-slate-100 relative">
                  {/* Subtle Quote Mark Background */}
                  <div className="absolute top-6 left-8 opacity-20 pointer-events-none">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EB392F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1 0 1.5-.5 1.5L15 21z"></path>
                     </svg>
                  </div>

                  <div className="mt-6 relative z-10">
                    <p className="font-heading font-medium text-2xl md:text-3xl text-[#131B2A] leading-[1.3] tracking-tight">
                      {current.textBeforeHighlight}{" "}
                      <span className="font-serif italic text-gradient-orange font-normal">
                        {current.highlight}
                      </span>
                      {current.textAfterHighlight}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-12 md:mt-16">
                    <div className="w-12 h-[1px] bg-slate-200"></div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400">
                      VERIFIED CLIENT REVIEW
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination & Controls (Fixed over the animated content in bottom left) */}
            <div className="absolute bottom-0 left-0 w-full md:w-[35%] p-8 md:px-12 md:py-8 flex items-center justify-between border-t border-slate-100 bg-white/50 backdrop-blur-sm z-20">
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-lg text-[#131B2A]">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-slate-400">
                    / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#131B2A] hover:border-slate-300 transition-colors bg-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-[#EB392F] text-white flex items-center justify-center hover:bg-[#d63026] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
            </div>

            {/* Top Border Gradient (Progress-like visual from image) */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EB392F]/20 to-transparent"></div>
          </div>
          
          {/* Bottom Progress Border extending based on index */}
          <div className="absolute -bottom-[1px] left-8 right-8 md:left-12 md:right-12 h-[3px] bg-slate-100 rounded-full overflow-hidden z-20">
             <motion.div 
               key={`progress-${currentIndex}`}
               className="h-full bg-gradient-to-r from-[#EB392F] to-[#FF8000]"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 6, ease: "linear" }}
             />
          </div>
        </div>

        {/* Carousel Indicators (Dots) below card */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#EB392F]" : "w-4 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;