import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { WhyChooseCounseling } from '../components/home/WhyChooseCounseling';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Testimonials } from '../components/home/Testimonials';

export const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseCounseling />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};