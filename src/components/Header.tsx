
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when location changes
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Candidates', path: '/candidates' },
    { name: 'Submit', path: '/submit' },
  ];
  
  // Determine if a nav link is active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glassmorphism shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.img 
              src="/lovable-uploads/afa382ff-22cd-4c9d-96ee-2444a8fdf866.png" 
              alt="JKUSA Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="font-bold text-lg md:text-xl">JKUSA</span>
              <span className="text-sm md:text-base block -mt-1 text-jkusa-green">Elections 2025</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 underline-animation text-base font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-jkusa-green' 
                    : 'text-foreground hover:text-jkusa-green'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-jkusa-green"
                    layoutId="navbar-indicator"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 glassmorphism shadow-md py-4 border-t"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col container mx-auto px-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-3 border-b border-border last:border-0 text-lg ${
                  isActive(item.path)
                    ? 'text-jkusa-green font-medium'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
