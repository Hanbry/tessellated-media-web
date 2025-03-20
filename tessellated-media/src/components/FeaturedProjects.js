import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Placeholder images - in a real project, you would import actual images or use a CDN
const projectImages = [
  {
    id: 'project1',
    image: 'https://images.unsplash.com/photo-1534639077088-0615675877d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Campaign Launch',
    description: 'Brand identity film for fashion label',
    category: 'Commercial',
    link: '/portfolio#project1'
  },
  {
    id: 'project2',
    image: 'https://images.unsplash.com/photo-1551649001-7a21fddb0d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Ocean Explorers',
    description: 'Documentary series on marine conservation',
    category: 'Documentary',
    link: '/portfolio#project2'
  },
  {
    id: 'project3',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Tech Summit 2025',
    description: 'Multi-camera coverage of industry conference',
    category: 'Corporate',
    link: '/portfolio#project3'
  },
  {
    id: 'project4',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Alpine Perspectives',
    description: 'Drone cinematography for tourism campaign',
    category: 'Drone',
    link: '/portfolio#project4'
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="section-padding bg-light-dark" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-light">
            Explore our recent work and discover how we bring stories to life through the power of visual storytelling.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((project) => (
            <motion.div 
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg h-80 group"
              initial={{ opacity: 1 }}  // Changed to be visible initially
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="uppercase text-primary-light font-medium text-sm tracking-wide">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mt-2 mb-2">{project.title}</h3>
                  <p className="text-metallic mb-4">{project.description}</p>
                  <Link 
                    to={project.link} 
                    className="btn btn-primary inline-block"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 1, y: 0 }}  // Changed to be visible initially
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/portfolio" className="btn btn-outline">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;