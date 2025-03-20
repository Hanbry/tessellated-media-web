import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

const categories = ['All', 'Films', 'Documentaries', 'Corporate', 'Social Media', 'Drone'];

const projects = [
  {
    id: 1,
    title: "Eco Warriors",
    category: "Documentaries",
    client: "Ocean Conservation Society",
    description: "A compelling documentary series highlighting marine conservation efforts across the Pacific.",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800",
    stats: {
      views: "2.5M+",
      engagement: "95%",
      awards: 2
    }
  },
  {
    id: 2,
    title: "Future Forward",
    category: "Corporate",
    client: "TechCorp International",
    description: "Product launch campaign featuring cutting-edge technology innovations.",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800",
    stats: {
      reach: "5M+",
      conversion: "32%",
      roi: "280%"
    }
  },
  {
    id: 3,
    title: "Urban Perspectives",
    category: "Drone",
    client: "Metropolitan Development",
    description: "Aerial cinematography showcasing urban development and architecture.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800",
    stats: {
      views: "1.8M+",
      clients: "15+",
      footage: "40hrs+"
    }
  },
  {
    id: 4,
    title: "Brand Stories",
    category: "Films",
    client: "Fashion Forward",
    description: "Cinematic brand film highlighting seasonal collection launches.",
    image: "https://images.unsplash.com/photo-1560269507-c4e117ea31c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800",
    stats: {
      engagement: "88%",
      sales: "+45%",
      reach: "3.2M+"
    }
  },
  {
    id: 5,
    title: "Social Impact",
    category: "Social Media",
    client: "Global Youth Initiative",
    description: "Engaging social media campaign promoting youth education worldwide.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800",
    stats: {
      shares: "500K+",
      reach: "12M+",
      engagement: "92%"
    }
  }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl text-metallic max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our collection of award-winning productions and creative projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-light-dark text-dark hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                      <span className="text-primary-light text-sm font-medium">{project.category}</span>
                      <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                      <p className="text-metallic mt-2">{project.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-light rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-dark bg-opacity-50 rounded-full p-2 hover:bg-primary transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <span className="text-primary text-sm font-medium">{selectedProject.category}</span>
                <h2 className="text-3xl font-bold mt-2">{selectedProject.title}</h2>
                <p className="text-dark-light mt-2">{selectedProject.client}</p>
                <p className="mt-6">{selectedProject.description}</p>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-light-dark rounded-lg">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-dark-light capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
};

export default PortfolioPage;