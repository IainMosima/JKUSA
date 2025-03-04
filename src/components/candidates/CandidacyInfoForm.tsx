
import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CandidacyInfoForm: React.FC = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg border">
      <h3 className="text-xl font-semibold mb-6">Candidacy Information</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="position" className="block text-sm font-medium mb-2">Position You're Running For*</label>
          <Select required>
            <SelectTrigger id="position">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="president">President</SelectItem>
                <SelectItem value="vice-president">Vice President</SelectItem>
                <SelectItem value="secretary-general">Secretary General</SelectItem>
                <SelectItem value="treasurer">Treasurer</SelectItem>
                <SelectItem value="academic-secretary">Academic Secretary</SelectItem>
                <SelectItem value="sports-culture-secretary">Sports & Culture Secretary</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="slogan" className="block text-sm font-medium mb-2">Campaign Slogan*</label>
          <Input id="slogan" type="text" placeholder="Enter your campaign slogan" required />
        </div>
        
        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-2">Short Biography* (max 500 characters)</label>
          <textarea 
            id="bio" 
            placeholder="Tell voters about yourself..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring min-h-[120px]"
            maxLength={500}
            required
          />
        </div>
        
        <div>
          <label htmlFor="manifesto" className="block text-sm font-medium mb-2">Manifesto* (max 1000 characters)</label>
          <textarea 
            id="manifesto" 
            placeholder="Outline your vision and plans..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring min-h-[200px]"
            maxLength={1000}
            required
          />
        </div>
      </div>
    </div>
  );
};
