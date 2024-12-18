import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext,
  onDotClick,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </>
  );
};