
import React from 'react';
import { Check } from 'lucide-react';

interface RequirementItemProps {
  children: React.ReactNode;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ children }) => (
  <li className="flex items-start gap-2">
    <Check className="h-5 w-5 text-jkusa-green flex-shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

export const EligibilityRequirements: React.FC = () => {
  return (
    <section className="py-12 bg-muted/50 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Eligibility Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-4">Academic Requirements</h3>
              <ul className="space-y-2">
                <RequirementItem>Minimum GPA of 2.7</RequirementItem>
                <RequirementItem>Completed at least two semesters at JKUAT</RequirementItem>
                <RequirementItem>No pending academic disciplinary actions</RequirementItem>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-4">Leadership Requirements</h3>
              <ul className="space-y-2">
                <RequirementItem>Previous leadership experience preferred</RequirementItem>
                <RequirementItem>Good standing with the university</RequirementItem>
                <RequirementItem>Ability to commit time to JKUSA responsibilities</RequirementItem>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              All candidates must adhere to the JKUSA Election Code of Conduct and university policies during their campaign. 
              For detailed eligibility requirements, please refer to the <a href="#" className="text-jkusa-green hover:underline">Election Guidelines</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
