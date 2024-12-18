import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The support and guidance I received here has been transformative. I've learned valuable tools for managing anxiety and feel more confident in my daily life.",
    author: "Anonymous Client",
    service: "Anxiety Management"
  },
  {
    quote: "Our couples therapy sessions have greatly improved our communication and brought us closer together. We're grateful for the expert guidance.",
    author: "Anonymous Couple",
    service: "Couples Therapy"
  },
  {
    quote: "The compassionate approach and professional expertise helped me navigate through a difficult time. I'm now equipped with better coping strategies.",
    author: "Anonymous Client",
    service: "Individual Therapy"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of others who have taken steps toward positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <Quote className="w-8 h-8 text-teal-200 absolute top-6 left-6" />
              <div className="pl-8">
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium">{testimonial.author}</p>
                  <p>{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};