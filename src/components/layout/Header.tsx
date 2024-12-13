import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-teal-600">Mella Counseling Center</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-teal-600">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-teal-600">Our Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-teal-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>Emergency: (123) 456-7890</span>
            </a>
            <Link
              to="/contact"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/team"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};