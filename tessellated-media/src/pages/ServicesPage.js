import React from 'react';
import { motion } from 'framer-motion';
import { FaFilm, FaVideo, FaShareAlt, FaBuilding, FaMagic, FaPlane, FaCut } from 'react-icons/fa';
import ContactCTA from '../components/ContactCTA';

const services = [
  {
    id: 'films',
    icon: <FaFilm className="text-4xl text-primary" />,
    title: 'Films',
    description: 'We create compelling narrative and commercial films that captivate audiences and deliver your message with impact. Our expert team combines creative storytelling with technical excellence to produce films that resonate with viewers and achieve your objectives.',
    features: [
      'High-quality narrative storytelling',
      'Professional cinematography',
      'Commercial and brand films',
      'Music videos',
      'Creative direction',
      'Full production services'
    ]
  },
  {
    id: 'documentaries',
    icon: <FaVideo className="text-4xl text-primary" />,
    title: 'Documentaries',
    description: 'Our documentary production brings real-world stories to life with depth and authenticity. We specialize in creating compelling documentaries that educate, inspire, and engage audiences while maintaining the highest production standards.',
    features: [
      'In-depth research and planning',
      'Interview coordination',
      'Location scouting',
      'Archival footage integration',
      'Long-form storytelling',
      'Distribution strategy'
    ]
  },
  {
    id: 'social',
    icon: <FaShareAlt className="text-4xl text-primary" />,
    title: 'Social Media Content',
    description: "Engage your audience across all social platforms with our tailored video content. We create dynamic, shareable content that drives engagement and helps build your brand's online presence.",
    features: [
      'Platform-optimized content',
      'Short-form videos',
      'Social media strategy',
      'Engagement-focused editing',
      'Regular content packages',
      'Analytics and reporting'
    ]
  },
  {
    id: 'corporate',
    icon: <FaBuilding className="text-4xl text-primary" />,
    title: 'Corporate Events',
    description: 'Capture your corporate events with professional multi-camera coverage. From conferences to product launches, we ensure every important moment is recorded with precision and style.',
    features: [
      'Multi-camera setup',
      'Live event coverage',
      'Conference recording',
      'Product launch videos',
      'Corporate presentations',
      'Event highlight reels'
    ]
  },
  {
    id: 'effects',
    icon: <FaMagic className="text-4xl text-primary" />,
    title: 'Special Effects',
    description: 'Enhance your production with cutting-edge visual effects. Our VFX team creates stunning visual elements that elevate your content and create memorable moments that leave a lasting impression.',
    features: [
      'Motion graphics',
      'Visual effects (VFX)',
      '3D animation',
      'Color grading',
      'Compositing',
      'Green screen effects'
    ]
  },
  {
    id: 'drone',
    icon: <FaPlane className="text-4xl text-primary" />,
    title: 'Drone Footage',
    description: 'Take your production to new heights with our professional drone cinematography. We capture breathtaking aerial footage that provides unique perspectives and adds production value to your project.',
    features: [
      'FAA-licensed pilots',
      'High-resolution aerial filming',
      'Property showcases',
      'Landscape cinematography',
      'Event coverage',
      'Industrial inspections'
    ]
  },
  {
    id: 'editing',
    icon: <FaCut className="text-4xl text-primary" />,
    title: 'Video Editing',
    description: 'Transform raw footage into polished, professional content with our expert post-production services. Our editors craft compelling narratives that engage viewers and achieve your communication goals.',
    features: [
      'Professional editing',
      'Sound design',
      'Color correction',
      'Motion graphics',
      'Music licensing',
      'Content optimization'
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark/90"></div>
        <div className="relative container h-full flex items-center justify-center text-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-metallic max-w-2xl mx-auto"
              initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From concept to delivery, we offer comprehensive video production services to bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="mb-24 last:mb-0"
              initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`flex flex-col md:flex-row items-start gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="w-full md:w-1/2">
                  <div className="p-6 bg-light rounded-lg shadow-lg">
                    <div className="p-4 bg-light-dark rounded-full inline-block mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-dark-light mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark">
                          <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-80 md:h-[500px] bg-dark rounded-lg overflow-hidden">
                  {/* In a real implementation, you would add actual service-specific images or videos here */}
                  <div className="w-full h-full bg-geometric-pattern opacity-20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
};

export default ServicesPage;