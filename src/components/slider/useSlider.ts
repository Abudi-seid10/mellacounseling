import { useState, useCallback, useEffect } from 'react';
import { SlideData } from '../../types';

export const useSlider = (slides: SlideData[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shuffledSlides, setShuffledSlides] = useState<SlideData[]>([]);

  // Fisher-Yates shuffle algorithm
  const shuffleSlides = useCallback(() => {
    const newSlides = [...slides];
    for (let i = newSlides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newSlides[i], newSlides[j]] = [newSlides[j], newSlides[i]];
    }
    setShuffledSlides(newSlides);
    setCurrentSlide(0);
  }, [slides]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % shuffledSlides.length);
  }, [shuffledSlides.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + shuffledSlides.length) % shuffledSlides.length);
  }, [shuffledSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  // Initialize shuffled slides
  useEffect(() => {
    shuffleSlides();
  }, [shuffleSlides]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  return {
    currentSlide,
    shuffledSlides,
    isAutoPlaying,
    setIsAutoPlaying,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
    shuffleSlides,
  };
};