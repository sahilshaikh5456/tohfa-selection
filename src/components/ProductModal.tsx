import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Phone, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../CartContext';
import { cn } from '../lib/utils';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-brand-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-brand-wine hover:bg-brand-wine hover:text-white transition-all"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-[400px] md:h-auto relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-brand-wine text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.discount}% OFF
                </div>
                {product.stock <= 5 && (
                  <div className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                    Only {product.stock} left in stock
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center gap-2 text-brand-gold mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold text-neutral-500">4.8 (120+ Reviews)</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-wine mb-4">{product.name}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-brand-wine">₹{product.price}</span>
                <span className="text-xl text-neutral-400 line-through">₹{product.originalPrice}</span>
              </div>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-8">
                <TrendingUp size={16} />
                <span>{product.viewingCount} people are viewing this right now</span>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <span className="block text-sm font-bold text-neutral-800 uppercase tracking-widest mb-4">Select Size</span>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 rounded-xl border-2 font-bold transition-all",
                        selectedSize === size 
                          ? "border-brand-wine bg-brand-wine text-white shadow-lg" 
                          : "border-neutral-200 text-neutral-500 hover:border-brand-wine hover:text-brand-wine"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="block text-sm font-bold text-neutral-800 uppercase tracking-widest mb-4">Quantity</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-xl font-bold hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-xl font-bold hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-brand-wine text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-gold transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-wine/20"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
                <a 
                  href={`https://wa.me/919999999999?text=Hi, I want to order ${product.name} (Size: ${selectedSize || 'Not selected'}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center justify-between text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-brand-gold" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
