import React from "react";
import { InlineWidget } from "react-calendly";

export function Book() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your treatment at a time that works best for you.
          </p>

          <div className="min-h-[700px]">
            <InlineWidget
              url="https://calendly.com/apexaestheticsempire/30min"
              styles={{
                height: "700px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
