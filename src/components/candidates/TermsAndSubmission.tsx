
import React from 'react';
import { Button } from '@/components/ui/button';

export const TermsAndSubmission: React.FC = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg border">
      <div className="flex items-start gap-3 mb-6">
        <input 
          type="checkbox" 
          id="terms" 
          className="h-5 w-5 mt-1 rounded border-input" 
          required
        />
        <label htmlFor="terms" className="text-sm">
          I confirm that all information provided is accurate and complete. I have read and agree to the <a href="#" className="text-jkusa-green hover:underline">Election Guidelines</a> and <a href="#" className="text-jkusa-green hover:underline">Code of Conduct</a>. I understand that providing false information may result in disqualification.
        </label>
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit"
          className="bg-jkusa-green hover:bg-jkusa-green/90 text-white font-medium px-8 py-6 rounded-md transition-colors text-lg"
        >
          Submit Candidacy Application
        </Button>
      </div>
    </div>
  );
};
