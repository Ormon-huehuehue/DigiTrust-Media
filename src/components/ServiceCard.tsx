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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`bg-white/90 border border-blue-50 rounded-3xl p-8 lg:p-12 shadow-md hover:shadow-lg ${className}`}
    >
      <motion.h2 
        className="text-4xl lg:text-6xl font-bold text-foreground mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-muted-foreground text-xl lg:text-2xl font-medium mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.p 
        className="text-gray-500 text-lg leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: delay + 0.5 + (index * 0.1) }}
            className="space-y-4"
          >
            <h4 className="text-foreground font-bold text-lg border-b border-gray-200 pb-2">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: delay + 0.6 + (index * 0.1) + (itemIndex * 0.05) }}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 font-medium cursor-pointer"
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