
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

export const PersonalInfoForm: React.FC = () => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-lg border">
      <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium mb-2">Full Name*</label>
          <Input id="full-name" type="text" placeholder="Enter your full name" required />
        </div>
        
        <div>
          <label htmlFor="student-id" className="block text-sm font-medium mb-2">Student ID*</label>
          <Input id="student-id" type="text" placeholder="Enter your student ID" required />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address*</label>
          <Input id="email" type="email" placeholder="Enter your email address" required />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number*</label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" required />
        </div>
        
        <div>
          <label htmlFor="faculty" className="block text-sm font-medium mb-2">Faculty/School*</label>
          <Select required>
            <SelectTrigger id="faculty">
              <SelectValue placeholder="Select your faculty" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="business">School of Business</SelectItem>
                <SelectItem value="engineering">School of Engineering</SelectItem>
                <SelectItem value="computing">School of Computing and Information Technology</SelectItem>
                <SelectItem value="medicine">School of Medicine</SelectItem>
                <SelectItem value="physical-education">School of Physical Education</SelectItem>
                <SelectItem value="agriculture">School of Agriculture</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="year-of-study" className="block text-sm font-medium mb-2">Year of Study*</label>
          <Select required>
            <SelectTrigger id="year-of-study">
              <SelectValue placeholder="Select your year of study" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">First Year</SelectItem>
                <SelectItem value="2">Second Year</SelectItem>
                <SelectItem value="3">Third Year</SelectItem>
                <SelectItem value="4">Fourth Year</SelectItem>
                <SelectItem value="5">Fifth Year</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
