import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      'Connect up to 3 streaming services',
      'Basic recommendations',
      'Watch history sync',
      'Limited social features'
    ]
  },
  {
    name: 'Pro',
    price: '$19.99',
    popular: true,
    features: [
      'Connect unlimited streaming services',
      'Advanced AI recommendations',
      'Watch Party features',
      'Full social integration',
      'Content matchmaking',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Custom integrations',
      'API access',
      'Dedicated support',
      'Custom branding',
      'Analytics dashboard'
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${
                plan.popular
                  ? 'bg-indigo-50 border-2 border-indigo-600 relative'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">{plan.price}</p>
              <p className="mt-2 text-gray-600">per month</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;