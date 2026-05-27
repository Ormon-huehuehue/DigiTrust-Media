import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import PortfolioGrid from "@/components/PortfolioGrid"
import Marquee from "@/components/Marquee"
// import ContactForm from "@/components/ContactForm"
import BrandShowcase from "@/components/BrandShowcase"
import WhyChooseUs from "@/components/WhyChooseUs"
import CampaignProcess from "@/components/CampaignProcess"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
// import BookMeeting from "@/components/BookMeeting"

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in Delhi",
  description:
    "DigiTrust Media helps brands grow with influencer marketing, creator campaigns, celebrity partnerships, brand activations, and digital strategy across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigiTrust Media | Influencer Marketing Agency in Delhi",
    description:
      "Creator-led campaigns, celebrity partnerships, and brand activations for growth-focused brands.",
    url: "/",
  },
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Blueish gradient background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blueish via-blue-100 to-white" />

      {/* Animated Grid Pattern - fixed and full height */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "fixed inset-0 w-full h-full z-[-1] opacity-100 pointer-events-none skew-y-12 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />

        {/* brand showcase */}
      <BrandShowcase/>

      <WhatWeDo />
     
      <WhyChooseUs />
    
      {/* <FeatureCarousel /> */}
      <PortfolioGrid />

      {/* Process */}
      <section data-reveal className="bg-white/80 border border-blue-100 py-16 px-4 sm:px-12">
          <CampaignProcess giganticHeader={false} />
      </section>
  

      {/* <Marquee /> */}
      <Marquee />

      {/* contact form section */}
      {/* <section className='flex flex-col bg-[#e7ebf1]/30 justify-center'>
        <BookMeeting/>
      </section> */}
  
    </>
  )
}
