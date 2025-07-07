"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Booker from './CalBooker'

const BookMeeting = () => {
  return (
    <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
        <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold font-anton tracking-wide text-center pt-10"
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
            >BOOK A 
            <span className='bg-gradient-to-r !py-0 !my-0 from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent'> MEETING </span>
            WITH US
        </motion.h2>
        <p className="mt-4 mb-10 text-lg text-muted-foreground">
            Fuel your brand's growth with Digitrust Media
        </p>
        <div className='w-full flex justify-center items-center'>
            <Booker/>
        </div>
    </motion.div>
  )
}

export default BookMeeting