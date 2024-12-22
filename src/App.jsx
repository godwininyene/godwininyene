import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop  from './components/ScrollTop';
import onScrollAnimation from './hooks/AddClassOnScroll';
import AOS from "aos";
import 'aos/dist/aos.css';
function App() {

  React.useEffect(()=>{
    AOS.init();
  })

  window.addEventListener('scroll', onScrollAnimation);

  return (
   <div className=''>
    <Navigation />
    <Hero />
    <Services />
    <Portfolio />
    <Resume />
    <Testimonial />
    <Blog />
    <Contact />
    <Footer />
    <ScrollTop />
   </div>     
  )
}

export default App
