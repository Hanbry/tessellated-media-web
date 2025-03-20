import React from 'react';
import { motion } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    bio: 'Award-winning director with 15+ years of experience in commercial and documentary filmmaking.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500',
    specialties: ['Creative Direction', 'Documentary', 'Narrative Films']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Director of Photography',
    bio: 'Cinematographer known for capturing stunning visuals and creating immersive visual experiences.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500',
    specialties: ['Cinematography', 'Lighting', 'Camera Operation']
  },
  {
    name: 'Emily Thompson',
    role: 'Post-Production Supervisor',
    bio: 'Expert editor and VFX artist with a passion for storytelling through post-production.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500',
    specialties: ['Video Editing', 'Color Grading', 'VFX']
  },
  {
    name: 'David Park',
    role: 'Drone Operations Lead',
    bio: 'FAA-licensed drone pilot specializing in aerial cinematography and complex flight operations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=500',
    specialties: ['Drone Photography', 'Aerial Planning', 'Technical Direction']
  }
];

const achievements = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '250+', label: 'Completed Projects' },
  { number: '15', label: 'Industry Awards' },
  { number: '100+', label: 'Happy Clients' }
];

const values = [
  {
    title: 'Creative Excellence',
    description: 'We push boundaries and explore innovative ways to tell compelling stories through visual media.'
  },
  {
    title: 'Technical Mastery',
    description: 'Our team stays at the forefront of technology, utilizing cutting-edge equipment and techniques.'
  },
  {
    title: 'Client Partnership',
    description: 'We believe in collaborative relationships, working closely with clients to achieve their vision.'
  },
  {
    title: 'Quality Delivery',
    description: 'Every project receives our full dedication to deliver exceptional results that exceed expectations.'
  }
];

const AboutPage = () => {
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
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl text-metallic max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A passionate team of creatives dedicated to crafting compelling visual stories.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Stories That Matter</h2>
              <p className="text-dark-light mb-6">
                Founded in 2018, Tessellated Media has grown from a small production house into a full-service creative studio. 
                Our passion for storytelling and commitment to technical excellence has made us a trusted partner for brands and 
                organizations looking to make an impact through visual media.
              </p>
              <p className="text-dark-light">
                We believe in the power of visual storytelling to move hearts, change minds, and inspire action. Every project 
                we undertake is an opportunity to create something meaningful that resonates with audiences and achieves our 
                clients' objectives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                {/* In a real implementation, you would add an actual behind-the-scenes image here */}
                <div className="w-full h-full bg-dark"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-dark text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-metallic">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-dark-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-dark-light max-w-2xl mx-auto">
              Our talented team of professionals brings together diverse skills and experiences 
              to deliver exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-dark-light mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-light-dark rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
};

export default AboutPage;