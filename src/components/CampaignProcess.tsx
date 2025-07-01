"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import GiganticHeader from "./GiganticHeader"

const campaignProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your brand, target audience, and campaign goals to create a tailored influencer marketing strategy.",
    details:
      "Our team conducts comprehensive research on your industry, competitors, and target demographics. We identify the right influencer tiers, content formats, and platforms that will deliver maximum ROI for your specific objectives.",
  },
  {
    step: "02",
    title: "Influencer Selection",
    description: "We handpick the perfect influencers who align with your brand values and can authentically promote your products.",
    details:
      "Using our extensive network and data-driven approach, we select micro and macro influencers who have genuine engagement with your target audience. We ensure brand-influencer alignment for authentic partnerships.",
  },
  {
    step: "03",
    title: "Content Creation",
    description: "We collaborate with influencers to create compelling, authentic content that resonates with their audience.",
    details:
      "Our creative team works closely with influencers to develop content that feels natural and engaging. We provide brand guidelines while preserving the influencer's unique voice and style.",
  },
  {
    step: "04",
    title: "Campaign Execution",
    description: "We launch and monitor your campaign across multiple platforms with real-time optimization.",
    details:
      "We coordinate the campaign launch across all selected platforms, ensuring optimal timing and cross-platform synergy. Our team monitors performance and makes real-time adjustments for maximum impact.",
  },
  {
    step: "05",
    title: "Performance Analysis",
    description: "We provide comprehensive analytics and insights to measure campaign success and ROI.",
    details:
      "Using advanced analytics tools, we track engagement rates, reach, conversions, and other key metrics. We deliver detailed reports with actionable insights for future campaign optimization.",
  },
  {
    step: "06",
    title: "Optimization & Scale",
    description: "We refine successful strategies and scale winning campaigns for continued growth.",
    details:
      "Based on performance data, we identify what works best and optimize future campaigns. We help you scale successful strategies and explore new opportunities for brand growth.",
  },
]

const ProcessIcon = ({ step }: { step: string }) => (
  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
    <span className="text-background text-sm font-bold">{step}</span>
  </div>
)

export default function CampaignProcess({giganticHeader = false} : {giganticHeader? : boolean}) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform scroll progress to background opacity
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.8])

  return (
    <section ref={containerRef} className="md:py-5 mb-20 overflow-hidden relative">
      {/* Scroll-triggered background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/15 to-background pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        

          {giganticHeader ? <GiganticHeader title="HOW WE WORK" headerCSS="bg-gradient-to-r from-gray-900 via-gray-400 to-gray-700 bg-clip-text text-transparent"/> :   <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold   font-anton tracking-wide"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
            >HOW WE WORK
          </motion.h2>}
          
          <p className="mt-4 text-lg text-muted-foreground">Our proven 6-step process to create successful influencer marketing campaigns</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Vertical line - positioned to start from first step */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 origin-top"
            style={{ 
              scaleY: lineScaleY,
              top: "4rem",
              height: "calc(100% - 8rem)" // Reduced height to prevent overflow
            }}
          />
          {campaignProcess.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index}
              isExpanded={expandedStep === index}
              onToggle={() => setExpandedStep(expandedStep === index ? null : index)}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Mobile vertical line */}
            <motion.div
              className="absolute left-4 w-0.5 bg-primary/20 origin-top"
              style={{ 
                scaleY: lineScaleY,
                top: "2rem",
                height: "calc(100% - 4rem)"
              }}
            />
            {campaignProcess.map((step, index) => (
              <MobileProcessStep
                key={step.step}
                step={step}
                index={index}
                isExpanded={expandedStep === index}
                onToggle={() => setExpandedStep(expandedStep === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  step,
  index,
  isExpanded,
  onToggle,
}: {
  step: (typeof campaignProcess)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <ProcessIcon step={step.step} />
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-6 bg-card rounded-lg shadow-md border border-border hover:border-primary/20 transition-colors">
          <span className="font-bold text-primary text-sm">{step.step}</span>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground text-sm">{step.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function MobileProcessStep({
  step,
  index,
  isExpanded,
  onToggle,
}: {
  step: (typeof campaignProcess)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="mb-6 flex items-start"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Step icon */}
      <div className="flex-shrink-0 mr-4 mt-2">
        <ProcessIcon step={step.step} />
      </div>
      
      {/* Content */}
      <motion.div
        className="flex-1 cursor-pointer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-card rounded-lg shadow-md border border-border hover:border-primary/20 transition-colors">
          <span className="font-bold text-primary text-sm">{step.step}</span>
          <h3 className="text-base font-semibold mb-2 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground text-sm">{step.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
