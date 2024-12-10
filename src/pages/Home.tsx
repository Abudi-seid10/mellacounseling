import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Star } from 'lucide-react';
import { services } from '../data/services';

export const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey to Mental Wellness Starts Here
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Professional counseling services provided by experienced therapists in a safe, 
              supportive environment.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-teal-600 mb-4">
                {service.icon === 'user' && <Users className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services#${service.id}`}
                className="text-teal-600 font-medium hover:text-teal-700"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Our approach is rooted in empathy and understanding, ensuring you feel 
                supported throughout your journey.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our licensed therapists bring years of experience and specialized training 
                to help you achieve your goals.
              </p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                We use evidence-based approaches to ensure the best possible outcomes 
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Client Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "The support and guidance I received here has been transformative. 
              I've learned valuable tools for managing anxiety and feel more confident 
              in my daily life."
            </p>
            <footer className="text-gray-500">- Anonymous Client, Anxiety Management</footer>
          </blockquote>
          <blockquote className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "Our couples therapy sessions have greatly improved our communication 
              and brought us closer together. We're grateful for the expert guidance."
            </p>
            <footer className="text-gray-500">- Anonymous Couple, Couples Therapy</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};