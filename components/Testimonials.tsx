import React from 'react';
import { TestimonialItem } from '../types';
import { Quote, Star } from 'lucide-react';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'BrightStart',
    content: 'Bytereach completely transformed our digital presence. Their strategic approach to SEO and ads doubled our inbound leads in just 4 months.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder',
    company: 'TechFlow',
    content: 'Professional, transparent, and incredibly skilled. The team explained every step of the process and the results speak for themselves.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Director',
    company: 'Urban Style',
    content: 'The best agency investment we have made. Their creative team nailed our brand voice, and the ad performance is through the roof.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    role: 'VP of Sales',
    company: 'GrowthX',
    content: 'We were skeptical about another agency, but Bytereach delivered. The detailed reporting and constant communication put us at ease.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '5',
    name: 'Anita Patel',
    role: 'CEO',
    company: 'Innovate Labs',
    content: 'From web design to the final ad launch, everything was seamless. Highly recommend their full-stack marketing package.',
    avatar: 'https://images.unsplash.com/photo-1573496359-7013119ac13e?auto=format&fit=crop&w=100&q=80'
  }
];

export const Testimonials: React.FC = () => {
  // Triple the data for seamless loop on larger screens
  const sliderData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-4">Client Success Stories</h2>
          <div className="w-24 h-1 bg-neon-yellow mx-auto rounded-full"></div>
          <p className="text-neutral-grey mt-4 max-w-2xl mx-auto text-lg">
            Join dozens of businesses scaling faster with our data-driven approach.
          </p>
        </div>
      </div>

      {/* Slider Container with Gradient Masks */}
      <div className="relative w-full group mask-gradient-x overflow-hidden">
        {/* Marquee Track */}
        <div className="flex gap-4 md:gap-6 w-max animate-scroll group-hover:[animation-play-state:paused] py-4 pl-4 md:pl-6">
          {sliderData.map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="bg-soft-white p-6 md:p-8 rounded-2xl relative w-[280px] md:w-[400px] flex-shrink-0 border border-transparent hover:border-neon-yellow transition-all duration-300 hover:shadow-card cursor-default hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 text-deep-teal/5 w-10 h-10 md:w-16 md:h-16" />
              
              <div className="flex gap-1 mb-4 text-neon-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-deep-teal leading-relaxed mb-6 relative z-10 font-medium text-sm md:text-base line-clamp-4 md:line-clamp-none">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-neon-yellow" />
                <div>
                  <h4 className="font-bold text-deep-teal text-sm">{t.name}</h4>
                  <p className="text-xs text-neutral-grey uppercase tracking-wider">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};