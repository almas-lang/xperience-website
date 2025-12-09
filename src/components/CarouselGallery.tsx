'use client';

import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  alt: string;
}

interface CarouselGalleryProps {
  medias: MediaItem[];
  className?: string;
}

export function CarouselGallery({ medias, className = '' }: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return medias.length - 1;
      if (nextIndex >= medias.length) return 0;
      return nextIndex;
    });
  };

  const jumpToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (!medias || medias.length === 0) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center ${className}`}>
        <p className="text-gray-400">No media available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Display Area */}
      <div className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg ${className || 'h-[300px]'}`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            {medias[currentIndex]?.type === 'image' ? (
              <img
                src={medias[currentIndex].url}
                alt={medias[currentIndex].alt}
                className="w-full h-full object-cover"
                loading={currentIndex === 0 ? 'eager' : 'lazy'}
              />
            ) : medias[currentIndex]?.type === 'video' ? (
              <div className="relative w-full h-full">
                <video
                  src={medias[currentIndex].url}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                  <Play className="w-20 h-20 text-white opacity-80" />
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {medias.length > 1 && (
          <>
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-primary transition-colors" />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
          {currentIndex + 1} / {medias.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {medias.map((media, index) => (
          <button
            key={media.id}
            onClick={() => jumpToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-primary scale-105 shadow-md'
                : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="relative w-full h-full bg-gray-200">
                <video src={media.url} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
