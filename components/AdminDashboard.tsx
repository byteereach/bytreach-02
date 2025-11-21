import React, { useState } from 'react';
import { RefreshCw, Database, Lock, Search, ArrowLeft } from 'lucide-react';

interface Contact {
  id: number;
  created_at: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface AdminDashboardProps {
  onNavigateHome: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigateHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setError('Access Denied: Incorrect credentials.');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    setError('');

    // Simulate data fetch for demo purposes (No backend connection)
    setTimeout(() => {
        setLeads([
            { id: 1, created_at: new Date().toISOString(), name: 'John Doe', business: 'Demo Corp', email: 'john@demo.com', phone: '555-0123', service: 'Meta Ads', message: 'Interested in scaling our e-commerce store.' },
            { id: 2, created_at: new Date(Date.now() - 86400000).toISOString(), name: 'Sarah Smith', business: 'Design Studio', email: 'sarah@studio.com', phone: '555-0987', service: 'Web Development', message: 'Need a new portfolio website.' },
            { id: 3, created_at: new Date(Date.now() - 172800000).toISOString(), name: 'Mike Johnson', business: 'TechStart', email: 'mike@techstart.io', phone: '555-4567', service: 'SEO', message: 'Looking to improve organic traffic.' },
            { id: 4, created_at: new Date(Date.now() - 259200000).toISOString(), name: 'Emily Davis', business: 'Fashion Forward', email: 'emily@fashion.com', phone: '555-1111', service: 'Social Media', message: 'Need help with Instagram growth.' },
        ]);
        setLoading(false);
    }, 800);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-deep-teal flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-neon-yellow/20">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-deep-teal-dark rounded-full flex items-center justify-center mx-auto mb-4 border border-neon-yellow">
                 <Lock className="w-8 h-8 text-neon-yellow" />
             </div>
             <h2 className="text-2xl font-display font-bold text-deep-teal">Restricted Access</h2>
             <p className="text-neutral-grey text-sm mt-2">Authorized personnel only.</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-6">
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-soft-white border border-gray-200 rounded-xl focus:border-deep-teal focus:outline-none transition-colors"
                placeholder="Enter Password" 
                autoFocus
                />
                {error && <p className="text-red-500 mt-2 text-sm font-medium flex items-center gap-1"><span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span> {error}</p>}
            </div>
            
            <button type="submit" className="w-full bg-deep-teal text-white py-4 rounded-xl font-bold hover:bg-deep-teal-dark transition-colors shadow-lg">
              Authenticate
            </button>
            <button type="button" onClick={onNavigateHome} className="w-full mt-4 py-2 text-gray-500 hover:text-deep-teal text-sm font-medium transition-colors">
              Return to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-soft-white pt-24">
      {/* Toolbar */}
      <div className="bg-deep-teal text-white py-4 md:py-6 sticky top-[80px] z-30 shadow-lg border-b border-neon-yellow/20">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
                <button onClick={onNavigateHome} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Close Admin">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                    <h1 className="font-display font-bold text-xl md:text-2xl">Leads Database</h1>
                    <p className="text-xs text-neon-yellow tracking-widest uppercase">Demo Mode</p>
                </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button onClick={fetchLeads} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors" title="Refresh Data">
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <div className="bg-deep-teal-dark px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                    <Database className="w-4 h-4 text-neon-blue" />
                    <span className="font-bold">{leads.length}</span> <span className="text-sm text-gray-400 hidden sm:inline">Entries</span>
                </div>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        
        {/* Search Bar */}
        <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
                type="text" 
                placeholder="Search by name, email, or business..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:border-deep-teal focus:outline-none focus:ring-1 focus:ring-deep-teal"
            />
        </div>

        {loading && leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
                <RefreshCw className="w-10 h-10 text-deep-teal animate-spin mb-4" />
                <p className="text-neutral-grey">Loading records...</p>
            </div>
        ) : filteredLeads.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No records found matching your search.</p>
            </div>
        ) : (
            <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-deep-teal/5 border-b border-deep-teal/10">
                                <th className="p-4 text-sm font-bold text-deep-teal whitespace-nowrap">Date</th>
                                <th className="p-4 text-sm font-bold text-deep-teal whitespace-nowrap">Name / Business</th>
                                <th className="p-4 text-sm font-bold text-deep-teal whitespace-nowrap">Contact Info</th>
                                <th className="p-4 text-sm font-bold text-deep-teal whitespace-nowrap">Service</th>
                                <th className="p-4 text-sm font-bold text-deep-teal w-1/3 min-w-[250px]">Message</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 text-sm text-neutral-grey whitespace-nowrap">
                                        {new Date(lead.created_at).toLocaleDateString()} <br/>
                                        <span className="text-xs opacity-75">{new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap md:whitespace-normal">
                                        <div className="font-bold text-deep-teal">{lead.name}</div>
                                        <div className="text-sm text-neutral-grey">{lead.business}</div>
                                    </td>
                                    <td className="p-4 whitespace-nowrap md:whitespace-normal">
                                        <div className="text-sm text-deep-teal mb-1">{lead.email}</div>
                                        <div className="text-sm text-neutral-grey">{lead.phone}</div>
                                    </td>
                                    <td className="p-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-neon-yellow/20 text-deep-teal text-xs font-bold border border-neon-yellow/50 whitespace-nowrap">
                                            {lead.service}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-neutral-grey leading-relaxed">
                                        <div className="line-clamp-3 hover:line-clamp-none transition-all cursor-default">
                                            {lead.message}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};