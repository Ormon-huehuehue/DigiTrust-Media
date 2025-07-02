import React from 'react'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import GiganticHeader from '@/components/GiganticHeader'
import Founders from '@/components/Founders';
import CampaignProcess from '@/components/CampaignProcess';
import AnimatedButton from '@/components/ui/animated-button';
import Link from 'next/link';


const Page = () => {
    const headerData = {
        title : "ABOUT US",
        description : "DigiTrust Media is a Delhi-based influencer marketing agency helping brands grow through authentic creator-led campaigns. We blend culture, content, and strategy to drive impact and measurable digital growth."
    }

    const ourTeamHeaderData = {
      title : "FOUNDER",
      description : "Our story began in Delhi with a simple belief: the future of marketing is human. Since then, DigiTrust Media has grown into a dynamic team of strategists, creators, and digital marketers driving campaigns that spark genuine influence and brand love. We're content-first and data-backed, combining creative storytelling with cutting-edge tools—including AI—to craft experiences that resonate. From influencer activations to full-funnel strategies, we deliver impact where culture, community, and conversion meet."
  }

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
        <GiganticHeader title={headerData.title} description={headerData.description}/>
      </div>

      {/* Founders Section */}
      <section className="relative py-0 sm:py-0 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white/80 rounded-3xl shadow-lg border border-blue-100 py-16 px-4 sm:px-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-16 gap-8">
              <div className="min-w-2/3">
                <GiganticHeader title={ourTeamHeaderData.title} headerCSS="tracking- bg-gradient-to-r from-gray-900 via-gray-400 to-gray-700 bg-clip-text text-transparent" />
                <div className='text-gray-500 font-medium mt-4'>
                  {ourTeamHeaderData.description}
                </div>
              </div>
              <div className="flex-shrink-0 w-auto">
                <Founders/>
              </div>
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

      <Link href="/services"
      className='flex justify-center items-center'>
        <AnimatedButton title='Our Services' />
      </Link>
    </div>
  );
};

export default Page;