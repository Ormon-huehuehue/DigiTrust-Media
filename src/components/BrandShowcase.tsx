"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Image from 'next/image';

const brands = [
  {
    logo: "McDonald's",
    logoUrl : "/brandLogos/McDonalds.png",
    logoStyle: "font-bold italic text-4xl",
    description: "Scaled Omnichannel Brand Ambassador and Community program and developed content for national campaigns."
  },
  {
    logo: "KFC",
    logoUrl : "/brandLogos/KFC.png",
    logoStyle: "font-light text-4xl tracking-wider",
    description: "Enhanced luxury funnel messaging for e-commerce focused communities and audience segments."
  },
  {
    logo: "Bombay Shaving Company",
    logoUrl : "/brandLogos/bombayShavingCompany.png",
    logoStyle: "font-bold text-3xl",
    description: "Curated and executed national user generated content programs to drive national campaign virality."
  },
  {
    logo: "Swati Cosmetics",
    logoUrl : "/brandLogos/SwatiCosmetics.png",
    logoStyle: "font-bold text-3xl",
    description: "Developed partner opportunities and executed national expo messaging and expo activations."
  },
  {
    logo: "Carmate",
    logoUrl : "",
    logoStyle: "font-bold text-4xl",
    description: "Developed partner opportunities and executed national expo messaging and expo activations."
  },
  {
    logo: "Salons and Spas",
    logoUrl : "",
    logoStyle: "font-bold text-2xl tracking-widest",
    description: "Anemoi"
  },
  {
    logo: "Cafes and Clubs",
    logoUrl : "",
    logoStyle: "font-light text-3xl tracking-[0.3em]",
    description: "BW Club, White club, Key Club, Aquila, Slique, Brown Club, Big Billers, Bergamo, Privee, Code, Cafe by Soul - 65th Avenue, Diablo, Romeo Lane, Knot, Air Anivory Cafe, W Vabian, Flos Cafe"
  },
];


const BrandShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  const backgroundVariants = {
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="h-auto bg-gray-200 p-8">
      <motion.div 
        className="max-w-2xl mx-auto lg:max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
       >
        <h2 className="text-[2.5em] tracking-[-1.5px] font-bold text-center md:text-start lg:mx-10 mx-0 mb-6 mt-7 text-foreground font-haptik">
          Brands we've worked with
        </h2>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-1 !text-foreground">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="relative px-8 py-20 cursor-pointer group min-h-[200px] block bg-white lg:bg-transparent"
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Gray background box that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-white rounded-sm"
                variants={backgroundVariants}
                initial="initial"
                animate={hoveredIndex === index ? "animate" : "initial"}
              />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[136px]">
                <div className="flex items-start justify-start mb-4">
                  { brand.logoUrl.length > 0 ? 
                    <Image 
                      src= {brand.logoUrl}
                      alt="Brand Icon"
                      width = {0}
                      height={0}
                      className="ml-2 w-auto h-[50px]"
                    /> : 
                    <h2 className={`${brand.logoStyle} text-foreground`}>
                      {brand.logo}
                    </h2>
                  }
                </div>
                
                <div className="flex-1 flex items-end">
                  <p className="text-gray-600 text-muted-foreground text-sm leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='md:hidden'>
          <BrandCarousel />
        </div>
      </motion.div>
    </div>
  );
};

export default BrandShowcase;


export  function BrandCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-sm shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <Image 
                    // src= {brand.logo}
                    src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d9BC3qSnrWyiJLLizRQOygHaC9%26pid%3DApi&f=1&ipt=6d39398ea27d77e01821eafebedc69da288372cb09c7fd2ea3f5949276be0b50&ipo=images"
                    alt="Brand Icon"
                    width = {200}
                    height={20}
                    className="ml-2"
                  />
                  <p className="text-muted-foreground">{brand.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

  )
}
