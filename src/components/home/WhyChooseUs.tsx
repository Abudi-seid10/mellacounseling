import React from 'react';
import { Heart, Users, Star, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Our approach is rooted in empathy and understanding, ensuring you feel supported throughout your journey.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our licensed therapists bring years of experience and specialized training to help you achieve your goals.'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'We use evidence-based approaches to ensure the best possible outcomes for our clients.'
  },
  {
    icon: Shield,
    title: 'Safe Space',
    description: 'Your privacy and comfort are our top priorities, creating a secure environment for healing.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We offer convenient appointment times to fit your busy lifestyle, including evenings and weekends.'
  },
  {
    icon: Award,
    title: 'Licensed & Certified',
    description: 'Our team maintains the highest professional standards with ongoing training and certifications.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of personalized, professional mental health care
            delivered with compassion and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-block p-3 bg-teal-100 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};