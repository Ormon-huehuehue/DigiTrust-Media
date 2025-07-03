"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion"
import Image from 'next/image';
import { BrandCarousel } from './BrandCarousel';

const brands = [
  {
    logo: "McDonald's",
    logoUrl: "/brandLogos/McDonalds.webp",
    logoStyle: "font-bold italic text-4xl",
    description:
      "Managed nationwide influencer activations and community programs to drive engagement and amplify brand reach."
  },
  {
    logo: "KFC",
    logoUrl: "/brandLogos/KFC.webp",
    logoStyle: "font-light text-4xl tracking-wider",
    description:
      "Executed targeted influencer campaigns to boost online sales and connect with niche audience segments."
  },
  {
    logo: "Bombay Shaving Company",
    logoUrl: "/brandLogos/bombayShavingCompany.webp",
    logoStyle: "font-bold text-3xl",
    description:
      "Launched user-generated content campaigns that drove brand virality and strengthened community loyalty."
  },
  {
    logo: "Swati Cosmetics",
    logoUrl: "/brandLogos/Swati.webp",
    logoStyle: "font-bold text-3xl",
    description:
      "Activated influencer partnerships and on-ground events to build brand presence at national expos."
  },
  {
    logo: "Carmate",
    logoUrl: "/brandLogos/Carmate.webp",
    logoStyle: "font-bold text-4xl",
    description:
      "Developed strategic collaborations and ran influencer-led campaigns to boost awareness at industry expos."
  },
  {
    logo: "Romeo Lane",
    logoUrl: "/brandLogos/RomeoLane.webp",
    logoStyle: "font-light text-3xl tracking-[0.3em]",
    description:
      "Worked with top nightlife and hospitality venues to amplify brand experiences across premium clubs and cafes."
  },
  {
    logo: "Diablo",
    logoUrl: "/brandLogos/Diablo.webp",
    logoStyle: "font-light text-3xl tracking-[0.3em]",
    description:
      "Partnered with leading clubs and luxury venues to create memorable influencer-led events and activations."
  },
  {
    logo: "AIR",
    logoUrl: "/brandLogos/AIR.webp",
    logoStyle: "font-light text-3xl tracking-[0.3em]",
    description:
      "Collaborated with high-end cafes and lounges to deliver curated influencer experiences and brand takeovers."
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

  const heading = "Brands we've worked with";

  return (
    <div className="h-auto bg-[#e7ebf1]/70 py-8 px-3 border-2 border-gray-300">
      <motion.div 
        className="max-w-2xl mx-auto lg:max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
       >
        <h2 className="text-[2.5em] tracking-[-1.5px] font-bold text-center md:text-start lg:mx-10 mx-0 mb-6 mt-7 text-foreground font-haptik">
          {heading}
        </h2>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-1 !text-foreground">
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
                      width = {200}
                      height={200}
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
          <BrandCarousel data={brands} />
        </div>
      </motion.div>
    </div>
  );
};

export default BrandShowcase;


// export function BrandCarousel() {
//   const [width, setWidth] = useState(0)
//   const carousel = useRef<HTMLDivElement>(null)
//   const x = useMotionValue(0)

//   useEffect(() => {
//     if (carousel.current) {
//       const scrollWidth = carousel.current.scrollWidth
//       const offsetWidth = carousel.current.offsetWidth
//       setWidth(scrollWidth - offsetWidth)
//     }
//   }, [])


//   const handleDragEnd = () => {
//     const currentX = x.get()

//     if (currentX > 0) {
//       // Animate back to left boundary
//       animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
//     } else if (currentX < -width) {
//       // Animate back to right boundary
//       animate(x, -width, { type: "spring", stiffness: 300, damping: 30 })
//     }
//   }

//   return (
//     <div className="max-w-7xl mx-auto">
//       <motion.div ref={carousel} className="cursor-grab overflow-hidden">
//         <motion.div
//           drag="x"
//           dragConstraints={{ left: -width, right: 0 }}
//           whileTap={{ cursor: "grabbing" }}
//           style={{ x }}
//           onDragEnd={handleDragEnd}
//           className="flex"
//         >
//         { brands.map((brand, index) => (
//             <motion.div
//               key={index}
//               className="min-w-[30rem] h-[18rem] p-8 m-4 bg-background rounded-sm shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
//             >
//               <div>
//                 <div className="mb-5">
//                   { brand.logoUrl.length > 0 ? 
//                       <Image 
//                         src= {brand.logoUrl}
//                         alt="Brand Icon"
//                         width = {0}
//                         height={0}
//                         className="ml-2 w-auto h-[50px]"
//                       /> : 
//                       <h2 className= 'text-foreground'>
//                         {brand.logo}
//                       </h2>
//                   }
//                 </div>
//                 <p className="text-muted-foreground">{brand.description}</p>
//               </div>
//               <div className="mt-4">
//                 <a
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary hover:underline"
//                 >
//                   Learn more →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

