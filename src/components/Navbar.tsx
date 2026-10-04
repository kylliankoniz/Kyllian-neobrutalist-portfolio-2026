import React, { useState } from 'react';
import { User, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenHireModal: () => void;
  onOpenProfileModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireModal, onOpenProfileModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF0]/95 backdrop-blur-md border-b-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Pill Badge */}
        <div className="flex items-center">
          <a
            href="#"
            className="group flex items-center gap-2 bg-white border-3 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all"
          >
            <span className="w-3 h-3 rounded-full bg-[#84CC16] border-2 border-black inline-block animate-pulse" />
            <span className="font-extrabold text-base tracking-tight text-black flex items-center">
              Kyllian<span className="text-[#9333EA]">.dev</span>
            </span>
          </a>
        </div>

        {/* Center: Nav links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-base font-bold text-black">
          <button
            onClick={() => scrollToSection('projects')}
            className="cursor-pointer hover:text-[#7C3AED] hover:underline decoration-3 underline-offset-6 transition-all"
          >
            My work
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="cursor-pointer hover:text-[#7C3AED] hover:underline decoration-3 underline-offset-6 transition-all"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="cursor-pointer hover:text-[#7C3AED] hover:underline decoration-3 underline-offset-6 transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer hover:text-[#7C3AED] hover:underline decoration-3 underline-offset-6 transition-all"
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenHireModal}
            className="neo-btn bg-[#FFE600] text-black font-extrabold text-sm sm:text-base px-4 sm:px-5 py-2 rounded-xl flex items-center gap-1.5 shadow-[4px_4px_0px_0px_#000]"
          >
            <span>Hire Me</span>
            <Sparkles className="w-4 h-4 fill-black" />
          </button>

          <button
            onClick={onOpenProfileModal}
            title="View Developer Card"
            className="neo-btn bg-white p-2.5 rounded-xl text-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#F3F4F6]"
            aria-label="Developer Profile"
          >
            <User className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden neo-btn bg-white p-2.5 rounded-xl text-black shadow-[3px_3px_0px_0px_#000]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-3 border-black bg-[#FFE600] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 font-black text-lg">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left py-2 border-b-2 border-black flex justify-between items-center"
              >
                <span>My work</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 border-b-2 border-black flex justify-between items-center"
              >
                <span>Services</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 border-b-2 border-black flex justify-between items-center"
              >
                <span>About</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 border-b-2 border-black flex justify-between items-center"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
