import React from 'react';
import { Linkedin, Twitter, Briefcase } from 'lucide-react';

// HOW TO ADD YOUR OWN IMAGES:
// 1. Upload your photo files (e.g., 'rajesh.jpg') to the 'public' folder in your project root.
// 2. Replace the 'imageUrl' string below with your filename (e.g., '/rajesh.jpg').

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Rajesh Verma',
    role: 'Founder & Strategy Lead',
    experience: '8+ Years Exp',
    // CHANGE THIS: Replace the URL below with your local image path like "/rajesh-photo.jpg"
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Creative Director',
    experience: '6+ Years Exp',
    // CHANGE THIS: Replace with your image
    imageUrl: 'https://images.unsplash.com/photo-1573496359-7013119ac13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Arjun Patel',
    role: 'Lead Developer',
    experience: '5+ Years Exp',
    // CHANGE THIS: Replace with your image
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  }
];

export const Team: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a generic professional placeholder if the local image is missing
    e.currentTarget.src = "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80";
  };

  return (
    <section id="team" className="py-24 bg-deep-teal relative overflow-hidden">
      {/* Minimal Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue opacity-[0.03] rounded-full blur-[80px]"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-yellow opacity-[0.02] rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-yellow font-bold text-sm uppercase tracking-widest mb-2">Bytereach Leadership</h2>
          <h3 className="text-4xl font-display font-bold text-white">Meet The Team</h3>
          <div className="w-16 h-1 bg-white/10 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center">
               {/* Image Container */}
               <div className="relative mb-6">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-neon-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-neon-yellow transition-colors duration-500 relative z-10 bg-deep-teal-dark">
                    <img
                        src={member.imageUrl}
                        alt={member.name}
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-2 right-0 translate-x-2 bg-white text-deep-teal px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1.5 scale-90 group-hover:scale-100 transition-transform duration-300 border border-gray-100">
                     <Briefcase className="w-3.5 h-3.5 text-deep-teal" />
                     <span className="text-xs font-bold tracking-wide">{member.experience}</span>
                  </div>
               </div>

               {/* Text Info */}
               <div className="space-y-1">
                   <h4 className="text-xl font-bold text-white group-hover:text-neon-yellow transition-colors duration-300">{member.name}</h4>
                   <p className="text-neon-blue/80 font-medium text-sm tracking-wide uppercase">{member.role}</p>
               </div>

               {/* Minimal Socials Fade In */}
               <div className="flex gap-3 mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                 <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                 </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};