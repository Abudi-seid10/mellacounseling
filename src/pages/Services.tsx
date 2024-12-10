import React from 'react';
import { ServicesList } from '../components/services/ServicesList';
import { services } from '../data/services';

export const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of mental health services tailored to meet 
            your individual needs and goals.
          </p>
        </div>
        
        <ServicesList services={services} />
      </div>
    </div>
  );
};