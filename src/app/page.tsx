import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import FeatureCarousel from "@/components/FeatureCarousel"
import PortfolioGrid from "@/components/PortfolioGrid"
import Timeline from "@/components/Timeline"
import Marquee from "@/components/Marquee"
import ContactForm from "@/components/ContactForm"
import BrandShowcase from "@/components/BrandShowcase"
import AnimatedList from "@/components/AnimatedList"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
     
      <WhyChooseUs />
    
      {/* <FeatureCarousel /> */}
      <PortfolioGrid />
      <Timeline />
      {/* <Marquee /> */}
      <BrandShowcase/>
      <Marquee />
      <ContactForm />
  
    </>
  )
}
