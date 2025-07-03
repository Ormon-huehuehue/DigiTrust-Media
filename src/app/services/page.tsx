import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import GiganticHeader from '@/components/GiganticHeader';


const Page = () => {

  const headerData = {
    title : "SERVICES",
    description : "We are your all-in-one destination for everything related to creator marketing, celebrity/influencer partnerships, and memorable brand experiences."
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
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-16 md:my-20">
        <GiganticHeader title={headerData.title} description={headerData.description} />
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
              delay={0.2 * idx}
            />
          ))}

          {/* Features Grid */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
          >
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-white/90 border border-blue-50 shadow rounded-2xl">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                  className=""
                />
              </div>
            ))}
          </section>

          {/* Bottom CTA */}
          <div
            className="text-center py-10"
          >
            <h2 
              className="text-3xl lg:text-5xl font-bold mb-6 text-blue-900"
            >
              {bottomText.heading}
            </h2>
            <p 
              className="text-xl text-blue-800 max-w-3xl mx-auto"
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