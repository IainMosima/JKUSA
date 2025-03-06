import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Twitter, Facebook, Instagram, Mail, Play } from 'lucide-react';
import { Candidate } from '@/lib/candidates';

interface CandidateHeroProps {
  candidate: Candidate;
}

export const CandidateHero: React.FC<CandidateHeroProps> = ({ candidate }) => {
  const [showVideo, setShowVideo] = React.useState(false);
  
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
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg mb-4">
              {showVideo ? (
                <div className="aspect-[3/4] w-full">
                  <iframe 
                    src="https://www.youtube.com/embed/YJF16UoFO6M?si=wur133Je321dkTqn&autoplay=1"
                    title={`${candidate.name} campaign video`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={candidate.image} 
                    alt={candidate.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors group"
                    aria-label="Play campaign video"
                  >
                    <div className="h-20 w-20 rounded-full bg-jkusa-red flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                    <span className="absolute bottom-8 text-white font-medium text-lg">Watch Campaign Video</span>
                  </button>
                </div>
              )}
            </div>
            
            {!showVideo && (
              <button 
                onClick={() => setShowVideo(true)}
                className="w-full py-3 flex items-center justify-center gap-2 bg-jkusa-red text-white rounded-md hover:bg-jkusa-red/90 transition-colors"
              >
                <Play className="h-5 w-5" fill="white" />
                Watch Campaign Video
              </button>
            )}
            
            {showVideo && (
              <button 
                onClick={() => setShowVideo(false)}
                className="w-full py-3 flex items-center justify-center gap-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Show Candidate Photo
              </button>
            )}
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
