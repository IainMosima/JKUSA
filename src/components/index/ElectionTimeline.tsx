
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

export const ElectionTimeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="relative bg-gradient-to-r from-jkusa-blue/30 to-jkusa-green/30 rounded-2xl p-8 md:p-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 bg-jkusa-green/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-jkusa-blue/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />
        
        <h3 className="text-2xl font-bold mb-4 relative z-10">Election Timeline</h3>
        
        <div className="space-y-6 relative z-10">
          <TimelineItem title="Nomination Period" date="January 15 - February 10, 2025" />
          <TimelineItem title="Campaign Period" date="February 15 - March 10, 2025" />
          <TimelineItem title="Voting Day" date="March 15, 2025" />
          <TimelineItem title="Results Announcement" date="March 17, 2025" />
        </div>
      </div>
    </motion.div>
  );
};

interface TimelineItemProps {
  title: string;
  date: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="min-w-10 rounded-full bg-white/90 h-10 flex items-center justify-center">
        <CalendarCheck className="h-5 w-5 text-jkusa-green" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm mt-1">{date}</p>
      </div>
    </div>
  );
};
