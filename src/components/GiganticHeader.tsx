"use client"

import React from 'react'
import { motion } from 'framer-motion'

const GiganticHeader = ({title, description, headerCSS="tracking-tight bg-gradient-to-r from-blue-900 via-blue-400 to-blue-700 bg-clip-text text-transparent font-anton", className} : {title : string, description? : string, headerCSS? : string, className? : string}) => {

  return (
    <motion.header 
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-10"
  >
    <div className="max-w-7xl mx-auto text-center sm:text-start">
      <h1 
        className="text-[3.75rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] mb-6 leading-[0.92] font-anton"
      >
        <span
        className={`inline-block ${headerCSS} ${className}`}
        style={{
          backgroundSize: "140% 140%"
        }}
      >
        {title}
      </span>
        
      </h1>
      {description && 
      <p 
        className="text-base lg:text-lg text-gray-500 font-haptik max-w-3xl leading-relaxed"
      >
        {description}
      </p>}
    </div>
  </motion.header>
  )
}

export default GiganticHeader
