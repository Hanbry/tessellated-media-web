import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10"
            initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's collaborate to create compelling visual content that tells your unique story and connects with your audience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-light-dark hover:text-primary-dark px-8 py-4 text-lg"
            >
              Get in Touch
            </Link>
            <Link 
              to="/portfolio" 
              className="btn border-white border-2 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              View Our Work
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0"
            initial={{ opacity: 1 }}  // Changed to be visible initially
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="mr-3 text-3xl font-bold">10+</div>
              <div className="text-left">Years of<br />Experience</div>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-3xl font-bold">250+</div>
              <div className="text-left">Projects<br />Completed</div>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-3xl font-bold">95%</div>
              <div className="text-left">Client<br />Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;