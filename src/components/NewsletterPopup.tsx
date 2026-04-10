import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight } from 'lucide-react';

export const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('popupShown')) {
        setIsOpen(true);
        localStorage.setItem('popupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-brand-cream w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-brand-wine hover:bg-brand-wine hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            <div className="md:w-1/2 h-48 md:h-auto">
              <img 
                src="https://picsum.photos/seed/gift-popup/600/800" 
                alt="Gift" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <div className="w-12 h-12 bg-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center mb-6">
                <Gift size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-wine mb-4">Wait! Don't Go...</h2>
              <p className="text-neutral-600 mb-8">
                Get <span className="font-bold text-brand-wine">10% OFF</span> on your first order. Join our exclusive circle today!
              </p>
              
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-wine outline-none transition-all"
                />
                <button className="w-full bg-brand-wine text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center justify-center gap-2">
                  <span>Get My Discount</span>
                  <ArrowRight size={18} />
                </button>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 text-[10px] text-neutral-400 font-bold uppercase tracking-widest hover:text-brand-wine transition-colors"
              >
                No thanks, I prefer paying full price
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
