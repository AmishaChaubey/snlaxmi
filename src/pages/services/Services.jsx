import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Zap, Heart, Shield, ArrowRight, Check } from 'lucide-react';

export default function ValueSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Solutions",
      description: "Customized services designed to meet your unique needs, ensuring a personalized approach to your financial and insurance requirements.",
      features: ["Personalized approach", "Custom strategies", "Flexible solutions"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise and Experience",
      description: "Benefit from the knowledge of seasoned professionals in both accounting and insurance domains, offering you insights and strategies honed through years of industry experience.",
      features: ["Seasoned professionals", "Industry insights", "Proven strategies"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Financial Empowerment",
      description: "Our services are designed to empower you with the information and tools needed to make informed decisions, achieve financial goals, and navigate challenges with confidence.",
      features: ["Informed decisions", "Goal achievement", "Confident navigation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Innovation and Adaptability",
      description: "Stay ahead with cutting-edge solutions and adaptive strategies. We embrace innovation to ensure our clients benefit from the latest advancements in the financial and insurance landscapes.",
      features: ["Cutting-edge solutions", "Adaptive strategies", "Latest advancements"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Transparency and Trust",
      description: "Experience transparent interactions and build trust with a service provider committed to openness, integrity, and ethical practices. Our dedication to transparency forms the foundation of our client relationships.",
      features: ["Open communication", "Ethical practices", "Client-focused relationships"]
    },
   
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % values.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, values.length]);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = (index) => {
    setActiveIndex(index);
    setIsAutoScrolling(false);
    
    // Resume auto-scroll after 10 seconds of no interaction
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 10000);
  };

    React.useEffect(() => window.scrollTo(0, 0), []);


  return (
    
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-[#abbdd0] to-[#34495e] overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <img 
            src="/service.png" 
            alt="Financial experts"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Value of Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
              Discover the unparalleled value our services bring to you at Snlaxmi. We pride ourselves on delivering excellence in every interaction.
            </p>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="hidden lg:block absolute top-5 -right-64 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: '#2c3e50' }}></div>
      <div className="hidden lg:block absolute -bottom-10 -left-64 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: '#2c3e50' }}></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 pt-8 sm:pt-10">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-3 sm:py-5 rounded-full border" style={{ borderColor: '#2c3e50' }}>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest" style={{ color: '#2c3e50' 
              , 
              fontFamily:'playfair display, sans'
            }}>
              Our Value Proposition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4" style={{ color: '#2c3e50'
            ,
             fontFamily:'playfair display, sans'
           }}>
            What We Deliver
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          style={
            {
                fontFamily:'Lora, sans'
            }
          }>
            Five key pillars that define our commitment to your financial success and security
          </p>
        </div>

        {/* Main Content - Diagonal Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12 sm:mb-16 md:mb-20">
          
          {/* Left Side - Value Cards List */}
          <div className="space-y-3 sm:space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                onClick={() => handleUserInteraction(index)}
                onMouseEnter={() => handleUserInteraction(index)}
                className={`group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-500 ${
                  activeIndex === index 
                    ? 'shadow-xl' 
                    : 'shadow-md hover:shadow-lg'
                }`}
                style={{
                  background: activeIndex === index ? '#2c3e50' : 'white',
                  border: `2px solid ${activeIndex === index ? '#2c3e50' : '#e5e7eb'}`,
                  transform: activeIndex === index ? 'translateX(8px)' : 'translateX(0)'
                }}
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  {/* Icon */}
                  <div 
                    className={`flex-shrink-0 p-2 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-500 ${
                      activeIndex === index ? 'bg-white/20 scale-110' : 'bg-gray-100'
                    }`}
                    style={{
                      color: activeIndex === index ? 'white' : '#2c3e50'
                    }}
                  >
                    {React.cloneElement(value.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 transition-colors duration-500`}
                      style={{
                        color: activeIndex === index ? 'white' : '#2c3e50',
                          fontFamily:'playfair display, sans'

                      }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className={`text-xs sm:text-sm transition-colors duration-500 line-clamp-2 sm:line-clamp-none ${
                        activeIndex === index ? 'text-white/80' : 'text-gray-600'
                      }`}

                      style={
                        {
                            fontFamily:'lora, sans'
                        }
                      }
                    >
                      {value.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <div 
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-500 ${
                      activeIndex === index ? 'scale-110' : ''
                    }`}
                    style={{
                      background: activeIndex === index ? 'white' : '#f3f4f6',
                      color: activeIndex === index ? '#2c3e50' : '#6b7280'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Progress indicator */}
                {activeIndex === index && (
                  <div className="mt-3 sm:mt-4 h-1 rounded-full overflow-hidden bg-white/20">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{
                        width: '100%',
                        animation: 'progressFill 0.6s ease-out'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Detailed View */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
              style={{ background: '#2c3e50' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-white opacity-5"></div>
              <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-white opacity-5"></div>

              <div className="relative z-10">
                {/* Icon Display */}
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm">
                    <div className="text-white">
                      {React.cloneElement(values[activeIndex].icon, { className: "w-12 h-12 sm:w-16 sm:h-16" })}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-6 sm:mb-8">
                  <div className="text-xs sm:text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest"
                  style={
                    {
                        fontFamily:'lora, sans'
                    }
                  }>
                    Value {activeIndex + 1} of 5
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                  style={
                    {
                        fontFamily:'playfair display, sans'
                    }
                  }>
                    {values[activeIndex].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
                  style={
                    {
                        fontFamily:'lora, sans'
                    }
                  }>
                    {values[activeIndex].description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                  {values[activeIndex].features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm"
                      style={{
                        animation: `slideIn 0.4s ease-out ${idx * 0.1}s both`
                      }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#2c3e50' }} />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ color: '#2c3e50' }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-6 sm:mt-8 justify-center">
                  {values.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleUserInteraction(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        

        

      </div>

      <style jsx>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}