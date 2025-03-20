import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/PrV7bwk4Ows?autoplay=1&mute=1&controls=0&loop=1&playlist=PrV7bwk4Ows&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Background Video"
            className="absolute w-[100vw] h-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5]"
            style={{ pointerEvents: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-dark bg-opacity-60 pointer-events-none"></div>
      </div>
      
      {/* Content */}
      <div className="relative container h-full flex items-center">
        <motion.div 
          className="max-w-3xl text-white"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tessellated Media: <br />
            <span className="text-primary-light">Crafting Cinematic Stories</span> That Transform Brands
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-light max-w-xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Award-winning production for films, documentaries, corporate events, and social media that captivate audiences and elevate brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Let's Create Together
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;