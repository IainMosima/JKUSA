
import React from 'react';
import { Candidate } from '@/lib/candidates';

interface CandidateSupportProps {
  candidate: Candidate;
}

export const CandidateSupport: React.FC<CandidateSupportProps> = ({ candidate }) => {
  return (
    <section id="support" className="py-16 md:py-24 bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support {candidate.name}'s Campaign
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            There are many ways to get involved and support {candidate.name}'s campaign for {candidate.position}. Join the movement and help shape the future of JKUSA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border hover:border-jkusa-green transition-colors">
              <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join the campaign team and help with events, outreach, and more.
              </p>
              <a 
                href="#" 
                className="text-jkusa-green font-medium hover:underline"
              >
                Sign up as volunteer →
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg border hover:border-jkusa-green transition-colors">
              <h3 className="font-semibold text-lg mb-2">Spread the Word</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Share {candidate.name}'s campaign on social media and with friends.
              </p>
              <a 
                href="#" 
                className="text-jkusa-green font-medium hover:underline"
              >
                Share campaign →
              </a>
            </div>
            
            <div className="bg-card p-6 rounded-lg border hover:border-jkusa-green transition-colors">
              <h3 className="font-semibold text-lg mb-2">Attend Events</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join campaign rallies and events to show your support.
              </p>
              <a 
                href="#" 
                className="text-jkusa-green font-medium hover:underline"
              >
                View events calendar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
