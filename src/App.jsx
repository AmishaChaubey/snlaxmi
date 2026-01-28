import React from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import ValueSection from './pages/services/Services';
import FlipCards from './pages/services/Cards';
import ContactPage from './pages/contact/Contact';
import AboutPage from './pages/about/About';
import WhyChooseUs1 from './pages/services/WhyChooseUs';
import Footer from './components/Footer';
import ProjectPage from './pages/portfolio/Portfolio';
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/service" element={
            <div>
            <ValueSection/>
            <FlipCards/>
            <WhyChooseUs1/>
            </div>} />
                    <Route path="/contact" element={<ContactPage/>} />
                                        <Route path="/about" element={<AboutPage/>} />

                                        <Route path="/portfolio" element={
                                          <ProjectPage/>
                                        }/>

                    

    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App
