import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MassageService } from '../types/massage';
import { massageServices } from '../data/massageServices';
import { MassageCategorySection } from '../components/massage/MassageCategorySection';

export function MassageServices() {
  const navigate = useNavigate();

  const handleSelectService = (service: MassageService) => {
    navigate('/book', { state: { service } });
  };

  return (
    <div className="bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Exclusive Massage Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Apex Aesthetics Empire Inc., we offer an exquisite array of therapeutic and
              indulgent massages, each tailored to enhance your well-being and elevate your
              relaxation experience.
            </p>
          </div>

          {massageServices.map(category => (
            <MassageCategorySection
              key={category.id}
              category={category}
              onSelectService={handleSelectService}
            />
          ))}
        </div>
      </div>
    </div>
  );
}