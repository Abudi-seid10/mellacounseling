import React, { useState, useEffect, useCallback } from 'react';
import { SlideContent } from './SlideContent';
import { SliderControls } from './SliderControls';
import { sliderData } from './SliderData';
import { useSwipeable } from '../../hooks/useSwipeable';

export const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPreviousSlide,
  });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...handlers}
    >
      {sliderData.map((slide, index) => (
        <SlideContent
          key={slide.id}
          slide={slide}
          isActive={currentSlide === index}
        />
      ))}

      <SliderControls
        totalSlides={sliderData.length}
        currentSlide={currentSlide}
        onPrevious={goToPreviousSlide}
        onNext={goToNextSlide}
        onDotClick={goToSlide}
      />
    </div>
  );
};