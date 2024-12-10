import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '../../types';

interface ServicesListProps {
  services: Service[];
}

export const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};