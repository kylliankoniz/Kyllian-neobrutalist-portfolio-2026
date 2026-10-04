import React from 'react';
import { ArrowUp, Sparkles, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenHireModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-800">
          {/* Left Brand Lockup */}
          <div className="flex items-center gap-3">
            <span className="bg-[#FFE600] text-black font-mono font-black text-sm px-2.5 py-1 rounded-md">
              //
            </span>
            <div>
              <h3 className="font-black text-xl tracking-tight text-white">
                Kyllian.dev
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-0.5">
                Building bold frontend experiences, pixel by pixel
              </p>
            </div>
          </div>

          {/* Right Navigation & Back-to-top */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-bold text-sm">
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-300 hover:text-[#FFE600] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-neutral-300 hover:text-[#FFE600] transition-colors cursor-pointer"
            >
              Works
            </button>
            <button
              onClick={onOpenHireModal}
              className="text-[#FFE600] hover:underline transition-colors cursor-pointer"
            >
              Hire
            </button>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="neo-btn bg-white hover:bg-[#FFE600] text-black w-10 h-10 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#FFE600] ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            Inspired by Defolio • Hand-coded with Tailwind CSS & Neobrutalism aesthetics
          </div>
          <div>
            © {new Date().getFullYear()} Kyllian.dev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
