import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import LightboxModal from '../components/LightboxModal';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Masonry Grid matching the reference layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
      >
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid relative group rounded-xl md:rounded-2xl overflow-hidden bg-[#16161a] border border-white/[0.08] hover:border-brand/40 shadow-md hover:shadow-[0_6px_24px_rgba(37,99,235,0.15)] transition-all duration-300 cursor-pointer"
          >
            <div className="w-full relative overflow-hidden bg-secondary/30">
              <img
                src={item.src}
                alt={item.title || `Gallery photo ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // If photo not found yet in public/gallery, fallback to placeholder
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={galleryData}
        currentIndex={selectedImageIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
