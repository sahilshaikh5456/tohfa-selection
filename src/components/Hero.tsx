import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/indian-jewelry-hero/1920/1080" 
          alt="Traditional Indian Bangles" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-wine/80 via-brand-wine/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 rounded-full text-brand-gold font-semibold text-sm tracking-widest uppercase mb-6">
              Premium Ethnic Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Adorning Your <br />
              <span className="text-brand-gold italic">Traditions</span> with Elegance
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              Discover our handpicked collection of traditional and modern bangles, crafted for the woman who celebrates her heritage with style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#bestsellers" 
                className="group flex items-center justify-center gap-2 bg-brand-gold text-brand-wine px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg shadow-brand-gold/20"
              >
                <span>Shop Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20your%20collection." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Phone size={20} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-brand-wine"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">5000+ Happy Customers</p>
                <div className="flex text-brand-gold">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-brand-gold/20 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-brand-gold/40 rounded-full flex items-center justify-center">
             <div className="w-16 h-16 bg-brand-gold/10 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
