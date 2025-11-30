import React from 'react';
import { Clock, Users, MessageSquare, ShieldCheck } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-deep-teal border-t border-white/5 relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Why Choose Our Agency Card */}
          <div className="bg-deep-teal-dark p-8 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-neon-yellow/30 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-neon-yellow/10"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-deep-teal rounded-lg border border-white/10">
                <ShieldCheck className="w-6 h-6 text-neon-yellow" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Why Choose Our Agency?
              </h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group/item">
                <div className="mt-1 bg-deep-teal p-2 rounded-xl text-neon-yellow border border-white/5 group-hover/item:border-neon-yellow/50 transition-colors shadow-[0_0_10px_rgba(230,255,43,0.1)]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-neon-yellow transition-colors">Fast Response</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">We respond to all inquiries within 1 hour. Your time is our priority.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="mt-1 bg-deep-teal p-2 rounded-xl text-neon-yellow border border-white/5 group-hover/item:border-neon-yellow/50 transition-colors shadow-[0_0_10px_rgba(230,255,43,0.1)]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-neon-yellow transition-colors">Expert Team</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">2+ years of combined experience delivering measurable digital growth.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="mt-1 bg-deep-teal p-2 rounded-xl text-neon-yellow border border-white/5 group-hover/item:border-neon-yellow/50 transition-colors shadow-[0_0_10px_rgba(230,255,43,0.1)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover/item:text-neon-yellow transition-colors">Clear Communication</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Regular updates throughout your project. No jargon, just clarity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-deep-teal-dark p-8 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col group hover:border-neon-purple/30 transition-colors duration-300">
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-neon-purple/5 rounded-tr-full -ml-8 -mb-8 transition-all group-hover:bg-neon-purple/10"></div>

            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 bg-deep-teal rounded-lg border border-white/10">
                <Clock className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Business Hours
              </h3>
            </div>

            <div className="space-y-0 relative z-10 flex-grow flex flex-col justify-center">
              <div className="flex justify-between items-center border-b border-white/5 py-4 hover:bg-white/5 px-4 rounded-lg transition-colors">
                <span className="text-gray-300 font-medium">Monday - Friday</span>
                <span className="text-neon-blue font-bold tracking-wide text-shadow-sm">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 py-4 hover:bg-white/5 px-4 rounded-lg transition-colors">
                <span className="text-gray-300 font-medium">Saturday</span>
                <span className="text-white font-bold tracking-wide">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-4 hover:bg-white/5 px-4 rounded-lg transition-colors">
                <span className="text-gray-300 font-medium">Sunday</span>
                <span className="text-red-400 font-bold tracking-wide uppercase text-xs border border-red-400/30 bg-red-500/10 px-3 py-1 rounded-full">Closed</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-500">
                    Need support outside these hours? <br/>
                    <a href="mailto:byteereach@gmail.com" className="text-neon-purple hover:text-white transition-colors font-medium">Email our 24/7 Support Team</a>
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};