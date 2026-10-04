import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, GraduationCap, Award, BookOpen, Laptop } from 'lucide-react';
import { TimelineItem } from '../types';

export const About: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      year: '2026',
      yearBg: 'bg-[#FFE600]',
      content:
        'Currently in my Junior year at university. Actively taking on freelance web projects and hunting for a Frontend Internship. Obsessed with building blazing-fast React applications and pushing pixels to perfection with Tailwind CSS.',
    },
    {
      year: '2025',
      yearBg: 'bg-[#C084FC]',
      content:
        'Dived headfirst into the React ecosystem. Started crafting dynamic web apps, connecting RESTful APIs, and learning how to manage complex UI states without losing my mind.',
    },
    {
      year: '2024',
      yearBg: 'bg-[#86EFAC]',
      content:
        'Wrote my first lines of code and fell in love with the web. Mastered the core foundations of HTML, CSS, and Vanilla JavaScript. Built a lot of basic websites to learn how things actually work under the hood.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFFDF0] relative border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Sticker Art / Badge Cluster */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[400px] flex items-center justify-center p-4"
            >
              {/* Outer decorative ring */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-black bg-[#FFE600] shadow-[8px_8px_0px_0px_#000] flex items-center justify-center overflow-hidden">
                {/* Background Halftone pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
                    backgroundSize: '14px 14px',
                  }}
                />

                {/* Developer Graphic */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/profile-illustration.jpeg"
                    alt="Frontend Developer and UI Architect"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Ribbon Tag at bottom */}
                <div className="absolute bottom-4 z-20 bg-[#38BDF8] border-3 border-black rounded-lg px-3 py-1 font-mono text-xs font-black text-black shadow-[3px_3px_0px_0px_#000] rotate-[-2deg]">
                  FRONTEND DEV
                </div>
              </div>

              {/* Floating Orbiting Badges */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 left-6 z-20 w-12 h-12 rounded-2xl bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 text-[#9333EA]" />
              </motion.div>

              <div className="absolute top-10 -right-2 z-20 bg-[#F472B6] border-3 border-black rounded-xl px-3 py-1 font-black text-xs text-black shadow-[4px_4px_0px_0px_#000] rotate-[8deg]">
                3rd Year CS
              </div>

              <div className="absolute -bottom-2 -left-2 z-20 bg-[#86EFAC] border-3 border-black rounded-xl px-3 py-1 font-mono text-xs font-bold text-black shadow-[4px_4px_0px_0px_#000] rotate-[-6deg]">
                ⚡ Pixel-Perfect
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & 3-Step Timeline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-black text-4xl sm:text-5xl text-black tracking-tight mb-6">
              About Me
            </h2>

            <p className="text-neutral-800 text-lg sm:text-xl font-medium leading-relaxed mb-8">
              I am a 3rd-year IT student and an aspiring Frontend Developer with a passion
              for creating smooth, responsive, and user-centric interfaces. Currently
              honing my skills through personal projects and freelance work, I love
              turning creative designs into clean, scalable code.
            </p>

            {/* Timeline Cards */}
            <div className="w-full flex flex-col gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="group bg-white border-3 sm:border-4 border-black rounded-2xl p-4 sm:p-5 shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  {/* Year Pill Badge */}
                  <div
                    className={`${item.yearBg} border-3 border-black rounded-xl px-4 py-2 font-mono font-black text-base sm:text-lg text-black shadow-[3px_3px_0px_0px_#000] shrink-0`}
                  >
                    {item.year}
                  </div>

                  {/* Timeline Description */}
                  <p className="text-neutral-800 text-sm sm:text-base font-medium leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
