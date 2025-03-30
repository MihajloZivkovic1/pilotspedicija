import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 mb-4">About Pilot Spedicija</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Your trusted logistics partner with a global network and years of experience in the industry.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Pilot Spedicija has grown from a small local shipping company to a comprehensive logistics provider with a global network of partners and clients.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a simple mission: to provide reliable, efficient, and cost-effective logistics solutions. This mission continues to guide our operations as we expand our services and geographical reach.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals brings together expertise from various sectors of the logistics industry, ensuring a well-rounded approach to solving complex shipping challenges.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {/* Placeholder for company image */}
              <div className="text-gray-500 text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p>Company Headquarters Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Pilot Spedicija, we are committed to excellence in every aspect of our operations.
              Our core values shape how we work and guide our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Reliability</h3>
              <p className="text-gray-600 text-center">
                We deliver on our promises, ensuring timely and secure transportation of your goods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Efficiency</h3>
              <p className="text-gray-600 text-center">
                We optimize routes and processes to reduce transit times and costs for our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Customer-Centric</h3>
              <p className="text-gray-600 text-center">
                We prioritize our clients needs and strive to exceed their expectations in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Led by industry veterans with decades of combined experience in logistics,
              our team brings expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">Marko Petrović</h3>
              <p className="text-blue-600 text-center mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-center">
                With over 20 years in logistics, Marko has led Pilot Spedicija from its founding to become a regional leader.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">Ana Đorđević</h3>
              <p className="text-blue-600 text-center mb-3">Operations Director</p>
              <p className="text-gray-600 text-center">
                Ana oversees all operational aspects, ensuring efficient workflow and high-quality service delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">Stefan Jovanović</h3>
              <p className="text-blue-600 text-center mb-3">International Relations</p>
              <p className="text-gray-600 text-center">
                Stefan manages our global partnerships and ensures smooth international operations across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Our Global Reach</h2>
            <p className="text-gray-300">
              With partners and operations across multiple continents, we connect businesses
              worldwide through our extensive logistics network.
            </p>
          </div>

          <div className="bg-gray-700 p-8 rounded-lg">
            {/* This would be replaced with an actual map visualization in a real project */}
            <div className="h-80 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                [Interactive Map Visualization of Global Network]
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">25+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-gray-300">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">5,000+</div>
                <div className="text-gray-300">Monthly Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-gray-300">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Work with Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Let us handle your logistics needs with professionalism and care.
            Contact us today for a consultation.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}