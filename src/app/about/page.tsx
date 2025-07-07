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



  return (
    <div className="min-h-screen relative overflow-hidden mt-[6rem] lg:mt-3 lg:pt-20 pt-2">
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
      <Founders/>

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