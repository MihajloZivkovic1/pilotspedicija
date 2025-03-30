import React, { Suspense } from 'react';
import TrackingContent from './TrackingContent';

export default function TrackingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 mb-4">Track Your Shipment</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Enter your tracking number to get real-time updates on your shipments status and location.
          </p>
        </div>
      </section>

      {/* Wrap the client component in Suspense */}
      <Suspense fallback={<div className="py-16 bg-white text-center">Loading tracking system...</div>}>
        <TrackingContent />
      </Suspense>
    </>
  );
}