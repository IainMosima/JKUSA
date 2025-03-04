
import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC<{
  title: React.ReactNode;
  description: string;
}> = ({ title, description }) => {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-jkusa-blue/30 via-background to-jkusa-green/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
