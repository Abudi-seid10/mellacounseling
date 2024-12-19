import React from 'react';
import { Service } from '../../types';

interface ServiceDetailsProps {
  service: Service;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const { approaches, outcomes, sessionInfo, faqs } = service;

  return (
    <div className="p-6 space-y-6">
      {/* Treatment Approaches Section */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
          <span className="w-1 h-6 bg-teal-600 mr-3"></span>
          Treatment Approaches
        </h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          {approaches.map((approach, index) => (
            <li key={index} className="text-sm">{approach}</li>
          ))}
        </ul>
      </div>

      {/* Expected Outcomes Section */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
          <span className="w-1 h-6 bg-teal-600 mr-3"></span>
          Expected Outcomes
        </h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          {outcomes.map((outcome, index) => (
            <li key={index} className="text-sm">{outcome}</li>
          ))}
        </ul>
      </div>

      {/* Session Information Section */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
          <span className="w-1 h-6 bg-teal-600 mr-3"></span>
          Session Information
        </h4>
        <p className="text-gray-600 text-sm ml-4">{sessionInfo}</p>
      </div>

      {/* FAQs Section - Only render if FAQs exist */}
      {faqs && faqs.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
            <span className="w-1 h-6 bg-teal-600 mr-3"></span>
            Frequently Asked Questions
          </h4>
          <div className="space-y-4 ml-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <p className="font-medium text-gray-800 mb-2 text-sm">{faq.question}</p>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};