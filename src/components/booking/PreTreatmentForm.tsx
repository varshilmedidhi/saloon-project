import React from 'react';
import { useForm } from 'react-hook-form';

interface PreTreatmentFormProps {
  onSubmit: (data: any) => void;
  selectedService?: {
    title: string;
    price?: string;
  };
}

export function PreTreatmentForm({ onSubmit, selectedService }: PreTreatmentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8">
        {selectedService && (
          <div className="mb-6 p-4 bg-copper-50 rounded-md">
            <h3 className="font-semibold text-copper-900">Selected Service</h3>
            <p className="text-copper-800">{selectedService.title} {selectedService.price && `- ${selectedService.price}`}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              {...register('firstName', { required: 'First name is required' })}
              className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              {...register('lastName', { required: 'Last name is required' })}
              className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message as string}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter a valid email'
              }
            })}
            className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message as string}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medical Conditions
          </label>
          <textarea
            {...register('medicalConditions')}
            rows={3}
            className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
            placeholder="Please list any medical conditions, allergies, or concerns"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Medications
          </label>
          <textarea
            {...register('medications')}
            rows={3}
            className="w-full rounded-md border-gray-300 focus:border-copper-500 focus:ring-copper-500"
            placeholder="Please list any current medications"
          />
        </div>

        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              {...register('consent', { 
                required: 'You must consent to receive treatment'
              })}
              className="mt-1 rounded border-gray-300 text-copper-600 focus:ring-copper-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              I confirm that the information provided is accurate and consent to receive the selected treatment. *
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600">{errors.consent.message as string}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-copper-600 text-white py-3 px-6 rounded-md hover:bg-copper-700 transition-colors"
        >
          Continue to Booking
        </button>
      </div>
    </form>
  );
}