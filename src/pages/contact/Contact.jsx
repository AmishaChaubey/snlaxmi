import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Individual Tax Return (ITR)',
    'Business Tax Return',
    'Tax Planning & Advisory',
    'GST Filing',
    'Tax Audit Services',
    'Other Inquiries'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#abbdd0] to-[#34495e] overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 opacity-80">
          <img
            src="/contact.png"
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
              Get Expert Advice
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 mb-4 sm:mb-6">
              Let's talk about your financial goals. Connect with our advisors 
              for expert insights, trusted guidance, and a clear path to long-term success.
            </p>
            <Link to='/about'>
              <button className="bg-gradient-to-br from-[#2c3e50] to-[#667788] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2c3e50] transition-colors duration-300 shadow-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-slate-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <div className="mb-8 sm:mb-10 md:mb-12">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-12 bg-[#38b6ff]"></div>
                  <span className="text-[#38b6ff] text-xs sm:text-sm tracking-[0.2em] uppercase font-sans">Contact</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Let's Discuss Your Tax Needs
                </h2>
                <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
                  Schedule a consultation with our expert tax professionals today.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { 
                    icon: Phone, 
                    title: 'Phone', 
                    detail1: '+91 9015382370', 
                  },
                  { 
                    icon: Mail, 
                    title: 'Email', 
                    detail1: 'SNLAXMINARAYAN16@GMAIL.COM', 
                  },
                  { 
                    icon: MapPin, 
                    title: 'Office', 
                    detail1: '50, RADHAKRISHNA ENCLAVE,', 
                    detail2: 'HAIBATPUR, GREATER NOIDA UP. 201009'
                  },
                  { 
                    icon: Clock, 
                    title: 'Hours', 
                    detail1: 'Mon - Fri: 9:00 AM - 6:00 PM', 
                    detail2: 'Sat: 10:00 AM - 4:00 PM'
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-200 last:border-0 rounded-lg">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 rounded-lg border-slate-200 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                      </div>
                      <div className="font-sans">
                        <h3 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm tracking-wide uppercase">{item.title}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed break-words">{item.detail1}</p>
                        {item.detail2 && <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.detail2}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-slate-200 p-6 sm:p-8 lg:p-12 rounded-lg">
                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 border-2 border-green-500 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Message Sent</h3>
                    <p className="text-slate-600 font-sans text-sm sm:text-base">We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div>
                      <label className="block text-xs sm:text-sm font-sans tracking-wide uppercase text-slate-700 mb-2 sm:mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg bg-slate-50 focus:bg-white focus:outline-none transition-colors font-sans text-sm sm:text-base ${
                          errors.name ? 'border-red-500' : 'border-slate-200 focus:border-slate-900'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-600 text-xs sm:text-sm mt-2 font-sans">{errors.name}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <label className="block text-xs sm:text-sm font-sans tracking-wide uppercase text-slate-700 mb-2 sm:mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg bg-slate-50 focus:bg-white focus:outline-none transition-colors font-sans text-sm sm:text-base ${
                            errors.email ? 'border-red-500' : 'border-slate-200 focus:border-slate-900'
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-600 text-xs sm:text-sm mt-2 font-sans">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-sans tracking-wide uppercase text-slate-700 mb-2 sm:mb-3">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg bg-slate-50 focus:bg-white focus:outline-none transition-colors font-sans text-sm sm:text-base ${
                            errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-slate-900'
                          }`}
                          placeholder="9876543210"
                        />
                        {errors.phone && <p className="text-red-600 text-xs sm:text-sm mt-2 font-sans">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-sans tracking-wide uppercase text-slate-700 mb-2 sm:mb-3">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg bg-slate-50 focus:bg-white focus:outline-none transition-colors font-sans text-sm sm:text-base ${
                          errors.service ? 'border-red-500' : 'border-slate-200 focus:border-slate-900'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-600 text-xs sm:text-sm mt-2 font-sans">{errors.service}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-sans tracking-wide uppercase text-slate-700 mb-2 sm:mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg bg-slate-50 focus:bg-white focus:outline-none transition-colors resize-none font-sans text-sm sm:text-base ${
                          errors.message ? 'border-red-500' : 'border-slate-200 focus:border-slate-900'
                        }`}
                        placeholder="Tell us about your tax requirements..."
                      ></textarea>
                      {errors.message && <p className="text-red-600 text-xs sm:text-sm mt-2 font-sans">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 rounded-lg text-white py-3 sm:py-4 px-6 sm:px-8 hover:bg-[#38b6ff] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-sans tracking-wide uppercase text-xs sm:text-sm"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 rounded-lg border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-12 sm:w-16 bg-[#38b6ff]"></div>
              <span className="text-[#38b6ff] text-xs sm:text-sm tracking-[0.2em] uppercase font-sans">FAQ</span>
              <div className="h-px w-12 sm:w-16 bg-[#38b6ff]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 font-sans text-base sm:text-lg max-w-2xl mx-auto px-4">
              Find answers to common questions about our tax filing services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What documents do I need for ITR filing?",
                answer: "You'll need Form 16, bank statements, investment proofs, property documents, and details of any additional income sources. We provide a detailed checklist upon engagement."
              },
              {
                question: "How long does the filing process take?",
                answer: "Standard ITR filing typically takes 3-5 business days once we receive all required documents. Expedited service is available for urgent requirements."
              },
              {
                question: "Do you handle tax notices and audits?",
                answer: "Yes, we provide comprehensive support for tax notices, assessments, and audit proceedings. Our experienced team ensures full compliance and representation."
              },
              {
                question: "What is your fee structure?",
                answer: "Our fees vary based on the complexity of your return and income sources. We offer transparent pricing with no hidden charges. Contact us for a personalized quote."
              },
              {
                question: "Can you file for previous years?",
                answer: "Yes, we can file belated and revised returns for previous assessment years, subject to applicable rules and penalties as per Income Tax Act."
              },
              {
                question: "Is my data secure with you?",
                answer: "Absolutely. We use bank-grade encryption and follow strict confidentiality protocols. Your data is never shared with third parties without your consent."
              }
            ].map((faq, idx) => (
              <div key={idx} className="group">
                <div className="bg-slate-50 border-2 border-slate-200 p-6 sm:p-8 hover:border-[#38b6ff] hover:bg-white transition-all duration-300 rounded-lg">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-900 text-white flex items-center justify-center flex-shrink-0 font-sans font-bold text-xs sm:text-sm group-hover:bg-[#38b6ff] transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-slate-600 font-sans mb-4 sm:mb-6 text-sm sm:text-base">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#38b6ff] transition-colors font-sans tracking-wide uppercase text-xs sm:text-sm rounded-lg">
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Map Info */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-[#38b6ff]"></div>
                <span className="text-[#38b6ff] text-xs sm:text-sm tracking-[0.2em] uppercase font-sans">Location</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Visit Our Office
              </h2>
              <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                We're located in Greater Noida. Drop by for a consultation or schedule an appointment for personalized service.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 rounded-lg border-slate-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#38b6ff]" />
                  </div>
                  <div className="font-sans">
                    <h3 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm tracking-wide uppercase">Address</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      50, RADHAKRISHNA ENCLAVE, HAIBATPUR<br />
                      GREATER NOIDA, UP 201009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 rounded-lg border-slate-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#38b6ff]" />
                  </div>
                  <div className="font-sans">
                    <h3 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm tracking-wide uppercase">Office Hours</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 rounded-lg border-slate-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#38b6ff]" />
                  </div>
                  <div className="font-sans">
                    <h3 className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm tracking-wide uppercase">Quick Contact</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                      +91 9015382370<br />
                      SNLAXMINARAYAN16@GMAIL.COM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-300">
                <p className="text-slate-600 font-sans text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Free parking available for visitors
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-white border-2 border-slate-200 p-2">
                {/* Google Maps Iframe */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28001.775323909143!2d77.46542427431642!3d28.68300759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf25ac6022a37%3A0x9a4a8bbc5af59074!2sRadha%20Krishna%20Enclave!5e0!3m2!1sen!2sin!4v1769608334578!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location - Radha Krishna Enclave"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                {/* Overlay Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-slate-900 p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#38b6ff] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 font-sans text-xs sm:text-sm">ITR EXPERTS</div>
                      <div className="text-slate-600 text-[10px] sm:text-xs font-sans">Greater Noida, UP</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-4 sm:mt-6">
                <a 
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28001.775323909143!2d77.46542427431642!3d28.68300759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf25ac6022a37%3A0x9a4a8bbc5af59074!2sRadha%20Krishna%20Enclave!5e0!3m2!1sen!2sin!4v1769608334578!5m2!1sen!2sin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg gap-2 w-full justify-center bg-slate-900 text-white px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#38b6ff] transition-colors font-sans tracking-wide uppercase text-xs sm:text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}