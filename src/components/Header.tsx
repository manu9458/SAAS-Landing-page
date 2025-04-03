import React, { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import SignInModal from './auth/SignInModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignIn = () => {
    setIsSignInModalOpen(true);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Play className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">StreamSync</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button 
              onClick={handleSignIn}
              className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Sign In
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <button 
                onClick={handleSignIn}
                className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </header>
  );
};

export default Header;