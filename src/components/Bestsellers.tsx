import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface BestsellersProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({ onQuickView, onAddToCart }) => {
  return (
    <section id="bestsellers" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Most Loved</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-wine">Our Bestsellers</h2>
          </div>
          <p className="text-neutral-600 max-w-md">
            Handpicked favorites that our customers can't get enough of. Timeless designs for every celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
