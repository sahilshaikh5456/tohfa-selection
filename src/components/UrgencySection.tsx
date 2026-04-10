import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer, Zap } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-brand-gold">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-brand-wine">
            <div className="w-16 h-16 bg-brand-wine text-brand-gold rounded-2xl flex items-center justify-center shadow-xl">
              <Zap size={32} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-1">Festive Flash Sale!</h2>
              <p className="font-bold uppercase tracking-widest text-xs opacity-80">Get Extra 20% OFF on all Bridal Sets</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {[
                { label: 'Hrs', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-wine text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {t.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-2 text-brand-wine">{t.label}</span>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-wine text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-wine/20"
            >
              Claim Offer
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
