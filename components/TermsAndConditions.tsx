import React from 'react';
import { Shield, FileText, AlertCircle, HelpCircle } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-soft-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-deep-teal/5 rounded-full mb-4">
              <FileText className="w-6 h-6 text-deep-teal" />
           </div>
           <h1 className="text-4xl md:text-5xl font-display font-bold text-deep-teal mb-4">Terms & Conditions</h1>
           <p className="text-neutral-grey">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-deep-teal/80 leading-relaxed">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-neon-yellow/20 rounded-lg">
                        <Shield className="w-5 h-5 text-deep-teal-dark" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-teal">1. Introduction</h2>
                </div>
                <p className="text-neutral-grey mb-4">
                    Welcome to Bytereach Marketing Media. These Terms and Conditions govern your use of our website and services. 
                    By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, 
                    you may not access the service.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-deep-teal mb-4">2. Intellectual Property</h2>
                <p className="text-neutral-grey mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of Bytereach Marketing Media and its licensors. 
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Bytereach Marketing Media.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                 <h2 className="text-xl font-bold text-deep-teal mb-4">3. Services & Payments</h2>
                 <ul className="list-disc pl-5 space-y-2 text-neutral-grey">
                    <li>All services provided are subject to a separate service agreement signed by both parties.</li>
                    <li>Payments must be made according to the agreed schedule. Late payments may incur additional fees.</li>
                    <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                 </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-50 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-teal">4. Limitation of Liability</h2>
                </div>
                <p className="text-neutral-grey mb-4">
                    In no event shall Bytereach Marketing Media, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                    be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                    loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability 
                    to use the service.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-deep-teal mb-4">5. Changes to Terms</h2>
                <p className="text-neutral-grey mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
            </div>
            
            <div className="text-center pt-8">
                <p className="text-neutral-grey flex items-center justify-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Have questions? <a href="mailto:bytereach@gmail.com" className="text-deep-teal font-bold hover:text-neon-blue transition-colors">Contact Support</a>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};