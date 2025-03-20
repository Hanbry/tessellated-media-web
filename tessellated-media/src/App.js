import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/services" element={
          <MainLayout>
            <ServicesPage />
          </MainLayout>
        } />
        <Route path="/portfolio" element={
          <MainLayout>
            <PortfolioPage />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        } />
        <Route path="*" element={
          <MainLayout>
            <div className="container mx-auto px-4 py-32 text-center">
              <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
              <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
              <a href="/" className="btn btn-primary">Return to Homepage</a>
            </div>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
