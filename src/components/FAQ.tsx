import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-beige/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Support</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-wine">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <span className="text-lg font-serif font-bold text-neutral-800 group-hover:text-brand-wine transition-colors">
                    {faq.question}
                  </span>
                  <div className="text-brand-gold">
                    {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
