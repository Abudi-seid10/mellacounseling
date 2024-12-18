import React from 'react';
import { Link } from 'react-router-dom';
import { SlideData } from '../../types';

interface SlideContentProps {
  slide: SlideData;
  isActive: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide, isActive }) => {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link 
        to={slide.link}
        className="block w-full h-full relative"
        aria-label={`View ${slide.title}`}
      >
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-xl text-white/90 mb-6">{slide.description}</p>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};