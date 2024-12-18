import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import { MassageService } from '../../types/massage';

interface MassageServiceCardProps {
  service: MassageService;
  onSelect: (service: MassageService) => void;
}

export function MassageServiceCard({ service, onSelect }: MassageServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>{service.duration} mins</span>
        </div>
        <div className="flex items-center text-copper-600 font-semibold">
          <DollarSign className="h-5 w-5 mr-1" />
          <span>{service.price}</span>
        </div>
      </div>

      <button
        onClick={() => onSelect(service)}
        className="w-full bg-copper-600 text-white py-2 px-4 rounded-md hover:bg-copper-700 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
}