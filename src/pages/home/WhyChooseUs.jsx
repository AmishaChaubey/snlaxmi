import React from 'react';
import { Award, Rocket, Users, Lock, Lightbulb, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      title: "Financial Clarity",
      description: "Accurate insights and transparent reporting for strategic decision-making that drives your business forward"
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      title: "Compliance & Risk Mitigation",
      description: "Ensuring adherence to regulations and minimizing financial risks with expert oversight"
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />, 
      title: "Cost Efficiency",
      description: "Optimizing accounting processes for improved resource allocation and maximum financial performance"
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />,
      title: "Strategic Planning",
      description: "Collaborative development of financial plans and budgets aligned with your business goals"
    },
  ];

  return (
    <section className="relative bg-white py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full" 
             style={{ background: 'radial-gradient(circle, #2c3e50 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full" 
             style={{ background: 'radial-gradient(circle, #2c3e50 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24">
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <span className="inline-block text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 rounded-md" 
                  style={{ 
                    backgroundColor: 'rgba(44, 62, 80, 0.08)',
                    color: '#2c3e50'
                  }}>
              Snlaxmi Accounting
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 px-2 font-bold" 
              style={{ 
                color: '#2c3e50',
                fontFamily: '"playfair display", sans',
                lineHeight: '1.1',
                letterSpacing: '-0.03em'
              }}>
            VALUE OF ACCOUNTING
          </h1>
          
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1 sm:h-1.5 md:h-1.5 lg:h-2 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8" 
               style={{ backgroundColor: '#2c3e50' }}></div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-[1.1rem] xl:text-xl 2xl:text-2xl text-gray-700 font-medium leading-relaxed px-4 sm:px-6" 
             style={{ fontFamily: '"lora", sans' }}>
            At Snlaxmi, accounting is the bedrock of our operations, providing the foundation for your business success.
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            {/* Background Shape */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 md:translate-x-5 md:translate-y-5 lg:translate-x-6 lg:translate-y-6 xl:translate-x-8 xl:translate-y-8 rounded-tl-[30px] sm:rounded-tl-[50px] md:rounded-tl-[60px] lg:rounded-tl-[75px] xl:rounded-tl-[100px] rounded-br-[30px] sm:rounded-br-[50px] md:rounded-br-[60px] lg:rounded-br-[75px] xl:rounded-br-[100px]" 
                 style={{ backgroundColor: 'rgba(44, 62, 80, 0.08)' }}></div>
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-tl-[30px] sm:rounded-tl-[50px] md:rounded-tl-[60px] lg:rounded-tl-[75px] xl:rounded-tl-[100px] rounded-br-[30px] sm:rounded-br-[50px] md:rounded-br-[60px] lg:rounded-br-[75px] xl:rounded-br-[100px] shadow-lg sm:shadow-xl md:shadow-xl lg:shadow-2xl">
              <img
                src="/1.jpeg"
                alt="Snlaxmi accounting team"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50]/30 via-transparent to-[#2c3e50]/50"></div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-3.5 md:-left-3.5 lg:-top-4 lg:-left-4 xl:-top-6 xl:-left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 border-l-2 border-t-2 lg:border-l-3 lg:border-t-3 xl:border-l-4 xl:border-t-4 rounded-tl-xl sm:rounded-tl-xl md:rounded-tl-2xl lg:rounded-tl-2xl xl:rounded-tl-3xl" 
                 style={{ borderColor: '#2c3e50' }}></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-3.5 md:-right-3.5 lg:-bottom-4 lg:-right-4 xl:-bottom-6 xl:-right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 border-r-2 border-b-2 lg:border-r-3 lg:border-b-3 xl:border-r-4 xl:border-b-4 rounded-br-xl sm:rounded-br-xl md:rounded-br-2xl lg:rounded-br-2xl xl:rounded-br-3xl" 
                 style={{ borderColor: '#2c3e50' }}></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 sm:p-5 md:p-5 lg:p-6 xl:p-7 2xl:p-8 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-2xl transition-all duration-500 cursor-pointer"
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.03) 0%, rgba(44, 62, 80, 0.08) 100%)'
                     }}></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-3 sm:mb-3.5 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6 inline-flex p-2 sm:p-2.5 md:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-2xl transition-all duration-500 group-hover:scale-110" 
                       style={{ 
                         backgroundColor: 'rgba(44, 62, 80, 0.1)',
                         color: '#2c3e50'
                       }}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-lg lg:text-[1.15rem] xl:text-xl 2xl:text-2xl font-black mb-2 sm:mb-2.5 md:mb-3 lg:mb-3 xl:mb-4 tracking-tight" 
                      style={{ 
                        color: '#2c3e50',
                        fontFamily: '"playfair display", sans',
                        letterSpacing: '-0.02em'
                      }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-[0.9rem] xl:text-base leading-relaxed font-medium" 
                     style={{ fontFamily: '"Raleway", sans' }}>
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-3 sm:mt-3.5 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-6 h-0.5 sm:h-0.5 md:h-0.5 lg:h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full" 
                       style={{ backgroundColor: '#2c3e50' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24">
          <button 
            className="group relative inline-flex items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 px-5 sm:px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 2xl:py-6 text-white font-black text-xs sm:text-sm md:text-[0.9rem] lg:text-base xl:text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:gap-3 sm:hover:gap-4 md:hover:gap-4.5 lg:hover:gap-5 xl:hover:gap-6 w-full sm:w-auto justify-center rounded-lg sm:rounded-lg md:rounded-xl"
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
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#2c3e50] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-lg sm:rounded-lg md:rounded-xl"></div>
          </button>
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