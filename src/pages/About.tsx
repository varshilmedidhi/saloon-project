import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Apex Aesthetics</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading the way in advanced aesthetic treatments with a commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Apex Aesthetics Empire has been at the forefront of aesthetic innovation.
                Our journey began with a simple mission: to provide exceptional aesthetic services that enhance
                natural beauty while maintaining the highest standards of safety and client care.
              </p>
              <p className="text-gray-600">
                Today, we continue to lead the industry with our expert team, state-of-the-art technology,
                and commitment to delivering outstanding results for our clients.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
                alt="Our clinic"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality treatments and results.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
              <p className="text-gray-600">
                Putting our clients' needs and satisfaction first in everything we do.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Staying at the forefront of aesthetic technology and techniques.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of safety and professional care.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Dr. Sarah Wilson"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Sarah Wilson</h3>
              <p className="text-gray-600">Medical Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                alt="Dr. Michael Chen"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Dr. Michael Chen</h3>
              <p className="text-gray-600">Aesthetic Specialist</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
                alt="Emma Rodriguez"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Emma Rodriguez</h3>
              <p className="text-gray-600">Senior Aesthetician</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}