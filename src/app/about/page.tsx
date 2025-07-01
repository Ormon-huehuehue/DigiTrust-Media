'use client'

import LiquidCard from '@/components/LiquidCard'
import React from 'react'
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import GiganticHeader from '@/components/GiganticHeader'
import Founders from '@/components/Founders';
import CampaignProcess from '@/components/CampaignProcess';


const Page = () => {

    const headerData = {
        title : "ABOUT US",
        description : "DigiTrust Media is a Delhi-based influencer marketing agency helping brands grow through authentic creator-led campaigns. We blend culture, content, and strategy to drive impact and measurable digital growth."
    }

    const ourTeamHeaderData = {
      title : "FOUNDERS",
      description : "Our story began in Delhi with a simple belief: the future of marketing is human. Since then, DigiTrust Media has grown into a dynamic team of strategists, creators, and digital marketers driving campaigns that spark genuine influence and brand love. We're content-first and data-backed, combining creative storytelling with cutting-edge tools—including AI—to craft experiences that resonate. From influencer activations to full-funnel strategies, we deliver impact where culture, community, and conversion meet."
  }

  const servicesData = [
    {
      title: "Creator Activation",
      subtitle: "End-to-End Creator Campaigns",
      description:
        "We identify the right creators and match them perfectly to your brand to effectively spread your message to your target audience. From creating bespoke briefs to managing and tracking creator campaigns, we are your all-in-one destination for everything related to creator marketing. Our work ranges from short-term creator campaigns for brand awareness and launches, to long term ambassadorship and always-on creator programmes to build brand love and loyalty.",
      services: [
        {
          title: "What We Offer",
          items: [
            "Creator Discovery & Vetting",
            "Bespoke Brief Creation",
            "Campaign Management",
            "Performance Tracking",
            "Brand Awareness & Launches",
            "Ambassadorships & Always-on Programmes"
          ]
        }
      ]
    },
    {
      title: "Sourcing",
      subtitle: "Celebrity & Influencer Partnerships",
      description:
        "The most impactful marketing approach for endorsing your brand involves tapping into the widespread popularity and substantial influence of renowned celebrities and content creators. Elevate your brand's credibility, boost awareness, and stimulate both conversations and conversions by leveraging the popularity of well-known public figures.",
      services: [
        {
          title: "What We Offer",
          items: [
            "Celebrity Endorsements",
            "Influencer Sourcing",
            "Negotiation & Contracting",
            "Brand-Influencer Alignment",
            "Awareness & Conversion Campaigns"
          ]
        }
      ]
    },
    {
      title: "Events and Experiences",
      subtitle: "Memorable Brand Moments",
      description:
        "From guest list management to event conceptualisation and curation, we offer everything you need to make your event a memorable experience, and beyond.",
      services: [
        {
          title: "What We Offer",
          items: [
            "Event Conceptualisation",
            "Guest List Management",
            "Event Curation",
            "On-ground Execution",
            "Influencer & Celebrity Attendance"
          ]
        }
      ]
    }
  ];

  const features = [
    {
      title: "Monthly Work Cycles",
      description: "No long-term commitments. 30-60+ Day planning with a renewal option included. Built for the modern brand and modern team."
    },
    {
      title: "Return On Digital (ROD)",
      description: "We believe in creating an RODD: where your brand can monetize and become highly marketable from our cross-collective design and digital strategies."
    },
    {
      title: "No Scope Creep",
      description: "Change happens, we get it. Knowing that, we work with you and not against you. Everything is discussed and agreed so we avoid friction points."
    },
    {
      title: "Real-Time Billing",
      description: "Forget Estimates and Proposals. We move quick. We're results focused and bill in real-time as we map new solutions and strategies."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden mt-[6rem] lg:mt-3 lg:py-20 py-2">
      {/* Blueish gradient background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blueish via-blue-200 to-white" />
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

      {/* Animated Background (mouse-follow effect) */}
      <div className="fixed inset-0 opacity-20 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px , blueish, transparent 40%)` // blueish
          }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-20">
        <GiganticHeader title={headerData.title} description={headerData.description}/>
      </div>

      {/* Founders Section */}
      <section className="relative py-0 sm:py-0 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white/80 rounded-3xl shadow-lg border border-blue-100 py-16 px-4 sm:px-12">
            <GiganticHeader title={ourTeamHeaderData.title} headerCSS="tracking- bg-gradient-to-r from-gray-900 via-gray-400 to-gray-700 bg-clip-text text-transparent"  />
            <div className='text-gray-500 font-medium '>
              {ourTeamHeaderData.description} 
            </div>
            <div className="mt-16">
              <Founders/>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <section className="bg-white/80 rounded-3xl shadow-lg border border-blue-100 py-16 px-4 sm:px-12 mb-24">
          <CampaignProcess giganticHeader={false} />
        </section>
      </main>
    </div>
  );
};

export default Page;