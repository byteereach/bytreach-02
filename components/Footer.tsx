import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter, Lock } from 'lucide-react';

interface FooterProps {
  isHome?: boolean;
  onNavigateTerms?: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateHome?: () => void;
  onNavigateAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  isHome = false, 
  onNavigateTerms, 
  onNavigatePrivacy, 
  onNavigateHome, 
  onNavigateAdmin 
}) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const scrollToSection = () => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    // If we are already on the home page, simply scroll to the section
    if (isHome) {
      scrollToSection();
    } 
    // If we are NOT on home page, navigate home first, then scroll
    else if (onNavigateHome) {
      onNavigateHome();
      
      // Timeout to allow Home page to mount before scrolling
      setTimeout(scrollToSection, 100);
    }
  };

  return (
    <footer className="bg-deep-teal-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-neon-yellow p-1.5 rounded-md">
                <svg 
                  className="w-5 h-5 text-deep-teal" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 22h20L12 2z" />
                  <path d="M2 22L14.5 7" />
                  <path d="M2 22L17 12" />
                  <path d="M2 22L19.5 17" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                BYTEREACH
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your results-focused digital partner. We help businesses scale through strategic marketing and creative innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-neon-yellow transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-neon-yellow">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-neon-yellow">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Paid Advertising</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-neon-yellow">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>bytereach@gmail.com</li>
              <li>+91 8320086937</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bytereach Marketing Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 items-center">
            <button onClick={() => { if(onNavigateTerms) onNavigateTerms() }} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => { if(onNavigatePrivacy) onNavigatePrivacy() }} className="hover:text-white transition-colors">Privacy Policy</button>
            {onNavigateAdmin && (
              <button onClick={onNavigateAdmin} className="flex items-center gap-1 hover:text-white transition-colors" title="Admin Login">
                <Lock className="w-3 h-3" /> Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};