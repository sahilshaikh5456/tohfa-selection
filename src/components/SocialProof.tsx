import React from 'react';
import { Instagram } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/ugc1/400/400',
    'https://picsum.photos/seed/ugc2/400/400',
    'https://picsum.photos/seed/ugc3/400/400',
    'https://picsum.photos/seed/ugc4/400/400',
    'https://picsum.photos/seed/ugc5/400/400',
    'https://picsum.photos/seed/ugc6/400/400',
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-brand-wine mb-4">
            <Instagram size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">@TohfaSelection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-wine mb-4">Spotted in Tohfa</h2>
          <p className="text-neutral-600">Tag us in your photos to get featured on our page!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={img} 
                alt={`UGC ${i}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-wine/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
