"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps{
    title : string,
    subtitle : string,
    description : string,
    services : CategoryProps[],
    delay : number, 
    className? : string
}


interface CategoryProps{
    title : string, 
    items : string[]
}

export const ServiceCard = ({ title, subtitle, description, services, delay = 0, className = "" } : ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: delay * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white/90 border border-blue-50 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-lg ${className}`}
    >
      <h2 
        className="text-4xl lg:text-6xl font-bold text-foreground mb-4"
      >
        {title}
      </h2>
      
      <p 
        className="text-muted-foreground text-xl lg:text-2xl font-medium mb-6"
      >
        {subtitle}
      </p>
      
      <p 
        className="text-gray-500 text-lg leading-relaxed mb-10"
      >
        {description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((category) => (
          <div
            key={category.title}
            className="space-y-4"
          >
            <h4 className="text-foreground font-bold text-lg border-b border-gray-200 pb-2">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
