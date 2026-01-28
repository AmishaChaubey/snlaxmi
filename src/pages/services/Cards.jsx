import React, { useState } from 'react';

export default function FlipCards() {
  const [flippedCards, setFlippedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id] 
    }));
  };

  const cardsData = [
    {
      id: 1,
      frontTitle: "Financial Advisor",
      frontDescription: "Your Path to Prosperity",
      backTitle: "Expert Guidance",
      backContent: "Personalized financial plans tailored to your unique aspirations. Our seasoned advisors provide expert guidance on smart investments, ensuring your portfolio aligns with your goals."
    },
    {
      id: 2,
      frontTitle: "Life Insurance",
      frontDescription: "Secure Your Future",
      backTitle: "Family Protection",
      backContent: "Comprehensive life insurance policies crafted to meet your specific needs, providing a safety net for your family in the face of life's uncertainties. Peace of mind guaranteed."
    },
    {
      id: 3,
      frontTitle: "Health Insurance",
      frontDescription: "Safeguard Your Well-being",
      backTitle: "Complete Coverage",
      backContent: "Comprehensive coverage ensuring access to quality healthcare when you need it most. Financial protection against medical expenses, giving you peace of mind to focus on your health."
    },
    {
      id: 4,
      frontTitle: "Motor Insurance",
      frontDescription: "Drive with Confidence",
      backTitle: "Road Protection",
      backContent: "Comprehensive motor insurance coverage shielding you against accidents and theft. Competitive rates, quick claims processing, and tailored coverage options for your vehicle."
    },
    {
      id: 5,
      frontTitle: "SIP Mutual Funds",
      frontDescription: "Wealth Creation Partner",
      backTitle: "Smart Investing",
      backContent: "Systematic investment plans empowering you to achieve financial goals with disciplined, hassle-free investing. Automated regular investments with the power of compounding."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
   

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-lg opacity-50" style={{ backgroundColor: '#2c3e50' }}></div>
              <span className="relative inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white shadow-xl" style={{ backgroundColor: '#2c3e50', fontFamily: 'Lora, serif' }}>
                Premium Financial Services
              </span>
            </div>
          </div>
          
          <h1 className="text-8xl  font-bold mb-6 tracking-tight" style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>
            Products & Solutions
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent" style={{ borderColor: '#2c3e50', borderTopWidth: '1px' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent" style={{ borderColor: '#2c3e50', borderTopWidth: '1px' }}></div>
          </div>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
            Discover our comprehensive financial services crafted with precision for your success
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center gap-12">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
            {cardsData.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className="h-[420px] perspective-1000"
                onClick={() => toggleFlip(card.id)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${
                    flippedCards[card.id] ? 'rotate-x-180' : ''
                  } ${hoveredCard === card.id && !flippedCards[card.id] ? 'scale-105' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-3xl shadow-xl shadow-gray-700 overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>

                    {/* Border glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.25), transparent)',
                      }}
                    ></div>

                    <div className="relative flex flex-col items-center justify-center h-full p-10">
                      {/* Decorative top line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full opacity-60" style={{ backgroundColor: '#2c3e50' }}></div>
                      
                      <h3 className="text-4xl font-bold mb-4 text-center tracking-tight" style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>
                        {card.frontTitle}
                      </h3>
                      
                      <div className="w-16 h-0.5 mb-6 rounded-full opacity-60" style={{ backgroundColor: '#2c3e50' }}></div>
                      
                      <p className="text-slate-700 text-center font-medium text-lg leading-relaxed px-4" style={{ fontFamily: 'Lora, serif' }}>
                        {card.frontDescription}
                      </p>
                      
                      {/* Click indicator */}
                      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-all duration-300" style={{ color: '#2c3e50', fontFamily: 'Lora, serif' }}>
                        <span>Explore</span>
                        <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                      </div>

                      {/* Corner ornaments */}
                      <div className="absolute top-8 right-8 w-12 h-12 opacity-20">
                        <div className="absolute top-0 right-0 w-full h-0.5 rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                      </div>
                      <div className="absolute bottom-8 left-8 w-12 h-12 opacity-20">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-3xl shadow-2xl overflow-hidden rotate-x-180"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)',
                      backgroundColor: '#2c3e50'
                    }}
                  >
                    {/* Elegant pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                      }}></div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                    <div className="relative flex flex-col items-center justify-center h-full p-10">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full bg-white/40"></div>

                      <h3 className="text-4xl font-bold mb-5 text-white text-center drop-shadow-lg tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {card.backTitle}
                      </h3>
                      
                      <div className="w-16 h-0.5 bg-white/60 mb-7 rounded-full shadow-lg"></div>
                      
                      <p className="text-white/95 text-center leading-relaxed text-base drop-shadow-md max-w-sm px-2" style={{ fontFamily: 'Lora, serif' }}>
                        {card.backContent}
                      </p>
                      
                      {/* Back indicator */}
                      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Lora, serif' }}>
                        <span className="inline-block transform transition-transform hover:-translate-x-1">←</span>
                        <span>Return</span>
                      </div>

                      {/* Decorative circles */}
                      <div className="absolute top-8 right-8 w-16 h-16 border border-white/30 rounded-full"></div>
                      <div className="absolute top-10 right-10 w-12 h-12 border border-white/20 rounded-full"></div>
                      <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {cardsData.slice(3, 5).map((card) => (
              <div
                key={card.id}
                className="h-[420px] perspective-1000"
                onClick={() => toggleFlip(card.id)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${
                    flippedCards[card.id] ? 'rotate-x-180' : ''
                  } ${hoveredCard === card.id && !flippedCards[card.id] ? 'scale-105' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-3xl shadow-xl shadow-gray-700 overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>

                    {/* Border glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.25), transparent)',
                      }}
                    ></div>

                    <div className="relative flex flex-col items-center justify-center h-full p-10">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full opacity-60" style={{ backgroundColor: '#2c3e50' }}></div>
                      
                      <h3 className="text-4xl font-bold mb-4 text-center tracking-tight" style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>
                        {card.frontTitle}
                      </h3>
                      
                      <div className="w-16 h-0.5 mb-6 rounded-full opacity-60" style={{ backgroundColor: '#2c3e50' }}></div>
                      
                      <p className="text-slate-700 text-center font-medium text-lg leading-relaxed px-4" style={{ fontFamily: 'Lora, serif' }}>
                        {card.frontDescription}
                      </p>
                      
                      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-all duration-300" style={{ color: '#2c3e50', fontFamily: 'Lora, serif' }}>
                        <span>Explore</span>
                        <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                      </div>

                      <div className="absolute top-8 right-8 w-12 h-12 opacity-20">
                        <div className="absolute top-0 right-0 w-full h-0.5 rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                      </div>
                      <div className="absolute bottom-8 left-8 w-12 h-12 opacity-20">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-full rounded-full" style={{ backgroundColor: '#2c3e50' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-3xl shadow-2xl overflow-hidden rotate-x-180"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)',
                      backgroundColor: '#2c3e50'
                    }}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                      }}></div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                    <div className="relative flex flex-col items-center justify-center h-full p-10">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full bg-white/40"></div>

                      <h3 className="text-4xl font-bold mb-5 text-white text-center drop-shadow-lg tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {card.backTitle}
                      </h3>
                      
                      <div className="w-16 h-0.5 bg-white/60 mb-7 rounded-full shadow-lg"></div>
                      
                      <p className="text-white/95 text-center leading-relaxed text-base drop-shadow-md max-w-sm px-2" style={{ fontFamily: 'Lora, serif' }}>
                        {card.backContent}
                      </p>
                      
                      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Lora, serif' }}>
                        <span className="inline-block transform transition-transform hover:-translate-x-1">←</span>
                        <span>Return</span>
                      </div>

                
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}