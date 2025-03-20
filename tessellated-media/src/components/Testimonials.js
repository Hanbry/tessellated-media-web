import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Tessellated Media transformed our brand story into a visual masterpiece. Their team's creativity and technical expertise resulted in a campaign that exceeded our expectations and resonated deeply with our audience.",
    author: "Sarah Johnson",
    position: "Marketing Director, Lumina Brands",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "The documentary series Tessellated Media produced for us captured the essence of our conservation work in a way we never thought possible. Their storytelling approach brought our mission to life.",
    author: "Michael Chen",
    position: "Executive Director, Ocean Alliance",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    content: "From concept to delivery, the team at Tessellated Media demonstrated exceptional professionalism. Their ability to work within our tight timeline while maintaining outstanding quality was impressive.",
    author: "Alexandra Reed",
    position: "CEO, Nexus Technologies",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-geometric-pattern bg-dark text-white">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex flex-col justify-center px-8 md:px-16"
                initial={{ opacity: index === 0 ? 1 : 0 }}  // Show first testimonial immediately
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : (activeTestimonial > index ? -100 : 100)
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <svg className="w-10 h-10 mx-auto mb-4 text-primary-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  <p className="text-xl md:text-2xl mb-8 font-serif">{testimonial.content}</p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-2 border-primary mr-4" 
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-metallic">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  activeTestimonial === index ? 'bg-primary' : 'bg-metallic'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-dark bg-opacity-50 rounded-full p-2 text-white hover:bg-primary transition-colors duration-300"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-dark bg-opacity-50 rounded-full p-2 text-white hover:bg-primary transition-colors duration-300"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;