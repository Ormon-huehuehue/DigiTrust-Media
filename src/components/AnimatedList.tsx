"use client"
import React, { useState, useEffect } from 'react';

interface AnimatedListProps {
  header : string,
  items: string[];
}

const AnimatedList = ({ items} : {items : AnimatedListProps}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const brandItems = [
    'Funded Startups',
    'B2B & B2C Brands',
    'eCommerce Companies',
    'Growth-Focused Organizations'
  ];

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-950 p-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="relative mb-8">
          <h2 className="text-white text-2xl font-light mb-4">Brands</h2>
          
          {/* Main separator line */}
          <div className="relative h-px bg-gray-700 overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-2000 ease-out ${
                animationStarted ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>

        {/* Brand list */}
        <div className="space-y-6">
          {brandItems.map((item, index) => (
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
                  className={`text-gray-400 transition-all duration-300 ease-out ${
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
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 transition-all duration-500 ease-out ${
                    hoveredIndex === index ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedList;