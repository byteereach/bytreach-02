import React, { useState } from 'react';
import { Mail, Phone, Loader2, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      // DEMO MODE: Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success
      setStatus('success');
      setFormData({ name: '', business: '', email: '', phone: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-deep-teal relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-20 left-[-10%] w-96 h-96 bg-neon-yellow opacity-5 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-blue-500 opacity-5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 text-white lg:sticky lg:top-32">
            <div className="inline-block bg-white/10 text-neon-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
                Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's Grow Your Business</h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Ready to take your brand to the next level? Fill out the form to book your free strategy call.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-neon-yellow group-hover:text-deep-teal transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:bytereach@gmail.com" className="text-lg font-semibold hover:text-neon-yellow transition-colors">bytereach@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-neon-yellow group-hover:text-deep-teal transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call / WhatsApp</p>
                  <a href="tel:+918320086937" className="text-lg font-semibold hover:text-neon-yellow transition-colors">+91 8320086937</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10">
              
              {status === 'success' ? (
                 <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-deep-teal mb-2">Request Received!</h3>
                    <p className="text-neutral-grey text-lg mb-8 max-w-md">
                      Thank you, {formData.name}. We have received your request. Our team will contact you shortly to schedule your strategy call.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-deep-teal text-white px-8 py-3 rounded-full font-bold hover:bg-deep-teal-dark transition-colors"
                    >
                      Book Another Call
                    </button>
                 </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-deep-teal mb-8">Book Your Free Strategy Call</h3>
                  
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Submission Failed</p>
                        <p className="text-sm">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-grey mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-grey mb-2">Business Name</label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors disabled:opacity-50"
                        placeholder="Your Company Ltd."
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-grey mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors disabled:opacity-50"
                        placeholder="john@example.com"
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-grey mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors disabled:opacity-50"
                        placeholder="+91 00000 00000"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-grey mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors disabled:opacity-50"
                      disabled={status === 'submitting'}
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Meta Ads">Meta Ads</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="SEO">SEO</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Full Stack">Full Stack Marketing</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-neutral-grey mb-2">Message / Project Goals</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-soft-white border border-gray-200 focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your project goals or what you'd like to discuss..."
                      required
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-deep-teal text-white font-bold py-4 rounded-lg hover:bg-deep-teal-dark transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Strategy Call
                        <Calendar className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}