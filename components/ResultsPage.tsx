import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Eye, Target, Calendar } from 'lucide-react';

interface ResultsPageProps {
  onBookCall: () => void;
}

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const ResultsPage: React.FC<ResultsPageProps> = ({ onBookCall }) => {
  return (
    <div className="min-h-screen bg-deep-teal-dark text-white font-sans overflow-x-hidden">
      
      {/* Main Content - Added padding top to account for fixed global header */}
      <main className="pt-32 pb-20 container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-neon-yellow/10 text-neon-yellow px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-neon-yellow/20">
            <span className="w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></span>
            Live Data Simulation
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            We Don't Just Guess.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple">
              We Dominate.
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore the metrics behind our "Clone" strategies. These are the aggregate results of our top-performing campaigns across the digital landscape.
          </p>
        </motion.div>

        {/* Aggregate Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: DollarSign, label: "Ad Spend Managed", value: 2500000, suffix: "+", color: "text-neon-blue" },
            { icon: TrendingUp, label: "Revenue Generated", value: 12000000, suffix: "+", color: "text-neon-yellow" },
            { icon: Users, label: "Leads Captured", value: 85000, suffix: "", color: "text-neon-purple" },
            { icon: Eye, label: "Total Impressions", value: 45000000, suffix: "+", color: "text-white" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-deep-teal/30 border border-white/5 p-8 rounded-2xl hover:border-neon-blue/30 transition-colors group"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-4xl font-bold font-display mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Files */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-3">
            <Target className="text-neon-yellow" />
            Client Success Prototypes
          </h2>
          
          <div className="space-y-8">
            {/* Case Study 1 */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-deep-teal to-deep-teal/50 border border-neon-blue/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block bg-neon-blue text-deep-teal-dark font-bold px-3 py-1 rounded text-xs uppercase">E-Commerce Scaling</div>
                <h3 className="text-3xl font-bold">Project: "Neon Kicks"</h3>
                <p className="text-gray-300 leading-relaxed">
                  We utilized a multi-channel "Clone" strategy, replicating high-performing ad sets across Meta and TikTok while simultaneously optimizing Google Shopping feeds.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-neon-blue">4.8x</div>
                    <div className="text-xs text-gray-400">ROAS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-blue">-40%</div>
                    <div className="text-xs text-gray-400">CPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-blue">3Mo</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-neon-blue blur-[60px] opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Scaling Campaign" className="relative z-10 rounded-xl border border-white/10 shadow-2xl" />
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-l from-deep-teal to-deep-teal/50 border border-neon-purple/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-12"
            >
               <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block bg-neon-purple text-white font-bold px-3 py-1 rounded text-xs uppercase">SaaS Lead Gen</div>
                <h3 className="text-3xl font-bold">Project: "Alpha CRM"</h3>
                <p className="text-gray-300 leading-relaxed">
                  The goal was aggressive user acquisition. We deployed an SEO-first content strategy combined with retargeting loops on LinkedIn.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold text-neon-purple">+210%</div>
                    <div className="text-xs text-gray-400">Signups</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-purple">Top 3</div>
                    <div className="text-xs text-gray-400">Keyword Rank</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-purple">6Mo</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-neon-purple blur-[60px] opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Analytics Dashboard" className="relative z-10 rounded-xl border border-white/10 shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-deep-teal rounded-3xl border border-neon-yellow/20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-neon-yellow opacity-10 rounded-full blur-3xl pointer-events-none"></div>
           <div className="relative z-10">
             <h2 className="text-4xl font-bold mb-6 text-white">Ready to replicate these results?</h2>
             <p className="text-xl text-gray-300 mb-8">Your business is next in line for exponential growth.</p>
             <button 
                onClick={onBookCall}
                className="bg-neon-yellow text-deep-teal px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,255,43,0.4)] flex items-center gap-2 mx-auto"
             >
                <Calendar className="w-5 h-5" />
                Book Strategy Call
             </button>
           </div>
        </div>

      </main>
    </div>
  );
};