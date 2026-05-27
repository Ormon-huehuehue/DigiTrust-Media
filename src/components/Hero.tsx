"use client"

import { motion } from "framer-motion"
import { Boxes } from "./ui/background-boxes"
import Image from "next/image"
import Link from "next/link"

const heroCaption = "DigiTrust Media is an influencer marketing agency in Delhi helping brands discover the right creators, build engaging campaigns, and turn creator partnerships into measurable digital growth."

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
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* <span className="text-gradient">You're a brand looking for promotion?</span> */}
            <span className="text-gradient font-haptik">Influencer marketing agency for creator-led brand growth</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroCaption}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/Banner.webp"
            alt="DigiTrust Media creator campaign and influencer marketing showcase"
            width={700}
            height={700}
            className="w-[450px] rounded-2xl"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
        
        {/* Mobile image */}
        <motion.div
          className="mx-auto mt-16 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center">
            <Image
              src="/Banner.webp"
              alt="DigiTrust Media creator campaign and influencer marketing showcase"
              width={600}
              height={600}
              className="w-[500px] rounded-2xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
