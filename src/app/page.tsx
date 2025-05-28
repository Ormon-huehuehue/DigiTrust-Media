import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import FeatureCarousel from "@/components/FeatureCarousel"
import PortfolioGrid from "@/components/PortfolioGrid"
import Timeline from "@/components/Timeline"
import Marquee from "@/components/Marquee"
import ContactForm from "@/components/ContactForm"
import NewsletterSubscribe from "@/components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeDo />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}
