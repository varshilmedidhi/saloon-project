import React from 'react';
import { Link } from 'react-router-dom';

export function QuickLinks() {
  const links = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/book', label: 'Book Appointment' }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to} className="text-gray-400 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}