import React from 'react';
import { Link } from 'react-router-dom';
import { useImageRotation } from '../../hooks/useImageRotation';

export const WhyChooseCounseling = () => {
  const { currentImage, isTransitioning } = useImageRotation();

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative rounded-full overflow-hidden aspect-square">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Counseling</h2>
              <div className="w-32 h-1 bg-teal-600 mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                You are feeling lost, alone and overwhelmed for a while now and you're having 
                a hard time finding your way through the obstacles of life.
              </p>

              <p className="text-lg">
                You're getting stuck in the past or the future and it's hard to be present.
              </p>

              <p className="text-lg">
                This has been impacting your relationships in a negative way and you're looking 
                for a change.
              </p>

              <p className="text-lg">
                The fact that you're here right now shows that you can endure meaningfully 
                through the difficulties in life even though your thoughts and feelings may be 
                telling you otherwise.
              </p>

              <p className="text-lg">
                If you are feeling disconnected and distressed from yourself and others, I want 
                to let you know that there is hope. There is a way to experience connection with 
                yourself towards becoming more authentic so that you can relate with others 
                from a place of peace, joy, and love.
              </p>

              <p className="text-lg">
                I can help you towards this reality if you would like to collaborate together 
                towards healing and a more full and integrated self.
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors inline-flex items-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};