import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import FeatureCarousel from "@/components/FeatureCarousel"
import PortfolioGrid from "@/components/PortfolioGrid"
import Marquee from "@/components/Marquee"
import ContactForm from "@/components/ContactForm"
import BrandShowcase from "@/components/BrandShowcase"
import AnimatedList from "@/components/AnimatedList"
import WhyChooseUs from "@/components/WhyChooseUs"
import CampaignProcess from "@/components/CampaignProcess"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blueish via-blue-100 to-white" />
      <WhatWeDo />
     
      <WhyChooseUs />
    
      {/* <FeatureCarousel /> */}
      <PortfolioGrid />
      <section className="bg-white/80 border border-blue-100 py-16 px-4 sm:px-12">
          <CampaignProcess giganticHeader={false} />
      </section>
      {/* <Marquee /> */}
      <BrandShowcase/>
      <Marquee />
      <section className='flex bg-[#e7ebf1]/20 justify-center py-20'>
         {/* Blueish gradient background */}
    
      {/* Animated Grid Pattern - fixed and full height */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "fixed inset-0 w-full h-full z-[-1] opacity-80 pointer-events-none skew-y-12 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
        <ContactForm />
      </section>
  
    </>
  )
}
