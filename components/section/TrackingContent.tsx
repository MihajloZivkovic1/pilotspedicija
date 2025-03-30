'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Mock shipment data for demo purposes
const mockShipments = {
  'PS12345678': {
    trackingNumber: 'PS12345678',
    status: 'In Transit',
    origin: 'Belgrade, Serbia',
    destination: 'Munich, Germany',
    estimatedDelivery: '2025-04-03',
    deliveredDate: '2025-03-27 14:35',
    service: 'Road Transport',
    customer: 'TechGlobal d.o.o.',
    history: [
      { date: '2025-03-28 09:15', location: 'Belgrade Warehouse', status: 'Shipment Received' },
      { date: '2025-03-28 14:30', location: 'Belgrade Warehouse', status: 'Processing Complete' },
      { date: '2025-03-29 08:45', location: 'Belgrade, Serbia', status: 'Departed Facility' },
      { date: '2025-03-30 11:20', location: 'Zagreb, Croatia', status: 'In Transit' }
    ]
  },
  'PS98765432': {
    trackingNumber: 'PS98765432',
    status: 'Delivered',
    origin: 'Vienna, Austria',
    destination: 'Belgrade, Serbia',
    estimatedDelivery: '2025-03-27',
    deliveredDate: '2025-03-27 14:35',
    service: 'Road Transport',
    customer: 'Elektronika d.o.o.',
    history: [
      { date: '2025-03-25 10:30', location: 'Vienna Warehouse', status: 'Shipment Received' },
      { date: '2025-03-25 15:45', location: 'Vienna, Austria', status: 'Departed Facility' },
      { date: '2025-03-26 09:15', location: 'Budapest, Hungary', status: 'In Transit' },
      { date: '2025-03-27 08:40', location: 'Belgrade, Serbia', status: 'Out for Delivery' },
      { date: '2025-03-27 14:35', location: 'Belgrade, Serbia', status: 'Delivered' }
    ]
  }
};

const TrackingContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialTrackingNumber = searchParams.get('number') || '';

  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [shipmentData, setShipmentData] = useState<typeof mockShipments[keyof typeof mockShipments] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if there's an initial tracking number and fetch its data
  useEffect(() => {
    if (initialTrackingNumber) {
      handleSearch();
    }
  }, [initialTrackingNumber]);

  const handleSearch = () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call with setTimeout
    setTimeout(() => {
      const result = mockShipments[trackingNumber as keyof typeof mockShipments];

      if (result) {
        setShipmentData(result);
      } else {
        setError('Shipment not found. Please check the tracking number and try again.');
        setShipmentData(null);
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Shipment Tracking</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter tracking number (e.g., PS12345678)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Track'}
              </button>
            </div>
            {error && (
              <div className="mt-4 text-red-600">{error}</div>
            )}
            <div className="mt-4 text-gray-600 text-sm">
              <p className="mb-2"><strong>Note:</strong> For demo purposes, try these tracking numbers:</p>
              <ul className="list-disc pl-5">
                <li>PS12345678 - In Transit shipment</li>
                <li>PS98765432 - Delivered shipment</li>
              </ul>
            </div>
          </div>

          {/* Shipment Details */}
          {shipmentData && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center flex-wrap">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Shipment {shipmentData.trackingNumber}</h2>
                    <p className="text-gray-600">Service: {shipmentData.service}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${shipmentData.status === 'Delivered'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                      }`}>
                      {shipmentData.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Shipment Information</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-2 text-gray-500">Origin:</td>
                        <td className="py-2 font-medium">{shipmentData.origin}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-500">Destination:</td>
                        <td className="py-2 font-medium">{shipmentData.destination}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-500">Customer:</td>
                        <td className="py-2 font-medium">{shipmentData.customer}</td>
                      </tr>
                      {shipmentData.status === 'Delivered' ? (
                        <tr>
                          <td className="py-2 text-gray-500">Delivered On:</td>
                          <td className="py-2 font-medium">{shipmentData.deliveredDate}</td>
                        </tr>
                      ) : (
                        <tr>
                          <td className="py-2 text-gray-500">Estimated Delivery:</td>
                          <td className="py-2 font-medium">{shipmentData.estimatedDelivery}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Current Status</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="mb-2">
                      {shipmentData.status === 'Delivered' ? (
                        <span className="text-green-600 font-medium">✓ Your shipment has been delivered</span>
                      ) : (
                        <span className="text-blue-600 font-medium">🚚 Your shipment is on the way</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {shipmentData.status === 'Delivered' ? (
                        <p>Delivered on {shipmentData.deliveredDate}</p>
                      ) : (
                        <p>Estimated delivery: {shipmentData.estimatedDelivery}</p>
                      )}
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Last Update: {shipmentData.history[shipmentData.history.length - 1].date}</p>
                      <p>{shipmentData.history[shipmentData.history.length - 1].location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200"></div>
                  <ul className="space-y-6 relative z-10">
                    {shipmentData.history.map((event, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${index === 0 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                          {index === 0 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{event.status}</div>
                          <div className="text-gray-600 text-sm">{event.date}</div>
                          <div className="text-gray-600 text-sm">{event.location}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tracking Tips */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Tracking Tips</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Your tracking number is included in your shipping confirmation email.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Tracking information is updated regularly throughout the day.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>If your shipment does not appear, please allow 24 hours after shipping for tracking information to become available.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You can also contact our customer service for tracking assistance at +381 11 123 4568.</span>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Having trouble tracking your shipment or need assistance with your delivery?
                    Our customer service team is ready to help.
                  </p>
                  <Link href="/contact" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                    Contact Support
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Ship with Us</h3>
                  <p className="text-gray-600 mb-4">
                    Ready to send a package? Get a quote and book your shipment online in just a few clicks.
                  </p>
                  <Link href="/contact" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-medium">How long will it take for my shipment to arrive?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">
                    Delivery times vary depending on the origin, destination, and service selected.
                    Road freight within Europe typically takes 1-5 business days, while international
                    air freight can take 1-3 business days, and sea freight 10-45 days depending on the route.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-medium">What happens if my tracking information is not updating?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">
                    Tracking information may not update immediately. Allow 24 hours for new tracking data.
                    If your tracking has not updated for more than 48 hours, please contact our customer
                    service team for assistance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-medium">Can I change the delivery address once my shipment is in transit?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">
                    Address changes may be possible depending on the shipments status and location.
                    Please contact our customer service as soon as possible with your tracking number
                    and the new delivery address to request this change.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-medium">What should I do if my shipment is delayed?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">
                    If your shipment appears delayed, first check the tracking information for any updates
                    or notifications. Delays can occur due to weather, customs, or other factors. If you
                    need more information, please contact our customer service team with your tracking number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingContent;