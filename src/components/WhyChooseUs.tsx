"use client"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import AnimatedButton from './ui/animated-button';

const AnimatedSection = ({ title, items, delay = 0 } : {title : string, items : string[], delay : number}) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
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
        <h3 className="text-foreground text-xl font-light mb-4">{title}</h3>
        
        {/* Main separator line */}
        <div className="relative h-px bg-border overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-2000 ease-out ${
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
                      ? 'w-4 h-px bg-muted-foreground' 
                      : 'w-2 h-2 bg-muted-foreground rounded-full'
                  }`}
                />
              </div>
              
              {/* Text */}
              <span 
                className={`text-muted-foreground transition-all duration-300 ease-out text-sm ${
                  hoveredIndex === index 
                    ? 'text-foreground transform translate-x-2' 
                    : ''
                }`}
              >
                {item}
              </span>
            </div>
            
            {/* Individual item separator line */}
            <div className="relative mt-4 h-px bg-border overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-primary/30 to-primary/20 transition-all duration-500 ease-out ${
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
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-blueish border-2 border-zinc-300" >
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h1 className="text-zinc-700 text-5xl font-bold mb-6 tracking-wide font-haptik">
              WHY CHOOSE US
            </h1>
            
            {/* Main decorative line */}
            <div className="relative h-px bg-border overflow-hidden mx-auto w-64">
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 transition-all duration-3000 ease-out ${
                  mainAnimationStarted ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Partner with the leading digital influencer marketing agency that transforms 
            brands through authentic storytelling and strategic partnerships.
          </p>
        </motion.div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {sectionsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <AnimatedSection
                title={section.title}
                items={section.items}
                delay={index * 200}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className='w-full flex justify-center'>
          <AnimatedButton title="Start Your Campaign Today" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;