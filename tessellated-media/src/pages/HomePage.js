import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;