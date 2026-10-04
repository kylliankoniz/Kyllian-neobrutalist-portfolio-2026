import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Send, Sparkles, Github, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  onSuccess: (data: { name: string; email: string; projectType: string }) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccess }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Frontend Internship',
    inquiryType: 'Full-time Internship',
    website: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = 'kylliankoniz@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please tell me a little about your project or opportunity';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess({
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'Frontend Internship',
        inquiryType: 'Full-time Internship',
        website: '',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FFFDF0] relative border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Information & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight mb-6">
                Tell me about your project
              </h2>

              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-10 font-medium">
                Whether you are looking for a passionate frontend intern for your team
                or a freelance developer to bring your crazy ideas to life, I'm all in.
                Drop me a message below, and I'll get back to you within 24 hours.
              </p>

              {/* Email Block */}
              <div className="mb-10">
                <span className="font-mono text-xs font-bold text-[#4B5563] tracking-widest uppercase block mb-2">
                  EMAIL ME AT:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-black text-xl sm:text-2xl text-black underline decoration-3 underline-offset-4 hover:text-[#7C3AED] transition-colors"
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="neo-btn bg-white p-2 rounded-xl border-2 border-black text-black shadow-[2px_2px_0px_0px_#000] hover:bg-neutral-100"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#16A34A] stroke-[3]" />
                    ) : (
                      <Copy className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="inline-block mt-2 font-mono text-xs font-bold text-[#16A34A]">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Follow me at */}
              <div>
                <span className="font-mono text-xs font-bold text-[#4B5563] tracking-widest uppercase block mb-3">
                  FOLLOW ME AT:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/nguyen.hoang.trung.khanh.2025"
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-white w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-bold text-lg hover:bg-[#FFE600]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-black stroke-[2.5]" />
                  </a>
                  <a
                    href="https://github.com/kylliankoniz"
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-white w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center hover:bg-[#FFE600]"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-black stroke-[2.5]" />
                  </a>
                  <a
                    href="https://www.instagram.com/kyllian_koniz/"
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-white w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center hover:bg-[#FFE600]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-black stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-neutral-300">
              <div className="inline-flex items-center gap-2 bg-[#86EFAC] border-2 border-black rounded-lg px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>Response time: &lt; 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Neobrutalist Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-5"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Turner"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl px-4 py-3 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#FFE600] transition-all"
                  />
                  {errors.name && (
                    <span className="font-mono text-xs text-[#EF4444] font-bold mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl px-4 py-3 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#FFE600] transition-all"
                  />
                  {errors.email && (
                    <span className="font-mono text-xs text-[#EF4444] font-bold mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Project Type & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                    Project type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl px-4 py-3 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white cursor-pointer"
                  >
                    <option value="Frontend Internship">Frontend Internship (Summer/Fall)</option>
                    <option value="Freelance Web App">Freelance Web Application</option>
                    <option value="Figma to React">Figma to React Conversion</option>
                    <option value="UI/UX Interactive Redesign">UI/UX Interactive Redesign</option>
                    <option value="Other Opportunity">Other Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl px-4 py-3 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white cursor-pointer"
                  >
                    <option value="Full-time Internship">Full-time Internship</option>
                    <option value="Part-time Internship">Part-time Internship</option>
                    <option value="Fixed-price Contract">Fixed-price Contract</option>
                    <option value="Hourly / Consultation">Hourly / Consultation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Website */}
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                  Your website (if exists)
                </label>
                <input
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl px-4 py-3 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#FFE600] transition-all"
                />
              </div>

              {/* Row 4: Details Textarea */}
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-black mb-1.5">
                  Project details, context or how can I help you...
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about the role or project scope, timeline, stack, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FFFDF0] border-3 border-black rounded-xl p-4 text-black font-medium shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#FFE600] transition-all resize-y"
                />
                {errors.message && (
                  <span className="font-mono text-xs text-[#EF4444] font-bold mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neo-btn bg-[#84CC16] hover:bg-[#65A30D] text-black font-black text-lg py-4 px-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ENCRYPTING TRANSMISSION...
                    </span>
                  ) : (
                    <>
                      <span>Submit Transmission</span>
                      <ArrowRight className="w-5 h-5 stroke-[3]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
