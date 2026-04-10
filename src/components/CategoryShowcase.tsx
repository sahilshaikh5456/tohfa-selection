import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-brand-beige/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-wine mb-4">Shop by Category</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Explore our curated collections for every mood and occasion.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/90 via-brand-wine/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-white/80 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
