import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-copper-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-copper-400" />
              <span className="ml-2 text-xl font-bold">
                Apex Aesthetics Empire
              </span>
            </div>
            <p className="text-copper-100">
              Transforming beauty through advanced aesthetic treatments and
              expert care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-copper-200 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-copper-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-copper-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-copper-200 hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-copper-200">
                <Phone className="h-5 w-5 mr-2" />
                (905) 904-5840
              </li>
              <li className="flex items-center text-copper-200">
                <Mail className="h-5 w-5 mr-2" />
                apexaestheticsempire@gmail.com
              </li>
              <li className="flex items-center text-copper-200">
                <MapPin className="h-5 w-5 mr-2" />
                <p> 3960 Eglinton Ave W Unit 16 Mississauga,Ontario</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ApexAestheticsEmpire?mibextid=wwXIfr&rdid=hNAqIVa4qHGquPdV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DmTsTUX7T%2F%3Fmibextid%3DwwXIfr"
                className="text-copper-200 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/apexaestheticsempire/"
                className="text-copper-200 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-copper-800 mt-8 pt-8 text-center text-copper-200">
          <p>
            &copy; {new Date().getFullYear()} Apex Aesthetics Empire. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
