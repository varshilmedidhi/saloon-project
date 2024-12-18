import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Quote className="h-8 w-8 text-purple-600 mb-4" />
      <p className="text-gray-600 mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}