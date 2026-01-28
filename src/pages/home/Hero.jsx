import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Static Background (No Parallax) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-gradient-to-br from-[#61758a] to-[#34495e]"
        style={{ backgroundImage: "url('/home.svg')" }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center text-white px-4 sm:px-6 md:px-12 lg:px-16">
        <div
          className="max-w-3xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Grow Your Wealth With Confidence
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Personalized financial planning to secure your future and achieve your goals.
          </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="
                w-full sm:w-auto
                px-6 sm:px-8
                py-3 sm:py-4
                text-sm sm:text-base
                rounded-lg
                font-semibold
                transition-all duration-300
                shadow-lg hover:shadow-xl
                hover:opacity-90
                bg-[#2c3e50] text-white
              ">
                Free Consultation
              </button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <button className="
                w-full sm:w-auto
                px-6 sm:px-8
                py-3 sm:py-4
                text-sm sm:text-base
                rounded-lg
                font-semibold
                transition-all duration-300
                border-2 border-white
                hover:bg-[#2c3e50]
                hover:border-[#2c3e50]
                text-white bg-transparent
              ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
