import React from 'react';
import { ServiceDeliveryMethod } from '../../types/services';
import { ServiceIcon } from './ServiceIcon';

interface DeliveryMethodCardProps {
  method: ServiceDeliveryMethod;
}

export const DeliveryMethodCard: React.FC<DeliveryMethodCardProps> = ({ method }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        <img
          src={method.imageUrl}
          alt={method.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-2">
              <ServiceIcon iconName={method.icon} />
              <h3 className="text-2xl font-semibold text-white">{method.name}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-gray-600">{method.description}</p>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Benefits</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {method.benefits.map((benefit, index) => (
              <li key={index} className="text-sm">{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Important Considerations</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {method.considerations.map((consideration, index) => (
              <li key={index} className="text-sm">{consideration}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};