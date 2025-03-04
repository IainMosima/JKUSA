
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Candidate } from '@/lib/candidates';

interface CandidateCardProps {
  candidate: Candidate;
  index: number;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/candidates/${candidate.id}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-background border hover:border-jkusa-green transition-all duration-300 hover:shadow-lg">
          <div className="aspect-[3/4] overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={candidate.image}
              alt={candidate.name}
              className="h-full w-full object-cover transition-transform"
            />
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge className="bg-jkusa-red hover:bg-jkusa-red/90 text-white">
              {candidate.position}
            </Badge>
          </div>
          
          <div className="p-5">
            <h3 className="font-bold text-xl group-hover:text-jkusa-green transition-colors">
              {candidate.name}
            </h3>
            <p className="text-muted-foreground mt-1 line-clamp-2">
              {candidate.slogan}
            </p>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="text-xs bg-muted py-1 px-2 rounded">{candidate.faculty}</span>
              </div>
              <span className="text-sm font-medium text-jkusa-green">View Profile →</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
