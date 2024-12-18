import React from 'react';

export function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-end">
          <span className="text-copper-600 font-semibold">{service.price}</span>
        </div>
      </div>
    </div>
  );
}