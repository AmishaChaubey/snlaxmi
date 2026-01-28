import React from 'react';
import { Link } from 'react-router-dom';

export default function IntroSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap');
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Hero Image with Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">
              <img
                src="https://i.pinimg.com/1200x/08/ea/0f/08ea0f15e450485dba3286b723a0457f.jpg"
                alt="Financial Planning Team"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-start space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}>
                      25+
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm font-medium" style={{ fontFamily: "'Lora', serif" }}>
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-start space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}>
                      350+
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm font-medium" style={{ fontFamily: "'Lora', serif" }}>
                      Completed Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600" style={{ fontFamily: "'Lora', serif" }}>
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
              style={{ 
                color: '#2c3e50',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Discover The World of{' '}
              <span className="relative inline-block">
                Financial Planner
                <svg 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" 
                  height="8" 
                  viewBox="0 0 200 12" 
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ height: 'clamp(6px, 1.5vw, 12px)' }}
                >
                  <path 
                    d="M2 10C50 5 150 5 198 10" 
                    stroke="#38b6ff" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4">
              {[
                'Expert Financial Consultation',
                'Personalized Investment Strategies',
                'Comprehensive Wealth Management'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontFamily: "'Lora', serif" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/service">
              <button
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#2c3e50',
                  fontFamily: "'Lora', serif"
                }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Our Services</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              </Link>
              
              <Link to="/about">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-xs sm:text-sm tracking-wide border-2 transition-all duration-300 hover:bg-gray-50 w-full sm:w-auto"
                style={{ 
                  color: '#2c3e50',
                  borderColor: '#2c3e50',
                  fontFamily: "'Lora', serif"
                }}
              >
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}