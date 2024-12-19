import { useCallback } from 'react';

interface SwipeHandlers {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
}

export const useSwipeable = ({ onSwipedLeft, onSwipedRight }: SwipeHandlers) => {
  const SWIPE_THRESHOLD = 50;
  let touchStartX = 0;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0 && onSwipedLeft) {
      onSwipedLeft();
    } else if (diff < 0 && onSwipedRight) {
      onSwipedRight();
    }
  }, [onSwipedLeft, onSwipedRight]);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
};