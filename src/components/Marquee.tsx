import React from 'react';
import { Sparkles, Star } from 'lucide-react';

interface MarqueeProps {
  text?: string;
  bgColor?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'FEATURED PROJECTS',
  bgColor = 'bg-[#C084FC]', // Purple banner
}) => {
  const items = Array.from({ length: 8 });

  return (
    <div
      className={`w-full ${bgColor} border-y-4 border-black py-3 sm:py-4 overflow-hidden relative select-none`}
    >
      <div className="animate-marquee flex items-center">
        {items.map((_, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-[#FFE600] font-black text-xl sm:text-2xl mx-3 drop-shadow-[2px_2px_0px_#000]">
              ✦ ✦
            </span>
            <span className="font-black text-xl sm:text-2xl tracking-widest text-black uppercase mx-3">
              {text}
            </span>
          </div>
        ))}
        {/* Duplicate for seamless infinite loop */}
        {items.map((_, index) => (
          <div key={`dup-${index}`} className="flex items-center shrink-0">
            <span className="text-[#FFE600] font-black text-xl sm:text-2xl mx-3 drop-shadow-[2px_2px_0px_#000]">
              ✦ ✦
            </span>
            <span className="font-black text-xl sm:text-2xl tracking-widest text-black uppercase mx-3">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
