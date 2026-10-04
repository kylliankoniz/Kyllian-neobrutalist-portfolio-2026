import React from 'react';
import { Globe, Sparkles, Layout, Smartphone, Code, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description:
        'Building fast, responsive, and visually striking web applications. I focus on writing clean code and creating solid structures using modern tools like React and Tailwind CSS.',
      iconBg: 'bg-[#C084FC]', // Purple
      iconType: 'web',
      tags: ['React', 'TailwindCSS'],
    },
    {
      id: 'interactive-ui',
      title: 'Interactive UI & Animation',
      description:
        'Bringing static websites to life. I love adding smooth scroll effects, quirky micro-interactions, and engaging animations to make the user experience truly pop.',
      iconBg: 'bg-[#FDE047]', // Yellow
      iconType: 'animation',
      tags: ['Framer Motion', 'Vanilla JS'],
    },
    {
      id: 'figma-code',
      title: 'Figma to Code',
      description:
        'Bridging the gap between design and development. I take creative Figma mockups and turn them into pixel-perfect, fully responsive websites that work perfectly on any device.',
      iconBg: 'bg-[#86EFAC]', // Lime
      iconType: 'figma',
      tags: ['Figma', 'Responsive'],
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'web':
        return <Globe className="w-6 h-6 stroke-[2.5] text-black" />;
      case 'animation':
        return <Sparkles className="w-6 h-6 stroke-[2.5] text-black" />;
      case 'figma':
        return <Layout className="w-6 h-6 stroke-[2.5] text-black" />;
      default:
        return <Code className="w-6 h-6 stroke-[2.5] text-black" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FFFDF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#4B5563] uppercase mb-2">
            PASSION LED US HERE
          </p>
          <h2 className="font-black text-3xl sm:text-5xl text-black tracking-tight">
            What can I do for you
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -6, x: -2 }}
              className="bg-white border-4 border-black rounded-3xl p-7 sm:p-8 shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] flex flex-col justify-between transition-all"
            >
              <div>
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full border-3 border-black ${service.iconBg} shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-6`}
                >
                  {renderIcon(service.iconType)}
                </div>

                {/* Title */}
                <h3 className="font-black text-2xl text-black mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-700 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Dashed Separator & Tech Tags */}
              <div className="pt-6 mt-6 border-t-2 border-dashed border-neutral-300">
                <div className="flex flex-wrap items-center gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F3F4F6] border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
