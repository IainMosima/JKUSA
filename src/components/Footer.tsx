
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/afa382ff-22cd-4c9d-96ee-2444a8fdf866.png" 
                alt="JKUSA Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">JKUSA</h3>
                <p className="text-sm text-jkusa-green -mt-1">Elections 2025</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The official digital platform for Jomo Kenyatta University of Agriculture and Technology Student Association Elections.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-jkusa-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/candidates" className="text-sm text-muted-foreground hover:text-jkusa-green transition-colors">
                  Candidates
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-sm text-muted-foreground hover:text-jkusa-green transition-colors">
                  Submit Candidacy
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-jkusa-green transition-colors">
                  Election Guidelines
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>elections@jkusa.org</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 123 456 789</span>
              </li>
              <li className="text-sm text-muted-foreground mt-3">
                Jomo Kenyatta University<br />
                of Agriculture and Technology<br />
                P.O. Box 62000-00200<br />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="h-10 w-10 bg-background flex items-center justify-center rounded-full border border-border hover:border-jkusa-green hover:text-jkusa-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 bg-background flex items-center justify-center rounded-full border border-border hover:border-jkusa-green hover:text-jkusa-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 bg-background flex items-center justify-center rounded-full border border-border hover:border-jkusa-green hover:text-jkusa-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter:</p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background text-sm rounded-l-md border border-border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-jkusa-green"
                />
                <button className="bg-jkusa-green hover:bg-jkusa-green/90 text-white px-3 py-2 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JKUSA Elections. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
