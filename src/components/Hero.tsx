import React from 'react';
import { Play, Tv, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-8 md:pt-32 md:pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Entertainment,
              <span className="text-indigo-600"> Unified</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Discover, share, and sync your entertainment across all platforms. 
              Join the future of social streaming with AI-powered recommendations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="ml-2 text-gray-600">50K+ Active Users</span>
              </div>
              <div className="flex items-center">
                <Tv className="w-5 h-5 text-indigo-600" />
                <span className="ml-2 text-gray-600">All Major Platforms</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span className="ml-2 text-gray-600">AI-Powered</span>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1522198734915-76c764a8454d?auto=format&fit=crop&w=800&q=80" 
              alt="StreamSync Dashboard Preview" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;