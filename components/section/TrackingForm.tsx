'use client';

import React, { useState } from 'react';

const TrackingForm: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    // In a real application, this would call an API endpoint
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, redirect to tracking page with the tracking number
      window.location.href = `/tracking?number=${encodeURIComponent(trackingNumber)}`;
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-1">
          Tracking Number
        </label>
        <input
          type="text"
          id="tracking-number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          disabled={isSubmitting}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Tracking...' : 'Track Shipment'}
      </button>
    </form>
  );
};

export default TrackingForm;