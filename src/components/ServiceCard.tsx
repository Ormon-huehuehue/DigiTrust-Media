"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion';

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay }}
      className={`bg-white/90 border border-blue-50 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-lg transition-all duration-500 ${className}`}
    >
      <motion.h2 
        className="text-4xl lg:text-6xl font-bold text-blue-900 mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-blue-700 text-xl lg:text-2xl font-medium mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.p 
        className="text-blue-800 text-lg leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: delay + 0.5 + (index * 0.1) }}
            className="space-y-4"
          >
            <h4 className="text-blue-900 font-bold text-lg border-b border-blue-200 pb-2">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: delay + 0.6 + (index * 0.1) + (itemIndex * 0.05) }}
                  className="text-blue-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};