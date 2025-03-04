
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { MainContent } from '@/components/index/MainContent';
import { FeaturedCandidates } from '@/components/index/FeaturedCandidates';
import { CallToAction } from '@/components/index/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <MainContent />
      <FeaturedCandidates />
      <CallToAction />
    </Layout>
  );
};

export default Index;
