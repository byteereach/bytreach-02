import React from 'react';
import { CaseStudyItem } from '../types';
import { TrendingUp, Users, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

const caseStudies: CaseStudyItem[] = [
  {
    id: '1',
    title: 'TechStartup Scaling',
    metric: '+350%',
    description: 'Increase in qualified leads within 3 months via Meta Ads.',
    before: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
    after: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    title: 'Local Business SEO',
    metric: '10x',
    description: 'Traffic growth and #1 ranking for key competitive keywords.',
    before: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
    after: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '3',
    title: 'E-com ROAS Boost',
    metric: '4.5 ROAS',
    description: 'Optimized Google Shopping campaign for a fashion retailer.',
    before: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
    after: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80',
  }
];

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-deep-teal mb-4">Proven Results</h2>
          <p className="text-neutral-grey text-lg">Numbers speak louder than words. Here is what we have achieved.</p>
        </motion.div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: TrendingUp, title: "400+", desc: "Projects" },
            { icon: Users, title: "25+", desc: "Happy Clients" },
            { icon: MousePointerClick, title: "1+", desc: "Year" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-card transition-shadow"
            >
              <stat.icon className="w-10 h-10 text-neon-yellow bg-deep-teal p-2 rounded-lg mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-deep-teal mb-1">{stat.title}</h3>
              <p className="text-neutral-grey">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="p-8">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-bold text-xl text-deep-teal">{study.title}</h3>
                   <span className="bg-neon-yellow/20 text-deep-teal-dark px-2 py-1 rounded text-xs font-bold uppercase">Success</span>
                 </div>
                 <div className="text-5xl font-bold text-deep-teal mb-4">{study.metric}</div>
                 <p className="text-neutral-grey mb-6">{study.description}</p>

                 <div className="grid grid-cols-2 gap-2">
                    <div className="relative group">
                        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded z-10">Before</div>
                        <img src={study.before} alt="Analytics Before" className="rounded-lg w-full h-24 object-cover opacity-80 grayscale transition-all group-hover:grayscale-0" />
                    </div>
                    <div className="relative group">
                        <div className="absolute top-2 left-2 bg-neon-yellow text-deep-teal text-xs px-2 py-0.5 rounded font-bold z-10">After</div>
                        <img src={study.after} alt="Analytics After" className="rounded-lg w-full h-24 object-cover border-2 border-neon-yellow" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};