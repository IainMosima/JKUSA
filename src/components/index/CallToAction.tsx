
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

export const CallToAction: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
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
    <section className="py-24 bg-gradient-to-br from-jkusa-blue/20 via-background to-jkusa-green/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </motion.h2>
          <motion.p variants={item} className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Whether you're considering running for a position or planning to vote, your participation is crucial for a democratic and representative student government.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit"
              className="px-8 py-3 bg-jkusa-red hover:bg-jkusa-red/90 text-white font-medium rounded-md shadow-lg transition-colors"
            >
              Submit Your Candidacy
            </Link>
            <Link
              to="/candidates"
              className="px-8 py-3 bg-transparent border border-jkusa-green text-jkusa-green font-medium rounded-md hover:bg-jkusa-green/10 transition-colors"
            >
              Explore Candidates
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
