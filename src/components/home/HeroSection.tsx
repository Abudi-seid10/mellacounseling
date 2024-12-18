import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
          alt="Therapeutic session"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to Mental Wellness Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Professional, compassionate therapy services tailored to your unique needs.
            Take the first step towards positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-teal-800 px-6 py-3 rounded-md hover:bg-teal-50 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};