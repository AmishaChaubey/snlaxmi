// components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter,  Linkedin, ArrowUp, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Karla:wght@400;500;600&display=swap');

        .footer-bg {
          background: #2c3e50;
          position: relative;
        }

        .footer-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }

        .footer-text {
          color: #ffffff;
          font-family: 'Karla', sans-serif;
        }

        .footer-text-muted {
          color: rgba(255, 255, 255, 0.65);
          font-family: 'Karla', sans-serif;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.25s ease;
          font-family: 'Karla', sans-serif;
          font-weight: 500;
          position: relative;
          display: inline-block;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.25rem;
          font-family: 'Playfair Display', serif;
          letter-spacing: 0.5px;
          position: relative;
          padding-bottom: 0.75rem;
        }

        @media (min-width: 640px) {
          .section-title {
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
          }
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        .logo-section {
          padding-right: 0;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 1024px) {
          .logo-section {
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: none;
            padding-right: 3rem;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }

        .brand-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.5px;
        }

        @media (min-width: 640px) {
          .brand-text {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
        }

        .tagline {
          font-family: 'Karla', sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.25rem;
        }

        @media (min-width: 640px) {
          .tagline {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }
        }

        .social-container {
          display: flex;
          gap: 0.625rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .social-container {
            gap: 0.75rem;
            justify-content: flex-start;
          }
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 640px) {
          .social-icon {
            width: 40px;
            height: 40px;
          }
        }

        .social-icon:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          color: #ffffff;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(4px);
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          color: rgba(255, 255, 255, 0.7);
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (min-width: 640px) {
          .contact-icon {
            width: 18px;
            height: 18px;
          }
        }

        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #2c3e50;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (min-width: 640px) {
          .back-to-top {
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          }
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          background: #34495e;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        .footer-top {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 2rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .footer-top {
            padding-bottom: 2.5rem;
            margin-bottom: 2rem;
          }
        }

        .footer-bottom {
          padding-top: 1.25rem;
        }

        @media (min-width: 640px) {
          .footer-bottom {
            padding-top: 1.5rem;
          }
        }

        .copyright {
          font-family: 'Karla', sans-serif;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        @media (min-width: 640px) {
          .copyright {
            font-size: 0.875rem;
          }
        }

        .legal-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .legal-links {
            gap: 1.5rem;
          }
        }

        .links-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .links-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }
      `}</style>

      <footer className="footer-bg py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
        <div className="footer-content max-w-7xl mx-auto">
          <div className="footer-top">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Brand Section - Takes more space */}
              <div className="lg:col-span-4 logo-section text-center lg:text-left">
                {/* <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img src='/logo.png' alt="Logo" className="h-12 sm:h-14"/>
                </div> */}
                <h2 className="brand-text">SNLaxmi</h2>
                <p className="tagline">
                  Building wealth, securing futures. Expert guidance for your financial journey with personalized strategies and trusted partnerships.
                </p>
                <div className="social-container">
                  <a href="https://www.facebook.com/financialservicessolutions" className="social-icon" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/snlaxmi" className="social-icon" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@financialservicessolutions" className="social-icon" aria-label="Youtube">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/snlaxmi27/" className="social-icon" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Links Section - Better organized */}
              <div className="lg:col-span-8">
                <div className="links-grid">
                  {/* Quick Links */}
                  <div className="text-center sm:text-left">
                    <h3 className="section-title">Navigate</h3>
                    <ul className="space-y-2 sm:space-y-2.5">
                      <li><Link to="/" className="footer-link text-sm">Home</Link></li>
                      <li><Link to="/about" className="footer-link text-sm">About Us</Link></li>
                      <li><Link to="/service" className="footer-link text-sm">Our Services</Link></li>
                      <li><Link to="/contact" className="footer-link text-sm">Contact</Link></li>
                    </ul>
                  </div>
                  
                  {/* Services */}
                  <div className="text-center sm:text-left">
                    <h3 className="section-title">Services</h3>
                    <ul className="space-y-2 sm:space-y-2.5">
                      <li><Link to="/service" className="footer-link text-sm">Financial Advisor</Link></li>
                      <li><Link to="/service" className="footer-link text-sm">Life Insurance</Link></li>
                      <li><Link to="/service" className="footer-link text-sm">Health Insurance</Link></li>
                      <li><Link to="/service" className="footer-link text-sm">Motor Insurance</Link></li>
                      <li><Link to="/service" className="footer-link text-sm">SIP Mutual Funds</Link></li>
                    </ul>
                  </div>
                  
                  {/* Contact */}
                  <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                    <h3 className="section-title">Get in Touch</h3>
                    <ul className="space-y-2.5 sm:space-y-3">
                      <li className="contact-item justify-center sm:justify-start">
                        <Phone className="contact-icon" />
                        <a href="tel:+919015382370" className="footer-link text-sm">+91 9015382370</a>
                      </li>
                      <li className="contact-item justify-center sm:justify-start">
                        <Mail className="contact-icon" />
                        <a 
                          href="mailto:snlaxminarayan16@gmail.com" 
                          className="footer-link text-sm break-all sm:break-words"
                        >
                          snlaxminarayan16@gmail.com
                        </a>
                      </li>
                      <li className="contact-item justify-center sm:justify-start">
                        <MapPin className="contact-icon" />
                        <div className="footer-text-muted text-xs sm:text-sm text-center sm:text-left">
                          <p>50, RADHAKRISHNA ENCLAVE,</p>
                          <p>HAIBATPUR</p>
                          <p>GREATER NOIDA UP. 201009</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
              <p className="copyright px-4">
                © {currentYear} snlakxmi All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div 
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;