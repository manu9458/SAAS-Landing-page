import React from 'react';
import { 
  Tv, Users, Brain, Share2, 
  Trophy, TrendingUp, Sync, Video,
  Smartphone, CreditCard
} from 'lucide-react';

const features = [
  {
    icon: <Tv className="w-6 h-6 text-indigo-600" />,
    title: 'Universal Content',
    description: 'Access all your favorite streaming platforms in one place'
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    title: 'AI Recommendations',
    description: 'Get personalized suggestions based on your viewing habits'
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: 'Social Viewing',
    description: 'Watch together with friends using our Watch Party feature'
  },
  {
    icon: <Share2 className="w-6 h-6 text-indigo-600" />,
    title: 'Content Matchmaking',
    description: 'Find perfect shows to watch with friends and family'
  },
  {
    icon: <Trophy className="w-6 h-6 text-indigo-600" />,
    title: 'Gamification',
    description: 'Complete challenges and earn rewards while watching'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    title: 'Trendspotting',
    description: 'Stay updated with real-time entertainment trends'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover why StreamSync is the future of entertainment
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;