import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Animated Background Elements - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#2c3e50]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-[#2c3e50]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-[#2c3e50]/3 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative Grid Pattern - Responsive */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2c3e50 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge - Responsive */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#2c3e50]/10 backdrop-blur-sm border-2 border-[#2c3e50]/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 animate-fade-in hover:bg-[#2c3e50]/15 transition-all duration-300">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c3e50]" />
            <span className="text-[#2c3e50] font-semibold text-xs sm:text-sm tracking-wide">
              Limited Time Offer - Free Consultation
            </span>
          </div>

          {/* Main Heading - Fully Responsive */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-4 sm:mb-6 leading-tight tracking-tight px-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ready to Start Your Financial Journey?
            <span className="block mt-2 bg-gradient-to-r from-[#2c3e50] to-[#4a5f7f] bg-clip-text text-transparent">
             
            </span>
          </h2>

          {/* Subheading - Responsive */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Take the first step towards financial clarity and success. Our expert team is ready to help you achieve your goals.
          </p>

          {/* Feature Pills - Responsive Grid */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
            {[
              'Expert Tax Planning',
              'Personalized Strategy',
              'Proven Results'
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 bg-[#2c3e50]/10 backdrop-blur-sm border-2 border-[#2c3e50]/20 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-[#2c3e50]/20 hover:border-[#2c3e50]/40 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c3e50] flex-shrink-0" />
                <span className="text-[#2c3e50] font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center px-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group bg-[#2c3e50] text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl shadow-[#2c3e50]/30 hover:shadow-[#2c3e50]/50 hover:bg-[#1a2633] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:gap-3 sm:hover:gap-4">
                Get Started Today
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group bg-white border-2 border-[#2c3e50] text-[#2c3e50] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#2c3e50] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Schedule Consultation
              </button>
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;