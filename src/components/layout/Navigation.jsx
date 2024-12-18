import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation({ isTransparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map(link => (
          <Link 
            key={link.to}
            to={link.to} 
            className={`nav-link ${
              isTransparent ? 'text-white hover:text-copper-200' : ''
            } ${location.pathname === link.to ? 'nav-link-active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link 
          to="/book" 
          className={`${
            isTransparent 
              ? 'bg-white text-copper-600 hover:bg-gray-100' 
              : 'bg-copper-600 text-white hover:bg-copper-700'
          } px-4 py-2 rounded-md transition-colors`}
        >
          Book Now
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isTransparent ? 'text-white' : 'text-gray-700'} hover:text-copper-600`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-gray-700 hover:text-copper-600"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="block px-3 py-2 text-copper-600 font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}