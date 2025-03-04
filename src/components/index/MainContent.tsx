
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BadgeCheck, ChevronRight, Users, BookOpen } from 'lucide-react';
import { ElectionTimeline } from './ElectionTimeline';

export const MainContent: React.FC = () => {
  return (
    <section id="main-content" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Vote, <span className="text-jkusa-green">Your Voice</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The JKUSA Student Elections provide an opportunity for students to elect leaders who will represent their interests and concerns. This democratic process ensures that student governance remains responsive to the needs of the student body.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-jkusa-green/10 p-2 rounded-full">
                    <BadgeCheck className="h-5 w-5 text-jkusa-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transparent Process</h3>
                    <p className="text-sm text-muted-foreground">Our election process is fully transparent, with clear guidelines and regular updates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-jkusa-green/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-jkusa-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Inclusive Participation</h3>
                    <p className="text-sm text-muted-foreground">We encourage all students to participate in the elections as candidates or voters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-jkusa-green/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-jkusa-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Informed Decisions</h3>
                    <p className="text-sm text-muted-foreground">Access candidate manifestos and information to make informed voting decisions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Link 
                  to="/candidates"
                  className="inline-flex items-center gap-2 text-jkusa-green font-medium hover:underline"
                >
                  View All Candidates <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <ElectionTimeline />
          </div>
        </div>
      </div>
    </section>
  );
};
