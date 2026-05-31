"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, Star, PartyPopper, Search, Megaphone, ArrowUpRight } from "lucide-react"
import { CreatorConstellation } from "@/components/service-graphics"

type Service = {
  category: string
  title: string
  highlight?: string
  description: string
  chips: string[]
  icon: React.ReactNode
  layout: string
  hero?: boolean
}

const services: Service[] = [
  {
    category: "CREATOR · CAMPAIGNS",
    title: "Creator",
    highlight: "Activation",
    description:
      "We match the right creators to your brand and run the campaign end to end — bespoke briefs, management, and performance tracking. From launch bursts to always-on ambassadorships.",
    chips: [
      "Creator Discovery & Vetting",
      "Bespoke Briefs",
      "Campaign Management",
      "Performance Tracking",
      "Ambassadorships",
    ],
    icon: <Sparkles className="w-7 h-7 lg:w-9 lg:h-9" />,
    layout: "col-span-12 lg:col-span-7 lg:row-span-2",
    hero: true,
  },
  {
    category: "CELEBRITY · INFLUENCE",
    title: "Sourcing",
    description:
      "Tap into the reach of renowned celebrities and creators to boost credibility, awareness, and conversions.",
    chips: ["Celebrity Endorsements", "Influencer Sourcing", "Negotiation & Contracting"],
    icon: <Star className="w-6 h-6 lg:w-7 lg:h-7" />,
    layout: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    category: "ORGANIC · DISCOVERY",
    title: "SEO",
    description:
      "Be found by the people already searching for you. Technical SEO, on-page work, and intent-led content that compounds.",
    chips: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
    icon: <Search className="w-6 h-6 lg:w-7 lg:h-7" />,
    layout: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    category: "PAID · PERFORMANCE",
    title: "Ads Marketing",
    description:
      "Pay only for results that matter. We plan, launch, and optimise paid campaigns across Meta, Google, and YouTube — relentlessly testing to push your ROAS higher.",
    chips: ["Meta & Instagram Ads", "Google & YouTube Ads", "A/B Creative Testing", "ROAS Optimization"],
    icon: <Megaphone className="w-6 h-6 lg:w-7 lg:h-7" />,
    layout: "col-span-12 sm:col-span-6 lg:col-span-6",
  },
  {
    category: "EVENTS · EXPERIENCES",
    title: "Events & Experiences",
    description:
      "From guest list management to conceptualisation and curation, everything you need to make your event memorable.",
    chips: ["Event Curation", "Guest List Management", "On-ground Execution"],
    icon: <PartyPopper className="w-6 h-6 lg:w-7 lg:h-7" />,
    layout: "col-span-12 sm:col-span-6 lg:col-span-6",
  },
]

const shell =
  "group relative flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white/90 backdrop-blur-sm p-7 lg:p-9 " +
  "shadow-md transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-xl"

function IconBadge({ icon, hero = false }: { icon: React.ReactNode; hero?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blueish to-blue-100 text-foreground shadow-inner transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 ${
        hero ? "h-16 w-16 lg:h-20 lg:w-20" : "h-12 w-12 lg:h-14 lg:w-14"
      }`}
    >
      {icon}
    </span>
  )
}

function CategoryLabel({ category }: { category: string }) {
  return (
    <div className="mt-3 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.2em] uppercase text-muted-foreground">
      <span className="h-px w-4 bg-blue-200" />
      <span>{category}</span>
    </div>
  )
}

function Chips({ chips }: { chips: string[] }) {
  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-6">
      {chips.map((chip) => (
        <span
          key={chip}
          className="inline-flex items-center rounded-full border border-blue-100 bg-blueish/40 px-3 py-1.5 font-medium text-[11px] tracking-wide text-gray-600"
        >
          {chip}
        </span>
      ))}
    </div>
  )
}

function ServiceCardBento({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 110, damping: 22, delay: index * 0.06 },
      }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -5, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
      className={`${shell} ${service.layout} ${service.hero ? "min-h-[420px] lg:min-h-[560px]" : "min-h-[260px]"}`}
    >
      <div className="relative z-[2] flex h-full flex-col">
        {/* icon + heading in one row */}
        <div className="flex items-center gap-4">
          <IconBadge icon={service.icon} hero={service.hero} />
          <h3
            className={`font-anton font-bold leading-none tracking-tight text-foreground ${
              service.hero ? "text-5xl lg:text-7xl" : "text-3xl lg:text-4xl"
            }`}
          >
            {service.title}
            {service.highlight && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent">
                  {service.highlight}
                </span>
              </>
            )}
          </h3>
        </div>

        {/* category below heading */}
        <CategoryLabel category={service.category} />

        <p
          className={`mt-4 leading-relaxed text-muted-foreground ${
            service.hero ? "text-lg lg:text-xl max-w-[46ch]" : "text-base max-w-[42ch]"
          }`}
        >
          {service.description}
        </p>

        {service.hero && (
          <div className="my-8 hidden flex-1 items-center justify-center sm:flex">
            <CreatorConstellation />
          </div>
        )}

        <Chips chips={service.chips} />
      </div>
    </motion.div>
  )
}

export default function ServicesBento() {
  return (
    <section className="border-t-2 border-zinc-300 bg-gradient-to-b from-blueish to-blueish/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 font-anton text-4xl font-bold leading-none tracking-wide text-foreground sm:text-5xl md:text-7xl">
            OUR SERVICES
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl">
            Your all-in-one partner for creator marketing, celebrity partnerships, SEO, paid
            ads, and unforgettable brand experiences.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(260px,_auto)] grid-cols-12 gap-5">
          {services.map((service, i) => (
            <ServiceCardBento key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/services" className="apple-button inline-flex items-center">
            Explore All Services
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
