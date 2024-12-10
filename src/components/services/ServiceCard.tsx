import React from 'react';
import { Service } from '../../types';
import { Users, Heart, Users2, Brain, Smile, Frown, School, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  user: Users,
  heart: Heart,
  group: Users2,
  brain: Brain,
  smile: Smile,
  frown: Frown,
  school: School,
  book: Book,
};

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Users;

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
              <IconComponent className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            </div>
            <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
            <span className="w-1 h-6 bg-teal-600 mr-3"></span>
            Treatment Approaches
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {service.approaches.map((approach, index) => (
              <li key={index} className="text-sm">{approach}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
            <span className="w-1 h-6 bg-teal-600 mr-3"></span>
            Expected Outcomes
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {service.outcomes.map((outcome, index) => (
              <li key={index} className="text-sm">{outcome}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
            <span className="w-1 h-6 bg-teal-600 mr-3"></span>
            Session Information
          </h4>
          <p className="text-gray-600 text-sm ml-4">{service.sessionInfo}</p>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
            <span className="w-1 h-6 bg-teal-600 mr-3"></span>
            Frequently Asked Questions
          </h4>
          <div className="space-y-4 ml-4">
            {service.faqs.map((faq, index) => (
              <div key={index}>
                <p className="font-medium text-gray-800 mb-2 text-sm">{faq.question}</p>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

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