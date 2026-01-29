import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "₹5Cr+", label: "Assets Managed" },
  { value: "1,000+", label: "Satisfied Clients" },
  { value: "98%", label: "Client Success Rate" },
];

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    description: "We uphold the highest ethical standards in every interaction, ensuring honesty and transparency in all our services."
  },
  {
    icon: "🎯",
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering superior quality and exceptional results for our clients."
  },
  {
    icon: "💼",
    title: "Client-Centric",
    description: "Your success is our priority. We tailor our solutions to meet your unique needs and financial goals."
  },
  {
    icon: "🔒",
    title: "Trust",
    description: "Building long-lasting relationships based on trust, reliability, and consistent delivery of promises."
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "We embrace new ideas and technologies to provide cutting-edge financial solutions for the modern world."
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "We are committed to continuous improvement and supporting sustainable growth for our clients and community."
  }
];


  React.useEffect(() => window.scrollTo(0, 0), []);


  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#61758a] to-[#34495e] overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 opacity-80">
          <img
            src="/about1.png"
            alt="Financial experts"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white mb-8 sm:mb-20 lg:mb-35">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              About Our Firm
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 mb-4 sm:mb-6">
              Empowering your financial future with expert guidance, innovative strategies,
              and an unwavering commitment to excellence, trust, and long-term growth.
            </p>
            <Link to='/contact'>
              <button className="bg-gradient-to-br from-[#2c3e50] to-[#667788] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2c3e50] transition-colors duration-300 shadow-lg">
                We're Here to Help
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#2c3e50]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#667788]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-10 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Impact in Numbers
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[2px] w-6 sm:w-8 bg-[#2c3e50]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></div>
              <div className="h-[2px] w-6 sm:w-8 bg-[#2c3e50]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Gradient Background - Reveals on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] to-[#667788] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#2c3e50]/10 to-transparent rounded-bl-full group-hover:w-24 group-hover:h-24 sm:group-hover:w-32 sm:group-hover:h-32 transition-all duration-500"></div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute -bottom-8 -left-8 w-20 sm:w-24 h-20 sm:h-24 bg-[#667788]/5 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon or Decorative Element */}
                    <div className="mb-3 sm:mb-4 flex justify-center">
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent via-[#2c3e50] to-transparent group-hover:via-white transition-colors duration-500"></div>
                    </div>
                    
                    {/* Number */}
                    <div
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3e50] group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-600 text-base sm:text-lg font-medium group-hover:text-white/90 transition-colors duration-500">
                      {stat.label}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-4 sm:mt-6 flex justify-center">
                      <div className="w-10 sm:w-12 h-1 bg-[#2c3e50]/20 group-hover:bg-white/40 rounded-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-500 text-xs sm:text-sm">
              Trusted by clients worldwide • Delivering excellence since day one
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/6f/a4/51/6fa45165d79cfaa447b371ec1ed9233b.jpg"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50]/50 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-4 sm:mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Who We Are
              </h2>

              <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent"
                  style={{ borderColor: "#2c3e50", borderTopWidth: "1px" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#2c3e50" }}
                ></div>
                <div
                  className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent"
                  style={{ borderColor: "#2c3e50", borderTopWidth: "1px" }}
                ></div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                At SNLaxmi, we are more than just financial experts—we are
                trusted partners committed to your journey toward long-term
                financial well-being. Our approach is rooted in understanding
                your goals and delivering solutions with clarity and confidence.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Backed by a team of seasoned professionals, we bring extensive
                expertise in accounting, financial planning, and insurance
                services. By combining industry insight with strategic thinking,
                we ensure every solution is tailored to your unique financial
                needs.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                We believe in building lasting relationships based on trust and transparency, while guiding your financial growth with care and precision.
              </p>

              <Link to='/service'>
                <button className="bg-gradient-to-br from-[#2c3e50] to-[#667788] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2c3e50] transition-colors duration-300 shadow-lg w-full sm:w-auto">
                  Explore Services {'>>'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision and Values Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Mission, Vision, Goals */}
            <div>
              <div className="text-center lg:text-left mb-12 sm:mb-16 lg:mb-20">
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-8 sm:mb-10 lg:mb-14"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Our Mission
                </h2>

                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent"
                    style={{ borderColor: "#2c3e50", borderTopWidth: "1px" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#2c3e50" }}
                  ></div>
                  <div
                    className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent"
                    style={{ borderColor: "#2c3e50", borderTopWidth: "1px" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-12 lg:space-y-18">
                {/* Vision */}
                <div className="flex items-start gap-4 sm:gap-6 lg:ml-20">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#dfdfdf] rounded-2xl transform rotate-45 flex items-center justify-center shadow-lg">
                      <span className="text-2xl sm:text-3xl -rotate-45">🔭</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Vision
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      To become a trusted financial partner empowering individuals and businesses toward long-term financial stability.
                    </p>
                  </div>
                </div>

                {/* Missions */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#dfdfdf] rounded-2xl transform rotate-45 flex items-center justify-center shadow-lg">
                      <span className="text-2xl sm:text-3xl -rotate-45">💡</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Missions
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      To deliver transparent, personalized financial solutions with expertise, integrity, and a strong client-focused approach.
                    </p>
                  </div>
                </div>

                {/* Goals */}
                <div className="flex items-start gap-4 sm:gap-6 lg:ml-20">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#dfdfdf] rounded-2xl transform rotate-45 flex items-center justify-center shadow-lg">
                      <span className="text-2xl sm:text-3xl -rotate-45">🎯</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Goals
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      To support sustainable growth by providing reliable services, building trust, and ensuring lasting client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Single Image with Nice Layout */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full lg:w-auto">
                {/* Main Image */}
                <div className="relative w-full h-full lg:w-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative min-h-[500px] sm:min-h-[450px] lg:h-[500px] overflow-hidden py-8 sm:py-0">
        {/* Full Width Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cta2.png"
            alt="Financial consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/80 via-[#2c3e50]/60 to-[#2c3e50]/40 sm:from-[#2c3e50]/70 sm:via-[#2c3e50]/50 sm:to-transparent"></div>
        </div>

        {/* Glassmorphism Content */}
        <div className="relative h-full min-h-[500px] sm:min-h-[450px] lg:min-h-[500px] max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center sm:justify-start">
          <div className="w-full sm:max-w-xl">
            <div className="backdrop-blur-xl bg-white/10 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ready to Transform Your Financial Future?
              </h2>

              <div className="w-10 sm:w-12 lg:w-16 h-1 bg-[#38b6ff] mb-3 sm:mb-4"></div>

              <p className="text-sm sm:text-base lg:text-lg text-white/95 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                Join hundreds of satisfied clients who trust us with their
                financial success.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                <Link to='/service'><button className="bg-gradient-to-br from-[#2c3e50] to-[#667788] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:bg-white  transition-all duration-300 shadow-xl transform hover:scale-105 w-full sm:w-auto">
                 Our Services
                </button></Link>
               <Link to='/contact'> <button className="bg-transparent border-2 border-white text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:bg-white hover:text-[#2c3e50] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  Contact Us
                </button></Link>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3 lg:flex-row lg:gap-4 pt-3 sm:pt-4 border-t border-white/30 text-white/90 text-xs sm:text-sm">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-base sm:text-lg">📞</span>
                  <span className="font-medium">+91 9015382370</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-base sm:text-lg">✉️</span>
                  <span className="font-medium break-all sm:break-words lg:break-normal text-center sm:text-left">
                    snlaxminarayan16@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#2c3e50]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#667788]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2c3e50]/60 uppercase">
                What Drives Us
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-4 sm:mb-6 leading-tight px-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Core Values
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#2c3e50]"></div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#2c3e50]/30"></div>
              </div>
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#2c3e50]"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              The principles that guide our work and define who we are as a firm
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50]/0 via-transparent to-[#667788]/0 group-hover:from-[#2c3e50]/5 group-hover:to-[#667788]/5 transition-all duration-500"></div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2c3e50] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="relative">
                      {/* Icon Background Circle */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e50] to-[#667788] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2c3e50] to-[#667788] rounded-2xl transform rotate-45 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-[50deg] transition-all duration-500">
                        <span className="text-3xl sm:text-4xl -rotate-45 group-hover:-rotate-[50deg] transition-transform duration-500">
                          {value.icon}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#2c3e50] mb-3 sm:mb-4 group-hover:text-[#1a252f] transition-colors duration-300"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tl from-[#2c3e50]/5 to-transparent rounded-tl-full transform translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 sm:group-hover:translate-x-6 sm:group-hover:translate-y-6 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-gray-500 text-xs sm:text-sm px-4">
              These values are more than words—they're the foundation of everything we do
            </p>
          </div>
        </div>
      </div>

      {/* Add Playfair Display font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
      `}</style>
    </div>
  );
}