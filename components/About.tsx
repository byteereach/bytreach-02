import React from 'react';
import { Target, Eye, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-yellow rounded-tl-3xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team working on strategy"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px] hover:scale-[1.02] transition-transform duration-500"
              />
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-deep-teal p-8 rounded-br-3xl shadow-xl z-20 max-w-xs hidden md:block border-t-4 border-neon-yellow"
              >
                <p className="text-neon-yellow font-bold text-4xl mb-2">100%</p>
                <p className="text-white font-medium">Commitment to ROI and transparent reporting.</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-neon-yellow bg-deep-teal px-4 py-1 rounded-full inline-block text-sm font-bold uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-4xl font-display font-bold text-deep-teal mb-6">
                Data-Driven. <br />
                ROI-Focused. <br />
                <span className="text-neutral-grey">Transparent.</span>
              </h3>
              <p className="text-neutral-grey text-lg leading-relaxed">
                Bytereach Marketing Media isn't just another agency. We are your growth engine.
                We believe that marketing should be an investment, not an expense. Our team blends creative storytelling
                with rigorous data analysis to ensure every campaign delivers measurable impact.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: <Target className="w-6 h-6 text-deep-teal" />, title: "Strategic Precision", desc: "We don't guess. We analyze, plan, and execute with pinpoint accuracy." },
                { icon: <Eye className="w-6 h-6 text-deep-teal" />, title: "Complete Transparency", desc: "No hidden fees or confusing metrics. Just clear, honest results." },
                { icon: <BarChart3 className="w-6 h-6 text-deep-teal" />, title: "Long-Term Growth", desc: "We build sustainable systems that scale with your business." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-neon-yellow p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-teal text-lg group-hover:text-deep-teal-dark transition-colors">{item.title}</h4>
                    <p className="text-neutral-grey">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};