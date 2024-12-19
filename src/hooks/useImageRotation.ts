import { useState, useEffect, useCallback } from 'react';

interface ImageData {
  url: string;
  alt: string;
}

const counselingImages: ImageData[] = [
  {
    url: "https://in-thenow.co.uk/wp-content/uploads/2021/02/AdobeStock_251575741-scaled.jpeg",
    alt: "Person writing in journal during therapy session"
  },
  {
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000",
    alt: "Therapeutic counseling session"
  },
  {
    url: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=2000",
    alt: "Peaceful counseling environment"
  },
  {
    url: "https://www.sacap.edu.za/wp-content/uploads/2019/11/choose-a-career-in-counselling.jpg",
    alt: "Family counseling"
  }
];

export const useImageRotation = () => {
  const [currentImage, setCurrentImage] = useState<ImageData>(counselingImages[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rotateImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((current) => {
        const currentIndex = counselingImages.findIndex(img => img.url === current.url);
        const nextIndex = (currentIndex + 1) % counselingImages.length;
        return counselingImages[nextIndex];
      });
      setIsTransitioning(false);
    }, 50); // Match this with CSS transition duration
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateImage, 5000);
    return () => clearInterval(interval);
  }, [rotateImage]);

  return {
    currentImage,
    isTransitioning
  };
};