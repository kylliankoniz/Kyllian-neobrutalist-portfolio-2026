import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Zap, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Sneaker demo state
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; count: number }[]>([
    { id: 1, name: 'Cyber Runner 2.0', price: 149, count: 1 },
    { id: 2, name: 'Volt Street High', price: 189, count: 1 },
  ]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // FinTrack demo state
  const [budgetVal, setBudgetVal] = useState(4250);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl bg-[#FFFDF0] border-4 border-black rounded-3xl shadow-[10px_10px_0px_0px_#000] overflow-hidden my-8"
      >
        {/* Modal Window Header */}
        <div className="bg-[#FFE600] border-b-4 border-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-black border-2 border-black inline-block" />
            <h3 className="font-mono font-black text-sm sm:text-base text-black tracking-wider uppercase">
              {project.windowHeader} // DEEP DIVE
            </h3>
          </div>
          <button
            onClick={onClose}
            className="neo-btn bg-white p-1.5 rounded-lg text-black hover:bg-neutral-100 shadow-[3px_3px_0px_0px_#000]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Header section */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#C084FC] border-2 border-black rounded-md px-2.5 py-0.5 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-black text-2xl sm:text-4xl text-black tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Live Playground Widget */}
          <div className="bg-white border-3 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000]">
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
              <span className="font-mono text-xs font-black text-black flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
                LIVE MICRO-INTERACTION PREVIEW
              </span>
              <span className="text-[11px] font-mono bg-[#86EFAC] border border-black rounded px-2 py-0.5 font-bold">
                Interactive
              </span>
            </div>

            {project.id === 'neo-sneaks' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border-2 border-black rounded-xl p-3 bg-[#FFFDF0]">
                    <div className="text-2xl mb-1">👟</div>
                    <div className="font-bold text-sm">Volt Street High</div>
                    <div className="text-xs text-neutral-600 mb-2">$189.00</div>
                    <button
                      onClick={() => {
                        setCartItems((prev) => [
                          ...prev,
                          { id: Date.now(), name: 'Volt Street High', price: 189, count: 1 },
                        ]);
                        setCheckoutSuccess(false);
                      }}
                      className="neo-btn bg-[#FFE600] px-3 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-[2px_2px_0px_0px_#000]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add Another
                    </button>
                  </div>

                  <div className="border-2 border-black rounded-xl p-3 bg-white flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-xs uppercase font-mono text-neutral-500 mb-1">
                        Spring Cart ({cartItems.length} items)
                      </div>
                      <div className="font-black text-lg font-mono">
                        ${cartItems.reduce((acc, i) => acc + i.price, 0)}.00
                      </div>
                    </div>

                    <button
                      onClick={() => setCheckoutSuccess(true)}
                      className="neo-btn bg-[#84CC16] text-black font-black text-xs py-2 px-3 rounded-lg shadow-[2px_2px_0px_0px_#000] mt-2 flex items-center justify-center gap-1"
                    >
                      {checkoutSuccess ? 'Ordered! 🎉' : 'Simulate 1-Click Checkout'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'fintrack' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span>Adjust Monthly Budget Simulator:</span>
                    <span className="text-[#9333EA] font-black">${budgetVal.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="8000"
                    step="250"
                    value={budgetVal}
                    onChange={(e) => setBudgetVal(Number(e.target.value))}
                    className="w-full accent-black cursor-pointer"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 border border-black rounded-lg bg-[#F3F4F6]">
                    <div className="text-neutral-500 text-[10px]">Rent (40%)</div>
                    <div className="font-bold">${Math.round(budgetVal * 0.4)}</div>
                  </div>
                  <div className="p-2 border border-black rounded-lg bg-[#F3F4F6]">
                    <div className="text-neutral-500 text-[10px]">Food (20%)</div>
                    <div className="font-bold">${Math.round(budgetVal * 0.2)}</div>
                  </div>
                  <div className="p-2 border border-black rounded-lg bg-[#86EFAC]">
                    <div className="text-neutral-800 text-[10px]">Savings (40%)</div>
                    <div className="font-black text-[#15803D]">${Math.round(budgetVal * 0.4)}</div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'neo-folio' && (
              <div className="flex flex-wrap items-center justify-around gap-3 py-2">
                <button
                  onClick={() => alert('Spring physics triggered! 💥')}
                  className="neo-btn bg-[#FFE600] px-4 py-2 rounded-xl text-xs font-black shadow-[3px_3px_0px_0px_#000]"
                >
                  Click Me (Haptic Spring)
                </button>
                <button
                  onClick={() => alert('Dark theme state activated!')}
                  className="neo-btn bg-[#00F0FF] px-4 py-2 rounded-xl text-xs font-black shadow-[3px_3px_0px_0px_#000]"
                >
                  Instant Toggle
                </button>
                <button
                  onClick={() => alert('Accessibility audit passed 100/100!')}
                  className="neo-btn bg-[#84CC16] px-4 py-2 rounded-xl text-xs font-black shadow-[3px_3px_0px_0px_#000]"
                >
                  WCAG Audit Pass
                </button>
              </div>
            )}
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {project.details.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border-2 border-black rounded-xl p-3 sm:p-4 text-center shadow-[3px_3px_0px_0px_#000]"
              >
                <div className="font-mono text-xs text-neutral-500 mb-1">{m.label}</div>
                <div className="font-mono font-black text-xl sm:text-2xl text-black">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="space-y-4">
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_#000]">
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-[#EF4444] mb-1">
                The Challenge
              </h4>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_#000]">
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-[#15803D] mb-1">
                The Solution & Architecture
              </h4>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Technical highlights checklist */}
          <div>
            <h4 className="font-mono font-black text-sm uppercase text-black mb-3">
              Key Engineering Decisions
            </h4>
            <div className="space-y-2">
              {project.details.techFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t-2 border-neutral-300 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                alert(`Redirecting to live demo for ${project.title}`);
              }}
              className="neo-btn bg-[#FFE600] text-black font-extrabold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-[3px_3px_0px_0px_#000]"
            >
              <span>Visit Live Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="neo-btn bg-white text-black font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
            >
              Close Window
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
