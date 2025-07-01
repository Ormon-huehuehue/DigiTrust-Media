"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Branding",
  },
  {
    id: 2,
    title: "Sleek Web Experience",
    description: "Elegant online presence for a luxury fashion brand",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Web Design",
  },
  {
    id: 3,
    title: "Intuitive Mobile App",
    description: "User-friendly app design for a health and wellness company",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Elegant Digital Campaign",
    description: "Sophisticated marketing strategy for a luxury automotive brand",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Digital Marketing",
  },
  {
    id: 5,
    title: "Refined UI/UX Design",
    description: "Streamlined user interfaces for a financial services platform",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX",
  },
  {
    id: 6,
    title: "Minimalist Product Design",
    description: "Sleek and functional design for a smart home device",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Product Design",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-gradient-to-b from-blueish/50 via-muted/20 to-background ">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-haptik">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our minimalist designs and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>  */}
        <AppleCardsCarouselDemo/>
    </section>
  )
}


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 text-center font-haptik">
        OUR WORK
      </h2>
      <p className="mt-4 text-lg text-muted-foreground text-center">
            A showcase of our minimalist designs and creative solutions.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};



const data = [
  {
    category: "Branding",
    title: "McDonald’s Community Program",
    src: "/work/mcd.jpg",
    content: (
      <>
        <p>
          Scaled brand ambassador programs for McDonald’s across major metros, with creator-led community content boosting reach and engagement for national drops.
        </p>
      </>
    ),
  },
  {
    category: "Digital Strategy",
    title: "KFC E-commerce Funnel Messaging",
    src: "/work/kfc.jpg",
    content: (
      <>
        <p>
          Revamped KFC’s digital messaging for targeted food delivery platforms, boosting CTR and conversions via creator storytelling.
        </p>
      </>
    ),
  },
  {
    category: "Activation",
    title: "Carmate Auto Expo Launch",
    src: "/work/carmate.png",
    content: (
      <>
        <p>
          Developed creator-led buzz and content series for Carmate’s booth at the National Auto Expo, improving test-drive bookings by 3x.
        </p>
      </>
    ),
  },
  {
    category: "UGC Campaign",
    title: "Bombay Shaving Company Creator Push",
    src: "/work/bombay_shaving_company.png",
    content: <DummyContent/>
  },
  {
    category: "Influencer Marketing",
    title: "SWATI Cosmetics Expo Buzz",
    src: "/work/lenses.png",
    content: (
      <>
        <p>
          Activated influencers during major beauty expos to increase product trials and in-store footfall for SWATI’s Nordic line.
        </p>
      </>
    ),
  },
  {
    category: "Nightlife & Hospitality",
    title: "Romeo Lane Life Style Content",
    src: "/work/bar.png",
    content: (
      <>
        <p>
          Collaborated with nightlife influencers and music creators to position Romeo Lane as the go-to premium bar lounge for Gen Z weekends.
        </p>
      </>
    ),
  },
];


