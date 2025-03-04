
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { CandidateCard } from '@/components/CandidateCard';
import { candidates } from '@/lib/candidates';

export const FeaturedCandidates: React.FC = () => {
  const featuredCandidates = candidates.slice(0, 3);
  
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Candidates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet some of the outstanding candidates who are running in the upcoming JKUSA Elections.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCandidates.map((candidate, index) => (
            <CandidateCard key={candidate.id} candidate={candidate} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/candidates" 
            className="inline-flex items-center bg-jkusa-green hover:bg-jkusa-green/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            View All Candidates <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
