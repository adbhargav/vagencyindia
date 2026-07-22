import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F1523] pt-24 pb-8 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#EB392F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#FF8000]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 premium-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & CTA (Wide) */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 relative flex items-center justify-center">
                {/* V Logo icon (Simplified CSS representation) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EB392F] to-[#FF8000] transform skew-x-[-15deg] rounded-sm opacity-20 blur-sm"></div>
                <div className="relative flex">
                  <div className="w-2.5 h-6 bg-gradient-to-b from-white to-slate-400 transform skew-x-[-15deg] origin-bottom-right rounded-sm"></div>
                  <div className="w-2.5 h-8 bg-gradient-to-b from-[#EB392F] to-[#FF8000] transform skew-x-[15deg] origin-bottom-left -ml-1 rounded-sm"></div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl leading-none mb-1 tracking-tight">V Agency</h3>
                <p className="text-[9px] tracking-[0.25em] text-slate-400 uppercase font-bold">Studio · India · Worldwide</p>
              </div>
            </div>

            <h2 className="font-heading font-extrabold text-white text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-6">
              Websites <span className="serif-italic text-gradient-orange font-normal">engineered</span> to grow revenue.
            </h2>
            
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-sm font-sans">
              High-converting lead generation systems for ambitious brands worldwide.
            </p>

            {/* Socials & WhatsApp */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="h-12 px-6 rounded-full border border-white/10 flex items-center gap-2 text-white font-bold text-sm hover:bg-white/5 hover:border-white/20 transition-colors group">
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-8">
              Quick Links
            </h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Industries', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase() === 'work' ? 'work' : '#' + item.toLowerCase()}`} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-8">
              Services
            </h4>
            <ul className="space-y-5">
              {[
                'Performance & Growth',
                'Creative Studio',
                'Tech & Automation'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Offices */}
          <div className="lg:col-span-3 pt-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-6">
              Contact Us
            </h4>
            
            <div className="space-y-4 mb-10">
              <a href="tel:+919392978774" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">+91 93929 78774</span>
              </a>
            </div>

            <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-6">
              Offices
            </h4>
            
            <div className="space-y-6">
              {[
                { city: 'Hyderabad', desc: 'Plot 158C, Addagutta Society, Kukatpally, Telangana, 500085' },
                { city: 'Faridabad', desc: 'Green Field Colony, Haryana, 121010' },
                { city: 'Visakhapatnam', desc: 'Bhagat Singh Nagar, Near Vizag International Airport, Andhra Pradesh, 530027' }
              ].map((office) => (
                <div key={office.city} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#EB392F]/10 border border-[#EB392F]/20 flex items-center justify-center flex-shrink-0 text-[#EB392F]">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold mb-1">{office.city}</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{office.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} V Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
