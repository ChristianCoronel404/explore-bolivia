import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
