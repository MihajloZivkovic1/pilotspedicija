import React from 'react';
import Link from 'next/link';

// Define the services with more detailed information
const services = [
  {
    id: 'road-transport',
    title: 'Road Transport',
    description: 'Efficient, flexible, and reliable road transportation for local and international deliveries.',
    details: [
      'Full Truckload (FTL) services for large shipments',
      'Less-than-Truckload (LTL) services for cost-effective smaller shipments',
      'Express delivery options for time-sensitive cargo',
      'Temperature-controlled transportation for sensitive goods',
      'Cross-border transportation with customs handling',
      'Real-time tracking of your shipments'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l2 2-2 2M7 16l-2-2 2-2" />
      </svg>
    )
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    description: 'Cost-effective sea freight solutions for bulk cargo and containers, connecting you to global markets.',
    details: [
      'Full Container Load (FCL) shipping services',
      'Less than Container Load (LCL) options for smaller shipments',
      'Dry cargo, refrigerated, and specialized container handling',
      'Break-bulk cargo services for non-containerized goods',
      'Port-to-port and door-to-door delivery options',
      'Comprehensive documentation and customs clearance support'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    description: 'Fast and secure air freight services for time-sensitive shipments and high-value goods.',
    details: [
      'Express air freight for urgent deliveries',
      'Standard air freight for regular shipments',
      'Charter services for oversized or specialized cargo',
      'Temperature-controlled air freight for sensitive goods',
      'Dangerous goods handling with proper certification',
      'Door-to-airport, airport-to-airport, and door-to-door options'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Modern, secure warehousing and distribution facilities for efficient inventory management.',
    details: [
      'Short and long-term storage solutions',
      'Temperature-controlled storage for sensitive products',
      'Inventory management and stock control',
      'Order fulfillment and distribution services',
      'Cross-docking facilities for streamlined logistics',
      'Advanced warehouse management system for real-time visibility'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description: 'Expert customs brokerage services to ensure smooth and compliant international shipments.',
    details: [
      'Import and export customs clearance',
      'Documentation preparation and verification',
      'Tariff classification and duty calculation',
      'Compliance with international trade regulations',
      'Representation before customs authorities',
      'Electronic customs declaration systems for faster processing'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'project-cargo',
    title: 'Project Cargo',
    description: 'Specialized logistics solutions for large-scale projects and oversized cargo transportation.',
    details: [
      'Heavy lift and out-of-gauge cargo handling',
      'Project planning and route surveys',
      'Equipment rental and specialized transportation',
      'Multi-modal transport coordination',
      'Permits and escorts for oversized loads',
      'Risk assessment and contingency planning'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Comprehensive logistics solutions tailored to your specific business needs.
            From road transport to specialized project cargo handling, we have got you covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-gray-600">
              At Pilot Spedicija, we offer a wide range of services designed to meet all your
              logistics and shipping needs. Explore our services below and discover how we can
              support your business growth.
            </p>
          </div>

          {/* Services Listing */}
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-center lg:text-left">{service.description}</p>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold mb-4">Our {service.title} Services Include:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              We provide specialized logistics solutions for various industries, understanding the
              unique requirements and challenges of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600">
                Efficient distribution, warehousing, and last-mile delivery solutions for retail and e-commerce businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                Supply chain solutions for manufacturers, including raw material delivery and finished product distribution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pharmaceuticals</h3>
              <p className="text-gray-600">
                Temperature-controlled transportation and storage for sensitive pharmaceutical products with full compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565M14 8.5L12 9l2 1L12 11l2 1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Food & Beverages</h3>
              <p className="text-gray-600">
                Temperature-controlled logistics for perishable goods with strict adherence to food safety standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology</h3>
              <p className="text-gray-600">
                Specialized handling and secure transportation for sensitive electronic equipment and technology products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automotive</h3>
              <p className="text-gray-600">
                Specialized transport for vehicles, parts, and components with just-in-time delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600">
              We maintain the highest standards of quality and compliance in all our operations,
              ensuring safe, secure, and environmentally responsible logistics services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Quality Management System certification ensures consistent service quality.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565M14 8.5L12 9l2 1L12 11l2 1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">ISO 14001:2015</h3>
              <p className="text-gray-600">
                Environmental Management System certification for sustainable operations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">TAPA FSR</h3>
              <p className="text-gray-600">
                Facility Security Requirements certification for secure storage and handling.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">GDP Compliant</h3>
              <p className="text-gray-600">
                Good Distribution Practice compliance for pharmaceutical logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Contact us today to discuss your specific requirements and discover how our services
            can help streamline your supply chain and improve efficiency.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
            <Link href="/tracking" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors">
              Track a Shipment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}