"use client"

import { motion } from "framer-motion"

export default function AboutUs() {

  const heading = "About Us"


  const content = {
    heading : "We are Creative Innovators",
    subtext1 : "At CreativeAgency, we blend cutting-edge technology with artistic vision to create digital experiences that captivate and inspire. Our team of passionate designers, developers, and strategists work tirelessly to push the boundaries of what's possible in the digital realm.",
    subtext2 : "With a focus on innovation and user-centric design, we've helped countless brands transform their digital presence and connect with their audience in meaningful ways."
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/60 via-muted to-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-8 text-center text-foreground font-haptik"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-foreground">{content.heading}</h3>
            <p className="text-muted-foreground mb-6">
              {content.subtext1}
            </p>
            <p className="text-muted-foreground">
              {content.subtext2}
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-card rounded-lg transform -rotate-3 flex items-center justify-center border border-border">
              <p className="text-2xl font-bold text-foreground">Creative Team at Work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
