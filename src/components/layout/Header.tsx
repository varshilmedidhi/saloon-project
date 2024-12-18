import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-copper-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Apex Aesthetics</span>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}