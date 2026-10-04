import React from 'react';
import { motion } from 'motion/react';
import { Zap, Code2, Sparkles, Terminal } from 'lucide-react';

interface VectorIllustrationProps {
  className?: string;
}

export const VectorIllustration: React.FC<VectorIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative max-w-[480px] w-full mx-auto select-none ${className}`}>
      {/* Outer Card with Neobrutalist Hard Shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-[#FFE600] border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] overflow-hidden"
      >
        {/* Floating Sticker Top-Left: </> */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 bg-[#FFE600] border-3 border-black rounded-xl px-3 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0px_0px_#000] flex items-center gap-1 font-mono font-black text-sm sm:text-base cursor-pointer hover:bg-[#FFD600]"
        >
          <span className="text-black font-extrabold">&lt; / &gt;</span>
        </motion.div>

        {/* Floating Sticker Top-Right: Available for freelance */}
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [6, 8, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 bg-[#84CC16] border-3 border-black rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0px_0px_#000] flex items-center gap-2 cursor-pointer hover:bg-[#65A30D]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
          </span>
          <span className="text-xs sm:text-sm font-black tracking-tight text-black whitespace-nowrap">
            Available for freelance
          </span>
        </motion.div>

        {/* Inner Graphic Stage */}
        <div className="relative bg-[#FFFDF0] border-3 border-black rounded-2xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center min-h-[340px] sm:min-h-[380px] group">
          <img
            src="/profile-illustration.jpeg"
            alt="Frontend Developer & UI Architect - Kyllian"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Sticker Bottom-Left: ⚡ 60 FPS */}
        <motion.div
          animate={{ y: [0, 4, 0], rotate: [-8, -6, -8] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-3 z-20 bg-[#38BDF8] border-3 border-black rounded-xl px-3 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0px_0px_#000] flex items-center gap-1.5 cursor-pointer hover:bg-[#0284C7]"
        >
          <Zap className="w-3.5 h-3.5 fill-black text-black" />
          <span className="text-xs sm:text-sm font-mono font-black text-black">60 FPS</span>
        </motion.div>

        {/* Floating Sticker Bottom-Right: React */}
        <motion.div
          animate={{ y: [0, 5, 0], rotate: [10, 7, 10] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-3 z-20 bg-[#FACC15] border-3 border-black rounded-xl px-3 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0px_0px_#000] flex items-center gap-1.5 cursor-pointer hover:bg-[#EAB308]"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span className="text-xs sm:text-sm font-black tracking-tight text-black">React</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
