"use client"

import React from 'react'
import { motion } from 'framer-motion'

const GiganticHeader = ({title, description, headerCSS="tracking-tight bg-gradient-to-r from-blue-900 via-blue-400 to-blue-700 bg-clip-text text-transparent font-anton"} : {title : string, description? : string, headerCSS? : string}) => {

  return (
    <motion.header 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10"
  >
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        className="text-[4rem] lg:text-[8rem] xl:text-[12rem] mb-8 leading-none font-anton"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" } 
        }}
      >
        <motion.span
        className={`inline-block ${headerCSS}`}
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 200%"
        }}
      >
        {title}
      </motion.span>
        
      </motion.h1>
      {description && 
      <motion.p 
        className="text-lg lg:text-xl text-gray-500 font-haptik max-w-4xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {description}
      </motion.p>}
    </div>
  </motion.header>
  )
}

export default GiganticHeader