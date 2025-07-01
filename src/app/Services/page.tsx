'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ServiceCard';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';


const Page = () => {
  const revolveServices = [
    {
      title: "Strategy & Content",
      items: ["Brand Positioning", "Brand Messaging", "Employer Branding", "Digital Strategy"]
    },
    {
      title: "Identity & Branding",
      items: ["Brand Identity", "Content Strategy", "Visual Direction", "Guidelines & Systems"]
    },
    {
      title: "Websites & Apps",
      items: ["UX & UI Design", "Prototyping", "Web & App Development", "No-code Websites (Framer, Webflow)"]
    },
    {
      title: "Ongoing",
      items: ["Quality Assurance", "Maintenance & Support", "SEO Audits & Optimization", "Performance Monitoring"]
    }
  ];

  const rydeServices = [
    {
      title: "Top Of Funnel",
      items: ["Paid Social (Ads)", "Paid Search (PPC)", "Creative Ads Strategy", "Campaign Launch Strategy", "SEO Strategies", "Programmatic", "Influencer Marketing", "Non-Brand Search (Amazon)"]
    },
    {
      title: "Middle Of Funnel",
      items: ["Social Media", "Content Marketing", "Affiliate Marketing", "Branded Search (PPC)", "Branded Search (Amazon)"]
    },
    {
      title: "Bottom Of Funnel",
      items: ["CRO", "Email Marketing", "Organic", "Social Ads (Retargeting)", "Partnerships", "Creative", "Marketing Ops"]
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
          "fixed inset-0 w-full h-full z-[-1] opacity-80 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
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
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-8 lg:p-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-[8rem] lg:text-[14rem] xl:text-[18rem] font-light mb-8 leading-none tracking-tight font-mono text-blue-900"
            style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-blueish via-blue-400 to-blue-700 bg-clip-text text-transparent font-anton"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Services
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-blue-800 max-w-4xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Flexible—Agency Model helps Future-First Companies to radically differentiate & deliver on growth throughout their brand journey.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Revolve Service */}
         
            <ServiceCard
              title="Revolve"
              subtitle="Full—Digital Design & Development"
              description="Scalable, adjustable design & digital teams working with you in monthly cycles. Aligning with Visionary Founders, Leadership, Marketing and Product teams. The intersection of strategic guidance, brand activations, brand rollouts and digital experiences. Driving value where you need it, and when you need it. REVOLVE is here to help you evolve and scale your brand well into the future."
              services={revolveServices}
              delay={0.2}
            />
         

          {/* Ryde Service */}
        
            <ServiceCard
              title="Ryde"
              subtitle="AI—Enhanced Digital Marketing"
              description="Built for the modern Tech, D2C, and eCommerce brand. Ready to dive deeper than ever before into your cross-channel digital marketing campaigns and strategies. Taking a holistic view on what 'growth' means, enabling your CRO, Marketing, Product, and Executive Teams to create micro – macro – and – massive impact at scale. The epic journey of any great brand and team begins with a single, extraordinary RYDE."
              services={rydeServices}
              delay={0.4}
            />
        

          {/* Custom Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r bg-white rounded-3xl p-12 text-center shadow-lg"
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6 text-blue-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Custom
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-blue-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Need more? We'll create a Program that's just right for you.
            </motion.p>
            <motion.p 
              className="text-lg text-blue-800 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Precision-crafted solutions tailored to your unique brand needs. Elevating your digital experience and evolving your digital marketing strategies to drive radical results.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <div key={feature.title} >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                  className="bg-white/90 border border-blue-50 text-blue-900 shadow rounded-2xl"
                />
              </div>
            ))}
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold mb-6 text-blue-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Game-changing partnerships that drive results.
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-800 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We're incredibly lucky to partner with visionary leaders and brands from across the globe. Here are some Recent Wins:
            </motion.p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Page;