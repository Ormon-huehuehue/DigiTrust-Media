import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import GiganticHeader from '@/components/GiganticHeader';
import { Sparkles, Star, PartyPopper, Search, Megaphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Influencer Marketing, SEO & Ads Services",
  description:
    "Explore DigiTrust Media services for creator activation, influencer sourcing, celebrity partnerships, events, SEO, and paid ads marketing across India.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Influencer Marketing, SEO & Ads Services | DigiTrust Media",
    description:
      "Creator campaigns, celebrity partnerships, brand experiences, SEO, and performance ads for growth-focused brands.",
    url: "/services",
  },
}

const Page = () => {

  const headerData = {
    title : "INFLUENCER MARKETING SERVICES",
    description : "We are your all-in-one destination for everything related to creator marketing, celebrity/influencer partnerships, and memorable brand experiences."
  }

  const servicesData = [
    {
      title: "Creator Activation",
      subtitle: "End-to-End Creator Campaigns",
      icon: <Sparkles className="w-8 h-8 lg:w-10 lg:h-10" />,
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
      icon: <Star className="w-8 h-8 lg:w-10 lg:h-10" />,
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
      icon: <PartyPopper className="w-8 h-8 lg:w-10 lg:h-10" />,
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
    },
    {
      title: "SEO",
      subtitle: "Search Engine Optimization",
      icon: <Search className="w-8 h-8 lg:w-10 lg:h-10" />,
      description:
        "Be found by the people already searching for what you offer. We grow your organic visibility on Google with a mix of technical SEO, on-page optimisation, and content built around real search intent — turning discovery into durable, compounding traffic that doesn't disappear when the ad budget stops.",
      services: [
        {
          title: "What We Offer",
          items: [
            "Keyword & Search Intent Research",
            "On-Page Optimization",
            "Technical SEO Audits",
            "Content Strategy & Copy",
            "Link Building & Authority",
            "Local & Google Business Profile SEO"
          ]
        }
      ]
    },
    {
      title: "Ads Marketing",
      subtitle: "Performance & Paid Media",
      icon: <Megaphone className="w-8 h-8 lg:w-10 lg:h-10" />,
      description:
        "Put your brand in front of the right audience and pay only for results that matter. We plan, launch, and optimise paid campaigns across Meta, Google, and YouTube — relentlessly testing creative and targeting to drive down cost per acquisition and push your return on ad spend higher, month over month.",
      services: [
        {
          title: "What We Offer",
          items: [
            "Meta & Instagram Ads",
            "Google & YouTube Ads",
            "Campaign Strategy & Setup",
            "A/B Creative Testing",
            "Audience Targeting & Retargeting",
            "ROAS Optimization & Reporting"
          ]
        }
      ]
    }
  ];

  const bottomText = {
    heading : "Game-changing partnerships that drive results.",
    subtext : "We're incredibly lucky to partner with visionary leaders and brands from across the globe."
  }

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
    <div className="min-h-screen relative overflow-hidden mt-[6rem] lg:mt-3 lg:pt-20 py-2">
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
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-10 md:my-12">
        <GiganticHeader
          title={headerData.title}
          description={headerData.description}
          headerCSS="tracking-tight bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-900 bg-clip-text text-transparent font-anton"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
          {servicesData.map((service, idx) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              services={service.services}
              icon={service.icon}
              delay={0.2 * idx}
            />
          ))}

          {/* Features Grid */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={index * 0.04}
                className="bg-white/90 border border-blue-50 shadow"
              />
            ))}
          </section>

          {/* Bottom CTA */}
          <div
            className="text-center py-10"
          >
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-6 text-foreground"
            >
              {bottomText.heading}
            </h2>
            <p 
              className="text-xl text-foreground max-w-3xl mx-auto"
            >
              {bottomText.subtext}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
