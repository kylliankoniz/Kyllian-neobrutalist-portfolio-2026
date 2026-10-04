import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, Copy, Download, GraduationCap, MapPin, Mail, ExternalLink, Sparkles, Terminal } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'kylliankoniz@gmail.com';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="w-full max-w-lg bg-[#FFFDF0] border-4 border-black rounded-3xl shadow-[10px_10px_0px_0px_#000] overflow-hidden relative"
      >
        {/* Header Bar */}
        <div className="bg-[#FFE600] border-b-4 border-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-black border border-black inline-block" />
            <span className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-black">
              DEV_ID // KYLLIAN.DEV
            </span>
          </div>
          <button
            onClick={onClose}
            className="neo-btn bg-white p-1.5 rounded-lg border-2 border-black text-black shadow-[2px_2px_0px_0px_#000]"
            aria-label="Close profile card"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Avatar and Info */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-[#FFE600] border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center text-4xl shrink-0 overflow-hidden relative">
              <span className="relative z-10">👨‍💻</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-black text-2xl text-black">Kyllian</h3>
                <span className="bg-[#86EFAC] border-2 border-black rounded-md px-2 py-0.5 font-mono text-[10px] font-black">
                  AVAILABLE
                </span>
              </div>
              <p className="font-bold text-sm text-neutral-800">
                Frontend Developer & UI Architect
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-600 mt-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>3rd-Year IT Student</span>
              </div>
            </div>
          </div>

          {/* Quick Objective Callout */}
          <div className="bg-[#DDD6FE] border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000]">
            <span className="font-mono text-xs font-black text-black uppercase tracking-wider block mb-1">
              CURRENT FOCUS
            </span>
            <p className="text-sm font-medium text-neutral-900 leading-snug">
              Hunting for a <strong>Frontend Internship</strong> (Summer/Fall 2026) and open for exciting <strong>Freelance Frontend Web</strong> contracts.
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
              CORE WEAPONS OF CHOICE
            </span>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Vite', 'Git'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-white border-2 border-black rounded-lg px-2.5 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Direct Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="flex-1 neo-btn bg-[#84CC16] text-black font-black text-sm py-3 px-4 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <Sparkles className="w-4 h-4 fill-black" />
            </button>

            <button
              onClick={handleCopy}
              className="neo-btn bg-white hover:bg-neutral-50 text-black font-bold text-sm py-3 px-4 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#16A34A]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
