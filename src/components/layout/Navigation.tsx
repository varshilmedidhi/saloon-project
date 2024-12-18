import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map(link => (
          <Link 
            key={link.to}
            to={link.to} 
            className="text-gray-700 hover:text-copper-600"
          >
            {link.label}
          </Link>
        ))}
        <Link 
          to="/book" 
          className="bg-copper-600 text-white px-4 py-2 rounded-md hover:bg-copper-700"
        >
          Book Now
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-copper-600"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-gray-700 hover:text-copper-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="block px-3 py-2 text-copper-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}