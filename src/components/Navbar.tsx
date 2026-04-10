import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useCart } from '../CartContext';

export const Navbar: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Wedding', href: '#categories' },
    { name: 'Bestsellers', href: '#bestsellers' },
    { name: 'About Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "glass-morphism shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-brand-wine"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <a href="/" className="text-2xl md:text-3xl font-serif font-bold text-brand-wine tracking-tight">
            Tohfa Selection
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-brand-wine transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20inquire%20about%20your%20bangles." 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 text-brand-wine font-semibold text-sm border border-brand-wine/20 px-4 py-2 rounded-full hover:bg-brand-wine hover:text-white transition-all"
          >
            <Phone size={16} />
            <span>WhatsApp</span>
          </a>
          <button 
            className="relative p-2 text-brand-wine hover:bg-brand-wine/10 rounded-full transition-colors"
            onClick={onCartClick}
          >
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-wine text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-cream">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-cream p-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-brand-wine"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 mt-12">
              <span className="text-3xl font-serif font-bold text-brand-wine">Tohfa Selection</span>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-xl font-medium text-neutral-800 hover:text-brand-wine transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <a 
                  href="https://wa.me/919999999999" 
                  className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl font-bold"
                >
                  <Phone size={20} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
