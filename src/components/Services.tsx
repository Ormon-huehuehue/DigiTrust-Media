"use client"

import { motion } from "framer-motion"
import { Code, Paintbrush, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces that engage and delight users.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites and web applications.",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Digital Marketing",
    description: "Developing strategic campaigns that increase brand visibility and drive conversions.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Mobile App Development",
    description: "Creating innovative mobile applications for iOS and Android platforms.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-section-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-foreground font-haptik"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-card p-6 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
