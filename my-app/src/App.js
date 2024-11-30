import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import PricingSection from './Components/PricingSection';
import Footer from './Components/Footer';
import './Style/Global.css';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PricingSection />
      <Footer />
    </>
  );
};

export default App;
