
import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/candidates/HeroSection';
import { EligibilityRequirements } from '@/components/candidates/EligibilityRequirements';
import { CandidateForm } from '@/components/candidates/CandidateForm';

const SubmitCandidate = () => {
  return (
    <Layout>
      <HeroSection 
        title={<>Submit Your <span className="text-jkusa-green">Candidacy</span></>}
        description="Interested in running for a JKUSA leadership position? Complete this form to submit your candidacy for the 2025 elections."
      />
      <EligibilityRequirements />
      <CandidateForm />
    </Layout>
  );
};

export default SubmitCandidate;
