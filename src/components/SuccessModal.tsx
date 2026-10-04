import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, X, Terminal, ArrowRight } from 'lucide-react';

interface SuccessModalProps {
  data: { name: string; email: string; projectType: string } | null;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="w-full max-w-lg bg-[#FFE600] border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[10px_10px_0px_0px_#000] text-black relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 neo-btn bg-white p-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 stroke-[3]" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-[#16A34A] border border-black inline-block animate-ping" />
          <span className="font-mono text-xs font-black tracking-wider uppercase bg-white border border-black px-2 py-0.5 rounded">
            TRANSMISSION CONFIRMED
          </span>
        </div>

        <h3 className="font-black text-3xl sm:text-4xl tracking-tight mb-3">
          Message Received, {data.name}! 🚀
        </h3>

        <p className="text-neutral-900 font-medium text-base leading-relaxed mb-6">
          Thank you for reaching out regarding <span className="font-bold underline">{data.projectType}</span>. I have received your message and will review it and reply back to <span className="font-mono font-bold">{data.email}</span> within 24 hours.
        </p>

        <div className="bg-white border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#000] mb-6 font-mono text-xs space-y-1.5">
          <div className="flex justify-between">
            <span className="text-neutral-500">Sender:</span>
            <span className="font-bold">{data.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Email:</span>
            <span className="font-bold">{data.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Status:</span>
            <span className="text-[#16A34A] font-bold">QUEUED FOR REVIEW</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full neo-btn bg-[#84CC16] hover:bg-[#65A30D] text-black font-black text-base py-3 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center gap-2"
        >
          <span>Back to Portfolio</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </motion.div>
    </div>
  );
};
