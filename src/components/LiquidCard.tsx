"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FounderProps{
  name : string, 
  designation : string, 
  img? : string,
}

interface LiquidCardProps{
  founder : FounderProps
}

const LiquidCard = ( {founder} : LiquidCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <motion.div
        className="relative w-80 h-[500px] bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300"
          initial={{ y: '100%' }}
          animate={{ y: isHovered ? '0%' : '100%' }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        />
        
        {/* Card content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-2 font-haptik"
              animate={{ 
                color: isHovered ? '#ffffff' : '#1f2937' 
              }}
              transition={{ duration: 0.3 }}
            >
              {founder.name}
            </motion.h3>
            <motion.p 
              className="text-sm leading-relaxed"
              animate={{ 
                color: isHovered ? '#e5e7eb' : '#6b7280' 
              }}
              transition={{ duration: 0.3 }}
            >
              {founder.designation}
            </motion.p>
          </div>
        </div>
        {/* Founder image at the bottom, attached to the border */}
        {founder.img && (
          <Image 
            src={founder.img} 
            alt={founder.name} 
            width = {300}
            height = {300}
            className="absolute left-0 bottom-0 w-full  object-cover rounded-b-xl z-20 border-t border-blue-100"
            style={{ objectPosition: 'center bottom' }}
          />
        )}
      </motion.div>
  );
};

export default LiquidCard;