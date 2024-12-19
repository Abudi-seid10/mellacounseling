import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { ServiceIcon } from './ServiceIcon';
import { ServiceDetails } from './ServiceDetails';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div id={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] scroll-mt-20">
      <div className="relative aspect-[16/9]">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="flex items-center space-x-3 mb-2">
              <ServiceIcon iconName={service.icon} />
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            </div>
            <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
          </div>
        </div>
      </div>
      
      <ServiceDetails service={service} />

      <div className="p-6">
        <Link
          to="/contact"
          className="inline-block w-full bg-teal-600 text-white text-center py-3 rounded-md hover:bg-teal-700 transition-colors"
        >
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
};