"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Search, Filter, Calendar, MapPin, Building, Eye, ArrowLeft, Lock, TrendingUp, AlertTriangle, CheckCircle, DollarSign, Clock, FileText, ChevronDown, X } from 'lucide-react';

const ExplorePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  type Report = {
    id: string;
    title: string;
    sector: string;
    location: string;
    amount: number;
    currency: string;
    date: string;
    status: string;
    description: string;
    organization: string;
    severity: string;
    views: number;
  };

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sector: '',
    location: '',
    dateRange: '',
    amount: '',
    status: ''
  });

  const reportsPerPage = 8;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock data for demonstration
  const mockReports = [
    {
      id: '0x7f2a9b8c3d4e5f6a7b8c9d0e1f2a3b4c',
      title: 'Police Traffic Stop Bribery',
      sector: 'Law Enforcement',
      location: 'Dhaka, Bangladesh',
      amount: 5000,
      currency: 'BDT',
      date: '2024-08-10',
      status: 'Verified',
      description: 'Traffic police demanded bribe to avoid false charges for license violation. Officer badge number was noted.',
      organization: 'Dhaka Metropolitan Police',
      severity: 'Medium',
      views: 1247
    },
    {
      id: '0x8a3b9c4d5e6f7a8b9c0d1e2f3a4b5c6d',
      title: 'Government License Fee Extortion',
      sector: 'Government',
      location: 'Chittagong, Bangladesh',
      amount: 15000,
      currency: 'BDT',
      date: '2024-08-08',
      status: 'Under Investigation',
      description: 'Municipal office demanded additional unofficial fees for business license approval despite all legal requirements being met.',
      organization: 'Chittagong City Corporation',
      severity: 'High',
      views: 2156
    },
    {
      id: '0x9b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e',
      title: 'Healthcare Service Bribery',
      sector: 'Healthcare',
      location: 'Sylhet, Bangladesh',
      amount: 8000,
      currency: 'BDT',
      date: '2024-08-05',
      status: 'Resolved',
      description: 'Hospital staff demanded payment for priority treatment in emergency ward. Patient was in critical condition.',
      organization: 'Sylhet MAG Osmani Medical College',
      severity: 'Critical',
      views: 3421
    },
    {
      id: '0xa5c6d7e8f9a0b1c2d3e4f5a6b7c8d9ea',
      title: 'Education Admission Fraud',
      sector: 'Education',
      location: 'Rajshahi, Bangladesh',
      amount: 50000,
      currency: 'BDT',
      date: '2024-08-03',
      status: 'Verified',
      description: 'University officials demanded bribe for admission despite qualifying entrance exam scores.',
      organization: 'Rajshahi University',
      severity: 'High',
      views: 1876
    },
    {
      id: '0xb6d7e8f9a0b1c2d3e4f5a6b7c8d9eafb',
      title: 'Construction Permit Corruption',
      sector: 'Government',
      location: 'Khulna, Bangladesh',
      amount: 25000,
      currency: 'BDT',
      date: '2024-08-01',
      status: 'Under Investigation',
      description: 'Building permit office demanded unofficial fees for standard construction approval process.',
      organization: 'Khulna Development Authority',
      severity: 'Medium',
      views: 987
    },
    {
      id: '0xc7e8f9a0b1c2d3e4f5a6b7c8d9eafbc7',
      title: 'Tax Office Bribery',
      sector: 'Government',
      location: 'Barishal, Bangladesh',
      amount: 12000,
      currency: 'BDT',
      date: '2024-07-28',
      status: 'Verified',
      description: 'Tax officials demanded additional payment to process legitimate tax returns without delays.',
      organization: 'National Board of Revenue',
      severity: 'Medium',
      views: 1654
    },
    {
      id: '0xd8f9a0b1c2d3e4f5a6b7c8d9eafbc7d8',
      title: 'Court Case Manipulation',
      sector: 'Judicial',
      location: 'Rangpur, Bangladesh',
      amount: 75000,
      currency: 'BDT',
      date: '2024-07-25',
      status: 'Under Investigation',
      description: 'Court clerk suggested payment could expedite case proceedings and influence judgment.',
      organization: 'Rangpur District Court',
      severity: 'Critical',
      views: 2890
    },
    {
      id: '0xe9a0b1c2d3e4f5a6b7c8d9eafbc7d8e9',
      title: 'Utility Connection Bribery',
      sector: 'Government',
      location: 'Mymensingh, Bangladesh',
      amount: 6000,
      currency: 'BDT',
      date: '2024-07-22',
      status: 'Resolved',
      description: 'Electricity board officials demanded bribe for standard utility connection despite paying all official fees.',
      organization: 'Rural Electrification Board',
      severity: 'Low',
      views: 743
    }
  ];

  const sectors = ['Government', 'Law Enforcement', 'Healthcare', 'Education', 'Judicial', 'Private Sector'];
  const locations = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Rangpur', 'Mymensingh'];
  const dateRanges = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Last year'];
  const amountRanges = ['Under 5,000 BDT', '5,000-20,000 BDT', '20,000-50,000 BDT', 'Over 50,000 BDT'];
  const statuses = ['Verified', 'Under Investigation', 'Resolved'];

  // Filter and search logic
  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.organization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSector = !filters.sector || report.sector === filters.sector;
    const matchesLocation = !filters.location || report.location.includes(filters.location);
    const matchesStatus = !filters.status || report.status === filters.status;
    
    return matchesSearch && matchesSector && matchesLocation && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = filteredReports.slice(startIndex, startIndex + reportsPerPage);

