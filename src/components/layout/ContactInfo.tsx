import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    { icon: Phone, text: '(555) 123-4567' },
    { icon: Mail, text: 'info@apexaesthetics.com' },
    { icon: MapPin, text: '123 Beauty Lane, Suite 100' }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
      <ul className="space-y-2">
        {contactDetails.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <detail.icon className="h-5 w-5 mr-2" />
            {detail.text}
          </li>
        ))}
      </ul>
    </div>
  );
}