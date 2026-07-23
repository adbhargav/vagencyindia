import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Folder, Monitor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  const handleDriveClick = () => {
    window.open("https://drive.google.com/drive/folders/1Q0AFIqiWAAKJMkfE9n82JwFT_1EfKOMA", "_blank");
  };

  const handleWebClick = () => {
    window.open("https://webportfolio.vagencyindia.com/", "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="pt-32 pb-24 hero-mesh relative overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#EB392F]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#131B2A] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB392F]" />
            <span className="text-[11px] tracking-[0.32em] uppercase font-bold text-[#EB392F]">
              OUR PORTFOLIO
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[#131B2A] text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
            Our <span className="serif-italic text-gradient-orange">Creative Work</span>
          </h1>

          <p className="text-slate-600 text-base leading-relaxed mb-12 max-w-xl font-sans">
            Explore our collection of successful campaigns, brand stories, and
            creative content.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Card - Drive */}
            <div className="rounded-[32px] bg-white border border-slate-200/80 p-8 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EB392F]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-[#EB392F] transition-colors duration-300 shadow-md">
                  <Folder className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-[#131B2A] mb-2">
                    Complete Portfolio Drive
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    Access our full collection of projects including brand shoots,
                    video edits, ad creatives, and high-converting marketing campaigns.
                  </p>
                </div>
              </div>

              <button
                onClick={handleDriveClick}
                className="w-full group inline-flex items-center justify-between gap-4 pl-7 pr-3 py-3.5 rounded-full bg-[#131B2A] text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl cursor-pointer relative z-10 mt-auto"
              >
                <span>View All Assets</span>
                <span className="w-8 h-8 rounded-full bg-[#EB392F] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Second Card - Web Portfolio */}
            <div className="rounded-[32px] bg-[#131B2A] border border-slate-800 p-8 shadow-xl relative overflow-hidden group flex flex-col justify-between h-full text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8000]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#131B2A] group-hover:text-[#FF8000] transition-colors duration-300 shadow-md">
                  <Monitor className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-white mb-2">
                    Websites Portfolio
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    Explore our collection of high-performing, conversion-optimized websites and landing pages engineered for growth.
                  </p>
                </div>
              </div>

              <button
                onClick={handleWebClick}
                className="w-full group inline-flex items-center justify-between gap-4 pl-7 pr-3 py-3.5 rounded-full bg-white text-[#131B2A] text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl cursor-pointer relative z-10 mt-auto"
              >
                <span>View Websites</span>
                <span className="w-8 h-8 rounded-full bg-[#FF8000] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;