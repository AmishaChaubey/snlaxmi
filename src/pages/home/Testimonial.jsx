import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      company: "TechStart Inc.",
      image: "SJ",
      text: "Outstanding tax planning service! They saved me thousands and made the entire process stress-free. Highly recommended for any business!",
      rating: 5,
      savings: "₹24K",
      year: "2024"
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      company: "Creative Studio",
      image: "MC",
      text: "Professional, knowledgeable, and always available. Best decision I made was switching to TaxPro for my tax needs.",
      rating: 5,
      savings: "₹8.5K",
      year: "2024"
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Agent",
      company: "Prime Properties",
      image: "ER",
      text: "Excellent financial guidance and support. They helped me navigate complex deductions with ease and confidence.",
      rating: 5,
      savings: "₹15K",
      year: "2023"
    },
    {
      name: "David Patel",
      role: "Startup Founder",
      company: "InnovateCo",
      image: "DP",
      text: "Transformed our financial strategy. Their expertise in tax optimization is unmatched—highly professional team!",
      rating: 5,
      savings: "₹42K",
      year: "2024"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[70vh] sm:min-h-[80vh] bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 sm:-top-32 md:-top-40 -right-20 sm:-right-32 md:-right-40 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#2c3e50]/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl" />
        <div className="absolute -bottom-20 sm:-bottom-32 md:-bottom-40 -left-20 sm:-left-32 md:-left-40 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-[#2c3e50]/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#2c3e50] flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-bold text-[#2c3e50] tracking-widest uppercase">
              Testimonials
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#2c3e50] flex-shrink-0" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#2c3e50] mb-3 sm:mb-4 md:mb-6 tracking-tight px-2 sm:px-4" 
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Loved by Clients
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed"
             style={{ fontFamily: "'Playfair Display', serif" }}>
            See what our clients say about their experience working with us
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-stretch">
            {/* Left Column - Large Featured Card */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className={`bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-3xl xl:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl sm:shadow-2xl lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/60 h-full transition-all duration-500 ${
                isAnimating 
                  ? 'opacity-50 scale-[0.97]' 
                  : 'opacity-100 scale-100 hover:scale-[1.02] lg:hover:scale-100'
              }`}>
                {/* Stars */}
                <div className="flex gap-1 sm:gap-1.5 md:gap-2 mb-4 sm:mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative flex-shrink-0">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-amber-400 fill-amber-400 drop-shadow-md" />
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#2c3e50] leading-tight sm:leading-snug md:leading-[1.3] mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-light line-clamp-4 sm:line-clamp-3 md:line-clamp-none" 
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2c3e50] to-[#3d5a73] flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2c3e50] mb-1 sm:mb-1.5 line-clamp-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm md:text-base line-clamp-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Navigation */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-6">
              {/* Savings Badge */}
              <div className="bg-gradient-to-br from-[#2c3e50] to-[#3d5a73] rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 text-center shadow-xl lg:shadow-2xl relative overflow-hidden">
                <div className="text-white/80 font-bold uppercase text-xs sm:text-sm md:text-base tracking-widest mb-2 sm:mb-3 line-clamp-1">
                  Total Saved
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-1 sm:mb-2 tracking-tight" 
                     style={{ fontFamily: "'Playfair Display', serif" }}>
                  {testimonials[currentIndex].savings}
                </div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
                  in {testimonials[currentIndex].year}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-slate-200/60">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 gap-2 sm:gap-0">
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-400 uppercase tracking-wider text-center sm:text-left order-2 sm:order-1">
                    {currentIndex + 1} / {testimonials.length}
                  </span>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 order-1 sm:order-2 justify-center sm:justify-end">
                    <button
                      onClick={prevTestimonial}
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-slate-100 hover:bg-[#2c3e50] text-[#2c3e50] hover:text-white transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg active:scale-95 flex-shrink-0"
                      aria-label="Previous testimonial"
                    >
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rotate-180 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-[#2c3e50] hover:bg-[#1a252f] text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex-shrink-0"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 pt-1">
                  {testimonials.map((testimonial, i) => (
                    <button
                      key={i}
                      onClick={() => goToTestimonial(i)}
                      className={`aspect-square rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-sm sm:text-base md:text-lg transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md ${
                        i === currentIndex
                          ? 'bg-gradient-to-br from-[#2c3e50] to-[#3d5a73] text-white shadow-lg scale-105'
                          : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:scale-105 hover:text-slate-600'
                      }`}
                      aria-label={`View ${testimonial.name}'s testimonial`}
                    >
                      {testimonial.image}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
