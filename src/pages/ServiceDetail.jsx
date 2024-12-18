import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, XCircle, Clock, DollarSign } from 'lucide-react';
import { serviceDetails } from '../data/serviceDetails';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
            <Link 
              to="/services" 
              className="text-copper-600 hover:text-copper-700 inline-flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center text-copper-600 hover:text-copper-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
              <div className="flex items-center text-copper-600 font-bold text-xl">
                <DollarSign className="h-5 w-5" />
                <span>{service.price}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8">{service.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contraindications</h2>
              <ul className="space-y-2">
                {service.contraindications.map((contraindication, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{contraindication}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Frequency</h2>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-copper-600 mr-2 mt-1 flex-shrink-0" />
                <p>{service.frequency}</p>
              </div>
            </div>

            <Link
              to="/book"
              className="inline-flex items-center bg-copper-600 text-white px-6 py-3 rounded-md hover:bg-copper-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}