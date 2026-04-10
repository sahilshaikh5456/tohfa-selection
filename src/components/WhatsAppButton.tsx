import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20order%20bangles%20from%20Tohfa%20Selection."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <Phone size={28} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
};
