import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to schedule an appointment or learn more 
            about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-gray-600">
                    123 Healing Street, Suite 100<br />
                    Cityville, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8am - 8pm<br />
                    Saturday: 9am - 5pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p className="text-gray-600">
                    Main: (123) 456-7890<br />
                    Emergency: (123) 456-7899
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-teal-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p className="text-gray-600">contact@healingminds.com</p>
                </div>
              </div>
            </div>

            {/* Map placeholder - In a real implementation, integrate with a mapping service */}
            <div className="mt-6 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};