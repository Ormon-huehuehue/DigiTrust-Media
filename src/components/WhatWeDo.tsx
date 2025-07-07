"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const caption = "We're a marketing agency that helps businesses grow with our expertise in influencer marketing & social media management. We are not limited to any brand/business category. We are here to help everyone grow."

export default function WhatWeDo() {
  return (
    <section className="bg-section-3 py-20 bg-gradient-to-b from-blueish to-blueish/50 border-t-2 border-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 font-anton leading-none tracking-wide">WHAT WE DO</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {caption}
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="#contact-form"
              className="apple-button inline-flex items-center"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
