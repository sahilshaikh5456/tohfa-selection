import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-wine text-brand-cream pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">Tohfa Selection</h2>
            <p className="text-brand-cream/60 mb-8 leading-relaxed">
              Adorning your traditions with elegance and grace. We bring you the finest collection of traditional and modern bangles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wine transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wine transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wine transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-brand-cream/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-brand-gold transition-colors">Categories</a></li>
              <li><a href="#bestsellers" className="hover:text-brand-gold transition-colors">Bestsellers</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6 uppercase tracking-widest">Policies</h3>
            <ul className="space-y-4 text-brand-cream/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Return & Refund</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6 uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-6 text-brand-cream/70">
              <li className="flex gap-4">
                <Phone className="text-brand-gold flex-shrink-0" size={20} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-gold flex-shrink-0" size={20} />
                <span>hello@tohfaselection.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="text-brand-gold flex-shrink-0" size={20} />
                <span>123, Ethnic Plaza, Jaipur, Rajasthan - 302001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-cream/40">
          <p>© 2026 Tohfa Selection. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 grayscale opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};
