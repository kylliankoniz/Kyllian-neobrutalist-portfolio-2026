import React from 'react';
import { ArrowUpRight, Sparkles, Terminal, FileCode, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { VectorIllustration } from './VectorIllustration';

interface HeroProps {
  onContactClick: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreWork }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest text-[#4B5563] uppercase"
            >
              <span className="w-2.5 h-2.5 bg-black rounded-xs inline-block"></span>
              HI, MY NAME IS KYLLIAN
            </motion.div>

            {/* Giant Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-extrabold text-5xl sm:text-7xl lg:text-[82px] leading-[1.05] tracking-tight text-black mb-6"
            >
              I Turn Ideas
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-4xl sm:text-6xl lg:text-[76px] font-black text-black">
                  Into
                </span>
                <span className="relative inline-block bg-[#FFE600] border-4 border-black px-4 sm:px-6 py-0.5 sm:py-1.5 rounded-2xl shadow-[6px_6px_0px_0px_#000] rotate-[-1.5deg] hover:rotate-0 transition-transform">
                  <span className="relative z-10 text-black">Realities</span>
                  {/* Micro corner highlight */}
                  <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-white border border-black" />
                </span>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-800 font-medium leading-relaxed max-w-2xl mb-8"
            >
              Frontend Developer & UI Architect with a passion for crafting performant,
              scalable, and user-friendly interfaces. Always looking for new challenges
              and opportunities to grow my skills.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary: Get In Touch */}
              <button
                onClick={onContactClick}
                className="neo-btn bg-[#C084FC] hover:bg-[#A855F7] text-black font-extrabold text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-2xl flex items-center gap-2.5 shadow-[5px_5px_0px_0px_#000]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Secondary: Explore Works */}
              <button
                onClick={onExploreWork}
                className="neo-btn bg-white hover:bg-[#F3F4F6] text-black font-bold text-base sm:text-lg px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-[5px_5px_0px_0px_#000]"
              >
                <Terminal className="w-4 h-4 text-black" />
                <span>See My Works</span>
              </button>
            </motion.div>

            {/* Target Status Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 border-t-2 border-black/15 flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-700"
            >
              <div className="flex items-center gap-1.5 bg-[#FFF] border-2 border-black rounded-lg px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] border border-black" />
                <span className="font-bold text-black">Junior IT Student</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FFE600] border-2 border-black rounded-lg px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]">
                <span className="font-bold text-black">⚡ Seeking Internship 2026</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#E0F2FE] border-2 border-black rounded-lg px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]">
                <span className="font-bold text-black">Freelance Frontend</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Neo-Brutalist Illustrated Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <VectorIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
