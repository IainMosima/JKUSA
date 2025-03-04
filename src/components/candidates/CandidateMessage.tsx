
import React from 'react';
import { Input } from '@/components/ui/input';
import { Candidate } from '@/lib/candidates';

interface CandidateMessageProps {
  candidate: Candidate;
}

export const CandidateMessage: React.FC<CandidateMessageProps> = ({ candidate }) => {
  return (
    <section id="message" className="py-16 md:py-24 bg-gradient-to-br from-jkusa-blue/20 via-background to-jkusa-green/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Send a Message to {candidate.name}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Have questions about {candidate.name}'s platform or want to provide feedback? Send a message directly to the candidate.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <Input id="subject" type="text" placeholder="Enter message subject" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                placeholder="Type your message here..."
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-jkusa-green hover:bg-jkusa-green/90 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
