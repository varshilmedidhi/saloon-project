import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Navigation } from "./Navigation";

export function Header() {
  const location = useLocation();
  const isTransparent = location.pathname === "/";

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles
                className={`h-8 w-8 ${
                  isTransparent ? "text-white" : "text-copper-600"
                }`}
              />
              <span
                className={`ml-2 text-xl font-bold ${
                  isTransparent ? "text-white" : "text-gray-900"
                }`}
              >
                Apex Aesthetics Empire
              </span>
            </Link>
          </div>
          <Navigation isTransparent={isTransparent} />
        </div>
      </div>
    </header>
  );
}
