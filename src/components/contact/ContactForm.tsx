import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [state, handleSubmit] = useForm('xrbgvjyw'); // Replace with your Formspree form ID

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return <p className="text-green-500">Thanks for contacting us! Your message has been sent.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          email: formData.email,
          message: JSON.stringify(formData), // Send the entire form data as a JSON string
        });
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        >
          <option value="">Select a service</option>
          <option value="individual">Individual Counseling</option>
          <option value="couples">Couples Therapy</option>
          <option value="group">Group Therapy</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className={`w-full flex justify-center items-center ${
          state.submitting ? 'bg-gray-400' : 'bg-teal-600'
        } text-white px-4 py-2 rounded-md hover:bg-teal-700`}
      >
        <Send className="w-4 h-4 mr-2" />
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
