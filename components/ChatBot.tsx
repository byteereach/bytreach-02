
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Bytereach AI Assistant. Ask me about our services, pricing, or how we can help you scale!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Greetings
    if (lowerInput.match(/^(hi|hello|hey|greetings)/)) 
      return "Hi there! Ready to transform your digital presence?";
      
    // Services
    if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('do')) 
      return "We offer a full suite of digital services including Web Development, Meta/Google Ads, SEO, Graphic Design, and Video Editing. Which one are you interested in?";
      
    if (lowerInput.includes('web') || lowerInput.includes('site'))
      return "Our Web Development team builds high-performance, responsive websites designed to convert. We use modern tech like React and Tailwind.";

    if (lowerInput.includes('seo') || lowerInput.includes('rank'))
      return "Our SEO strategy focuses on sustainable, long-term growth. We help you rank for high-intent keywords to drive organic traffic.";

    if (lowerInput.includes('ads') || lowerInput.includes('meta') || lowerInput.includes('google') || lowerInput.includes('facebook'))
      return "We specialize in high-ROI paid advertising. Whether it's Meta (Facebook/Instagram) or Google Ads, we focus on lowering your CPA and increasing conversions.";

    // Pricing
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('much') || lowerInput.includes('rate')) 
      return "Our pricing is customized based on your specific goals and project scope. We typically start with a strategy call to understand your needs. Would you like to book one?";

    // Contact
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('call')) 
      return "You can reach us directly at bytereach@gmail.com or +91 8320086937. You can also use the 'Book a Call' button in the menu!";

    // Default
    return "That's an interesting question! While I'm an AI, our human experts can provide a more detailed answer. Please book a strategy call or contact us directly.";
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[90vw] md:w-[380px] bg-deep-teal-dark border border-neon-yellow/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
          >
            {/* Header */}
            <div className="bg-deep-teal p-4 border-b border-white/10 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-yellow/10"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-neon-yellow/20 rounded-full border border-neon-yellow/50">
                  <Bot className="w-5 h-5 text-neon-yellow" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Bytereach AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-300">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto h-[350px] space-y-4 bg-deep-teal/50 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-neon-blue/20 text-white border border-neon-blue/30 rounded-br-none'
                        : 'bg-white/10 text-gray-200 border border-white/5 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    <div className={`text-[10px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-deep-teal border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-grow bg-deep-teal-dark border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-yellow/50 focus:ring-1 focus:ring-neon-yellow/50 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-neon-yellow text-deep-teal p-2.5 rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-deep-teal border border-neon-yellow text-neon-yellow p-4 rounded-full shadow-[0_0_20px_rgba(6,75,89,0.3)] hover:shadow-[0_0_30px_rgba(230,255,43,0.4)] transition-all relative group"
      >
        <div className="absolute inset-0 bg-neon-yellow opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
        
        {!isOpen && (
          <span className="absolute right-0 top-0 -mr-1 -mt-1 w-3 h-3 bg-red-500 rounded-full border-2 border-deep-teal"></span>
        )}
      </motion.button>
    </div>
  );
};
    