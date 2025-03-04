
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { getCandidate } from '@/lib/candidates';
import { CandidateHero } from '@/components/candidates/CandidateHero';
import { CandidateDetailTabs } from '@/components/candidates/CandidateDetailTabs';
import { CandidateSupport } from '@/components/candidates/CandidateSupport';
import { CandidateMessage } from '@/components/candidates/CandidateMessage';

const CandidateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const candidate = id ? getCandidate(id) : undefined;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If candidate not found, redirect to candidates page
    if (!candidate) {
      navigate('/candidates', { replace: true });
    }
  }, [candidate, navigate]);
  
  if (!candidate) {
    return null;
  }
  
  return (
    <Layout>
      <CandidateHero candidate={candidate} />
      <CandidateDetailTabs candidate={candidate} />
      <CandidateSupport candidate={candidate} />
      <CandidateMessage candidate={candidate} />
    </Layout>
  );
};

export default CandidateDetail;
