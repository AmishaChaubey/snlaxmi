import Hero from "./Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Features from "./Features";
import CTA from "./CTA";
import Testimonials from "./Testimonial";
import IntroSection from "./IntroSection";

const Home = () => {

  
  return (
    <>
      
      <Hero/>
      <IntroSection/>
      <Services />
      <WhyChooseUs />
      <Features />
      <Testimonials/>
      <CTA />
    </>
  );
};

export default Home;
