import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFilm, FaVideo, FaShareAlt, FaBuilding, FaMagic, FaPlane, FaCut } from 'react-icons/fa';

const services = [
  {
    id: 'films',
    icon: <FaFilm className="text-4xl text-primary" />,
    title: 'Films',
    description: 'Narrative and commercial films that captivate audiences and deliver your message with impact.',
    link: '/services#films'
  },
  {
    id: 'documentaries',
    icon: <FaVideo className="text-4xl text-primary" />,
    title: 'Documentaries',
    description: 'Compelling storytelling that brings real-world narratives to life with depth and authenticity.',
    link: '/services#documentaries'
  },
  {
    id: 'social',
    icon: <FaShareAlt className="text-4xl text-primary" />,
    title: 'Social Media',
    description: 'Engaging short-form content optimized for maximum impact on all social platforms.',
    link: '/services#social'
  },
  {
    id: 'corporate',
    icon: <FaBuilding className="text-4xl text-primary" />,
    title: 'Corporate Events',
    description: 'Professional coverage of conferences, product launches, and company milestones.',
    link: '/services#corporate'
  },
  {
    id: 'effects',
    icon: <FaMagic className="text-4xl text-primary" />,
    title: 'Special Effects',
    description: 'Cutting-edge VFX that elevate production value and create memorable visual moments.',
    link: '/services#effects'
  },
  {
    id: 'drone',
    icon: <FaPlane className="text-4xl text-primary" />,
    title: 'Drone Footage',
    description: 'Breathtaking aerial cinematography that provides unique perspectives and stunning visuals.',
    link: '/services#drone'
  },
  {
    id: 'editing',
    icon: <FaCut className="text-4xl text-primary" />,
    title: 'Video Editing',
    description: 'Expert post-production that transforms raw footage into polished, professional content.',
    link: '/services#editing'
  }
];

const ServicesOverview = () => {
  const containerVariants = {
    hidden: { opacity: 1 },  // Changed from empty object to ensure visibility
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 1, y: 0 },  // Changed to be visible initially
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-light">
            We specialize in creating high-quality visual content that helps brands connect with their audiences through the power of compelling storytelling.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="visible"  // Changed from "hidden" to "visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-4 bg-light-dark rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-dark-light mb-4">{service.description}</p>
              <Link to={service.link} className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;