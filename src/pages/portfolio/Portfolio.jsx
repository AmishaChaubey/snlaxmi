import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, FileText, Calendar, Users, Award, DollarSign, Calculator, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';


const ProjectPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  window.scrollTo(0, 0)

  const projects = [
    {
      id: 1,
      title: "Tax Optimization Strategy",
      description: "Comprehensive tax planning solution that maximized deductions and minimized liabilities through strategic financial structuring.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Completed",
      location: "M.P, India"
    },
    {
      id: 2,
      title: "ITR Filing Automation",
      description: "Automated ITR filing system with real-time validation and seamless integration across multiple income sources.",
      image: "https://i.pinimg.com/736x/e1/b8/42/e1b842c0778807f6edd236dfb2bce5f1.jpg",
      status: "In Progress",
      location: "Delhi, India"
    },
    {
      id: 3,
      title: "Business Loan Approval",
      description: "Rapid loan approval process with AI-driven credit assessment and customized repayment structures.",
      image: "https://i.pinimg.com/1200x/42/79/23/4279234cdc9f0c4a65be0143b8c5701f.jpg",
      status: "Completed",
      location: "Noida, India"
    },
    {
      id: 4,
      title: "Personal Loan Solutions",
      description: "Tailored personal loan packages with competitive rates and flexible EMI options for individual needs.",
      image: "https://i.pinimg.com/1200x/93/0d/c1/930dc1ac4570507ca25303a967e0cc2d.jpg",
      status: "Completed",
      location: "Punjab, India"
    },
    {
      id: 5,
      title: "GST Compliance Suite",
      description: "Complete GST compliance solution with automated return filing and reconciliation features.",
      image: "https://i.pinimg.com/1200x/71/f9/a8/71f9a8da2d3611d63d476ac90cac1741.jpg",
      status: "In Progress",
      location: "Mohali, India"
    },
    {
      id: 6,
      title: "Corporate Tax Advisory",
      description: "Strategic corporate tax advisory services optimizing multinational tax structures and compliance.",
      image: "https://i.pinimg.com/1200x/c4/6e/02/c46e02df7595de3913e15f93e0bd05bb.jpg",
      status: "Completed",
      location: "Ghaziabad, India"
    },
    {
      id: 7,
      title: "Home Loan Processing",
      description: "Streamlined home loan processing with instant pre-approval and digital documentation.",
      image: "https://i.pinimg.com/736x/69/17/a4/6917a4b8bdf72030fbb5058a4fe9aa5c.jpg",
      status: "Completed",
      location: "Almora, India"
    },
    {
      id: 8,
      title: "Financial Audit Services",
      description: "Comprehensive financial audits ensuring regulatory compliance and financial transparency.",
      image: "https://i.pinimg.com/736x/30/10/25/3010252748ecafa5a59e5ab987af6fee.jpg",
      status: "Completed",
      location: "Greater Noida, India"
    },
    {
      id: 9,
      title: "Investment Loan Facility",
      description: "Investment-focused loan products designed for portfolio growth and asset acquisition.",
      image: "https://i.pinimg.com/736x/23/6f/93/236f93c5ddd54154df210333050523bd.jpg",
      status: "Completed",
      location: "Agra, India"
    },
    {
      id: 10,
      title: "ITR Refund Tracking",
      description: "Real-time ITR refund tracking system with predictive analytics and status notifications.",
      image: "https://i.pinimg.com/736x/45/34/ae/4534aeaef52fa860d77ee9b8a7d2f4a0.jpg",
      status: "Completed",
      location: "Mathura, India"
    },
    {
      id: 11,
      title: "MSME Loan Program",
      description: "Specialized loan schemes for MSMEs with simplified documentation and quick disbursal.",
      image: "https://i.pinimg.com/736x/a2/7d/1c/a27d1c34bef385b3a6d6d563ba8216fe.jpg",
      status: "Completed",
      location: "Patna, India"
    },
    {
      id: 12,
      title: "Tax Dispute Resolution",
      description: "Expert tax dispute resolution services achieving favorable outcomes for complex cases.",
      image: "https://i.pinimg.com/1200x/3e/47/6d/3e476d53a5d31ba1908ce779ab4a216c.jpg",
      status: "Completed",
      location: "Jaipur, India"
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const primaryColor = '#2c3e50';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#61758a] to-[#34495e] overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 opacity-80">
          <img
            src="/home.png"
            alt="Financial experts"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white mb-8 sm:mb-20 lg:mb-20">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Let’s Build Something Great
            </h1>
           <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 mb-4 sm:mb-6">
  Turning ideas into impactful digital experiences with clean code,
  thoughtful design, and a strong focus on quality, performance, and growth.
</p>

            <Link to='/contact'>
              <button className="bg-gradient-to-br from-[#2c3e50] to-[#667788] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2c3e50] transition-colors duration-300 shadow-lg">
                We're Here to Help
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Professional border accent */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-0.5">
                <div className="bg-white h-full w-full rounded-3xl"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-84">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Professional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <ExternalLink size={18} className="text-gray-700" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <FileText size={18} className="text-gray-700" />
                  </button>
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border ${
                    project.status === 'Completed' 
                      ? 'bg-emerald-500/20 text-emerald-100 border-emerald-400/50' 
                      : 'bg-blue-500/20 text-blue-100 border-blue-400/50'
                  }`}>
                    {project.status}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Title and Location */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-800 transition-colors" style={{color: primaryColor}}>
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 gap-1">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <DollarSign size={14} className="mr-1" />
                    Tax Savings
                  </div>
                  <div className="flex items-center text-xs text-gray-500 justify-end">
                    <Shield size={14} className="mr-1" />
                    Compliant
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] via-gray-600 to-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" 
                     style={{'--primary-color': primaryColor}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto bg-gradient-to-br from-white to-gray-50 border border-gray-100">
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
              {/* Contact Info */}
              <div className="order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[var(--primary-color)] to-gray-700 rounded-2xl flex-shrink-0" style={{'--primary-color': primaryColor}}>
                    <Calculator className="text-white" size={20} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-light" style={{color: primaryColor}}>Get Financial Clarity Today</h2>
                </div>
                <p className="text-lg mb-8 text-gray-600 leading-relaxed font-light max-w-lg">
                  Ready to optimize your taxes, file ITR seamlessly, or secure the best loan rates? Share your financial goals with our experts.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="p-4 bg-gradient-to-br from-[var(--primary-color)] to-gray-700 rounded-2xl mr-4 backdrop-blur-sm flex-shrink-0 group-hover:scale-105 transition-all" style={{'--primary-color': primaryColor}}>
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 text-base">Email</p>
                      <p className="text-gray-900 text-md font-semibold">SNLAXMINARAYAN16@GMAIL.COM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="p-4 bg-gradient-to-br from-[var(--primary-color)] to-gray-700 rounded-2xl mr-4 backdrop-blur-sm flex-shrink-0 group-hover:scale-105 transition-all" style={{'--primary-color': primaryColor}}>
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 text-base">Phone</p>
                      <p className="text-gray-900 text-md font-semibold">9015382370</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="p-4 bg-gradient-to-br from-[var(--primary-color)] to-gray-700 rounded-2xl mr-4 backdrop-blur-sm flex-shrink-0 group-hover:scale-105 transition-all" style={{'--primary-color': primaryColor}}>
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 text-base">Address</p>
                      <p className="text-gray-900 text-sm leading-tight">50, RADHAKRISHNA ENCLAVE, HAIBATPUR , GREATER NOIDA UP. 201009,</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl order-1 lg:order-2">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all text-lg" 
                      style={{'--primary-color': primaryColor}}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all text-lg"
                      style={{'--primary-color': primaryColor}}
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your tax, ITR, or loan needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all resize-none text-lg"
                      style={{'--primary-color': primaryColor}}
                    />
                  </div>
                  
               
               <Link to='/contact'>   <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[var(--primary-color)] to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl hover:from-[var(--primary-dark)] hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                    style={{'--primary-color': primaryColor, '--primary-dark': '#1a252f'}}
                  >
                    Get Your Free Consultation
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
