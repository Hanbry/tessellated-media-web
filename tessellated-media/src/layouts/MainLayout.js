import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white font-serif">
              Tessellated Media
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`text-white hover:text-primary-light transition-colors ${
                    location.pathname === '/' ? 'font-bold border-b-2 border-primary' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-white hover:text-primary-light transition-colors ${
                    location.pathname === '/services' ? 'font-bold border-b-2 border-primary' : ''
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`text-white hover:text-primary-light transition-colors ${
                    location.pathname === '/portfolio' ? 'font-bold border-b-2 border-primary' : ''
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-white hover:text-primary-light transition-colors ${
                    location.pathname === '/about' ? 'font-bold border-b-2 border-primary' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="btn btn-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <button 
            className="text-2xl text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 z-20 p-4 mt-1 shadow-lg bg-dark md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className={`text-white hover:text-primary-light transition-colors block py-2 ${
                    location.pathname === '/' ? 'font-bold' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-white hover:text-primary-light transition-colors block py-2 ${
                    location.pathname === '/services' ? 'font-bold' : ''
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`text-white hover:text-primary-light transition-colors block py-2 ${
                    location.pathname === '/portfolio' ? 'font-bold' : ''
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-white hover:text-primary-light transition-colors block py-2 ${
                    location.pathname === '/about' ? 'font-bold' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full text-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-dark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">Tessellated Media</h3>
              <p className="mb-4 text-metallic">Crafting cinematic stories since 2018</p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary-light transition-colors" aria-label="Facebook">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary-light transition-colors" aria-label="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary-light transition-colors" aria-label="Twitter">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary-light transition-colors" aria-label="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary-light transition-colors" aria-label="Vimeo">
                  <span className="sr-only">Vimeo</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.543 7.104c-.089 1.973-1.466 4.674-4.134 8.103-2.754 3.594-5.079 5.392-6.974 5.392-1.179 0-2.176-1.089-2.991-3.268-.544-1.995-1.088-3.989-1.631-5.984-.604-2.179-1.252-3.268-1.942-3.268-.152 0-.684.316-1.597.95l-.957-1.231c1.004-.884 1.995-1.766 2.974-2.648 1.341-1.161 2.347-1.771 3.018-1.829 1.587-.152 2.564.935 2.93 3.263.396 2.512.67 4.073.822 4.682.456 2.07.957 3.105 1.504 3.105.425 0 1.063-.671 1.914-2.013.851-1.341 1.307-2.361 1.367-3.059.122-1.155-.333-1.734-1.367-1.734-.486 0-.988.111-1.504.333 1.003-3.29 2.921-4.889 5.753-4.799 2.098.061 3.085 1.427 2.963 4.098z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-metallic hover:text-primary-light transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="text-metallic hover:text-primary-light transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-metallic hover:text-primary-light transition-colors">Portfolio</Link>
                </li>
                <li>
                  <Link to="/about" className="text-metallic hover:text-primary-light transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-metallic hover:text-primary-light transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services#films" className="text-metallic hover:text-primary-light transition-colors">Films</Link>
                </li>
                <li>
                  <Link to="/services#documentaries" className="text-metallic hover:text-primary-light transition-colors">Documentaries</Link>
                </li>
                <li>
                  <Link to="/services#social" className="text-metallic hover:text-primary-light transition-colors">Social Media</Link>
                </li>
                <li>
                  <Link to="/services#corporate" className="text-metallic hover:text-primary-light transition-colors">Corporate Events</Link>
                </li>
                <li>
                  <Link to="/services#drone" className="text-metallic hover:text-primary-light transition-colors">Drone Footage</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Stay Updated</h4>
              <p className="mb-4 text-metallic">Subscribe to our newsletter for the latest projects and insights.</p>
              <form className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-dark-light text-white border border-dark-light rounded focus:outline-none focus:border-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full btn btn-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-dark-light">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-metallic">&copy; {new Date().getFullYear()} Tessellated Media. All rights reserved.</p>
              <p className="text-metallic">
                <Link to="/privacy-policy" className="hover:text-primary-light transition-colors">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:text-primary-light transition-colors">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;