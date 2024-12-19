import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, Heart } from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  user: Users,
  brain: Brain,
  heart: Heart,
};

export const FeaturedServices = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive mental health services tailored to your unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredServices.map((service) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Users;
          
          return (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-teal-600 mb-4">
                <IconComponent className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services#${service.id}`}
                className="text-teal-600 font-medium hover:text-teal-700"
              >
                Learn More →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};