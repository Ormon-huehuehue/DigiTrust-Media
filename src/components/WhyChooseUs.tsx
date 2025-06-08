"use client"
import React, { useState, useEffect } from 'react';

const AnimatedSection = ({ title, items, delay = 0 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="w-full max-w-sm">
      {/* Header */}
      <div className="relative mb-8">
        <h3 className="text-white text-xl font-light mb-4">{title}</h3>
        
        {/* Main separator line */}
        <div className="relative h-px bg-gray-700 overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-orange-500 transition-all duration-2000 ease-out ${
              animationStarted ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>

      {/* Items list */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center space-x-4">
              {/* Animated bullet/hyphen */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div 
                  className={`transition-all duration-300 ease-out ${
                    hoveredIndex === index 
                      ? 'w-4 h-px bg-gray-400' 
                      : 'w-2 h-2 bg-gray-400 rounded-full'
                  }`}
                />
              </div>
              
              {/* Text */}
              <span 
                className={`text-gray-400 transition-all duration-300 ease-out text-sm ${
                  hoveredIndex === index 
                    ? 'text-white transform translate-x-2' 
                    : ''
                }`}
              >
                {item}
              </span>
            </div>
            
            {/* Individual item separator line */}
            <div className="relative mt-4 h-px bg-gray-800 overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400/30 to-orange-500/30 transition-all duration-500 ease-out ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [mainAnimationStarted, setMainAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainAnimationStarted(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const sectionsData = [
    {
      title: "Our Expertise",
      items: [
        "Micro & Macro Influencers",
        "Brand Strategy Development",
        "Content Creation Support",
        "Multi-Platform Campaigns"
      ]
    },
    {
      title: "Campaign Types",
      items: [
        "Product Launch Campaigns",
        "Brand Awareness Drives",
        "User-Generated Content",
        "Sponsored Content Series"
      ]
    },
    {
      title: "Industries We Serve",
      items: [
        "Fashion & Beauty",
        "Technology & Gadgets",
        "Food & Lifestyle",
        "Health & Wellness"
      ]
    },
    {
      title: "Our Approach",
      items: [
        "Data-Driven Strategies",
        "Authentic Partnerships",
        "ROI-Focused Campaigns",
        "Real-Time Analytics"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-white text-5xl font-light mb-6 tracking-wide">
              WHY CHOOSE US
            </h1>
            
            {/* Main decorative line */}
            <div className="relative h-px bg-gray-700 overflow-hidden mx-auto w-64">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 transition-all duration-3000 ease-out ${
                  mainAnimationStarted ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>
          
          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Partner with the leading digital influencer marketing agency that transforms 
            brands through authentic storytelling and strategic partnerships.
          </p>
        </div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {sectionsData.map((section, index) => (
            <AnimatedSection
              key={index}
              title={section.title}
              items={section.items}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="relative inline-block group cursor-pointer">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-px rounded-lg">
              <div className="bg-gray-950 px-8 py-4 rounded-lg group-hover:bg-gray-900 transition-colors duration-300">
                <span className="text-white font-medium tracking-wide">
                  Start Your Campaign Today
                </span>
              </div>
            </div>
            
            {/* CTA underline animation */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-px bg-gradient-to-r from-pink-500 to-orange-500 transition-all duration-500 ease-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;