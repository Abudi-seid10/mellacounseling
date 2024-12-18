import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Testimonials } from '../components/home/Testimonials';
import { FeaturedServices } from '../components/home/FeaturedServices';

export const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};