import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CheckCircle } from "lucide-react";

/* ---------------- Toast ---------------- */
const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-24 right-4 z-[100] bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 flex gap-3 animate-slide-in max-w-sm">
      <CheckCircle className="text-green-500 flex-shrink-0" />
      <div>
        <h4 className="font-semibold">Success</h4>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

/* ---------------- Booking Modal ---------------- */
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl animate-scale-in">
        <div className="flex justify-between items-center bg-[#2c3e50] px-4 sm:px-6 py-4 rounded-t-xl">
          <h3 className="text-white text-base sm:text-lg font-semibold">Book Ambulance</h3>
          <button onClick={() => onClose(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
            <X className="text-white" size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <input required placeholder="Patient Name" className="input" />
          <input required placeholder="Phone Number" type="tel" className="input" />
          <select className="input">
            <option>General Ambulance</option>
            <option>ICU Ambulance</option>
            <option>Ventilator Ambulance</option>
            <option>Dead Body Freezer Box</option>
          </select>

          <button className="w-full bg-[#a81514] hover:bg-[#8a1110] text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

/* ---------------- Navbar ---------------- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleModalClose = (success = false) => {
    setIsModalOpen(false);
    if (success) {
      setToast({ show: true, message: "Booking request sent successfully!" });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
          <Link
  to="/"
  className="relative group flex-shrink-0"
  onClick={handleLinkClick}
>
  <img
    src="/logo2.svg"
    alt="Logo"
    className="
    p-4
      h-30
      sm:h-34
      md:h-32
      lg:h-40
      xl:h-48
      w-auto
      transition-transform duration-300
      group-hover:scale-110
    "
  />
</Link>


            {/* Desktop Menu - Hidden on mobile/tablet, visible on large screens */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link 
                to="/" 
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
              >
                About
              </Link>
              
              <Link 
                to="/service" 
                className={`nav-link ${isActive("/service") ? "active" : ""}`}
              >
                Service
              </Link>

              <Link 
                to="/portfolio" 
                className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
              >
                Portfolio
              </Link>
              
              <Link 
                to="/contact" 
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile/Tablet Toggle Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Visible on mobile and tablet, hidden on desktop */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-xl border-t border-gray-100 animate-slide-down">
            <div className="p-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive("/") ? "active-mobile" : ""}`}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive("/about") ? "active-mobile" : ""}`}
              >
                About
              </Link>

              <Link 
                to="/service" 
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive("/service") ? "active-mobile" : ""}`}
              >
                Service
              </Link>

              <Link 
                to="/portfolio" 
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive("/portfolio") ? "active-mobile" : ""}`}
              >
                Portfolio
              </Link>
              
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className={`mobile-nav-link ${isActive("/contact") ? "active-mobile" : ""}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      <BookingModal isOpen={isModalOpen} onClose={handleModalClose} />
      <Toast show={toast.show} message={toast.message} onClose={() => setToast({ show: false })} />

      {/* Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          transition: all 0.3s;
          font-size: 14px;
        }
        
        .input:focus {
          outline: none;
          border-color: #2c3e50;
          box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
        }

        .nav-link {
          padding: 8px 12px;
          color: #4b5563;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          border-bottom: 3px solid transparent;
          font-size: 15px;
        }

        @media (min-width: 1280px) {
          .nav-link {
            padding: 8px 16px;
            font-size: 16px;
          }
        }

        .nav-link:hover {
          color: #2c3e50;
          background-color: rgba(44, 62, 80, 0.05);
          border-bottom-color: #2c3e50;
        }

        .nav-link.active {
          color: #2c3e50;
          background-color: rgba(44, 62, 80, 0.08);
          border-bottom-color: #2c3e50;
          font-weight: 600;
        }

        .mobile-nav-link {
          display: block;
          padding: 12px 16px;
          color: #4b5563;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.3s;
          border-left: 4px solid transparent;
        }

        .mobile-nav-link:hover {
          background-color: rgba(44, 62, 80, 0.05);
          color: #2c3e50;
          border-left-color: #2c3e50;
        }

        .mobile-nav-link.active-mobile {
          background-color: rgba(44, 62, 80, 0.1);
          color: #2c3e50;
          border-left-color: #2c3e50;
          font-weight: 600;
        }

        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        /* Ensure mobile menu doesn't overflow viewport */
        @media (max-width: 1023px) {
          .mobile-nav-link {
            font-size: 15px;
          }
        }

        @media (max-width: 640px) {
          .mobile-nav-link {
            padding: 10px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;