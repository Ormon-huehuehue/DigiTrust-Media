"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "CreativeAgency transformed our brand's digital presence. Their innovative approach and attention to detail exceeded our expectations.",
    author: "Jane Doe",
    position: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with CreativeAgency was a game-changer for our startup. Their expertise in UI/UX design significantly improved our user engagement.",
    author: "John Smith",
    position: "Founder, InnovateTech",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at CreativeAgency are true professionals. Their digital marketing strategies helped us reach new audiences and boost our conversions.",
    author: "Emily Brown",
    position: "Marketing Director, GrowthCo",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-background via-muted/40 to-muted">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-foreground font-haptik"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-card p-6 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-muted-foreground mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
