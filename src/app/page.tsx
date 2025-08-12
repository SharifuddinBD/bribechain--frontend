"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Shield, Eye, Users, TrendingUp, ChevronRight, Lock, Globe, FileText } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-x-hidden">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <Shield className="h-8 w-8 text-cyan-400 animate-pulse" />
                    <span className="text-2xl font-bold text-white">BribeChain</span>
                </div>
                <div className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <a href="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#explore" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
                        Browse Reports
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#verify" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
                        Verify Hash
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Fight Corruption
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-gradient">
                Anonymously
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              BribeChain leverages blockchain technology to create an immutable, anonymous platform 
              for reporting bribery incidents. Your identity stays protected while corruption gets exposed.
            </p>
            
            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Link href="/report">
                <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Submit Anonymous Report
                    <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>

              <Link href="/reports">
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Browse Reports
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { number: '1,247', label: 'Reports Submitted', delay: 'delay-100' },
                { number: '45', label: 'Sectors Covered', delay: 'delay-200' },
                { number: '100%', label: 'Anonymous & Secure', delay: 'delay-300' }
              ].map((stat, index) => (
                <div key={index} className={`bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:bg-black/30 ${stat.delay}`}>
                  <div className="text-3xl font-bold text-cyan-400 mb-2 animate-bounce">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Why Choose BribeChain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Built with cutting-edge blockchain technology to ensure your safety and the integrity of every report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: "100% Anonymous",
                description: "Your identity is completely protected. No personal information is ever stored or tracked.",
                color: "cyan",
                gradient: "from-cyan-500/20 to-cyan-500/10",
                hoverGradient: "group-hover:from-cyan-500/30 group-hover:to-cyan-500/20"
              },
              {
                icon: Shield,
                title: "Blockchain Secured",
                description: "Every report is immutably stored on the blockchain, preventing tampering or deletion.",
                color: "blue",
                gradient: "from-blue-500/20 to-blue-500/10",
                hoverGradient: "group-hover:from-blue-500/30 group-hover:to-blue-500/20"
              },
              {
                icon: Globe,
                title: "Global Transparency",
                description: "Browse anonymized reports from around the world to understand corruption patterns.",
                color: "purple",
                gradient: "from-purple-500/20 to-purple-500/10",
                hoverGradient: "group-hover:from-purple-500/30 group-hover:to-purple-500/20"
              },
              {
                icon: FileText,
                title: "Rich Media Support",
                description: "Upload images, audio clips, and documents to support your reports with evidence.",
                color: "green",
                gradient: "from-green-500/20 to-green-500/10",
                hoverGradient: "group-hover:from-green-500/30 group-hover:to-green-500/20"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-${feature.color}-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 animate-slide-in-up`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className={`bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6`}>
                    <IconComponent className={`h-8 w-8 text-${feature.color}-400 group-hover:animate-pulse`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Simple, secure, and anonymous. Your report helps build a corruption-free world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Submit Report",
                description: "Fill out our secure form with details about the bribery incident. Include any supporting evidence.",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                step: "2",
                title: "Blockchain Storage",
                description: "Your report is encrypted and permanently stored on the blockchain with a unique hash for verification.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                step: "3",
                title: "Global Impact",
                description: "Your anonymous report becomes part of a global database that helps expose corruption patterns.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center animate-slide-in-up group`} style={{animationDelay: `${index * 200}ms`}}>
                <div className={`bg-gradient-to-r ${item.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg hover:shadow-2xl`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-up animation-delay-200">
            Every report matters. Join the fight against corruption today.
          </p>
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 animate-fade-in-up animation-delay-400 relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Submit Your First Report
              <ChevronRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-delayed"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-cyan-400 animate-pulse" />
                <span className="text-2xl font-bold text-white">BribeChain</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Building a transparent world through anonymous reporting and blockchain technology.
              </p>
            </div>
            <div className="animate-slide-in-up animation-delay-200">
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#report" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">Submit Report</a></li>
                <li><a href="#explore" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">Browse Reports</a></li>
                <li><a href="#verify" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">Verify Hash</a></li>
              </ul>
            </div>
            <div className="animate-slide-in-up animation-delay-400">
              <h3 className="text-white font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 inline-block">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center animate-fade-in-up animation-delay-600">
            <p className="text-gray-400">
              © 2025 BribeChain. Empowering transparency through blockchain technology.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-25px) translateX(-5px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
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
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;