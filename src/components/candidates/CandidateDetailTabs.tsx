
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Candidate } from '@/lib/candidates';

interface CandidateDetailTabsProps {
  candidate: Candidate;
}

export const CandidateDetailTabs: React.FC<CandidateDetailTabsProps> = ({ candidate }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-10">
            <TabsTrigger value="bio">Biography</TabsTrigger>
            <TabsTrigger value="manifesto">Manifesto</TabsTrigger>
            <TabsTrigger value="agenda">Key Agenda</TabsTrigger>
          </TabsList>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="bio" className="bg-card p-6 md:p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <p className="text-lg text-card-foreground leading-relaxed whitespace-pre-line">
                {candidate.bio}
              </p>
            </TabsContent>
            
            <TabsContent value="manifesto" className="bg-card p-6 md:p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">Manifesto</h2>
              <p className="text-lg text-card-foreground leading-relaxed whitespace-pre-line">
                {candidate.manifesto}
              </p>
            </TabsContent>
            
            <TabsContent value="agenda" className="bg-card p-6 md:p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">Key Agenda Items</h2>
              <ul className="space-y-4">
                {candidate.agenda.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-jkusa-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="h-4 w-4 text-jkusa-green" />
                    </div>
                    <p className="text-lg text-card-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};
