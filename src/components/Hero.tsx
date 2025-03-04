
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };
  
  return (
    <div className="relative h-screen bg-gradient-to-br from-jkusa-blue/30 via-background to-jkusa-green/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 h-48 w-48 rounded-full bg-jkusa-green/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 h-72 w-72 rounded-full bg-jkusa-blue/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-56 w-56 rounded-full bg-jkusa-red/5 blur-3xl" />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center relative">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center z-10"
        >
          <motion.div variants={item} className="mb-6 inline-block">
            <img 
              src="/lovable-uploads/afa382ff-22cd-4c9d-96ee-2444a8fdf866.png" 
              alt="JKUSA Logo" 
              className="h-24 md:h-28 lg:h-32 mx-auto"
            />
          </motion.div>
          
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-jkusa-green">JKUSA</span> Student Elections <span className="text-jkusa-red">2025</span>
            </h1>
          </motion.div>
          
          <motion.div variants={item}>
            <p className="text-xl md:text-2xl font-light mt-4 text-muted-foreground max-w-3xl mx-auto text-balance">
              Your voice matters. Shape the future of our university through democratic participation.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/candidates"
              className="px-8 py-3 bg-jkusa-green text-white font-medium rounded-md shadow-lg hover:bg-jkusa-green/90 transition-colors"
            >
              View Candidates
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/submit"
              className="px-8 py-3 bg-transparent border border-jkusa-red text-jkusa-red font-medium rounded-md hover:bg-jkusa-red/10 transition-colors"
            >
              Submit Candidacy
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={scrollToContent}
        >
          <ChevronDown className="h-8 w-8 text-foreground animate-bounce-slow" />
        </motion.div>
      </div>
    </div>
  );
};
