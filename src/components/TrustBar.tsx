import React from 'react';
import { Truck, ShieldCheck, RotateCcw, CreditCard } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    { icon: <CreditCard size={20} />, text: "COD Available" },
    { icon: <Truck size={20} />, text: "Fast Delivery" },
    { icon: <RotateCcw size={20} />, text: "Easy Returns" },
    { icon: <ShieldCheck size={20} />, text: "Secure Payment" },
  ];

  return (
    <div className="bg-brand-wine text-brand-cream py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-semibold tracking-wide uppercase">
              <span className="text-brand-gold">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
