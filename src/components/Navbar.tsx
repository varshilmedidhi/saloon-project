import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Apex Aesthetics</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
            <Link to="/book" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</Link>
            <Link to="/book" className="block px-3 py-2 text-purple-600 font-medium">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}