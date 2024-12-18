import React from 'react';
import { MassageCategory, MassageService } from '../../types/massage';
import { MassageServiceCard } from './MassageServiceCard';

interface MassageCategorySectionProps {
  category: MassageCategory;
  onSelectService: (service: MassageService) => void;
}

export function MassageCategorySection({ category, onSelectService }: MassageCategorySectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">{category.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map(service => (
            <MassageServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}