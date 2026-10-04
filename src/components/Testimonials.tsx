import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Star, Award, UserCheck } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Mr. Nguyen Van Dung',
      role: 'Head of the Faculty of Engineering Technology & Project Mentor',
      content:
        "“Kyllian is one of the most dedicated students I've mentored. His ability to grasp complex frontend concepts quickly and apply them to build pixel-perfect UIs is truly impressive for a junior developer.”",
      cardBg: 'bg-[#DDD6FE]', // Lavender
      badge: '🎓 Faculty Mentor',
    },
    {
      name: 'Hoang Phi Long',
      role: 'Hackathon Teammate',
      content:
        '“We teamed up for a 48-hour hackathon, and Kyllian absolutely nailed the frontend. He works incredibly fast, writes clean React code under pressure, and always brings great creative ideas to the table.”',
      cardBg: 'bg-[#FBCFE8]', // Pink / Peach
      badge: '🏆 Hackathon Win',
    },
    {
      name: 'Mr. John',
      role: 'Freelance Client',
      content:
        '“I hired Kyllian for a small freelance web project. He was highly communicative, professional, and delivered a vibrant, fast-loading site that looks amazing on mobile. Exceeded my expectations!”',
      cardBg: 'bg-[#FEF08A]', // Yellow
      badge: '⭐ 5.0 Rating',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFFDF0] relative border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#4B5563] uppercase mb-2">
            FEEDBACK & RECOMMENDATIONS
          </p>
          <h2 className="font-black text-3xl sm:text-5xl text-black tracking-tight">
            What people say about working with me?
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -6, x: -2 }}
              className={`relative ${item.cardBg} border-4 border-black rounded-3xl p-7 sm:p-8 shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] flex flex-col justify-between transition-all`}
            >
              {/* Decorative Corner Sticker */}
              {idx === 0 && (
                <div className="absolute -top-3 right-6 bg-[#FFE600] border-2 border-black rounded-md px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] rotate-6">
                  ★ Mentor
                </div>
              )}
              {idx === 1 && (
                <div className="absolute -top-3 left-6 bg-[#86EFAC] border-2 border-black rounded-md px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] -rotate-6">
                  ⚡ Teammate
                </div>
              )}
              {idx === 2 && (
                <div className="absolute -top-3 right-6 bg-[#FF2E93] text-white border-2 border-black rounded-md px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] rotate-12">
                  ♥ Verified Client
                </div>
              )}

              <div>
                {/* Author Info Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  {/* Avatar circle */}
                  <div className="w-12 h-12 rounded-full border-3 border-black bg-white shadow-[2px_2px_0px_0px_#000] flex items-center justify-center shrink-0">
                    {idx === 0 && <span className="text-xl">👨‍🏫</span>}
                    {idx === 1 && <span className="text-xl">🚀</span>}
                    {idx === 2 && <span className="text-xl">💼</span>}
                  </div>

                  <div>
                    <h3 className="font-black text-lg text-black tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-neutral-700 text-xs font-medium leading-tight mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>

              {/* Bottom Rating Stars */}
              <div className="pt-6 mt-6 border-t-2 border-dashed border-black/20 flex items-center justify-between">
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-neutral-700">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
