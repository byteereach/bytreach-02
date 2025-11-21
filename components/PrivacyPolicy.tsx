import React from 'react';
import { Lock, Eye, Cookie, Database, HelpCircle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-soft-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-deep-teal/5 rounded-full mb-4">
              <Lock className="w-6 h-6 text-deep-teal" />
           </div>
           <h1 className="text-4xl md:text-5xl font-display font-bold text-deep-teal mb-4">Privacy Policy</h1>
           <p className="text-neutral-grey">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8 text-deep-teal/80 leading-relaxed">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-neon-yellow/20 rounded-lg">
                        <Database className="w-5 h-5 text-deep-teal-dark" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-teal">1. Information We Collect</h2>
                </div>
                <p className="text-neutral-grey mb-4">
                    We collect information that you provide directly to us when you fill out contact forms, subscribe to newsletters, or communicate with us. 
                    This may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-deep-teal mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-grey mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-grey">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Communicate with you about products, services, offers, and events.</li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Cookie className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-teal">3. Cookies & Tracking</h2>
                 </div>
                 <p className="text-neutral-grey mb-2">
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                 </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <Eye className="w-5 h-5 text-purple-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-teal">4. Third-Party Services</h2>
                </div>
                <p className="text-neutral-grey mb-4">
                    We may employ third-party companies and individuals due to the following reasons: to facilitate our Service, to provide the Service on our behalf, 
                    or to assist us in analyzing how our Service is used. We want to inform users that these third parties may have access to your Personal Information 
                    to perform the tasks assigned to them on our behalf.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-bold text-deep-teal mb-4">5. Data Security</h2>
                <p className="text-neutral-grey mb-4">
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
            </div>
            
            <div className="text-center pt-8">
                <p className="text-neutral-grey flex items-center justify-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Concerns about your data? <a href="mailto:bytereach@gmail.com" className="text-deep-teal font-bold hover:text-neon-blue transition-colors">Contact Privacy Officer</a>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};