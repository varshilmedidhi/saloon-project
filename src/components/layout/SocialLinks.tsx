import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.href}
            className="text-gray-400 hover:text-white"
            aria-label={social.label}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}