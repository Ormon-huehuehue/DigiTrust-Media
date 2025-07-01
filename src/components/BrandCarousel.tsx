"use client";
 
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface dataProps{
  logo: string,
  logoUrl : string,
  logoStyle: string,
  description: string
}

 
export function BrandCarousel( {data} : {data : dataProps[]}) {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      {/* Left subtle blur/fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-30"
        style={{
          background: 'linear-gradient(to right, rgba(231,235,241,0.9) 0%, rgba(231,235,241,0.0) 100%)',
          filter: 'blur(2px)'
        }}
      />
      {/* Right subtle blur/fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-30"
        style={{
          background: 'linear-gradient(to left, rgba(231,235,241,0.9) 0%, rgba(231,235,241,0.0) 100%)',
          filter: 'blur(2px)'
        }}
      />
      <InfiniteMovingCards
        items={data}
        direction="left"
        speed="slow"
      />
    </div>
  );
}