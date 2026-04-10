import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Phone, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const whatsappMessage = `Hi, I want to place an order for:\n${cart.map(item => `- ${item.name} (Size: ${item.selectedSize}, Qty: ${item.quantity})`).join('\n')}\nTotal: ₹${totalPrice}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 w-full max-w-md bg-brand-cream shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-wine" />
                <h2 className="text-xl font-serif font-bold text-brand-wine">Your Shopping Bag ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-brand-wine/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-brand-wine/20" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-2">Your bag is empty</h3>
                  <p className="text-neutral-500 mb-8">Looks like you haven't added anything yet.</p>
                  <button 
                    onClick={onClose}
                    className="bg-brand-wine text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                      <div className="w-24 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-serif font-bold text-neutral-800 line-clamp-1">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-neutral-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-xs text-neutral-500 mb-3 uppercase tracking-widest font-bold">Size: {item.selectedSize}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-bold hover:bg-neutral-100"
                            >
                              -
                            </button>
                            <span className="font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-bold hover:bg-neutral-100"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-brand-wine">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-neutral-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-neutral-500 font-medium uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="text-2xl font-serif font-bold text-brand-wine">₹{totalPrice}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-brand-wine text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-gold transition-all flex items-center justify-center gap-3">
                    <span>Checkout Now</span>
                    <ArrowRight size={20} />
                  </button>
                  <a 
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={20} />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
                <p className="text-center text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-4">
                  Free Shipping & COD Available
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
