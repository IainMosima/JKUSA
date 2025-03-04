
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { CandidateCard } from '@/components/CandidateCard';
import { candidates } from '@/lib/candidates';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Candidates = () => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  const [facultyFilter, setFacultyFilter] = useState('all');
  
  // Get unique positions and faculties for filters
  const positions = ['all', ...new Set(candidates.map(c => c.position))];
  const faculties = ['all', ...new Set(candidates.map(c => c.faculty))];
  
  // Filter candidates based on search and filters
  useEffect(() => {
    let filtered = candidates;
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        c => 
          c.name.toLowerCase().includes(query) ||
          c.slogan.toLowerCase().includes(query) ||
          c.position.toLowerCase().includes(query) ||
          c.faculty.toLowerCase().includes(query)
      );
    }
    
    // Position filter
    if (positionFilter !== 'all') {
      filtered = filtered.filter(c => c.position === positionFilter);
    }
    
    // Faculty filter
    if (facultyFilter !== 'all') {
      filtered = filtered.filter(c => c.faculty === facultyFilter);
    }
    
    setFilteredCandidates(filtered);
  }, [searchQuery, positionFilter, facultyFilter]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-jkusa-blue/30 via-background to-jkusa-green/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-jkusa-green">Candidates</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the profiles of all candidates running in the 2025 JKUSA Elections. Learn about their platforms, qualifications, and visions for the future.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-muted/50 border-y">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="flex-1">
              <label htmlFor="search" className="text-sm font-medium block mb-2">Search Candidates</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by name, position, or slogan..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <label htmlFor="position-filter" className="text-sm font-medium block mb-2">Filter by Position</label>
              <Select value={positionFilter} onValueChange={setPositionFilter}>
                <SelectTrigger id="position-filter" className="w-full">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {positions.map(position => (
                      <SelectItem key={position} value={position}>
                        {position === 'all' ? 'All Positions' : position}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-64">
              <label htmlFor="faculty-filter" className="text-sm font-medium block mb-2">Filter by Faculty</label>
              <Select value={facultyFilter} onValueChange={setFacultyFilter}>
                <SelectTrigger id="faculty-filter" className="w-full">
                  <SelectValue placeholder="Select faculty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {faculties.map(faculty => (
                      <SelectItem key={faculty} value={faculty}>
                        {faculty === 'all' ? 'All Faculties' : faculty}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Candidates Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {filteredCandidates.length > 0 ? (
            <>
              <p className="mb-8 text-muted-foreground">
                Showing {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? 's' : ''}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredCandidates.map((candidate, index) => (
                  <CandidateCard key={candidate.id} candidate={candidate} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No candidates found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setPositionFilter('all');
                  setFacultyFilter('all');
                }}
                className="mt-6 px-4 py-2 bg-jkusa-green text-white rounded-md hover:bg-jkusa-green/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Candidates;
