import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';
import { QuickLinks } from './QuickLinks';

export function Footer() {
  return (
    <footer className="bg-copper-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Apex Aesthetics</h3>
            <p className="text-copper-100">
              Transforming beauty through advanced aesthetic treatments and expert care.
            </p>
          </div>
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        
        <div className="border-t border-copper-800 mt-8 pt-8 text-center text-copper-200">
          <p>&copy; {new Date().getFullYear()} Apex Aesthetics Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}