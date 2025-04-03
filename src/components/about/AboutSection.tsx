import React from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About StreamSync</h2>
          <p className="mt-4 text-xl text-gray-600">
            Revolutionizing the way you experience entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To simplify and enhance the entertainment experience by bringing all your content together in one place.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Leveraging cutting-edge AI technology to provide personalized recommendations and seamless integration.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <p className="text-gray-600">
              Building a vibrant community of entertainment enthusiasts who share and discover content together.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Story</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            StreamSync was born from a simple idea: entertainment should be accessible and social. 
            Our team of passionate developers and designers worked tirelessly to create a platform 
            that brings together content from various services while fostering a community of 
            entertainment enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;