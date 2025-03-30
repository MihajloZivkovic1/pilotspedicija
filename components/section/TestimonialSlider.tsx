'use client';

import React, { useState, useEffect } from 'react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "Pilot Spedicija has been an invaluable logistics partner for our business. Their attention to detail and commitment to timely delivery have significantly improved our supply chain efficiency.",
    author: "Ana Petrović",
    company: "TechGlobal d.o.o.",
    position: "Supply Chain Manager"
  },
  {
    id: 2,
    text: "We've been working with Pilot Spedicija for over 3 years now, and they consistently exceed our expectations. Their customs clearance expertise has saved us countless hours and resources.",
    author: "Milan Jovanović",
    company: "Evropa Import-Export",
    position: "Operations Director"
  },
  {
    id: 3,
    text: "The team at Pilot Spedicija is professional, responsive, and incredibly knowledgeable. They've helped us expand our market reach with reliable international shipping solutions.",
    author: "Jelena Nikolić",
    company: "Balkan Organics",
    position: "CEO"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-8 shadow-md relative">
        {/* Quote icon */}
        <div className="absolute top-6 left-8 text-blue-300 opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-lg text-gray-700 italic mb-6">{currentTestimonial.text}</p>

          <div className="flex items-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
              {currentTestimonial.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{currentTestimonial.author}</h4>
              <p className="text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;