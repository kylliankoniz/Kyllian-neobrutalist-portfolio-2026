import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Github,
  Zap,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Download,
  ShoppingBag,
  Plus,
  RefreshCw,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  // Mini interactive state for Project 1 (Neo-Sneaks cart count)
  const [sneakerCartCount, setSneakerCartCount] = useState(2);
  // Mini interactive state for Project 2 (FinTrack period)
  const [fintrackPeriod, setFintrackPeriod] = useState('October 2024');

  const projects: Project[] = [
    {
      id: 'neo-sneaks',
      title: 'Neo-Sneaks: Dynamic E-Commerce Cart',
      tagline: 'Interactive Spring Cart & Fluid Checkout Experience',
      tags: ['React', 'TailwindCSS'],
      description:
        'Built a fully responsive sneaker store interface with dynamic cart management, multi-category filtering, and a sleek checkout UI. Focused on clean state management and lightning-fast page loads.',
      buttonColor: 'bg-[#84CC16]', // Lime
      windowHeader: 'NEO-SNEAKS // 2.0',
      windowStatus: 'LIVE APP',
      theme: 'light',
      highlights: ['Instant Checkout', '60 FPS Animations', 'Spring Physics'],
      demoUrl: 'https://neo-sneaks.vercel.app/',
      details: {
        problem:
          'Traditional e-commerce carts feel rigid and clunky, leading to high drop-off rates on mobile devices.',
        solution:
          'Created a bouncy, tactile micro-interaction cart with fluid drag-to-dismiss items, dynamic quantity counters, and sub-100ms feedback.',
        techFeatures: [
          'State management with custom React hooks & Context API',
          'Responsive grid layout optimized for mobile touch targets',
          'Optimistic UI updates for zero-perceived latency checkout',
          'Tailwind CSS Neobrutalist design system with hard offset shadows',
        ],
        metrics: [
          { label: 'Page Load Speed', value: '0.4s' },
          { label: 'Animation FPS', value: '60 FPS' },
          { label: 'Cart Conversion', value: '+34%' },
        ],
      },
    },
    {
      id: 'fintrack',
      title: 'FinTrack: Personal Budget Dashboard',
      tagline: 'Track Daily Expenses with Real-Time Data & Dark Mode',
      tags: ['Vanilla JS', 'REST API'],
      description:
        'Designed and developed a personal finance dashboard to track daily expenses. Integrated interactive charts, a custom dark mode toggle, and real-time data fetching.',
      buttonColor: 'bg-[#C084FC]', // Purple
      windowHeader: 'FINTRACK OS // V2.1',
      windowStatus: 'STATUS: ON TRACK',
      theme: 'dark',
      highlights: ['Real-Time Sync', 'Dark Mode Enabled', 'CSV Export'],
      demoUrl: 'https://fintrack-os-v1.vercel.app/',
      details: {
        problem:
          'Budgeting tools are either overly complex with steep learning curves or aesthetically dull spreadsheets.',
        solution:
          'Engineered a visual, game-like financial tracker that breaks down monthly cash flow with bold indicators and instant categorical spend analysis.',
        techFeatures: [
          'High-performance DOM manipulation using pure Vanilla JS / TypeScript',
          'Asynchronous REST API integration with robust offline local storage cache',
          'Zero-dependency SVG interactive chart generator',
          'Export to CSV client-side data synthesis pipeline',
        ],
        metrics: [
          { label: 'Bundle Size', value: '18 KB' },
          { label: 'Lighthouse Score', value: '100/100' },
          { label: 'Active Users', value: '1,200+' },
        ],
      },
    },
    {
      id: 'neo-folio',
      title: 'Neo-Folio: Brutalist Web Experience',
      tagline: 'Experimental Portfolio with Custom Spring Micro-Interactions',
      tags: ['Framer Motion', 'Creative UI'],
      description:
        'An experimental personal portfolio built to explore Neobrutalist aesthetics. Features custom spring animations, bold typography, and smooth micro-interactions to create a memorable user journey.',
      buttonColor: 'bg-[#FFE600]', // Yellow
      windowHeader: 'NEO-FOLIO // EXP.',
      windowStatus: 'STATUS: OK',
      theme: 'dark',
      highlights: ['Interactive Brutalism', 'Framer Motion', 'Accessible UX'],
      demoUrl: 'https://kylliandev.vercel.app/',
      details: {
        problem:
          'Corporate developer portfolios have converged into repetitive minimalist templates with zero brand personality.',
        solution:
          'Constructed an unapologetic, high-energy Neobrutalist showcase that marries raw industrial geometry with silky-smooth micro-interactions.',
        techFeatures: [
          'Framer Motion spring physics for tactile tactile click compression',
          'Full keyboard navigation & WCAG AA color contrast compliance',
          'Custom CSS marquee ribbons and zero-blur planar shadows',
          'Modular component architecture with strict TypeScript types',
        ],
        metrics: [
          { label: 'Interaction Response', value: '< 50ms' },
          { label: 'Accessibility', value: '100%' },
          { label: 'Design Rating', value: 'Featured' },
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#FFFDF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Project 1: Neo-Sneaks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Preview Window */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] overflow-hidden"
            >
              {/* Window Header */}
              <div className="bg-white border-b-3 border-black px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-black">
                  <div className="flex gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444] border-2 border-black inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FACC15] border-2 border-black inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#22C55E] border-2 border-black inline-block" />
                  </div>
                  <span>{projects[0].windowHeader}</span>
                </div>
                <div className="bg-[#F472B6] border-2 border-black rounded-md px-2.5 py-0.5 font-mono text-xs font-black text-black">
                  {projects[0].windowStatus}
                </div>
              </div>

              {/* Inner Window Canvas */}
              <div className="bg-[#FFE600] border-b-3 border-black p-6 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[280px]">
                {/* Micro sneaker illustration */}
                <div className="relative z-10 w-24 h-24 mb-4 bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-center rotate-[-6deg] hover:rotate-0 transition-transform">
                  <span className="text-4xl">👟</span>
                </div>

                <h4 className="relative z-10 font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
                  DYNAMIC E-COMMERCE
                </h4>
                <p className="relative z-10 font-bold text-xs sm:text-sm text-neutral-800 mt-1 max-w-md">
                  Interactive Spring Cart & Fluid Checkout Experience
                </p>

                {/* Interactive Demo Counter inside preview */}
                <div className="relative z-10 mt-5 flex items-center gap-3">
                  <button
                    onClick={() => setSneakerCartCount((c) => Math.max(1, c + 1))}
                    className="neo-btn bg-white px-3 py-1.5 rounded-lg border-2 border-black text-xs font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Cart ({sneakerCartCount} items)</span>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Window Footer Bar */}
              <div className="bg-white px-4 sm:px-6 py-3 flex items-center justify-between font-mono text-xs font-bold text-neutral-800">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-black fill-black" />
                  INSTANT CHECKOUT
                </span>
                <span className="bg-[#00F0FF] border-2 border-black rounded px-2 py-0.5 text-black font-extrabold">
                  60 FPS ANIMATIONS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tech Tags */}
            <div className="flex items-center gap-2 mb-4">
              {projects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FFE600] border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-black text-2xl sm:text-4xl text-black tracking-tight mb-4">
              {projects[0].title}
            </h3>

            <p className="text-neutral-700 text-base leading-relaxed mb-6">
              {projects[0].description}
            </p>

            <button
              onClick={() => onSelectProject(projects[0])}
              className={`neo-btn ${projects[0].buttonColor} text-black font-black text-sm sm:text-base px-6 py-3 rounded-xl flex items-center gap-2 shadow-[4px_4px_0px_0px_#000]`}
            >
              <span>View Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Project 2: FinTrack (Inverted Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
            {/* Tech Tags */}
            <div className="flex items-center gap-2 mb-4">
              {projects[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#C084FC] border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-black text-2xl sm:text-4xl text-black tracking-tight mb-4">
              {projects[1].title}
            </h3>

            <p className="text-neutral-700 text-base leading-relaxed mb-6">
              {projects[1].description}
            </p>

            <button
              onClick={() => onSelectProject(projects[1])}
              className={`neo-btn ${projects[1].buttonColor} text-black font-black text-sm sm:text-base px-6 py-3 rounded-xl flex items-center gap-2 shadow-[4px_4px_0px_0px_#000]`}
            >
              <span>View Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Right Preview Window (Dark UI) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#18181B] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] overflow-hidden text-white"
            >
              {/* Header */}
              <div className="bg-[#27272A] border-b-3 border-black px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-neutral-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] animate-pulse inline-block" />
                  <span>{projects[1].windowHeader}</span>
                </div>
                <div className="bg-[#22C55E] text-black border-2 border-black rounded-md px-2.5 py-0.5 font-mono text-xs font-black">
                  {projects[1].windowStatus}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase block mb-1">
                      TOTAL MONTHLY BUDGET
                    </span>
                    <span className="font-mono font-black text-3xl sm:text-4xl text-white">
                      $4,250.00
                    </span>
                  </div>

                  <div className="bg-[#27272A] border-2 border-neutral-700 rounded-xl px-4 py-2 text-right">
                    <span className="font-mono text-xs text-neutral-400 block">
                      {fintrackPeriod}
                    </span>
                    <span className="font-mono font-bold text-sm text-[#FACC15]">
                      $1,190 REMAINING
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between font-mono text-xs font-bold text-neutral-400 mb-1.5">
                    <span className="text-[#A855F7]">72% SPENT</span>
                    <span>TARGET: &lt; 80%</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
                    <div className="w-[72%] h-full bg-gradient-to-r from-[#A855F7] to-[#00F0FF] rounded-full" />
                  </div>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#27272A] border-2 border-black rounded-xl p-3 text-center">
                    <span className="font-mono text-[11px] text-neutral-400 block mb-1">Housing</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-white">$1,600</span>
                  </div>
                  <div className="bg-[#27272A] border-2 border-black rounded-xl p-3 text-center">
                    <span className="font-mono text-[11px] text-neutral-400 block mb-1">Food & Dining</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-white">$640</span>
                  </div>
                  <div className="bg-[#27272A] border-2 border-black rounded-xl p-3 text-center">
                    <span className="font-mono text-[11px] text-neutral-400 block mb-1">Savings/Invest</span>
                    <span className="font-mono font-bold text-sm sm:text-base text-[#86EFAC]">$820</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#27272A] border-t-3 border-black px-4 sm:px-6 py-3 flex items-center justify-between font-mono text-xs text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#00F0FF]" />
                  REAL-TIME SYNC
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" />
                  DARK MODE ENABLED
                </span>
                <span className="text-[#86EFAC] font-bold hidden sm:inline">EXPORT CSV ➔</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project 3: Neo-Folio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Preview Window */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#18181B] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000] overflow-hidden text-white"
            >
              {/* Header */}
              <div className="bg-[#27272A] border-b-3 border-black px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-neutral-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] inline-block" />
                  <span>{projects[2].windowHeader}</span>
                </div>
                <div className="bg-[#FFE600] text-black border-2 border-black rounded-md px-2.5 py-0.5 font-mono text-xs font-black">
                  {projects[2].windowStatus}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center">
                <h4 className="font-mono font-black text-3xl sm:text-4xl text-[#FFE600] tracking-wider mb-2">
                  NEO-FOLIO // V1.0
                </h4>
                <div className="font-mono text-xs sm:text-sm font-bold text-neutral-300 tracking-wide mb-6">
                  ✦ INTERACTIVE BRUTALISM ✦ FRAMER MOTION ✦ CREATIVE UI
                </div>

                <div className="inline-flex items-center gap-4 bg-[#27272A] border-2 border-neutral-700 rounded-xl px-4 py-2 font-mono text-xs">
                  <span className="text-neutral-400">STACK:</span>
                  <span className="text-white font-bold">REACT + TAILWIND</span>
                  <span className="bg-[#00F0FF] text-black font-extrabold px-1.5 py-0.5 rounded">60</span>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2 font-mono text-xs text-neutral-400">
                  <span>✦ SPRING PHYSICS</span>
                  <span>✦ MICRO-INTERACTIONS</span>
                  <span>✦ ACCESSIBLE</span>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#27272A] border-t-3 border-black px-4 sm:px-6 py-3 flex items-center justify-between font-mono text-xs text-neutral-400">
                <span>RESPONSIVE ENGINE</span>
                <span className="text-[#FFE600] font-bold">ZERO PILL DISCIPLINE</span>
              </div>
            </motion.div>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tech Tags */}
            <div className="flex items-center gap-2 mb-4">
              {projects[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#00F0FF] border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-black text-2xl sm:text-4xl text-black tracking-tight mb-4">
              {projects[2].title}
            </h3>

            <p className="text-neutral-700 text-base leading-relaxed mb-6">
              {projects[2].description}
            </p>

            <button
              onClick={() => onSelectProject(projects[2])}
              className={`neo-btn ${projects[2].buttonColor} text-black font-black text-sm sm:text-base px-6 py-3 rounded-xl flex items-center gap-2 shadow-[4px_4px_0px_0px_#000]`}
            >
              <span>View Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
