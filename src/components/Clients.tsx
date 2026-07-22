import React from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/18.jpeg";
import img19 from "../assets/19.jpeg";
import img20 from "../assets/20.jpeg";
import img21 from "../assets/21.jpeg";
import img22 from "../assets/22.jpeg";
import img23 from "../assets/23.jpeg";
import img24 from "../assets/24.jpeg";
import img25 from "../assets/25.jpeg";
import img26 from "../assets/26.jpeg";
import img27 from "../assets/27.jpeg";
import img28 from "../assets/28.jpeg";

const row1 = [
  { id: 1, logo: img1, industry: "WELLNESS" },
  { id: 2, logo: img2, industry: "HEALTHCARE" },
  { id: 3, logo: img3, industry: "INDUSTRIALS" },
  { id: 4, logo: img4, industry: "REAL ESTATE" },
  { id: 5, logo: img5, industry: "FINANCE" },
  { id: 6, logo: img6, industry: "D2C ORGANIC" },
  { id: 7, logo: img7, industry: "SAAS" },
  { id: 8, logo: img8, industry: "EDTECH" },
  { id: 9, logo: img9, industry: "DESIGN" },
  { id: 10, logo: img10, industry: "BEAUTY" },
  { id: 11, logo: img11, industry: "RETAIL" },
  { id: 12, logo: img12, industry: "LOGISTICS" },
  { id: 13, logo: img13, industry: "MANUFACTURING" },
  { id: 14, logo: img14, industry: "MEDIA" },
];

const row2 = [
  { id: 15, logo: img15, industry: "WELLNESS" },
  { id: 16, logo: img16, industry: "HEALTHCARE" },
  { id: 17, logo: img17, industry: "INDUSTRIALS" },
  { id: 18, logo: img18, industry: "REAL ESTATE" },
  { id: 19, logo: img19, industry: "FINANCE" },
  { id: 20, logo: img20, industry: "D2C ORGANIC" },
  { id: 21, logo: img21, industry: "SAAS" },
  { id: 22, logo: img22, industry: "EDTECH" },
  { id: 23, logo: img23, industry: "DESIGN" },
  { id: 24, logo: img24, industry: "BEAUTY" },
  { id: 25, logo: img25, industry: "RETAIL" },
  { id: 26, logo: img26, industry: "LOGISTICS" },
  { id: 27, logo: img27, industry: "MANUFACTURING" },
  { id: 28, logo: img28, industry: "MEDIA" },
];

const MarqueeItem = ({ logo, industry }: { logo: string, industry: string }) => (
  <div className="flex items-center gap-6 sm:gap-10 mx-6 sm:mx-10">
    <div className="h-14 sm:h-16 w-28 sm:w-36 flex items-center justify-center">
      <img src={logo} alt="Client logo" className="max-h-full max-w-full object-contain mix-blend-multiply" loading="lazy" />
    </div>
    <div className="w-[1px] h-8 sm:h-10 bg-slate-200"></div>
    <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold text-slate-400 whitespace-nowrap">
      {industry}
    </span>
    <div className="w-1.5 h-1.5 rounded-full bg-[#EB392F]"></div>
  </div>
);

const Clients = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 sm:w-12 h-[1px] bg-slate-400"></div>
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-slate-600">
              TRUSTED BY AMBITIOUS BRANDS
            </span>
          </div>
          
          <div className="text-sm sm:text-base">
            <span className="font-bold text-[#131B2A]">150+</span>{" "}
            <span className="font-serif italic text-slate-500 text-lg sm:text-xl">projects shipped across</span>{" "}
            <span className="font-bold text-[#131B2A]">12</span>{" "}
            <span className="font-serif italic text-slate-500 text-lg sm:text-xl">industries</span>
          </div>
        </div>
      </div>

      {/* Marquees */}
      <div className="relative overflow-hidden w-full flex flex-col gap-10 sm:gap-16">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          <div className="flex items-center shrink-0">
            {row1.map((item) => (
              <MarqueeItem key={`r1a-${item.id}`} logo={item.logo} industry={item.industry} />
            ))}
          </div>
          <div className="flex items-center shrink-0">
            {row1.map((item) => (
              <MarqueeItem key={`r1b-${item.id}`} logo={item.logo} industry={item.industry} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          <div className="flex items-center shrink-0">
            {row2.map((item) => (
              <MarqueeItem key={`r2a-${item.id}`} logo={item.logo} industry={item.industry} />
            ))}
          </div>
          <div className="flex items-center shrink-0">
            {row2.map((item) => (
              <MarqueeItem key={`r2b-${item.id}`} logo={item.logo} industry={item.industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;