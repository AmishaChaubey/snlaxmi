import React from 'react';

import { Link } from 'react-router-dom';

export default function PromiseSection() {
  const promises = [
    {
      number: "01",
      title: "Trust & Security",
      description: "Your financial data is protected with bank-level encryption and security protocols, ensuring complete confidentiality and peace of mind.",
      icon: "🔒"
    },
    {
      number: "02",
      title: "Guaranteed Results",
      description: "We stand behind our strategies with measurable outcomes and transparent reporting on your investment performance.",
      icon: "✓"
    },
    {
      number: "03",
      title: "Personalized Service",
      description: "Every client receives tailored financial solutions designed specifically for their unique goals and circumstances.",
      icon: "👥"
    },
    {
      number: "04",
      title: "Quick Response",
      description: "Our team is always ready to assist you with prompt responses and proactive communication at every step.",
      icon: "⚡"
    },
    {
      number: "05",
      title: "Expert Guidance",
      description: "Benefit from decades of combined expertise and insights from our certified financial planning professionals.",
      icon: "💡"
    },
    {
      number: "06",
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Our pricing structure is clear, fair, and designed with your best interests in mind.",
      icon: "📊"
    }
  ];

  return (
    <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap');
        
        .promise-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .promise-item:hover {
          transform: translateX(10px);
        }
        
        .promise-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #2c3e50, #2c3e50, #2c3e50);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .promise-item:hover::before {
          opacity: 1;
        }

        /* Mobile optimization */
        @media (max-width: 640px) {
          .promise-item:hover {
            transform: translateX(5px);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span 
              className="text-xs sm:text-sm font-semibold tracking-widest uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-100"
              style={{ color: '#2c3e50', fontFamily: "'Lora', serif" }}
            >
              Why Choose Us
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}
          >
            Our Promise to You
          </h2>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Building lasting relationships through trust, transparency, and unwavering commitment to your financial success.
          </p>
        </div>

        {/* Promises Grid - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="promise-item pl-4 sm:pl-6"
            >
              {/* Number Badge */}
              <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 mb-3 sm:mb-4">
                <div 
                  className="flex-shrink-0 text-4xl sm:text-5xl md:text-6xl font-bold opacity-10"
                  style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}
                >
                  {promise.number}
                </div>
                <div className="pt-1 sm:pt-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{promise.icon}</div>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3"
                    style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}
                  >
                    {promise.title}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {promise.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4"
            style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start Your Journey?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to='/contact'>  <button
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: '#2c3e50', fontFamily: "'Lora', serif" }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button></Link>
            
           <Link to='/about'>  <button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
              style={{ color: '#2c3e50', borderColor: '#2c3e50', fontFamily: "'Lora', serif" }}
            >
             More Info
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}