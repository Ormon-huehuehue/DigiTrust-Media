"use client"
import React from 'react';
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  [key: string]: any; // Allow other HTML button props
}

const AnimatedButton = ({ title, onClick, className = "", ...props }: AnimatedButtonProps) => {
  return (
    <motion.button 
      className={`text-center mt-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      onClick={onClick}
      {...props}
    >
      <div className="relative inline-block group cursor-pointer">
        <div className="bg-gradient-to-r from-primary to-primary/80 p-px rounded-lg">
          <div className="bg-background px-8 py-4 rounded-lg group-hover:bg-muted transition-colors duration-300">
            <span className="text-foreground font-medium tracking-wide">
              {title}
            </span>
          </div>
        </div>
        
        {/* CTA underline animation */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-px bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out" />
      </div>
    </motion.button>
  )
}

export default AnimatedButton