import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                123 Healing Street, Suite 100
              </p>
              <p className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2 text-teal-600" />
                (123) 456-7890
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2 text-teal-600" />
                contact@Mellacounseling.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hours</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 text-teal-600" />
                Mon-Fri: 8am - 8pm
              </p>
              <p className="ml-7 text-gray-600">Sat: 9am - 5pm</p>
              <p className="ml-7 text-gray-600">Sun: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-teal-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-teal-600">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-600 hover:text-teal-600">
                  Insurance Information
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-600 hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Healing Minds. All rights reserved.
          </p>   
          <p className="text-center text-gray-500">
            Designed by <a href="https://www.motech.et" className="text-teal-600 hover:underline">MoTech Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};