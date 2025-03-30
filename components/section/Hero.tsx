'use client';

import React from 'react';
import Link from 'next/link';
import TrackingForm from '@/components/section/TrackingForm';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image or pattern could be added here */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-1 mb-6">
              Global Logistics Solutions for Your Business
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Efficient, reliable, and cost-effective shipping and logistics services.
              We connect businesses worldwide with tailored transportation solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">Track Your Shipment</h2>
            <TrackingForm />
            <div className="mt-4 text-center">
              <Link href="/tracking" className="text-blue-600 hover:underline">
                Advanced Tracking Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;