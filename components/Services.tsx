import React from 'react';
import { Code, Megaphone, Search, Video, Palette, Share2, LayoutGrid, LineChart } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  { id: '1', title: 'Web Development', description: 'High-performance, responsive websites that convert visitors into customers.', icon: <Code className="w-8 h-8" /> },
  { id: '2', title: 'Meta Ads', description: 'Targeted Facebook & Instagram campaigns designed for maximum ROI.', icon: <Share2 className="w-8 h-8" /> },
  { id: '3', title: 'Google Ads', description: 'Search, Display, and Shopping campaigns to capture high-intent traffic.', icon: <Megaphone className="w-8 h-8" /> },
  { id: '4', title: 'SEO', description: 'Organic growth strategies to rank higher and drive long-term traffic.', icon: <Search className="w-8 h-8" /> },
  { id: '5', title: 'Video Editing', description: 'Engaging short-form and long-form content for Reels, YouTube, and Ads.', icon: <Video className="w-8 h-8" /> },
  { id: '6', title: 'Graphic Design', description: 'Visual identity, social posts, and ad creatives that stand out.', icon: <Palette className="w-8 h-8" /> },
  { id: '7', title: 'SMO', description: 'Social Media Optimization to build community and brand loyalty.', icon: <LayoutGrid className="w-8 h-8" /> },
  { id: '8', title: 'Full-Stack Marketing', description: 'Holistic digital strategy integrating all channels for growth.', icon: <LineChart className="w-8 h-8" /> },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-neon-yellow mx-auto mb-6 rounded-full"></div>
          <p className="text-neutral-grey max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive digital solutions tailored to elevate your brand and drive revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group bg-soft-white p-6 md:p-8 rounded-2xl border border-transparent hover:border-neon-yellow hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <div className="bg-deep-teal text-neon-yellow w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-deep-teal transition-colors group-hover:rotate-3 duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-deep-teal mb-3">{service.title}</h3>
              <p className="text-neutral-grey leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};