interface SeverityColorMap {
    [key: string]: string;
}

type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | string;

const getSeverityColor = (severity: Severity): string => {
    const severityColors: SeverityColorMap = {
        Critical: 'text-red-400 bg-red-500/20 border-red-500/30',
        High: 'text-orange-400 bg-orange-500/20 border-orange-500/30',
        Medium: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
        Low: 'text-green-400 bg-green-500/20 border-green-500/30',
    };
    return severityColors[severity] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
};

interface StatusColorMap {
    [key: string]: string;
}

type ReportStatus = 'Verified' | 'Under Investigation' | 'Resolved' | string;

const getStatusColor = (status: ReportStatus): string => {
    const statusColors: StatusColorMap = {
        Verified: 'text-green-400 bg-green-500/20',
        'Under Investigation': 'text-yellow-400 bg-yellow-500/20',
        Resolved: 'text-blue-400 bg-blue-500/20',
    };
    return statusColors[status] || 'text-gray-400 bg-gray-500/20';
};

  const clearFilters = () => {
    setFilters({
      sector: '',
      location: '',
      dateRange: '',
      amount: '',
      status: ''
    });
    setSearchTerm('');
    setCurrentPage(1);
  };

  const stats = {
    totalReports: mockReports.length,
    verifiedReports: mockReports.filter(r => r.status === 'Verified').length,
    totalAmount: mockReports.reduce((sum, r) => sum + r.amount, 0),
    avgAmount: Math.round(mockReports.reduce((sum, r) => sum + r.amount, 0) / mockReports.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </button>
            </div>
            <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Shield className="h-8 w-8 text-cyan-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">BribeChain</span>
            </div>
            <div className={`flex items-center space-x-3 text-green-400 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <Lock className="h-5 w-5" />
              <span className="text-sm">Secure & Anonymous</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Corruption Report Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Browse verified corruption reports from across Bangladesh. All reports are anonymized 
            and stored securely on blockchain.
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center">
            <FileText className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.totalReports}</div>
            <div className="text-gray-300">Total Reports</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.verifiedReports}</div>
            <div className="text-gray-300">Verified Reports</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center">
            <DollarSign className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.totalAmount.toLocaleString()}</div>
            <div className="text-gray-300">Total BDT Involved</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center">
            <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.avgAmount.toLocaleString()}</div>
            <div className="text-gray-300">Average Amount</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className={`bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 p-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search reports by title, organization, or description..."
              className="w-full bg-black/30 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {(filters.sector || filters.location || filters.status || searchTerm) && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
              <div>
                <label className="block text-white font-semibold mb-3">Sector</label>
                <select
                  value={filters.sector}
                  onChange={(e) => setFilters({...filters, sector: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">All Sectors</option>
                  {sectors.map(sector => (
                    <option key={sector} value={sector} className="bg-gray-800">{sector}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location} className="bg-gray-800">{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Date Range</label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">All Time</option>
                  {dateRanges.map(range => (
                    <option key={range} value={range} className="bg-gray-800">{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                  className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status} className="bg-gray-800">{status}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-white">
            Showing {startIndex + 1}-{Math.min(startIndex + reportsPerPage, filteredReports.length)} of {filteredReports.length} reports
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentReports.map((report, index) => (
            <div
              key={report.id}
              className={`bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in-up`}
              style={{animationDelay: `${index * 100}ms`}}
              onClick={() => setSelectedReport(report)}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{report.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{report.sector}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{report.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getSeverityColor(report.severity)}`}>
                    {report.severity}
                  </div>
                </div>

                {/* Amount and Date */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {report.amount.toLocaleString()} {report.currency}
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {report.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusColor(report.status)}`}>
                    {report.status}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{report.views}</span>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Report Detail Modal */}
        {selectedReport && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-black/90 rounded-3xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedReport.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{selectedReport.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedReport.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(selectedReport.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{selectedReport.views} views</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Report Details</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedReport.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Report Information</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="text-gray-400 text-sm">Amount Involved</div>
                          <div className="text-2xl font-bold text-cyan-400">
                            {selectedReport.amount.toLocaleString()} {selectedReport.currency}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">Status</div>
                          <div className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block ${getStatusColor(selectedReport.status)}`}>
                            {selectedReport.status}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">Severity</div>
                          <div className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block border ${getSeverityColor(selectedReport.severity)}`}>
                            {selectedReport.severity}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">Blockchain Hash</div>
                          <code className="text-green-400 text-xs break-all bg-black/30 px-2 py-1 rounded block mt-1">
                            {selectedReport.id}
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                        <div>
                          <div className="text-yellow-400 font-semibold text-sm">Anonymous Report</div>
                          <div className="text-yellow-300 text-xs mt-1">
                            This report was submitted anonymously. Identity information is encrypted and cannot be traced back to the reporter.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ExplorePage;