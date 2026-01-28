import React from 'react';
import { Award, Rocket, Users, Lock, Lightbulb, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Financial Clarity",
      description: "Accurate insights and transparent reporting for strategic decision-making that drives your business forward"
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Compliance & Risk Mitigation",
      description: "Ensuring adherence to regulations and minimizing financial risks with expert oversight"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />, 
      title: "Cost Efficiency",
      description: "Optimizing accounting processes for improved resource allocation and maximum financial performance"
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Strategic Planning",
      description: "Collaborative development of financial plans and budgets aligned with your business goals"
    },
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full" 
             style={{ background: 'radial-gradient(circle, #2c3e50 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full" 
             style={{ background: 'radial-gradient(circle, #2c3e50 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block text-[10px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-md" 
                  style={{ 
                    backgroundColor: 'rgba(44, 62, 80, 0.08)',
                    color: '#2c3e50'
                  }}>
              Snlaxmi Accounting
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 px-2  font-bold" 
              style={{ 
                color: '#2c3e50',
                fontFamily: '"playfair display", sans',
                lineHeight: '1.1',
                letterSpacing: '-0.03em'
              }}>
            VALUE OF ACCOUNTING
          </h1>
          
          <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 mx-auto mb-4 sm:mb-6 md:mb-8" 
               style={{ backgroundColor: '#2c3e50' }}></div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed px-4" 
             style={{ fontFamily: '"lora", sans' }}>
            At Snlaxmi, accounting is the bedrock of our operations, providing the foundation for your business success.
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            {/* Background Shape */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 md:translate-x-8 md:translate-y-8 rounded-tl-[50px] sm:rounded-tl-[75px] md:rounded-tl-[100px] rounded-br-[50px] sm:rounded-br-[75px] md:rounded-br-[100px]" 
                 style={{ backgroundColor: 'rgba(44, 62, 80, 0.08)' }}></div>
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-tl-[50px] sm:rounded-tl-[75px] md:rounded-tl-[100px] rounded-br-[50px] sm:rounded-br-[75px] md:rounded-br-[100px] shadow-xl sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                alt="Snlaxmi accounting team"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50]/30 via-transparent to-[#2c3e50]/50"></div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-l-2 border-t-2 sm:border-l-3 sm:border-t-3 md:border-l-4 md:border-t-4 rounded-tl-2xl sm:rounded-tl-3xl" 
                 style={{ borderColor: '#2c3e50' }}></div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-r-2 border-b-2 sm:border-r-3 sm:border-b-3 md:border-r-4 md:border-b-4 rounded-br-2xl sm:rounded-br-3xl" 
                 style={{ borderColor: '#2c3e50' }}></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer "
                style={{
                  boxShadow: '0 10px 30px rgba(44, 62, 80, 0.08)',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#2c3e50';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(44, 62, 80, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 62, 80, 0.08)';
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.03) 0%, rgba(44, 62, 80, 0.08) 100%)'
                     }}></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110" 
                       style={{ 
                         backgroundColor: 'rgba(44, 62, 80, 0.1)',
                         color: '#2c3e50'
                       }}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 tracking-tight" 
                      style={{ 
                        color: '#2c3e50',
                        fontFamily: '"playfair display", sans',
                        letterSpacing: '-0.02em'
                      }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium" 
                     style={{ fontFamily: '"Raleway", sans' }}>
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-4 sm:mt-5 md:mt-6 h-0.5 sm:h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full" 
                       style={{ backgroundColor: '#2c3e50' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
         <Link to='/contact'> <button 
            className="group relative inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-white font-black text-sm sm:text-base md:text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:gap-4 sm:hover:gap-5 md:hover:gap-6 w-full sm:w-auto justify-center rounded-lg"
            style={{ 
              backgroundColor: '#2c3e50',
              fontFamily: '"playfair display", sans',
              boxShadow: '0 15px 40px rgba(44, 62, 80, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 62, 80, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(44, 62, 80, 0.3)';
            }}
          >
            <span className="relative z-10">PARTNER WITH US</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#2c3e50] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button></Link>
        </div>
      </div>

      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=playfair+display:wght@700;800;900&family=Raleway:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default WhyChooseUs;