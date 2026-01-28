import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2c3e50]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2c3e50]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2c3e50]/3 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2c3e50 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2c3e50]/10 backdrop-blur-sm border-2 border-[#2c3e50]/20 px-6 py-3 rounded-full mb-8 animate-fade-in hover:bg-[#2c3e50]/15 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-[#2c3e50]" />
            <span className="text-[#2c3e50] font-semibold text-sm tracking-wide">
              Limited Time Offer - Free Consultation
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-[#2c3e50] mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ready to Start Your Financial Journey?
            <span className="block mt-2 bg-gradient-to-r from-[#2c3e50] to-[#4a5f7f] bg-clip-text text-transparent">
             
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Take the first step towards financial clarity and success. Our expert team is ready to help you achieve your goals.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'Expert Tax Planning',
              'Personalized Strategy',
              'Proven Results'
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-[#2c3e50]/10 backdrop-blur-sm border-2 border-[#2c3e50]/20 px-5 py-3 rounded-full hover:bg-[#2c3e50]/20 hover:border-[#2c3e50]/40 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="w-5 h-5 text-[#2c3e50]" />
                <span className="text-[#2c3e50] font-semibold">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to ="/contact">
            <button className="group bg-[#2c3e50] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-[#2c3e50]/30 hover:shadow-[#2c3e50]/50 hover:bg-[#1a2633] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 hover:gap-4">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </Link>
            
            <Link to ="/contact">
            <button className="group bg-white border-2 border-[#2c3e50] text-[#2c3e50] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2c3e50] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Schedule Consultation
            </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-[#2c3e50] mb-2 group-hover:text-[#1a2633] transition-colors">500+</div>
                <div className="text-gray-600 font-medium text-lg">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-[#2c3e50] mb-2 group-hover:text-[#1a2633] transition-colors">₹ 2k+</div>
                <div className="text-gray-600 font-medium text-lg">Saved in Taxes</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-[#2c3e50] mb-2 group-hover:text-[#1a2633] transition-colors">15+</div>
                <div className="text-gray-600 font-medium text-lg">Years Experience</div>
              </div>
            </div>
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
      `}</style>
    </section>
  );
};

export default CTA;