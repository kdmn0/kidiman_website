import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, images, currentIndex, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen || !images || images.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background scroll when open
    document.body.style.overflow = 'hidden';

    // Preload next and previous images in background for instant navigation
    const nextIdx = (currentIndex + 1) % images.length;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;

    if (images[nextIdx]?.src) {
      const imgNext = new Image();
      imgNext.src = images[nextIdx].src;
    }
    if (images[prevIdx]?.src) {
      const imgPrev = new Image();
      imgPrev.src = images[prevIdx].src;
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
          onClick={onClose}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between z-20 pointer-events-none">
            <div className="text-white/70 text-sm font-medium tracking-wide bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 pointer-events-auto">
              {currentIndex + 1} / {images.length}
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer pointer-events-auto focus:outline-none"
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-4xl max-h-[78vh] w-auto h-auto flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title || `Gallery image ${currentIndex + 1}`}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => {
                // If the user hasn't added this specific photo yet, show a clean fallback preview
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </motion.div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/10 cursor-pointer focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
