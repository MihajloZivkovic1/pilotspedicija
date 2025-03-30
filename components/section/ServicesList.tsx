import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/card';

const services = [
  {
    id: 'road-transport',
    title: 'Road Transport',
    description: 'Efficient and reliable road transportation services for local and international shipments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l2 2-2 2M7 16l-2-2 2-2" />
      </svg>
    ),
    link: '/services#road-transport'
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    description: 'Cost-effective sea freight solutions for bulk cargo and containers worldwide.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: '/services#sea-freight'
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    description: 'Fast and secure air freight services for time-sensitive deliveries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    link: '/services#air-freight'
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Modern warehousing and distribution facilities for efficient inventory management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    link: '/services#warehousing'
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description: 'Expert customs brokerage services to ensure smooth international shipments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: '/services#customs-clearance'
  },
  {
    id: 'project-cargo',
    title: 'Project Cargo',
    description: 'Specialized solutions for large-scale projects and oversized cargo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    link: '/services#project-cargo'
  }
];

const ServicesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card key={service.id}>
          <div className="p-6">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <div className="text-center">
              <Link href={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServicesList;