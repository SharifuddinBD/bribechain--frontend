"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Upload, Calendar, MapPin, ChevronDown, Building, User, FileText, Camera, Mic, AlertTriangle, CheckCircle, Eye, EyeOff, ArrowLeft, Lock } from 'lucide-react';

const ReportPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    incidentType: '',
    amount: '',
    currency: 'BDT',
    date: '',
    location: {
      country: '',
      city: '',
      address: ''
    },
    organization: {
      name: '',
      type: '',
      department: ''
    },
    description: '',
    evidence: [],
    additionalInfo: '',
    anonymousLevel: 'full'
  });
  const [files, setFiles] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedHash, setGeneratedHash] = useState('');
  
  // City dropdown state
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState<BangladeshCity[]>([]);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityDropdownRef.current &&
        event.target instanceof Node &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setShowCityDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const bangladeshCities = [
    // Dhaka Division
    { name: 'Dhaka', division: 'Dhaka Division' },
    { name: 'Gazipur', division: 'Dhaka Division' },
    { name: 'Kishoreganj', division: 'Dhaka Division' },
    { name: 'Manikganj', division: 'Dhaka Division' },
    { name: 'Munshiganj', division: 'Dhaka Division' },
    { name: 'Narayanganj', division: 'Dhaka Division' },
    { name: 'Narsingdi', division: 'Dhaka Division' },
    { name: 'Faridpur', division: 'Dhaka Division' },
    { name: 'Gopalganj', division: 'Dhaka Division' },
    { name: 'Madaripur', division: 'Dhaka Division' },
    { name: 'Rajbari', division: 'Dhaka Division' },
    { name: 'Shariatpur', division: 'Dhaka Division' },
    { name: 'Tangail', division: 'Dhaka Division' },
    
    // Chattogram Division
    { name: 'Chattogram', division: 'Chattogram Division' },
    { name: "Cox's Bazar", division: 'Chattogram Division' },
    { name: 'Bandarban', division: 'Chattogram Division' },
    { name: 'Khagrachhari', division: 'Chattogram Division' },
    { name: 'Rangamati', division: 'Chattogram Division' },
    { name: 'Feni', division: 'Chattogram Division' },
    { name: 'Noakhali', division: 'Chattogram Division' },
    { name: 'Lakshmipur', division: 'Chattogram Division' },
    { name: 'Chandpur', division: 'Chattogram Division' },
    { name: 'Cumilla', division: 'Chattogram Division' },
    { name: 'Brahmanbaria', division: 'Chattogram Division' },
    
    // Sylhet Division
    { name: 'Sylhet', division: 'Sylhet Division' },
    { name: 'Moulvibazar', division: 'Sylhet Division' },
    { name: 'Habiganj', division: 'Sylhet Division' },
    { name: 'Sunamganj', division: 'Sylhet Division' },
    
    // Barishal Division
    { name: 'Barishal', division: 'Barishal Division' },
    { name: 'Jhalokati', division: 'Barishal Division' },
    { name: 'Patuakhali', division: 'Barishal Division' },
    { name: 'Pirojpur', division: 'Barishal Division' },
    { name: 'Bhola', division: 'Barishal Division' },
    { name: 'Barguna', division: 'Barishal Division' },
    
    // Khulna Division
    { name: 'Khulna', division: 'Khulna Division' },
    { name: 'Bagerhat', division: 'Khulna Division' },
    { name: 'Satkhira', division: 'Khulna Division' },
    { name: 'Jashore', division: 'Khulna Division' },
    { name: 'Magura', division: 'Khulna Division' },
    { name: 'Narail', division: 'Khulna Division' },
    { name: 'Kushtia', division: 'Khulna Division' },
    { name: 'Meherpur', division: 'Khulna Division' },
    { name: 'Chuadanga', division: 'Khulna Division' },
    { name: 'Jhenaidah', division: 'Khulna Division' },
    
    // Rajshahi Division
    { name: 'Rajshahi', division: 'Rajshahi Division' },
    { name: 'Natore', division: 'Rajshahi Division' },
    { name: 'Naogaon', division: 'Rajshahi Division' },
    { name: 'Chapai Nawabganj', division: 'Rajshahi Division' },
    { name: 'Pabna', division: 'Rajshahi Division' },
    { name: 'Sirajganj', division: 'Rajshahi Division' },
    { name: 'Bogura', division: 'Rajshahi Division' },
    { name: 'Joypurhat', division: 'Rajshahi Division' },
    
    // Rangpur Division
    { name: 'Rangpur', division: 'Rangpur Division' },
    { name: 'Dinajpur', division: 'Rangpur Division' },
    { name: 'Lalmonirhat', division: 'Rangpur Division' },
    { name: 'Kurigram', division: 'Rangpur Division' },
    { name: 'Gaibandha', division: 'Rangpur Division' },
    { name: 'Thakurgaon', division: 'Rangpur Division' },
    { name: 'Panchagarh', division: 'Rangpur Division' },
    { name: 'Nilphamari', division: 'Rangpur Division' },
    
    // Mymensingh Division
    { name: 'Mymensingh', division: 'Mymensingh Division' },
    { name: 'Jamalpur', division: 'Mymensingh Division' },
    { name: 'Sherpur', division: 'Mymensingh Division' },
    { name: 'Netrokona', division: 'Mymensingh Division' }
  ];

interface Location {
    country: string;
    city: string;
    address: string;
}

interface Organization {
    name: string;
    type: string;
    department: string;
}

interface FormData {
    incidentType: string;
    amount: string;
    currency: string;
    date: string;
    location: Location;
    organization: Organization;
    description: string;
    evidence: any[];
    additionalInfo: string;
    anonymousLevel: string;
}

type NestedField = keyof Pick<FormData, 'location' | 'organization'>;

const handleInputChange = (
    field: string,
    value: string,
    nested: NestedField | null = null
) => {
    if (nested) {
        setFormData(prev => ({
            ...prev,
            [nested]: {
                ...prev[nested],
                [field]: value
            }
        }));
    } else {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }
};

interface HandleCityInputChangeProps {
    value: string;
}

interface BangladeshCity {
    name: string;
    division: string;
}

const handleCityInputChange = (value: string) => {
    handleInputChange('city', value, 'location');

    if (value.trim()) {
        const filtered: BangladeshCity[] = bangladeshCities.filter((city: BangladeshCity) =>
            city.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
        setShowCityDropdown(true);
    } else {
        setFilteredCities([]);
        setShowCityDropdown(false);
    }
};

interface SelectCityProps {
    cityName: string;
}

const selectCity = (cityName: string): void => {
    handleInputChange('city', cityName, 'location');
    setShowCityDropdown(false);
    setFilteredCities([]);
};

  const handleCityFocus = () => {
    if (formData.location.city.trim()) {
      const filtered = bangladeshCities.filter(city =>
        city.name.toLowerCase().includes(formData.location.city.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities(bangladeshCities);
    }
    setShowCityDropdown(true);
  };

  // Group cities by division
  type City = { name: string; division: string };
  type GroupedCities = { [division: string]: City[] };

  const groupedCities: GroupedCities = filteredCities.reduce((acc: GroupedCities, city: City) => {
    if (!acc[city.division]) {
      acc[city.division] = [];
    }
    acc[city.division].push(city);
    return acc;
  }, {});

interface HandleFileUploadEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleFileUpload = (event: HandleFileUploadEvent): void => {
    const newFiles: File[] = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...newFiles]);
};

interface RemoveFileProps {
    index: number;
}

const removeFile = (index: RemoveFileProps['index']): void => {
    setFiles(prev => prev.filter((_, i) => i !== index));
};

  const generateHash = () => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    return `0x${timestamp.toString(16)}${randomString}`;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate blockchain submission delay
    setTimeout(() => {
      const hash = generateHash();
      setGeneratedHash(hash);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 3000);
  };

  const incidentTypes = [
    'Government Official Bribery',
    'Police Corruption',
    'Judicial Corruption',
    'Healthcare Bribery',
    'Education Sector Corruption',
    'Business License Bribery',
    'Construction/Permit Corruption',
    'Tax Evasion Facilitation',
    'Customs/Border Corruption',
    'Other'
  ];

  const currencies = ['BDT', 'EUR', 'GBP', 'BTC', 'ETH', 'USD', 'Local Currency'];
  const organizationTypes = ['Government', 'Private Company', 'NGO', 'Educational Institution', 'Healthcare', 'Law Enforcement', 'Judicial', 'Other'];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-8 animate-bounce" />
            <h1 className="text-4xl font-bold text-white mb-6">Report Successfully Submitted</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your report has been encrypted and permanently stored on the blockchain. 
              Your identity remains completely anonymous.
            </p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Blockchain Hash</h3>
              <code className="text-green-300 text-sm break-all bg-black/30 px-4 py-2 rounded-lg block">
                {generatedHash}
              </code>
              <p className="text-sm text-gray-400 mt-2">
                Save this hash to verify your report's authenticity later
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    incidentType: '',
                    amount: '',
                    currency: 'USD',
                    date: '',
                    location: { country: '', city: '', address: '' },
                    organization: { name: '', type: '', department: '' },
                    description: '',
                    evidence: [],
                    additionalInfo: '',
                    anonymousLevel: 'full'
                  });
                  setFiles([]);
                  setCurrentStep(1);
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Submit Another Report
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Browse Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Submit Anonymous Report
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your identity is completely protected. Help fight corruption by reporting incidents anonymously 
            through our secure blockchain platform.
          </p>
          
          {/* Security Notice */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-green-400 font-semibold">100% Anonymous & Encrypted</span>
            </div>
            <p className="text-green-300 text-sm">
              No personal information is collected. Your report is encrypted and stored on blockchain.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 rounded transition-all duration-300 ${
                    currentStep > step ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-white/10'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className={`bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="p-8 md:p-12">
            {/* Step 1: Incident Details */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-8">Incident Details</h2>
                
                {/* Incident Type */}
                <div>
                  <label className="block text-white font-semibold mb-3">Type of Incident *</label>
                  <select
                    value={formData.incidentType}
                    onChange={(e) => handleInputChange('incidentType', e.target.value)}
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select incident type</option>
                    {incidentTypes.map(type => (
                      <option key={type} value={type} className="bg-gray-800">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Amount and Currency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">Amount Involved</label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder="Enter amount"
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Currency</label>
                    <select
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency} className="bg-gray-800">{currency}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-white font-semibold mb-3">Date of Incident *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white font-semibold mb-3">Detailed Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the incident in detail. Include who was involved, what happened, when it occurred, and any other relevant information."
                    rows={6}
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Location & Organization */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-8">Location & Organization</h2>
                
                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Location Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Country *</label>
                      <input
                        type="text"
                        value={formData.location.country}
                        onChange={(e) => handleInputChange('country', e.target.value, 'location')}
                        placeholder="Enter country"
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="relative" ref={cityDropdownRef}>
                      <label className="block text-white font-semibold mb-3">City</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.location.city}
                          onChange={(e) => handleCityInputChange(e.target.value)}
                          onFocus={handleCityFocus}
                          placeholder="Enter or select city"
                          className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                      
                      {showCityDropdown && (
                        <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-80 overflow-y-auto bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl">
                          {Object.keys(groupedCities).length > 0 ? (
                            Object.keys(groupedCities).map(division => (
                              <div key={division}>
                                <div className="px-4 py-2 text-sm font-semibold text-cyan-400 bg-black/50 sticky top-0">
                                  {division}
                                </div>
                                {groupedCities[division].map((city, index) => (
                                  <button
                                    key={`${division}-${index}`}
                                    onClick={() => selectCity(city.name)}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                                  >
                                    {city.name}
                                  </button>
                                ))}
                              </div>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-400 text-center">
                              No cities found
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">Specific Address/Location (Optional)</label>
                    <input
                      type="text"
                      value={formData.location.address}
                      onChange={(e) => handleInputChange('address', e.target.value, 'location')}
                      placeholder="Enter specific location (will be anonymized)"
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Organization/Institution Involved</h3>
                  <div>
                    <label className="block text-white font-semibold mb-3">Organization Name</label>
                    <input
                      type="text"
                      value={formData.organization.name}
                      onChange={(e) => handleInputChange('name', e.target.value, 'organization')}
                      placeholder="Name of organization/company (optional)"
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Organization Type</label>
                      <select
                        value={formData.organization.type}
                        onChange={(e) => handleInputChange('type', e.target.value, 'organization')}
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select type</option>
                        {organizationTypes.map(type => (
                          <option key={type} value={type} className="bg-gray-800">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-3">Department/Division</label>
                      <input
                        type="text"
                        value={formData.organization.department}
                        onChange={(e) => handleInputChange('department', e.target.value, 'organization')}
                        placeholder="Specific department"
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Evidence & Final Details */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-white mb-8">Evidence & Additional Information</h2>
                
                {/* File Upload */}
                <div>
                  <label className="block text-white font-semibold mb-3">Upload Evidence (Optional)</label>
                  <div className="border-2 border-dashed border-white/20 hover:border-cyan-400/50 rounded-xl p-8 text-center transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-4">Drop files here or click to upload</p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept="image/*,audio/*,video/*,.pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer inline-block"
                    >
                      Choose Files
                    </label>
                    <p className="text-sm text-gray-400 mt-2">
                      Supports images, audio, video, PDF, and documents
                    </p>
                  </div>
                  
                  {/* Uploaded Files */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-black/30 rounded-lg px-4 py-2">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-cyan-400" />
                            <span className="text-white text-sm">{file.name}</span>
                            <span className="text-gray-400 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-white font-semibold mb-3">Additional Information</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any additional context, witness information, or related incidents..."
                    rows={4}
                    className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Privacy Level */}
                <div>
                  <label className="block text-white font-semibold mb-3">Anonymity Level</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="anonymousLevel"
                        value="full"
                        checked={formData.anonymousLevel === 'full'}
                        onChange={(e) => handleInputChange('anonymousLevel', e.target.value)}
                        className="text-cyan-400"
                      />
                      <span className="text-white">Full Anonymity (Recommended)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="anonymousLevel"
                        value="partial"
                        checked={formData.anonymousLevel === 'partial'}
                        onChange={(e) => handleInputChange('anonymousLevel', e.target.value)}
                        className="text-cyan-400"
                      />
                      <span className="text-white">Allow Contact for Follow-up</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentStep === 1 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-4">
                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!formData.incidentType || !formData.date || !formData.description}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Continue
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
                    >
                      {showPreview ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      <span>{showPreview ? 'Hide' : 'Preview'}</span>
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.incidentType || !formData.date || !formData.description}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Shield className="h-5 w-5" />
                          <span>Submit Report</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Preview Modal */}
            {showPreview && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
                <div className="bg-black/90 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Report Preview</h3>
                    <button
                      onClick={() => setShowPreview(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-cyan-400 font-semibold">Incident Type:</span>
                      <span className="text-white ml-2">{formData.incidentType}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Amount:</span>
                      <span className="text-white ml-2">{formData.amount} {formData.currency}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Date:</span>
                      <span className="text-white ml-2">{formData.date}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Location:</span>
                      <span className="text-white ml-2">{formData.location.city}, {formData.location.country}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Description:</span>
                      <p className="text-white mt-2">{formData.description}</p>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Files:</span>
                      <span className="text-white ml-2">{files.length} file(s) attached</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default ReportPage;