"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Eye, Users, TrendingUp, ChevronRight, Lock, Globe, FileText, Target, Zap, Heart, Award, Database, Brain, Cloud, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
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
                        <a href="/explore" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
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
      <div className="relative overflow-hidden pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              About 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-gradient">
                BribeChain
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Breaking the cycle of corruption through anonymous reporting, AI-powered analysis, 
              and blockchain technology. Your voice matters, your identity stays protected.
            </p>
          </div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-black/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                In Bangladesh and many similar regions, corruption—especially bribery—is a painful reality. 
                From accessing public services to processing legal documents, people face demands for illegal payments.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                BribeChain transforms isolated helplessness into collective awareness and societal pressure. 
                We provide a safe, anonymous platform where victims can report incidents without fear of retaliation.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Anonymous Reporting', 'AI-Powered Analysis', 'Blockchain Security'].map((tag, index) => (
                  <span key={index} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Target, label: 'Mission Focused', color: 'cyan' },
                    { icon: Shield, label: 'Secure Platform', color: 'blue' },
                    { icon: Heart, label: 'Community Driven', color: 'purple' },
                    { icon: Award, label: 'Impact Oriented', color: 'green' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className={`text-center p-4 rounded-xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/10 hover:from-${item.color}-500/30 hover:to-${item.color}-500/20 transition-all duration-300 hover:scale-105 group`}>
                        <IconComponent className={`h-8 w-8 text-${item.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                        <p className="text-white font-medium">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Problem We're Solving
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Corruption thrives in silence. Traditional reporting systems fail because they expose victims to retaliation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fear of Retaliation",
                description: "Victims avoid reporting due to fear of losing access to services or facing consequences.",
                icon: Eye,
                color: "red",
                stats: "89% of victims stay silent"
              },
              {
                title: "Lack of Trust",
                description: "Current reporting mechanisms are not trusted by the public or taken seriously by authorities.",
                icon: Users,
                color: "yellow",
                stats: "Only 3% report incidents"
              },
              {
                title: "No Accountability",
                description: "Without data and transparency, perpetrators continue their corrupt practices unchecked.",
                icon: TrendingUp,
                color: "orange",
                stats: "95% cases go unreported"
              }
            ].map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div key={index} className={`group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-${problem.color}-400/50 transition-all duration-500 hover:scale-105 animate-slide-in-up`} style={{animationDelay: `${index * 200}ms`}}>
                  <div className={`bg-gradient-to-br from-${problem.color}-500/20 to-${problem.color}-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`h-8 w-8 text-${problem.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{problem.title}</h3>
                  <p className="text-gray-300 mb-4">{problem.description}</p>
                  <div className={`text-${problem.color}-400 font-bold text-lg`}>{problem.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BribeChain combines cutting-edge technology with human-centered design to create a safe reporting ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              {[
                {
                  icon: Lock,
                  title: "Complete Anonymity",
                  description: "No login required. No personal data stored. IP masking and metadata stripping ensure your identity is never compromised."
                },
                {
                  icon: Brain,
                  title: "AI-Powered Analysis",
                  description: "Machine learning algorithms classify reports, detect patterns, and filter spam while extracting meaningful insights from submissions."
                },
                {
                  icon: Database,
                  title: "Corruption Heatmap",
                  description: "Aggregated data creates visual insights for journalists, activists, and authorities to understand corruption patterns and take targeted action."
                }
              ].map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{solution.title}</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{solution.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Impact</h3>
                <div className="space-y-6">
                  {[
                    { label: "Anonymous Reports", value: "1,247+", increase: "+23% this month" },
                    { label: "Sectors Covered", value: "45", increase: "Government, Healthcare, Education" },
                    { label: "Data Insights", value: "100%", increase: "Real-time corruption mapping" }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all duration-300">
                      <div>
                        <p className="text-gray-300 text-sm">{stat.label}</p>
                        <p className="text-cyan-400 font-bold text-lg">{stat.value}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-sm">{stat.increase}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies to ensure security, scalability, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "React.js", category: "Frontend", color: "cyan" },
              { name: "Spring Boot", category: "Backend", color: "green" },
              { name: "PostgreSQL", category: "Database", color: "blue" },
              { name: "AI/ML", category: "Intelligence", color: "purple" },
              { name: "Cloud", category: "Infrastructure", color: "orange" },
              { name: "Blockchain", category: "Security", color: "pink" }
            ].map((tech, index) => (
              <div key={index} className={`group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-${tech.color}-400/50 transition-all duration-500 hover:scale-105 text-center animate-slide-in-up`} style={{animationDelay: `${index * 100}ms`}}>
                <div className={`w-12 h-12 bg-gradient-to-br from-${tech.color}-500/20 to-${tech.color}-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-6 h-6 bg-${tech.color}-400 rounded`}></div>
                </div>
                <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We envision a world where corruption cannot hide in shadows. Where every citizen has a voice, 
            and transparency drives accountability. BribeChain is more than a platform—it's a movement 
            toward restoring trust, dignity, and justice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: CheckCircle,
                title: "Global Scale",
                description: "Expand to support multiple languages and regions worldwide"
              },
              {
                icon: Users,
                title: "Community Power",
                description: "Empower citizens, journalists, and activists with real-time data"
              },
              {
                icon: TrendingUp,
                title: "Policy Impact",
                description: "Drive policy changes through transparent, data-driven insights"
              }
            ].map((vision, index) => {
              const IconComponent = vision.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                    <IconComponent className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-white mb-3">{vision.title}</h3>
                    <p className="text-gray-300">{vision.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <blockquote className="text-2xl md:text-3xl font-bold text-white italic mb-8 animate-fade-in-up">
            "You may not stop corruption in a day, but you can start counting its days. 
            BribeChain makes that count."
          </blockquote>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float-delayed"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
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
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
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
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;