
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { PersonalInfoForm } from './PersonalInfoForm';
import { CandidacyInfoForm } from './CandidacyInfoForm';
import { SupportingDocuments } from './SupportingDocuments';
import { TermsAndSubmission } from './TermsAndSubmission';

export const CandidateForm: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, handle form submission here
    
    toast({
      title: "Application Submitted",
      description: "Your candidacy application has been received. We will review it and get back to you soon.",
      duration: 5000,
    });
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Candidate Application Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <PersonalInfoForm />
            <CandidacyInfoForm />
            <SupportingDocuments />
            <TermsAndSubmission />
          </form>
        </div>
      </div>
    </section>
  );
};
