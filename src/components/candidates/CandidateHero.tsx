
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { Candidate } from '@/lib/candidates';

interface CandidateHeroProps {
  candidate: Candidate;
}

export const CandidateHero: React.FC<CandidateHeroProps> = ({ candidate }) => {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-jkusa-blue/30 via-background to-jkusa-green/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link to="/candidates" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to All Candidates
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img 
                src={candidate.image} 
                alt={candidate.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <Badge className="bg-jkusa-red hover:bg-jkusa-red text-white mb-4">
              {candidate.position}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {candidate.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground italic mb-6">
              "{candidate.slogan}"
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="outline" className="bg-muted/50">
                {candidate.faculty}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {candidate.socials.twitter && (
                <a 
                  href={candidate.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-jkusa-blue hover:text-jkusa-blue transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              
              {candidate.socials.facebook && (
                <a 
                  href={candidate.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-jkusa-blue hover:text-jkusa-blue transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              
              {candidate.socials.instagram && (
                <a 
                  href={candidate.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-jkusa-blue hover:text-jkusa-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              
              <a 
                href={`mailto:${candidate.socials.email}`}
                className="h-10 w-10 bg-background rounded-full flex items-center justify-center border border-border hover:border-jkusa-blue hover:text-jkusa-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#support" 
                className="inline-flex items-center justify-center bg-jkusa-green hover:bg-jkusa-green/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                Support This Candidate
              </a>
              
              <a 
                href="#message" 
                className="inline-flex items-center justify-center bg-transparent border border-jkusa-green text-jkusa-green px-6 py-3 rounded-md hover:bg-jkusa-green/10 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
