import React from 'react';
import { Award, Heart, Truck, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Affordable Luxury",
      desc: "Premium designs that don't break the bank. Quality you can trust."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Handpicked Designs",
      desc: "Every piece is carefully selected to ensure elegance and uniqueness."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Shipping",
      desc: "Quick delivery across India so you never miss a celebration."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted by 5000+",
      desc: "Join our community of happy women who love Tohfa Selection."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-wine text-brand-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Our Promise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Why Women Love <br />
              <span className="text-brand-gold italic">Tohfa Selection</span>
            </h2>
            <p className="text-brand-cream/70 text-lg mb-12 max-w-lg leading-relaxed">
              We believe that jewelry is more than just an accessory—it's a reflection of your personality and a celebration of your traditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-brand-gold mb-4">{f.icon}</div>
                  <h3 className="text-xl font-serif font-bold mb-2">{f.title}</h3>
                  <p className="text-brand-cream/60 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/jewelry-making/800/800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-brand-gold text-brand-wine p-8 rounded-2xl shadow-2xl hidden md:block"
            >
              <p className="text-4xl font-serif font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest">Quality Guarantee</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
