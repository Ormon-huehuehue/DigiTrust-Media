"use client"

import { motion } from "framer-motion"
import { Boxes } from "./ui/background-boxes"
import Image from "next/image"
import Link from "next/link"

const heroCaption = "Our team of experts use their extensive knowledge of the digital space to discover the right influencers for your business and help you create an engaging and effective campaign."

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-section-1">
      <Boxes/>
      <div className="absolute inset-0 w-full h-full bg-slate-200 z-1 [mask-image:radial-gradient(transparent,white)] " />
  
      <div className="relative z-10 mx-auto max-w-7xl px-6 mt-[6rem] lg:mt-0 lg:py-20 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="lg:mt-10 mt-0 font-bold tracking-tight text-foreground text-5xl sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="text-gradient">You're a brand looking for promotion?</span> */}
            <span className="text-gradient font-haptik">Experience the power of influencer marketing</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroCaption}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#work">
              <span
                className="apple-button"
                >
                Explore Our Work
              </span>
            </Link>
            <Link href='/services'>
              <span
                className="text-sm font-semibold leading-6 text-foreground"
                >
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Image positioned at bottom right */}
        <motion.div
          className="absolute bottom-0 right-0 lg:block hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/Banner.webp"
            alt="digitrust media banner"
            width={700}
            height={700}
            className="w-[500px] rounded-2xl"
          />
        </motion.div>
        
        {/* Mobile image */}
        <motion.div
          className="mx-auto mt-16 lg:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-center">
            <Image
              src="/Banner.webp"
              alt="Influencer marketing"
              width={600}
              height={600}
              className="w-[600px] rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
