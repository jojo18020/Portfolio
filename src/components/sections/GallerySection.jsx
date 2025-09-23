import React, { useState } from 'react';
import TerminalPrompt from '../common/TerminalPrompt';
import Lightbox from '../common/Lightbox';
import { galleryItems } from '../../data/portfolioData';

const GallerySection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section>
      <TerminalPrompt command="open gallery" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-40 md:h-48 object-cover rounded-xl border border-[#FF3B63]/20 cursor-pointer"
              onClick={() => setLightboxImage(item.src)}
            />
            <div className="absolute inset-0 rounded-xl bg-[#FF3B63]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm text-white text-center px-2">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default GallerySection;
