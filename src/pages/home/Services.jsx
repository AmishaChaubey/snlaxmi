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
    <div className="min-h-screen bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
   
      {/* Subtle decorative elements - responsive sizes */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 border border-slate-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 border border-slate-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border border-slate-100 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="relative">
              <span className="relative inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 border-slate-800 rounded-full text-xs sm:text-sm font-semibold text-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ fontFamily: 'Lora, serif' }}>
                Premium Financial Services
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl  text-[#2c3e50] font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h1>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <div className="h-px w-12 sm:w-16 md:w-20 bg-slate-300"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-800"></div>
            <div className="h-px w-12 sm:w-16 md:w-20 bg-slate-300"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Lora, serif' }}>
            Discover our comprehensive financial services crafted with precision for your success
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
            {cardsData.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className="h-[340px] sm:h-[380px] md:h-[420px] perspective-1000"
                onClick={() => toggleFlip(card.id)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${
                    flippedCards[card.id] ? 'rotate-x-180' : ''
                  } ${hoveredCard === card.id && !flippedCards[card.id] ? 'sm:scale-105 sm:-translate-y-2' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-xl sm:rounded-2xl overflow-hidden group transition-all duration-500 border-2 border-slate-200 hover:border-slate-800 hover:shadow-2xl bg-white"
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col items-center justify-center h-full p-6 sm:p-8 md:p-10">
                      {/* Decorative top accent */}
                      <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-slate-800 rounded-full"></div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-center tracking-tight text-slate-900 px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {card.frontTitle}
                      </h3>
                      
                      <div className="w-12 sm:w-14 md:w-16 h-0.5 mb-4 sm:mb-5 md:mb-6 bg-slate-400 rounded-full"></div>
                      
                      <p className="text-slate-700 text-center font-medium text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4" style={{ fontFamily: 'Lora, serif' }}>
                        {card.frontDescription}
                      </p>
                      
                      {/* Click indicator */}
                      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-all duration-300" style={{ fontFamily: 'Lora, serif' }}>
                        <span>Explore</span>
                        <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                      </div>

                      {/* Minimal corner accents */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-slate-300 group-hover:border-slate-800 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-slate-300 group-hover:border-slate-800 transition-colors duration-300"></div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden rotate-x-180 bg-slate-900 border-2 border-slate-800"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateX(180deg)',
                    }}
                  >
                    {/* Subtle dot pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }}></div>
                    </div>

                    <div className="relative flex flex-col items-center justify-center h-full p-6 sm:p-8 md:p-10">
                      {/* Top accent line */}
                      <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-white rounded-full"></div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white text-center tracking-tight px-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {card.backTitle}
                      </h3>
                      
                      <div className="w-12 sm:w-14 md:w-16 h-0.5 bg-white/80 mb-5 sm:mb-6 md:mb-8 rounded-full"></div>
                      
                      <p className="text-white/95 text-center leading-relaxed text-xs sm:text-sm md:text-base max-w-sm px-2 sm:px-4" style={{ fontFamily: 'Lora, serif' }}>
                        {card.backContent}
                      </p>
                      
                      {/* Back indicator */}
                      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors" style={{ fontFamily: 'Lora, serif' }}>
                        <span className="inline-block transform transition-transform hover:-translate-x-1">←</span>
                        <span>Return</span>
                      </div>

                      {/* Minimal corner accents */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-7 sm:w-9 md:w-10 h-7 sm:h-9 md:h-10 border-t-2 border-r-2 border-white/30"></div>
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-7 sm:w-9 md:w-10 h-7 sm:h-9 md:h-10 border-b-2 border-l-2 border-white/30"></div>
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
      `}</style>
    </div>
  );
}