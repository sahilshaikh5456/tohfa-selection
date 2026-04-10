/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Bestsellers } from './components/Bestsellers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SocialProof } from './components/SocialProof';
import { UrgencySection } from './components/UrgencySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { NewsletterPopup } from './components/NewsletterPopup';
import { Product } from './types';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <CategoryShowcase />
        <UrgencySection />
        <Bestsellers onQuickView={handleQuickView} onAddToCart={handleAddToCart} />
        <WhyChooseUs />
        <SocialProof />
        <FAQ />
      </main>

      <Footer />
      
      <WhatsAppButton />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProductModal 
        product={selectedProduct} 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
      />
      <NewsletterPopup />

      {/* Sticky Mobile Add to Cart (only if product selected) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-neutral-100 p-4 flex gap-4">
         <button 
          onClick={() => setIsCartOpen(true)}
          className="flex-1 bg-brand-wine text-white py-4 rounded-xl font-bold uppercase tracking-widest"
         >
          View Cart
         </button>
         <a 
          href="https://wa.me/919999999999"
          className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2"
         >
          WhatsApp
         </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
