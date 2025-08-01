"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface FeatureCardProps{
    title : string,
    description : string,
    delay : number,
    className? : string
}

export const FeatureCard = ({ title, description, delay = 0, className = "" } : FeatureCardProps) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay }}
        className={`rounded-2xl p-8 ${className}`}
      >
        <h3 className="text-foreground font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </motion.div>
    );
  };