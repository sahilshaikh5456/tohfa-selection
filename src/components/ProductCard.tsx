import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-brand-wine text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
          {product.discount}% OFF
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white text-brand-wine p-3 rounded-full hover:bg-brand-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-brand-wine text-white p-3 rounded-full hover:bg-brand-gold transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-brand-gold mb-2">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
          <span className="text-[10px] text-neutral-400 ml-1">(4.8)</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-neutral-800 mb-2 line-clamp-1 group-hover:text-brand-wine transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-brand-wine">₹{product.price}</span>
          <span className="text-sm text-neutral-400 line-through">₹{product.originalPrice}</span>
        </div>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-3 rounded-xl border-2 border-brand-wine text-brand-wine font-bold text-sm uppercase tracking-widest hover:bg-brand-wine hover:text-white transition-all"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
